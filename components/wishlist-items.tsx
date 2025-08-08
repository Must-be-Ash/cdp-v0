import { wishlistItems } from "@/lib/wishlist";
import { WishlistItem } from "./wishlist-item";

export function WishlistItems() {
  // Read the recipient address from environment variables.
  // Fallback to a placeholder if the variable is not set.
  const recipientAddress =
    process.env.NEXT_PUBLIC_RECIPIENT_ADDRESS || "0xRecipientAddressHere";

  return (
    <div className="space-y-4">
      {wishlistItems.map((item) => (
        <WishlistItem
          key={item.id}
          item={item}
          recipientAddress={recipientAddress}
        />
      ))}
    </div>
  );
}
