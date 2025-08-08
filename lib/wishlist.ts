export interface WishlistItemData {
id: number;
name: string;
price: number;
imageUrl: string;
}

export const wishlistItems: WishlistItemData[] = [
{
  id: 1,
  name: "Coffee",
  price: 5,
  imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small_2x/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png",
},
{
  id: 2,
  name: "Headphones",
  price: 50,
  imageUrl: "/wishlist-headphones.png",
},
{
  id: 3,
  name: "Microphone",
  price: 100,
  imageUrl: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Image.png",
},
{
  id: 4,
  name: "Camera",
  price: 450,
  imageUrl: "/wishlist-camera.png",
},
];
