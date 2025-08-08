"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WalletSendButton } from "./wallet-send-button";

interface CustomAmountInputProps {
  recipientAddress: string;
  suggestedAmounts?: number[];
  title?: string;
  description?: string;
  showMessage?: boolean;
  className?: string;
}

export function CustomAmountInput({
  recipientAddress,
  suggestedAmounts = [5, 10, 25, 50],
  title = "Support with a custom amount",
  description = "Choose an amount or enter your own",
  showMessage = false,
  className = ""
}: CustomAmountInputProps) {
  const [customAmount, setCustomAmount] = useState<number | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const handleSuggestedClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(null);
  };

  const handleCustomAmountChange = (value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue > 0) {
      setCustomAmount(numValue);
      setSelectedAmount(null);
    } else {
      setCustomAmount(null);
    }
  };

  const finalAmount = customAmount || selectedAmount;

  return (
    <div className={`bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>

      {/* Suggested Amounts */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {suggestedAmounts.map((amount) => (
          <Button
            key={amount}
            variant="outline"
            className={`h-12 rounded-2xl border transition-all duration-200 ${
              selectedAmount === amount
                ? "bg-white/25 border-white/35 text-white"
                : "bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:border-white/30"
            }`}
            onClick={() => handleSuggestedClick(amount)}
          >
            ${amount}
          </Button>
        ))}
      </div>

      {/* Custom Amount Input */}
      <div className="mb-4">
        <Input
          type="number"
          placeholder="Enter custom amount"
          className="h-12 px-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all"
          onChange={(e) => handleCustomAmountChange(e.target.value)}
        />
      </div>

      {/* Optional Message */}
      {showMessage && (
        <div className="mb-6">
          <Textarea
            placeholder="Leave a message (optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[80px] px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all resize-none"
          />
        </div>
      )}

      {/* Payment Button */}
      <div className="flex justify-center">
        {finalAmount ? (
          <WalletSendButton
            price={finalAmount}
            recipientAddress={recipientAddress}
          />
        ) : (
          <Button
            disabled
            className="h-11 px-6 font-medium rounded-2xl bg-white/10 border border-white/20 text-gray-400"
          >
            Select amount to continue
          </Button>
        )}
      </div>

      {/* Selected Amount Display */}
      {finalAmount && (
        <p className="text-center text-sm text-green-400 mt-2">
          Selected: ${finalAmount}
        </p>
      )}
    </div>
  );
}
