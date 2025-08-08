import { Hero } from "@/components/hero";
import { StorySection } from "@/components/story-section";
import { ProgressBar } from "@/components/progress-bar";
import { CustomAmountInput } from "@/components/custom-amount-input";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <main className="flex flex-col items-center justify-center p-4 pt-12 md:pt-24">
        <div className="w-full max-w-md mx-auto">
          <Hero />
          <StorySection
            title="My Dream"
            content={`My dying wish is to jump off the plane - sky dive! :)

This has been a dream of mine for so long, and I want to experience the incredible rush of freefalling through the sky. The feeling of complete freedom, the breathtaking views, and the pure adrenaline - it's something I need to experience at least once in my life.

Skydiving represents more than just an adventure to me. It's about conquering fears, embracing life to the fullest, and creating a memory that will last forever. Your support would mean the world to me in making this dream come true.

Every contribution, no matter the size, brings me one step closer to taking that leap of faith and experiencing the ultimate thrill!`}
            imageUrl="/family-photo.png"
            imageAlt="Ash ready for adventure"
          />
          <ProgressBar
            current={0}
            goal={195}
            title="Fundraising Progress"
            showStats={true}
          />
          <CustomAmountInput
            recipientAddress={process.env.NEXT_PUBLIC_RECIPIENT_ADDRESS || "0xRecipientAddressHere"}
            suggestedAmounts={[25, 50, 100, 195]}
            title="Support Ash's Dream 🪂"
            description="Help me take the leap - choose an amount or enter your own"
            showMessage={true}
          />
          <Footer />
        </div>
      </main>
    </div>
  );
}
