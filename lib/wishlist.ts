export interface WishlistItemData {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const wishlistItems: WishlistItemData[] = [
  {
    id: 1,
    name: "Espresso Shot ☕",
    price: 1,
    imageUrl: "/coffee-espresso.png",
  },
  {
    id: 2,
    name: "Cappuccino ☕",
    price: 5,
    imageUrl: "/coffee-cappuccino.png",
  },
  {
    id: 3,
    name: "Premium Coffee ☕",
    price: 10,
    imageUrl: "/coffee-premium.png",
  },
  {
    id: 4,
    name: "Coffee & Pastry ☕🥐",
    price: 15,
    imageUrl: "/coffee-pastry.png",
  },
];
