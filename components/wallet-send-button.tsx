"use client";
import { useState } from "react";
import {
  useSendEvmTransaction,
  useCurrentUser,
  useIsSignedIn,
  useSignInWithEmail,
  useVerifyEmailOTP,
  useEvmAddress,
  useIsInitialized,
} from "@coinbase/cdp-hooks";
import { parseEther } from "viem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface WalletSendButtonProps {
  price: number;
  recipientAddress: string;
}

export function WalletSendButton({
  price,
  recipientAddress,
}: WalletSendButtonProps) {
  const { sendEvmTransaction } = useSendEvmTransaction();
  const currentUser = useCurrentUser();
  const evmAddress = useEvmAddress();
  const isSignedIn = useIsSignedIn();
  const isInitialized = useIsInitialized();
  const { signInWithEmail } = useSignInWithEmail();
  const { verifyEmailOTP } = useVerifyEmailOTP();

  // Transaction states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);

  // Login modal states
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [flowId, setFlowId] = useState<string | null>(null);
  const [loginStep, setLoginStep] = useState<"email" | "otp">("email");
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Onramp states
  const [needsOnramp, setNeedsOnramp] = useState(false);

  // Extract the actual address from the hook result
  const userEvmAddress =
    typeof evmAddress === "object" && evmAddress?.evmAddress
      ? evmAddress.evmAddress
      : evmAddress;

  const handleFundClick = async () => {
    // Check if SDK is initialized first
    if (!isInitialized) {
      // Don't set an error immediately - the button already shows "Initializing..." status
      // Only set error if this persists and might indicate a real issue
      console.log("SDK still initializing, please wait...");
      return;
    }

    // This check is to prevent sending funds to a placeholder address.
    if (recipientAddress === "0xRecipientAddressHere") {
      const errorMessage = "Recipient address is not configured.";
      setError(errorMessage);
      console.error(
        "Please set NEXT_PUBLIC_RECIPIENT_ADDRESS in your .env.local file."
      );
      return;
    }

    // Check if user is signed in
    // Handle different possible return types from isSignedIn hook
    const userIsSignedIn =
      typeof isSignedIn === "boolean" ? isSignedIn : isSignedIn?.isSignedIn;

    if (!userIsSignedIn) {
      // Open login modal - this is expected flow, not an error
      setShowLoginModal(true);
      setError(null); // Clear any previous errors
      setNeedsOnramp(false); // Reset onramp state
      return;
    }

    // If we previously detected insufficient funds, go to onramp instead of trying payment again
    if (needsOnramp && userEvmAddress) {
      await handleOnramp();
      return;
    }

    // Proceed with payment if user is authenticated
    await processPayment();
  };

  const handleOnramp = async () => {
    if (!userEvmAddress) {
      setError("No wallet address found. Please connect your wallet first.");
      return;
    }
    setIsLoading(true);
    setError(null); // Clear any previous errors
    try {
      // Generate session token via API route
      const response = await fetch("/api/onramp/session-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          addresses: [
            { address: userEvmAddress, blockchains: ["base", "ethereum"] },
          ],
          assets: ["ETH", "USDC", "BTC"],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate session token");
      }
      const { token } = await response.json();

      // Construct onramp URL with session token
      const onrampUrl = new URL("https://pay.coinbase.com/buy/select-asset");
      onrampUrl.searchParams.set("sessionToken", token);

      // Add default parameters for better UX
      onrampUrl.searchParams.set("defaultAsset", "ETH");
      onrampUrl.searchParams.set("defaultNetwork", "base");

      // Preset the fiat amount
      onrampUrl.searchParams.set("presetFiatAmount", price.toString());

      // Redirect to onramp
      window.open(onrampUrl.toString(), "_blank");
    } catch (error) {
      console.error("Onramp error:", error);
      setError(
        error instanceof Error ? error.message : "Failed to open onramp"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const processPayment = async () => {
    if (!userEvmAddress) {
      setError("No wallet address found. Please try logging in again.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setTxHash(null);
    setNeedsOnramp(false); // Reset onramp state when attempting payment
    try {
      const result = await sendEvmTransaction({
        evmAccount: userEvmAddress as `0x${string}`,
        transaction: {
          to: recipientAddress as `0x${string}`,
          value: parseEther(price.toString()),
          chainId: 84532, // Base Sepolia Testnet
          type: "eip1559",
        },
        network: "base-sepolia",
      });
      console.log("Transaction successful:", result.transactionHash);
      setTxHash(result.transactionHash);
      setError(null); // Clear any errors on successful transaction
      setNeedsOnramp(false); // Reset onramp state on successful transaction
    } catch (err) {
      console.error("Transaction failed:", err);
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred.";
      // Check for insufficient funds
      if (
        errorMessage.includes("insufficient funds") ||
        errorMessage.includes("insufficient balance") ||
        errorMessage.includes("insufficient ETH") ||
        errorMessage.includes(
          "Insufficient balance to execute the transaction"
        )
      ) {
        setNeedsOnramp(true);
        setError(null); // Clear any existing errors - this is expected flow, not an error
      } else if (!errorMessage.includes("User rejected the request")) {
        // Avoid showing user-cancelled errors
        setError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsAuthLoading(true);
    setAuthError(null);
    try {
      const result = await signInWithEmail({ email });
      setFlowId(result.flowId);
      setLoginStep("otp");
    } catch (err) {
      console.error("Email sign in failed:", err);
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to send OTP. Please try again.";
      setAuthError(errorMessage);
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleOTPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp || !flowId) return;
    setIsAuthLoading(true);
    setAuthError(null);
    try {
      const result = await verifyEmailOTP({ flowId, otp });
      console.log("User signed in:", result.user);
      // Close modal and proceed with payment
      setShowLoginModal(false);
      resetLoginForm();
      setError(null); // Clear any previous errors after successful login
      setNeedsOnramp(false); // Reset onramp state after successful login
      // Process payment after successful login
      await processPayment();
    } catch (err) {
      console.error("OTP verification failed:", err);
      const errorMessage =
        err instanceof Error ? err.message : "Invalid OTP. Please try again.";
      setAuthError(errorMessage);
    } finally {
      setIsAuthLoading(false);
    }
  };

  const resetLoginForm = () => {
    setEmail("");
    setOtp("");
    setFlowId(null);
    setLoginStep("email");
    setAuthError(null);
  };

  const handleModalClose = () => {
    setShowLoginModal(false);
    resetLoginForm();
  };

  return (
    <>
      <div className="flex flex-col items-end">
        <Button
          size="sm"
          onClick={handleFundClick}
          disabled={isLoading || !isInitialized}
          className="h-11 px-6 font-medium rounded-2xl bg-amber-600 hover:bg-amber-700 text-white border-0 transition-all duration-200 shadow-lg"
        >
          {!isInitialized
            ? "Initializing..."
            : isLoading
            ? "Processing..."
            : needsOnramp
            ? "Add Funds"
            : "Buy Coffee"}
        </Button>
        {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
        {txHash && (
          <p className="text-xs text-green-600 mt-1">Coffee sent! ☕</p>
        )}
        {/* Show insufficient balance message when needed */}
        {needsOnramp && (
          <p className="text-xs text-amber-700 mt-1">
            Insufficient balance - click to add funds
          </p>
        )}
      </div>
      <Dialog open={showLoginModal} onOpenChange={handleModalClose}>
        <DialogContent className="max-w-sm p-8 bg-white/95 backdrop-blur-2xl border border-amber-200 shadow-xl rounded-3xl">
          <DialogHeader className="space-y-4 text-center">
            <DialogTitle className="text-xl font-medium text-amber-900">
              {loginStep === "email"
                ? "Sign In to Buy Coffee"
                : "Verify Your Email"}
            </DialogTitle>
            <DialogDescription className="text-amber-700 text-sm">
              {loginStep === "email"
                ? "Enter your email address to receive a verification code."
                : `We sent a 6-digit code to ${email}. Please enter it below.`}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            {loginStep === "email" ? (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isAuthLoading}
                  className="h-11 px-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 placeholder:text-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all"
                />
                {authError && (
                  <p className="text-sm text-red-600">{authError}</p>
                )}
                <Button
                  type="submit"
                  className="w-full h-11 font-medium rounded-xl bg-amber-600 hover:bg-amber-700 text-white transition-all"
                  disabled={isAuthLoading || !email}
                >
                  {isAuthLoading ? "Sending..." : "Send Verification Code"}
                </Button>
              </form>
            ) : (
              <form onSubmit={handleOTPSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Enter 6-digit code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  disabled={isAuthLoading}
                  maxLength={6}
                  pattern="[0-9]{6}"
                  className="h-11 px-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 placeholder:text-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all text-center font-mono tracking-wider"
                />
                {authError && (
                  <p className="text-sm text-red-600">{authError}</p>
                )}
                <div className="flex space-x-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setLoginStep("email")}
                    disabled={isAuthLoading}
                    className="flex-1 h-11 bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-100 rounded-xl transition-all"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 h-11 font-medium rounded-xl bg-amber-600 hover:bg-amber-700 text-white transition-all"
                    disabled={isAuthLoading || otp.length !== 6}
                  >
                    {isAuthLoading ? "Verifying..." : "Verify & Buy Coffee"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
