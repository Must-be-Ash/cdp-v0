"use client";

import Image from "next/image";
import { type WishlistItemData } from "@/lib/wishlist";
import { WalletSendButton } from "./wallet-send-button";

interface WishlistItemProps {
item: WishlistItemData;
recipientAddress: string;
}

export function WishlistItem({ item, recipientAddress }: WishlistItemProps) {
return (
  <div className="flex items-center gap-4 p-4 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl mb-3">
    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center overflow-hidden">
      <Image
        src={item.imageUrl || "/placeholder.svg"}
        alt={item.name}
        width={48}
        height={48}
        className="object-cover w-12 h-12 rounded-xl"
      />
    </div>
    <div className="flex-grow">
      <h3 className="font-semibold text-white">{item.name}</h3>
      <p className="text-sm text-gray-300">${item.price.toFixed(2)}</p>
    </div>
    <WalletSendButton
      price={item.price}
      recipientAddress={recipientAddress}
    />
  </div>
);
}
