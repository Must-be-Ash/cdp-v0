import { Hero } from "@/components/hero";
import { SocialLinks } from "@/components/social-links";
import { WishlistItems } from "@/components/wishlist-items";
import { PromptBlock } from "@/components/prompt-block";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <main className="flex flex-col items-center justify-center p-4 pt-12 md:pt-24">
        <div className="w-full max-w-md mx-auto">
          <Hero />
          <SocialLinks />
          <WishlistItems />
          <PromptBlock />
          <Footer />
        </div>
      </main>
    </div>
  );
}
