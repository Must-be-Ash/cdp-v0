"use client";
import { useState } from "react";
import { prompts } from "@/lib/prompts";
import { Button } from "@/components/ui/button";
import { Copy, Check } from 'lucide-react';

// Embedded prompt content
const promptContents: Record<string, string> = {
  "buy-me-coffee.md": `# ☕ Buy Me a Coffee - Creator Support Page

Transform this crypto tipping template into a classic "Buy Me a Coffee" style support page with predefined payment tiers ($1, $5, $10, $15) where supporters can quickly tip creators for their content and work. Perfect for content creators, writers, developers, and artists!

## 📋 WHAT YOU'RE CREATING
A warm, coffee-shop inspired support page where fans can buy you virtual coffee as a simple way to show appreciation for your work using cryptocurrency payments.

## 🧱 COMPONENTS TO USE (DO NOT CHANGE THESE)
**Component Structure:**
- \`<Hero />\` → \`<SocialLinks />\` → \`<WishlistItems />\` (as coffee tiers) → \`<Footer />\`
- All payment functionality (\`<WalletSendButton />\`, \`<CDPProvider />\`)
- All \`/components/ui/\` components
- All API routes in \`/app/api/\`

**Keep Everything:**
- Perfect existing structure - just customize content!
- \`<WishlistItems />\` component works perfectly for coffee tiers

## ✏️ WHAT TO CUSTOMIZE
### 1. Hero Section (\`components/hero.tsx\`)
**Replace these values only:**
- **Image**: Update \`/public/avatar.png\` with your friendly, approachable photo
- **Name**: Change "Jane Doe" to your real name
- **Bio**: Create warm, coffee-themed greeting
- Example: "Hey, I'm Alex! ☕ I create daily coding tutorials and write about web development. If my content helps you learn something new, consider buying me a coffee to keep the creativity flowing!"
- **Keep**: All styling, layout, and structure

### 2. Social Links (\`components/social-links.tsx\`)
**Update links only:**
- Change URLs to your real social accounts and content platforms
- Keep the same styling and icons
- Consider: YouTube, GitHub, Twitter, Blog, Portfolio

### 3. Coffee Tiers (\`lib/wishlist.ts\`)
**Replace the items array with coffee-themed tiers:**
\`\`\`typescript
export const wishlistItems: WishlistItemData[] = [
  {
    id: 1,
    name: "Espresso Shot ☕",
    price: 1,
    imageUrl: "/coffee-espresso.jpg",
  },
  {
    id: 2,
    name: "Cappuccino ☕",
    price: 5,
    imageUrl: "/coffee-cappuccino.jpg",
  },
  {
    id: 3,
    name: "Premium Coffee ☕",
    price: 10,
    imageUrl: "/coffee-premium.jpg",
  },
  {
    id: 4,
    name: "Coffee & Pastry ☕🥐",
    price: 15,
    imageUrl: "/coffee-pastry.jpg",
  },
];
\`\`\`
**Coffee Tier Descriptions:**
- **$1 - Espresso Shot** - "Quick energy boost for late-night coding!"
- **$5 - Cappuccino** - "Perfect morning fuel to start creating"
- **$10 - Premium Coffee** - "Gourmet support for quality content"
- **$15 - Coffee & Pastry** - "The full café experience - you're amazing!"

### 4. Footer (\`components/footer.tsx\`)
**Update with coffee-themed messaging:**
- "Powered by coffee and community ☕"
- Links to your main content platforms
- Thank you message to supporters

## 🎨 STYLING CUSTOMIZATION (COLORS ONLY)
### Coffee Shop Color Palette
Apply these warm, cozy colors by updating CSS variables and Tailwind classes:**Option 1 - Classic Coffee:**
- Primary: \`#8B4513\` (saddle brown) for rich coffee tones
- Secondary: \`#D2691E\` (chocolate) for warmth
- Accent: \`#CD853F\` (peru) for highlights
- Background: \`#FFF8DC\` (cornsilk) or \`#F5F5F5\` (white smoke)**Option 2 - Modern Café:**
- Primary: \`#6F4E37\` (coffee) for sophisticated brown
- Secondary: \`#DEB887\` (burlywood) for cream tones
- Accent: \`#D2691E\` (chocolate) for CTAs
- Background: \`#FAEBD7\` (antique white)**Theme Switch to Light & Cozy:**
- Change \`bg-[#222222]\` to coffee shop backgrounds
- Update text colors to warm browns and darker tones
- Use cream and beige card backgrounds
- Apply coffee colors to buttons and accents

## 🏗️ COFFEE CONTENT GUIDELINES
### Hero Bio Examples:
- "I write about JavaScript and web development. Coffee fuels my late-night coding sessions!"
- "Creating daily design tutorials and UI tips. Every coffee helps me stay caffeinated and creative!"
- "Building open source tools for developers. Your coffee support keeps the projects growing!"

### Coffee Tier Personality:
- **$1 Espresso**: Quick, energetic support for regular readers
- **$5 Cappuccino**: Standard appreciation, thoughtful support
- **$10 Premium**: Special recognition, quality support
- **$15 Coffee & Pastry**: Generous treat-level support

### Coffee-Themed Messaging:
- "Coffee fuels creativity" ☕
- "Powered by caffeine and community"
- "Every coffee helps me create better content"
- "Join my coffee community"

## ☕ OPTIONAL: ADD COFFEE COUNTER COMPONENT
If you want to show total coffee support, you can create a simple counter:
\`\`\`typescript
// Create components/coffee-counter.tsx:
interface CoffeeCounterProps {
  totalCoffees: number;
  monthlyGoal?: number;
  className?: string;
}

export function CoffeeCounter({ totalCoffees, monthlyGoal, className = "" }: CoffeeCounterProps) {
  return (
    <div className={\`bg-amber-50 border border-amber-200 rounded-3xl p-6 mb-6 text-center \${className}\`}>
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-3xl">☕</span>
        <span className="text-2xl font-bold text-amber-800">{totalCoffees}</span>
      </div>
      <p className="text-amber-700 text-sm font-medium">
        {monthlyGoal ? \`\${totalCoffees}/\${monthlyGoal} coffees this month\` : 'Total coffees received'}
      </p>
      {monthlyGoal && totalCoffees >= monthlyGoal && (
        <p className="text-green-600 text-xs mt-1">🎉 Monthly goal reached!</p>
      )}
    </div>
  );
}
\`\`\`
Then add it between SocialLinks and WishlistItems:
\`\`\`typescript
<CoffeeCounter totalCoffees={47} monthlyGoal={50} />
\`\`\`

## ⚠️ WHAT NOT TO CHANGE
- Any component structure or file organization
- \`<WalletSendButton />\` functionality inside coffee tiers
- \`<CDPProvider />\` configuration
- Payment processing logic
- API routes (\`/app/api/onramp/\`)
- Authentication flows
- Component imports/exports

## 🚫 REMOVE THIS COMPONENT
Delete \`<PromptBlock />\` from \`app/page.tsx\` - this is just for development.

## 📸 IMAGES TO ADD
Add these coffee-themed images to \`/public/\` folder:
- \`avatar.png\` - Your friendly, approachable photo (square, 200x200px+)
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: \`query="friendly approachable person for creator profile"\`
- \`coffee-espresso.jpg\` - Espresso cup image
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: \`query="close-up of a single espresso shot in a small cup"\`
- \`coffee-cappuccino.jpg\` - Cappuccino with latte art
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: \`query="cappuccino with beautiful latte art on a wooden table"\`
- \`coffee-premium.jpg\` - Fancy coffee setup
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: \`query="gourmet coffee setup with pour-over and fresh beans"\`
- \`coffee-pastry.jpg\` - Coffee with pastry/croissant
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: \`query="coffee cup next to a delicious croissant on a cafe table"\`
- Keep images warm and inviting, under 1MB each

## 📱 MOBILE OPTIMIZATION
### Coffee Shop UX:
- **One-tap payments**: Make coffee purchases instant
- **Large buttons**: Thumb-friendly coffee tier buttons
- **Coffee emojis**: Visual feedback for selections
- **Simple layout**: Clean, café-style interface perfect for mobile

### Quick Support Flow:
- User opens page on mobile
- Sees your content and coffee message
- Taps a coffee tier (no custom amounts needed)
- One-click payment completion
- Immediate thank you feedback

## 🧠 COFFEE PSYCHOLOGY
### Why "Buy Me Coffee" Works:
- **Universal ritual**: Everyone understands coffee culture
- **Low commitment**: Small amounts feel comfortable
- **Appreciation token**: Simple way to say "thank you"
- **Personal connection**: Coffee as shared daily experience
- **Instant gratification**: Quick, satisfying way to support

### Community Building:
- Coffee supporters feel like a special community
- Regular coffee buyers become familiar supporters
- Creates casual, ongoing relationship vs one-time donation
- Coffee "ritual" makes support feel natural and recurring

## 🔧 REQUIRED SETUP AFTER TRANSFORMATION
**Your app won't work without these environment variables. Get them here:**
### 1. Coinbase Developer Platform Keys
Visit https://portal.cdp.coinbase.com/projects
**Add to your \`.env.local\` file:**
\`\`\`
NEXT_PUBLIC_CDP_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_RECIPIENT_ADDRESS=your_wallet_address_here
CDP_API_KEY_NAME=your_api_key_name_here
CDP_API_KEY_PRIVATE_KEY=your_private_key_here
\`\`\`

### 2. Configure Your Domains
**Onramp Configuration:**
https://portal.cdp.coinbase.com/products/onramp
- Add your domain to allowed origins

**Embedded Wallets Configuration:**
https://portal.cdp.coinbase.com/products/embedded-wallets
- Add your domain to allowed origins

### 3. Get Your Keys:
- **Project ID**: From your CDP dashboard
- **Recipient Address**: Your crypto wallet address where coffee payments go
- **API Keys**: Generate from https://portal.cdp.coinbase.com/projects/api-keys

## 💡 COFFEE PAGE SUCCESS TIPS
### Content Strategy:
- Share your actual coffee preferences and workspace setup
- Post updates about how coffee support helps your work
- Create coffee-themed content occasionally
- Thank supporters publicly (with permission)

### Community Building:
- Respond to supporters with coffee-themed thanks
- Share milestones ("50 coffees this month!")
- Create coffee supporter exclusive content
- Build the coffee ritual into your brand

### Promotion:
- Add coffee support links to your content
- Mention coffee support in videos/posts naturally
- Share coffee page on social media
- Include in email signatures and bios

## ✅ FINAL RESULT
A warm, inviting "Buy Me Coffee" page with fixed pricing tiers, coffee shop aesthetics, and seamless crypto payments - perfect for creators who want simple, recurring support from their community!`,

  "charity-donation.md": `# 🎯 Charity & Donation Hub - Cause Fundraising Page

Transform this crypto tipping template into a comprehensive donation page for charitable causes, nonprofits, or personal fundraising campaigns. Perfect for organizations seeking transparent, global fundraising with crypto payments!

## 📋 WHAT YOU'RE CREATING
A professional donation page that builds trust, shows impact, and makes it easy for supporters to contribute to meaningful causes using cryptocurrency payments.

## 🧱 COMPONENTS TO USE (DO NOT CHANGE THESE)
**Component Structure:**
- \`<Hero />\` → \`<StorySection />\` + \`<ProgressBar />\` → \`<CustomAmountInput />\` → \`<Footer />\`
- All payment functionality (\`<WalletSendButton />\`, \`<CDPProvider />\`)
- All \`/components/ui/\` components
- All API routes in \`/app/api/\`

**REMOVE from app/page.tsx:**
- \`<SocialLinks />\` (replace with cause-specific content)
- \`<WishlistItems />\` (replace with \`<CustomAmountInput />\`)

## ✏️ WHAT TO CUSTOMIZE
### 1. Hero Section (\`components/hero.tsx\`)
**Replace these values only:**
- **Image**: Update \`/public/avatar.png\` with organization logo or cause image
- **Name**: Change "Jane Doe" to organization name or cause title
- **Bio**: Update to compelling cause description
- Example: "Help us provide clean water to 1,000 families in rural Kenya. Every donation brings us closer to our goal and transforms lives."
- **Keep**: All styling, layout, and structure

### 2. Story Section (\`components/story-section.tsx\`)
**Import and use \`<StorySection />\` component instead of \`<SocialLinks />\`:**
\`\`\`typescript
// In app/page.tsx, replace <SocialLinks /> with:
<StorySection
  title="Our Mission"
  content={\`Clean water is a basic human right, yet millions of people worldwide lack access to safe drinking water.
In rural Kenya, families walk miles every day just to collect water from contaminated sources, leading to preventable diseases and keeping children out of school.
Our organization works directly with local communities to build sustainable water wells, providing immediate relief and long-term solutions.
With your support, we can install 10 new wells this year, serving over 1,000 families and changing lives forever.\`}
  imageUrl="/cause-image.jpg"
  imageAlt="Community members gathering around a new water well"
/>
\`\`\`

### 3. Progress Tracking (\`components/progress-bar.tsx\`)
**Add below StorySection to show fundraising progress:**
\`\`\`typescript
// Add after <StorySection />:
<ProgressBar
  current={18750}
  goal={50000}
  title="Fundraising Progress"
  showStats={true}
/>
\`\`\`

### 4. Donation Section (\`components/custom-amount-input.tsx\`)
**Import and use \`<CustomAmountInput />\` component instead of \`<WishlistItems />\`:**
\`\`\`typescript
// In app/page.tsx, replace <WishlistItems /> with:
<CustomAmountInput
  recipientAddress={process.env.NEXT_PUBLIC_RECIPIENT_ADDRESS || "0xRecipientAddressHere"}
  suggestedAmounts={[25, 50, 100, 250]}
  title="Make a Donation"
  description="Choose an amount or enter a custom donation"
  showMessage={true}
/>
\`\`\`

### 5. Footer (\`components/footer.tsx\`)
**Update with organization information:**
- Organization name and year
- Contact information
- Links to transparency reports
- Tax-deductible status if applicable

## 🎨 STYLING CUSTOMIZATION (COLORS ONLY)
### Trust-Building Color Palette
Apply these colors by updating CSS variables and Tailwind classes:**Option 1 - Professional Trust:**
- Primary: \`#1e40af\` (blue-800) for trust and reliability
- Secondary: \`#059669\` (emerald-600) for growth and hope
- Accent: \`#ea580c\` (orange-600) for donation CTAs
- Background: \`#ffffff\` (white) or \`#f9fafb\` (light gray)**Option 2 - Warm Compassion:**
- Primary: \`#0f766e\` (teal-700) for stability
- Secondary: \`#dc2626\` (red-600) for urgency/importance
- Accent: \`#7c3aed\` (violet-600) for impact highlights
- Background: \`#f8fafc\` (slate-50)**Theme Switch to Light:**
- Change \`bg-[#222222]\` to \`bg-white\` or \`bg-gray-50\`
- Update all text colors from \`text-white\` to \`text-gray-900\`
- Use light card backgrounds with subtle shadows
- Apply trust-building colors to buttons and accents

## 🏗️ CONTENT GUIDELINES
### Hero Content:
- Clear cause statement
- Emotional but professional tone
- Specific goals and impact numbers
- Urgency without being pushy

### Story Section Content:
- **The Problem**: What issue are you solving?
- **The Solution**: How does your organization address it?
- **The Impact**: What will donations accomplish?
- **Trust Signals**: Credentials, certifications, track record

### Donation Amounts:
- $25 - "Provides clean water for one person for one month"
- $50 - "Funds water purification tablets for one family"
- $100 - "Contributes to well drilling equipment"
- $250 - "Sponsors a community health education session"

## ⚠️ WHAT NOT TO CHANGE
- Any component structure or file organization
- \`<WalletSendButton />\` functionality inside \`<CustomAmountInput />\`
- \`<CDPProvider />\` configuration
- Payment processing logic
- API routes (\`/app/api/onramp/\`)
- Authentication flows
- Component imports/exports

## 🚫 REMOVE THIS COMPONENT
Delete \`<PromptBlock />\` from \`app/page.tsx\` - this is just for development.

## 📸 IMAGES TO ADD
Add these images to \`/public/\` folder:
- \`avatar.png\` - Organization logo or cause hero image (square, 200x200px+)
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: \`query="organization logo for clean water charity"\` or \`query="hero image of a community benefiting from clean water"\`
- \`cause-image.jpg\` - Story section image showing impact/beneficiaries (1200x600px+)
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: \`query="community members gathering around a new water well in a rural village"\`
- Keep images under 1MB each and ensure they're professionally appropriate

## 🛡️ TRUST ELEMENTS TO INCLUDE
### Transparency Features:
- Clear impact metrics and progress tracking
- Information about how funds are used
- Organization credentials and registration info
- Contact information for questions

### Social Proof:
- Previous impact achievements
- Number of donors/supporters
- Testimonials from beneficiaries (if appropriate)
- Organization history and experience

## 🔧 REQUIRED SETUP AFTER TRANSFORMATION
**Your app won't work without these environment variables. Get them here:**
### 1. Coinbase Developer Platform Keys
Visit https://portal.cdp.coinbase.com/projects
**Add to your \`.env.local\` file:**
\`\`\`
NEXT_PUBLIC_CDP_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_RECIPIENT_ADDRESS=your_organization_wallet_address_here
CDP_API_KEY_NAME=your_api_key_name_here
CDP_API_KEY_PRIVATE_KEY=your_private_key_here
\`\`\`

### 2. Configure Your Domains
**Onramp Configuration:**
https://portal.cdp.coinbase.com/products/onramp
- Add your domain to allowed origins

**Embedded Wallets Configuration:**
https://portal.cdp.coinbase.com/products/embedded-wallets
- Add your domain to allowed origins

### 3. Get Your Keys:
- **Project ID**: From your CDP dashboard
- **Recipient Address**: Your organization's crypto wallet address where donations go
- **API Keys**: Generate from https://portal.cdp.coinbase.com/projects/api-keys

## 💡 ADDITIONAL RECOMMENDATIONS
### Legal Compliance:
- Ensure compliance with local fundraising regulations
- Include appropriate disclaimers about cryptocurrency donations
- Consider tax implications for donors in different jurisdictions
- Maintain transparent records for regulatory purposes

### User Experience:
- Make the impact of each donation level crystal clear
- Use specific, concrete examples of what donations achieve
- Show progress toward goals to create urgency and momentum
- Keep the donation process as simple as possible

## ✅ FINAL RESULT
A professional, trustworthy charity donation page with progress tracking, compelling storytelling, and seamless crypto donation capabilities - perfect for organizations wanting to expand their global fundraising reach!`,

  "fan-wishlist.md": `# 🎁 Fan Wishlist - Dreams & Experiences Page

Transform this crypto tipping template into a fan-supported wishlist where followers can buy items, experiences, or equipment for their favorite creator. Perfect for streamers, content creators, and influencers who want to share their dreams and goals with their community!

## 📋 WHAT YOU'RE CREATING
A vibrant wishlist page where fans can directly fund specific items, experiences, travels, and novelty purchases that help you create better content and live your dreams - similar to the current demo but focused on personal aspirations and fan support.

## 🧱 COMPONENTS TO USE (DO NOT CHANGE THESE)
**Component Structure:**
- \`<Hero />\` → \`<SocialLinks />\` → \`<WishlistItems />\` → \`<Footer />\`
- All payment functionality (\`<WalletSendButton />\`, \`<CDPProvider />\`)
- All \`/components/ui/\` components
- All API routes in \`/app/api/\`

**Perfect Existing Structure:**
- This is essentially the current demo but with different context!
- \`<WishlistItems />\` component is already perfect for this use case
- Just need to update content and styling

## ✏️ WHAT TO CUSTOMIZE
### 1. Hero Section (\`components/hero.tsx\`)
**Replace these values only:**
- **Image**: Update \`/public/avatar.png\` with your engaging creator photo
- **Name**: Change "Jane Doe" to your creator name
- **Bio**: Create exciting, dream-focused greeting
- Example: "Hey, I'm Maya! 🌟 I'm building an amazing content creation setup and chasing dreams around the world. Help me level up by supporting items on my wishlist - every purchase makes better content for you!"
- **Keep**: All styling, layout, and structure

### 2. Social Links (\`components/social-links.tsx\`)
**Update links only:**
- Change URLs to your content platforms and social accounts
- Keep the same styling and icons
- Focus on: YouTube, TikTok, Instagram, Twitch, Twitter

### 3. Wishlist Items (\`lib/wishlist.ts\`)
**Replace the items array with diverse wishlist categories:**
\`\`\`typescript
export const wishlistItems: WishlistItemData[] = [
  {
    id: 1,
    name: "Professional Ring Light",
    price: 89,
    imageUrl: "/wishlist-ring-light.jpg",
  },
  {
    id: 2,
    name: "Tokyo Food Tour Experience",
    price: 650,
    imageUrl: "/wishlist-tokyo-trip.jpg",
  },
  {
    id: 3,
    name: "Mechanical Gaming Keyboard",
    price: 145,
    imageUrl: "/wishlist-keyboard.jpg",
  },
  {
    id: 4,
    name: "Cute Desk Plant Collection",
    price: 35,
    imageUrl: "/wishlist-plants.jpg",
  },
  {
    id: 5,
    name: "Photography Workshop",
    price: 280,
    imageUrl: "/wishlist-workshop.jpg",
  },
  {
    id: 6,
    name: "Anime Figure Set",
    price: 95,
    imageUrl: "/wishlist-figures.jpg",
  },
];
\`\`\`
**Wishlist Categories to Consider:**
**🎬 Equipment & Tech ($30-$800):**
- Ring lights, cameras, microphones for better content
- Gaming peripherals, streaming equipment
- Video editing software, graphics tablets
- Studio headphones, boom arms, green screens
**✈️ Experiences & Travel ($100-$1500):**
- "Tokyo food tour for travel vlogs - $650"
- "Photography workshop to improve content - $280"
- "Gaming convention for event coverage - $420"
- "Cooking class for food content - $180"
**🏠 Personal & Lifestyle ($25-$300):**
- Ergonomic chair for long editing sessions
- Aesthetic desk setup items, organization tools
- Books for learning and inspiration
- Workout equipment for health content
**🎮 Novelty & Fun ($15-$150):**
- Anime figures, collectibles for background
- New games for gaming content
- Props for skits and themed videos
- Fandom merchandise, art prints

### 4. Footer (\`components/footer.tsx\`)
**Update with creator information:**
- Your name and year
- Links to main content platforms
- Thank you message: "Powered by amazing fans 💖"

## 🎨 STYLING CUSTOMIZATION (COLORS ONLY)
### Vibrant & Energetic Color Palette
Apply these colors by updating CSS variables and Tailwind classes:**Option 1 - Creator Energy:**
- Primary: \`#6366f1\` (indigo-500) for excitement and creativity
- Secondary: \`#8b5cf6\` (violet-500) for dreams and aspirations
- Accent: \`#10b981\` (emerald-500) for funded items and success
- Background: \`#ffffff\` (white) or \`#f9fafb\` (gray-50)**Option 2 - Fan Community:**
- Primary: \`#ec4899\` (pink-500) for community love
- Secondary: \`#06b6d4\` (cyan-500) for freshness and energy
- Accent: \`#f59e0b\` (amber-500) for highlights and achievements
- Background: \`#f8fafc\` (slate-50)**Theme Switch to Bright & Fun:**
- Change \`bg-[#222222]\` to bright, welcoming backgrounds
- Update text colors to modern, readable schemes
- Use colorful gradients for wishlist item cards
- Apply energetic colors to progress indicators

## 🏗️ WISHLIST CONTENT GUIDELINES
### Item Description Examples:
- **Professional Ring Light ($89)**: "This will make my videos look so much more professional! No more weird shadows during tutorials. You'll see the difference immediately!"
- **Tokyo Food Tour ($650)**: "I've always dreamed of creating epic food content in Tokyo! This tour will give me amazing footage to share with you all."
- **Cute Desk Plants ($35)**: "These will make my streaming setup so cozy and aesthetic! Plus plants improve air quality during long streams."

### Price Range Strategy:
- **Small ($15-50)**: Accessible items everyone can support
- **Medium ($50-200)**: Meaningful upgrades that improve content
- **Big ($200-800)**: Game-changing equipment or experiences
- **Dream ($800+)**: Major aspirations like travel or professional gear

### Community Benefits:
- Show how each item improves content FOR your fans
- Explain the direct impact on video/stream quality
- Share excitement about using items in future content
- Promise to feature supporters when showcasing items

## 🌟 OPTIONAL: ADD WISHLIST PROGRESS COMPONENT
If you want to show overall wishlist progress, you can create a progress tracker:
\`\`\`typescript
// Create components/wishlist-progress.tsx:
interface WishlistProgressProps {
  totalItems: number;
  fundedItems: number;
  totalValue: number;
  fundedValue: number;
  className?: string;
}

export function WishlistProgress({ totalItems, fundedItems, totalValue, fundedValue, className = "" }: WishlistProgressProps) {
  const itemProgress = (fundedItems / totalItems) * 100;
  const valueProgress = (fundedValue / totalValue) * 100;
  return (
    <div className={\`bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-3xl p-6 mb-6 \${className}\`}>
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">✨ Wishlist Progress</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Items Funded</span>
            <span>{fundedItems}/{totalItems}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500" style={{ width: \`\${itemProgress}%\` }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Total Value</span>
            <span>$\{fundedValue.toLocaleString()}/\${totalValue.toLocaleString()}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-3 rounded-full transition-all duration-500" style={{ width: \`\${valueProgress}%\` }} />
          </div>
        </div>
      </div>
      {fundedItems === totalItems && (
        <div className="mt-4 text-center">
          <span className="text-2xl">🎉</span>
          <p className="text-purple-600 font-medium">Wishlist Complete! Thank you amazing fans!</p>
        </div>
      )}
    </div>
  );
}
\`\`\`
Then add it between SocialLinks and WishlistItems:
\`\`\`typescript
<WishlistProgress totalItems={6} fundedItems={2} totalValue={1294} fundedValue={320} />
\`\`\`

## ⚠️ WHAT NOT TO CHANGE
- Any component structure or file organization
- \`<WalletSendButton />\` functionality inside wishlist items
- \`<CDPProvider />\` configuration
- Payment processing logic
- API routes (\`/app/api/onramp/\`)
- Authentication flows
- Component imports/exports

## 🚫 REMOVE THIS COMPONENT
Delete \`<PromptBlock />\` from \`app/page.tsx\` - this is just for development.

## 📸 IMAGES TO ADD
Add these wishlist images to \`/public/\` folder:
- \`avatar.png\` - Your creator photo looking excited and approachable (square, 200x200px+)
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: \`query="excited and approachable content creator profile picture"\`
- \`wishlist-*.jpg\` - High-quality images of each wishlist item (500x500px+)
  - **Image Tip:** For each item, you can use a stock image or generate one with AI.
    - For \`wishlist-ring-light.jpg\`: \`query="professional LED ring light for video"\`
    - For \`wishlist-tokyo-trip.jpg\`: \`query="vibrant street food scene in Tokyo, Japan"\`
    - For \`wishlist-keyboard.jpg\`: \`query="sleek mechanical gaming keyboard with RGB lighting"\`
    - For \`wishlist-plants.jpg\`: \`query="collection of small, cute desk plants in aesthetic pots"\`
    - For \`wishlist-workshop.jpg\`: \`query="person learning photography at a workshop with a camera"\`
    - For \`wishlist-figures.jpg\`: \`query="collection of detailed anime figures on a display shelf"\`
- Show actual products, experiences, or mockups of what you want
- Keep images bright, appealing, and under 1MB each
**Image Tips:**
- **Equipment**: Product photos on clean backgrounds
- **Experiences**: Travel destinations, workshop photos, event images
- **Personal Items**: Aesthetic flat-lay photos, lifestyle shots
- **Novelty**: Fun, colorful product photos that show personality

## 💭 FAN PSYCHOLOGY & COMMUNITY
### Why Fans Love Supporting Wishlists:
- **Shared Success**: Feel part of your creator journey
- **Visible Impact**: See their support improve your content quality
- **Personal Connection**: Direct impact on your life and happiness
- **Content Investment**: Better equipment = better content for them
- **Community Pride**: Feel good about contributing to dreams

### Building Fan Engagement:
- **Progress Updates**: Share when items arrive and how you use them
- **Thank You Content**: Feature supporters in dedicated appreciation posts
- **Behind the Scenes**: Show items being unboxed and set up
- **Community Polls**: Let fans vote on next priority items

## 🔧 REQUIRED SETUP AFTER TRANSFORMATION
**Your app won't work without these environment variables. Get them here:**
### 1. Coinbase Developer Platform Keys
Visit https://portal.cdp.coinbase.com/projects
**Add to your \`.env.local\` file:**
\`\`\`
NEXT_PUBLIC_CDP_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_RECIPIENT_ADDRESS=your_wallet_address_here
CDP_API_KEY_NAME=your_api_key_name_here
CDP_API_KEY_PRIVATE_KEY=your_private_key_here
\`\`\`

### 2. Configure Your Domains
**Onramp Configuration:**
https://portal.cdp.coinbase.com/products/onramp
- Add your domain to allowed origins

**Embedded Wallets Configuration:**
https://portal.cdp.coinbase.com/products/embedded-wallets
- Add your domain to allowed origins

### 3. Get Your Keys:
- **Project ID**: From your CDP dashboard
- **Recipient Address**: Your crypto wallet address where wishlist payments go
- **API Keys**: Generate from https://portal.cdp.coinbase.com/projects/api-keys

## 💡 WISHLIST SUCCESS STRATEGIES
### Content Integration:
- **Unboxing Videos**: Show items arriving and your excitement
- **Setup Content**: Document how you integrate new equipment
- **Experience Vlogs**: Create content from funded experiences
- **Progress Updates**: Regular wishlist status updates

### Community Management:
- **Acknowledge Every Supporter**: Thank fans publicly for contributions
- **Share Item Usage**: Show how funded items improve your content
- **Update Regularly**: Refresh wishlist with new goals and dreams
- **Celebrate Milestones**: Make big deals out of completed items

### Promotion Tips:
- **Social Media**: Share wishlist updates across all platforms
- **Content Integration**: Mention wishlist naturally in videos/streams
- **Email/Newsletter**: Include wishlist progress in updates
- **Community Posts**: Use platform community features to share updates

## ✅ FINAL RESULT
An exciting fan wishlist page where your community can directly support your dreams, equipment upgrades, experiences, and personal goals - creating a stronger connection between you and your supporters while improving your content for everyone!`,

  "fund-my-craft.md": `# 🎨 Fund My Craft - Creator Support & Equipment Page

Transform this crypto tipping template into a creator support page where artists, makers, podcasters, and creatives can showcase specific gear, tools, or materials they need supporters to help fund. Perfect for content creators who need equipment upgrades!

## 📋 WHAT YOU'RE CREATING
A one-page funding site where supporters can directly fund specific equipment items for creators - just like the current demo, but customized for your creative needs.

## 🧱 COMPONENTS TO USE (DO NOT CHANGE THESE)
Keep these exact components and structure:
- \`<Hero />\` → \`<SocialLinks />\` → \`<WishlistItems />\` → \`<Footer />\`
- All payment functionality (\`<WalletSendButton />\`, \`<CDPProvider />\`)
- All \`/components/ui/\` components
- All API routes in \`/app/api/\`

## ✏️ WHAT TO CUSTOMIZE
### 1. Hero Section (\`components/hero.tsx\`)
**Replace these values only:**
- **Image**: Update \`/public/avatar.png\` with creator's photo
- **Name**: Change "Jane Doe" to creator's real name
- **Bio**: Update the description to creator's story
- Example: "Hey, I'm Alex! I create digital art tutorials on YouTube and help aspiring artists learn illustration. Help me upgrade my gear so I can create even better content for you!"
- **Keep**: All styling, layout, and structure

### 2. Social Links (\`components/social-links.tsx\`)
**Update links only:**
- Change URLs to creator's real social accounts
- Keep the exact same icons and styling
- Consider: YouTube, Instagram, TikTok, Twitter, Behance, etc.

### 3. Equipment List (\`lib/wishlist.ts\`)
**Replace the items array with creator-specific gear:**
\`\`\`typescript
export const wishlistItems: WishlistItemData[] = [
  {
    id: 1,
    name: "Professional Microphone",
    price: 299,
    imageUrl: "/equipment-mic.jpg", // Add your images to /public/
  },
  {
    id: 2,
    name: "Camera Upgrade",
    price: 850,
    imageUrl: "/equipment-camera.jpg",
  },
// Add 2-6 items total
];
\`\`\`
**Item Categories to Consider:**
- **Audio**: Microphones, audio interfaces, headphones ($100-$400)
- **Video**: Cameras, lenses, lighting, tripods ($150-$1500)
- **Art**: Drawing tablets, software, supplies ($50-$500)
- **Tech**: Laptops, monitors, storage drives ($200-$2500)

### 4. Footer (\`components/footer.tsx\`)
**Update text only:**
- Change creator name and year
- Add link to main platform
- Keep all styling and structure

## 🎨 STYLING CUSTOMIZATION (COLORS ONLY)
### Creative Color Palette
Apply these colors by updating CSS variables and Tailwind classes:**Option 1 - Artistic Purple:**
- Primary: \`#6366f1\` (purple-500)
- Secondary: \`#ec4899\` (pink-500)
- Accent: \`#0d9488\` (teal-600)
- Background: Keep \`#222222\` or change to \`#1a1a2e\`**Option 2 - Warm Creator:**
- Primary: \`#f97316\` (orange-500)
- Secondary: \`#8b5cf6\` (violet-500)
- Accent: \`#06b6d4\` (cyan-500)
- Background: Keep \`#222222\` or change to \`#2d1b3d\`**Apply colors to:**
- Button backgrounds and hover states
- Border colors (\`border-white/20\` → \`border-purple-500/20\`)
- Gradient backgrounds
- Accent text colors

## ⚠️ WHAT NOT TO CHANGE
- Any component structure or file organization
- \`<WalletSendButton />\` functionality
- \`<CDPProvider />\` configuration
- Payment processing logic
- API routes (\`/app/api/onramp/\`)
- Authentication flows
- Component imports/exports

## 🚫 REMOVE THIS COMPONENT
Delete \`<PromptBlock />\` from \`app/page.tsx\` - this is just for development.

## 📸 IMAGES TO ADD
Add these images to \`/public/\` folder:
- \`avatar.png\` - Creator's profile photo (square, 200x200px+)
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: \`query="professional creator profile picture, square"\`
- Equipment images for each wishlist item (500x500px+)
  - **Image Tip:** For each item, you can use a stock image or generate one with AI.
    - For \`equipment-mic.jpg\`: \`query="professional studio microphone on a stand"\`
    - For \`equipment-camera.jpg\`: \`query="high-end mirrorless camera with a lens"\`
- Keep images under 1MB each

## 🔧 REQUIRED SETUP AFTER TRANSFORMATION
**Your app won't work without these environment variables. Get them here:**
### 1. Coinbase Developer Platform Keys
Visit https://portal.cdp.coinbase.com/projects
**Add to your \`.env.local\` file:**
\`\`\`
NEXT_PUBLIC_CDP_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_RECIPIENT_ADDRESS=your_wallet_address_here
CDP_API_KEY_NAME=your_api_key_name_here
CDP_API_KEY_PRIVATE_KEY=your_private_key_here
\`\`\`

### 2. Configure Your Domains
**Onramp Configuration:**
https://portal.cdp.coinbase.com/products/onramp
- Add your domain to allowed origins

**Embedded Wallets Configuration:**
https://portal.cdp.coinbase.com/products/embedded-wallets
- Add your domain to allowed origins

### 3. Get Your Keys:
- **Project ID**: From your CDP dashboard
- **Recipient Address**: Your crypto wallet address where funds go
- **API Keys**: Generate from https://portal.cdp.coinbase.com/projects/api-keys

## ✅ FINAL RESULT
A personalized creator funding page where supporters can directly fund specific equipment items using crypto payments, customized with your branding and gear list!`,

  "gofundme-personal.md": `# 💝 GoFundMe Personal Fundraising - Emergency & Life Events

Transform this template into a GoFundMe-style personal fundraising page for medical expenses, emergencies, life events, or personal dreams. Focus on storytelling, emotional connection, and community support.

## STRUCTURE TO MAINTAIN
- Keep the existing component structure: Hero → Story/Updates → Donation Options → Community Support → Footer
- Use existing components from /components/ui/ folder
- Transform WishlistItems into donation tiers or single donation input
- Keep all crypto wallet and payment functionality intact

## HERO SECTION (components/hero.tsx)
- Replace avatar with personal photo or relevant image (update /public/avatar.png)
- Change name to person's name or family name
- Create compelling headline (e.g., "Help Sarah Fight Cancer" or "Support John's Recovery Journey")
- Include brief, emotional summary (e.g., "After a sudden accident, John needs our help with medical bills and recovery costs. Every donation brings hope.")
- Add urgency if applicable ("Surgery needed within 30 days")
- Include current funding status prominently

## STORY SECTION (Transform SocialLinks)
**REPLACE WITH COMPELLING STORY:**
- **The Situation:** Clear explanation of what happened/what's needed
- **The Impact:** How this affects the person/family
- **The Goal:** Specific funding target and what it will accomplish
- **The Timeline:** When funds are needed by
- **Personal Touch:** Include family details, personality, dreams
- **Medical/Professional Validation:** Doctor notes, official documentation if relevant
- **Photo Gallery:** Multiple images showing the person, situation, family

### 2. Personal Story Section (\`components/story-section.tsx\`)
**Import and use \`<StorySection />\` component instead of \`<SocialLinks />\`:**
\`\`\`typescript
// In app/page.tsx, replace <SocialLinks /> with:
<StorySection
  title="Our Story"
  content={\`Three months ago, our lives changed forever when Sarah was diagnosed with stage 2 breast cancer. As a single mother of two young children, Sarah has always been the rock of our family. She worked two jobs to support her kids and was always the first to help others in our community.
The diagnosis came suddenly after a routine checkup, and the medical bills are overwhelming. Insurance covers some treatments, but we're facing $35,000 in out-of-pocket costs for specialized treatments, medication, and childcare during recovery.
Sarah is a fighter, and her doctors are optimistic about her treatment plan. With surgery scheduled for next month and chemotherapy starting shortly after, we need our community's help to focus on healing instead of worrying about finances.
Every donation, no matter the size, brings us closer to giving Sarah the best possible chance at recovery and getting back to being the amazing mom and friend we all know and love.\`}
  imageUrl="/family-photo.jpg"
  imageAlt="Sarah with her two children at the park"
/>
\`\`\`

## DONATION OPTIONS (Transform WishlistItems)
**OPTION A - Meaningful Donation Levels:**
- $25 - "Cover one meal during hospital stay"
- $50 - "Help with one day of medication costs"
- $100 - "Support one physical therapy session"
- $250 - "Cover one night's hospital accommodation for family"
- $500 - "Significant impact toward recovery goal"
- Custom amount with personal message option

**OPTION B - Single Goal Focus:**
- Large progress bar showing funding progress
- Custom donation input with suggested amounts
- Clear breakdown of how funds will be used
- Immediate impact messaging

### 4. Donation Section (\`components/custom-amount-input.tsx\`)
**Import and use \`<CustomAmountInput />\` component instead of \`<WishlistItems />\`:**
\`\`\`typescript
// In app/page.tsx, replace <WishlistItems /> with:
<CustomAmountInput
  recipientAddress={process.env.NEXT_PUBLIC_RECIPIENT_ADDRESS || "0xRecipientAddressHere"}
  suggestedAmounts={[25, 50, 100, 250]}
  title="Support Sarah's Recovery"
  description="Choose an amount or enter a custom donation"
  showMessage={true}
/>
\`\`\`

## COLOR PALETTE & STYLING
- Primary: Trustworthy and hopeful colors (Soft blue #3b82f6, Gentle green #10b981)
- Secondary: Warm, supportive tones (Soft gray #6b7280, Light background #f9fafb)
- Accents: Emotional connection colors (Warm orange #f97316 for CTAs, Soft red #ef4444 for urgency)
- Background: Clean, accessible light theme (#ffffff, #f8fafc)
- Progress elements: Encouraging greens and blues showing progress
- Typography: Readable, empathetic fonts that convey trust

## COMMUNITY SUPPORT SECTION (New addition)
**ADD BETWEEN DONATIONS AND FOOTER:**
- **Recent Supporters:** "John donated $50 - 'Thinking of you!'"
- **Community Messages:** Supportive comments and well-wishes
- **Share Options:** Easy social media sharing buttons
- **Updates Feed:** Progress updates from the campaign organizer
- **Supporter Count:** "47 people have supported this campaign"

## TRUST & TRANSPARENCY FEATURES
- **Fund Usage Breakdown:** Clear pie chart or list of how money will be used
- **Organizer Information:** Clear details about who's running the campaign
- **Regular Updates:** Timeline of progress and how funds are helping
- **Withdrawal Plan:** When and how funds will be accessed
- **Contact Information:** Way to reach organizer with questions

## EMOTIONAL ELEMENTS
- **Personal Photos:** Before/during/hopeful future images
- **Family Impact:** How this affects loved ones
- **Community Connection:** Local ties, work relationships, friend networks
- **Hope Messaging:** Focus on positive outcomes and recovery
- **Gratitude:** Immediate and ongoing thanks to supporters
- **Progress Celebration:** Milestone achievements and thank-yous

## FOOTER (components/footer.tsx)
- Include organizer contact information
- Link to updates and transparency information
- Privacy policy and fund usage commitments
- Share buttons for social media
- "Report campaign" option for platform integrity

### 5. Footer (\`components/footer.tsx\`)
**Update with personal/family information:**
- Campaign organizer name and relationship to beneficiary
- Contact information for questions
- Link to updates (if you plan to post them elsewhere)
- Privacy and fund usage commitments

## WHAT NOT TO TOUCH
- Do NOT modify any wallet functionality in components/wallet-send-button.tsx
- Do NOT change onramp functionality in components/onramp-button.tsx
- Do NOT alter API routes in app/api/
- Do NOT modify CDP provider or authentication logic
- Do NOT change the payment processing functions

## IMPORTANT NOTES
- Remove the \`<PromptBlock />\` component from the final result
- Focus heavily on storytelling and emotional connection
- Ensure mobile-first responsive design for easy sharing
- Make donation process extremely simple and trust-building
- Include clear fund usage and withdrawal transparency
- Test that wallet connections and payments still work
- Consider adding recurring donation options

## PSYCHOLOGICAL TRUST BUILDERS
- **Social Proof:** Show other supporters and amounts
- **Transparency:** Clear fund usage and organizer identity
- **Updates:** Regular communication about progress
- **Verification:** Medical documentation or official papers when relevant
- **Community:** Local connections and endorsements
- **Gratitude:** Immediate and ongoing thanks to supporters

## URGENCY WITHOUT PRESSURE
- **Timeline:** Clear deadlines when relevant (surgery dates, etc.)
- **Progress:** Show how close to goal and what's still needed
- **Impact:** Immediate vs. long-term benefits of donations
- **Alternatives:** What happens if goal isn't reached

## REQUIRED ENVIRONMENT SETUP
After transformation, the user must configure these environment variables:
1. **NEXT_PUBLIC_CDP_PROJECT_ID** - Get this from https://portal.cdp.coinbase.com/projects (your Coinbase Developer project ID)
2. **NEXT_PUBLIC_RECIPIENT_ADDRESS** - Personal wallet address where funds will be received
3. **CDP_API_KEY_NAME** and **CDP_API_KEY_PRIVATE_KEY** - Get these from https://portal.cdp.coinbase.com/projects/api-keys
4. **Domain Configuration:**
   - Configure your domain at: https://portal.cdp.coinbase.com/products/onramp
   - And also at: https://portal.cdp.coinbase.com/products/embedded-wallets

The app will not function without these environment variables properly set.

Create a deeply personal, trustworthy fundraising page that connects with people's hearts while providing complete transparency about fund usage and campaign progress.

## 📸 IMAGES TO ADD
Add these images to \`/public/\` folder:
- \`avatar.png\` - Personal or family photo showing the person in better times (square, 200x200px+)
- \`family-photo.jpg\` - Story section image showing person with family/friends (1200x600px+)
- Keep images positive and hopeful
- Ensure images are under 1MB each

## 💭 PSYCHOLOGICAL ELEMENTS FOR SUPPORT
### Emotional Connection:
- Share personal details that make the person relatable
- Include hopes, dreams, and what recovery means
- Show the person as more than their crisis
- Express genuine gratitude and humility

### Social Proof:
- "23 people have already donated"
- "Our community is coming together"
- Show progress toward goal
- Include supporter comments if possible

### Urgency Without Pressure:
- Clear timeline for medical needs
- Explain what happens if goal isn't reached
- Focus on positive outcomes rather than negative consequences

## 🔧 REQUIRED SETUP AFTER TRANSFORMATION
**Your app won't work without these environment variables. Get them here:**
### 1. Coinbase Developer Platform Keys
Visit https://portal.cdp.coinbase.com/projects
**Add to your \`.env.local\` file:**
\`\`\`
NEXT_PUBLIC_CDP_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_RECIPIENT_ADDRESS=your_personal_wallet_address_here
CDP_API_KEY_NAME=your_api_key_name_here
CDP_API_KEY_PRIVATE_KEY=your_private_key_here
\`\`\`

### 2. Configure Your Domains
**Onramp Configuration:**
https://portal.cdp.coinbase.com/products/onramp
- Add your domain to allowed origins

**Embedded Wallets Configuration:**
https://portal.cdp.coinbase.com/products/embedded-wallets
- Add your domain to allowed origins

### 3. Get Your Keys:
- **Project ID**: From your CDP dashboard
- **Recipient Address**: Your personal crypto wallet address where donations go
- **API Keys**: Generate from https://portal.cdp.coinbase.com/projects/api-keys

## 💡 IMPORTANT CONSIDERATIONS
### Privacy & Safety:
- Only share information you're comfortable being public
- Consider privacy implications of blockchain transactions
- Be careful not to share too many personal details
- Verify with family/friends before sharing their information

### Legal & Taxes:
- Check local regulations about fundraising
- Consider tax implications of receiving donations
- Keep records of all donations received
- Consult with a tax professional if amounts are significant

### Campaign Success Tips:
- Share widely on social media platforms
- Ask friends and family to share with their networks
- Post regular updates on progress and recovery
- Always thank supporters publicly (with their permission)

## ✅ FINAL RESULT
A deeply personal, trustworthy GoFundMe-style fundraising page that tells your story compellingly, builds community support, and makes it easy for people to help during your time of need using crypto donations!`,

  "kickstarter-project.md": `# 🚀 Kickstarter Project Crowdfunding - Innovation & Creative Projects

Transform this crypto tipping template into a Kickstarter-style project crowdfunding page for innovative products, creative projects, or business ventures. Perfect for entrepreneurs, inventors, and creators launching new products or ideas!

## 📋 WHAT YOU'RE CREATING
A professional crowdfunding page that showcases your project, builds excitement, and offers reward tiers to backers using cryptocurrency payments - just like Kickstarter but with crypto!

## 🧱 COMPONENTS TO USE (DO NOT CHANGE THESE)
**Component Structure:**
- \`<Hero />\` → \`<StorySection />\` + \`<ProgressBar />\` → \`<WishlistItems />\` (as reward tiers) → \`<Footer />\`
- All payment functionality (\`<WalletSendButton />\`, \`<CDPProvider />\`)
- All \`/components/ui/\` components
- All API routes in \`/app/api/\`

**REMOVE from app/page.tsx:**
- \`<SocialLinks />\` (replace with project story)
- Keep \`<WishlistItems />\` (perfect for reward tiers!)

## ✏️ WHAT TO CUSTOMIZE
### 1. Hero Section (\`components/hero.tsx\`)
**Replace these values only:**
- **Image**: Update \`/public/avatar.png\` with project logo or product mockup
- **Name**: Change "Jane Doe" to project title (e.g., "EcoSmart Water Bottle")
- **Bio**: Create compelling project tagline and brief description
- Example: "The world's first self-cleaning water bottle with smart hydration tracking. Revolutionary UV-C technology meets sleek design. Launching March 2024!"
- **Keep**: All styling, layout, and structure

### 2. Project Story Section (\`components/story-section.tsx\`)
**Import and use \`<StorySection />\` component instead of \`<SocialLinks />\`:**
\`\`\`typescript
// In app/page.tsx, replace <SocialLinks /> with:
<StorySection
  title="The Innovation"
  content={\`Every day, millions of people drink from bottles that harbor harmful bacteria, even after washing. Traditional cleaning methods miss 40% of germs that cause illness and affect taste.
Our team of engineers and designers spent 3 years developing the EcoSmart Bottle - the first water bottle with integrated UV-C LED technology that eliminates 99.9% of bacteria in just 60 seconds.
But we didn't stop there. The EcoSmart Bottle connects to your phone, tracks your hydration, reminds you to drink water, and even monitors water quality. It's not just a bottle - it's your personal hydration coach.
We've completed working prototypes, secured manufacturing partnerships, and filed for patents. Now we need your support to bring this game-changing product to market and revolutionize how the world stays hydrated.\`}
  imageUrl="/product-demo.jpg"
  imageAlt="EcoSmart Water Bottle with UV-C cleaning cycle active"
/>
\`\`\`

### 3. Progress Tracking (\`components/progress-bar.tsx\`)
**Add below StorySection to show crowdfunding progress:**
\`\`\`typescript
// Add after <StorySection />:
<ProgressBar
  current={47500}
  goal={75000}
  title="Crowdfunding Progress"
  showStats={true}
/>
\`\`\`

### 4. Reward Tiers (\`lib/wishlist.ts\`)
**Replace the items array with Kickstarter-style reward tiers:**
\`\`\`typescript
export const wishlistItems: WishlistItemData[] = [
  {
    id: 1,
    name: "Early Bird Special",
    price: 45,
    imageUrl: "/reward-early-bird.jpg",
  },
  {
    id: 2,
    name: "Standard Backer",
    price: 65,
    imageUrl: "/reward-standard.jpg",
  },
  {
    id: 3,
    name: "Deluxe Package",
    price: 95,
    imageUrl: "/reward-deluxe.jpg",
  },
  {
    id: 4,
    name: "Founder Edition",
    price: 150,
    imageUrl: "/reward-founder.jpg",
  },
];
\`\`\`
**Reward Tier Examples:**
- **$45 - Early Bird Special** - "Get the EcoSmart Bottle at 40% off retail price + worldwide shipping" ⚡ (Limited to first 100 backers)
- **$65 - Standard Backer** - "One EcoSmart Bottle + mobile app access + free shipping"
- **$95 - Deluxe Package** - "EcoSmart Bottle + premium carrying case + exclusive color + priority support"
- **$150 - Founder Edition** - "Limited edition engraved bottle + founder certificate + behind-the-scenes updates"

### 5. Footer (\`components/footer.tsx\`)
**Update with project information:**
- Project creator/company name and year
- Contact information for questions
- Links to patents, certifications, manufacturing details
- Shipping and delivery policies

## 🎨 STYLING CUSTOMIZATION (COLORS ONLY)
### Innovation & Trust Color Palette
Apply these colors by updating CSS variables and Tailwind classes:**Option 1 - Tech Innovation:**
- Primary: \`#2563eb\` (blue-600) for trust and technology
- Secondary: \`#7c3aed\` (violet-600) for innovation and creativity
- Accent: \`#ea580c\` (orange-600) for CTAs and excitement
- Background: \`#ffffff\` (white) or \`#f9fafb\` (gray-50)**Option 2 - Modern Professional:**
- Primary: \`#059669\` (emerald-600) for growth and success
- Secondary: \`#dc2626\` (red-600) for urgency and energy
- Accent: \`#7c3aed\` (violet-600) for premium feel
- Background: \`#f8fafc\` (slate-50)**Theme Switch to Light:**
- Change \`bg-[#222222]\` to \`bg-white\` or \`bg-gray-50\`
- Update all text colors from \`text-white\` to \`text-gray-900\`
- Use light card backgrounds with professional shadows
- Apply innovation colors to progress bars and reward cards

## 🏗️ PROJECT CONTENT GUIDELINES
### Hero Content:
- Clear, memorable project name
- Compelling one-sentence description of what you're building
- Key innovation or unique selling proposition
- Funding goal and timeline

### Story Section Content:
- **The Problem**: What issue does your project solve?
- **The Solution**: How does your innovation address it uniquely?
- **The Innovation**: What makes this special/different?
- **The Team**: Who's building this and why they're qualified
- **The Progress**: Prototypes, development milestones achieved
- **The Plan**: Timeline for development and delivery

### Reward Tier Guidelines:
- **Early Bird** (30-40% off retail): Limited quantity, best value
- **Standard** (20-30% off): Main product offering
- **Deluxe** (10-20% off + extras): Product plus premium additions
- **Founder** (Premium price): Exclusive limited edition items

## 🎬 OPTIONAL: ADD VIDEO COMPONENT
If your project needs a video demo, you can create a simple video component:
\`\`\`typescript
// Create components/video-embed.tsx:
interface VideoEmbedProps {
  videoUrl: string;
  title?: string;
  className?: string;
}

export function VideoEmbed({ videoUrl, title = "Project Demo", className = "" }: VideoEmbedProps) {
  return (
    <div className={\`bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 mb-6 \${className}\`}>
      {title && (
        <h3 className="text-lg font-semibold text-white mb-4 text-center">{title}</h3>
      )}
      <div className="relative w-full h-64 bg-gray-800 rounded-2xl overflow-hidden">
        <iframe
          src={videoUrl}
          title={title}
          className="w-full h-full"
          allowFullScreen
        />
      </div>
    </div>
  );
}
\`\`\`
Then add it to your page between Hero and StorySection:
\`\`\`typescript
<VideoEmbed videoUrl="https://www.youtube.com/embed/your-video-id"
title="See the EcoSmart Bottle in Action"/>
\`\`\`

## 🚫 REMOVE THIS COMPONENT
Delete \`<PromptBlock />\` from \`app/page.tsx\` - this is just for development.

## 📸 IMAGES TO ADD
Add these images to \`/public/\` folder:
- \`avatar.png\` - Project logo or product hero image (square, 200x200px+)
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: \`query="futuristic product logo for a smart water bottle"\` or \`query="sleek product mockup of a new tech gadget"\`
- \`product-demo.jpg\` - Story section image showing product in action (1200x600px+)
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: \`query="EcoSmart Water Bottle with UV-C cleaning cycle active, glowing blue light"\`
- \`reward-*.jpg\` - Images for each reward tier showing what backers get
  - **Image Tip:** For each reward tier, you can use a stock image or generate one with AI.
    - For \`reward-early-bird.jpg\`: \`query="minimalist image representing an early bird special, with a small product icon"\`
    - For \`reward-standard.jpg\`: \`query="standard product packaging for a smart water bottle"\`
    - For \`reward-deluxe.jpg\`: \`query="deluxe package for a smart water bottle, including premium accessories"\`
    - For \`reward-founder.jpg\`: \`query="limited edition engraved smart water bottle with a founder certificate"\`
- Keep images professional and high-quality
- Ensure images are under 1MB each

## 🎯 KICKSTARTER SUCCESS PSYCHOLOGY
### Building Excitement:
- **Innovation Focus**: Position as cutting-edge and game-changing
- **Scarcity**: Limited early bird pricing and quantities
- **Social Proof**: Show backing momentum and community excitement
- **Creator Story**: Personal journey and passion behind the project

### Trust Building:
- **Prototype Evidence**: Photos, videos, working demonstrations
- **Team Credentials**: Relevant experience and expertise
- **Manufacturing Plan**: Clear path from funding to delivery
- **Timeline Transparency**: Realistic development and shipping schedules

## 🔧 REQUIRED SETUP AFTER TRANSFORMATION
**Your app won't work without these environment variables. Get them here:**
### 1. Coinbase Developer Platform Keys
Visit https://portal.cdp.coinbase.com/projects
**Add to your \`.env.local\` file:**
\`\`\`
NEXT_PUBLIC_CDP_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_RECIPIENT_ADDRESS=your_project_wallet_address_here
CDP_API_KEY_NAME=your_api_key_name_here
CDP_API_KEY_PRIVATE_KEY=your_private_key_here
\`\`\`

### 2. Configure Your Domains
**Onramp Configuration:**
https://portal.cdp.coinbase.com/products/onramp
- Add your domain to allowed origins

**Embedded Wallets Configuration:**
https://portal.cdp.coinbase.com/products/embedded-wallets
- Add your domain to allowed origins

### 3. Get Your Keys:
- **Project ID**: From your CDP dashboard
- **Recipient Address**: Your project's crypto wallet address where funding goes
- **API Keys**: Generate from https://portal.cdp.coinbase.com/projects/api-keys

## 💡 CAMPAIGN SUCCESS TIPS
### Pre-Launch:
- Build email list of interested potential backers
- Create compelling visuals and demo videos
- Engage with relevant communities and influencers
- Plan your launch day promotion strategy

### During Campaign:
- Post regular updates on development progress
- Respond quickly to backer questions and feedback
- Share campaign widely across social media
- Consider stretch goals if you exceed funding target

### Post-Funding:
- Maintain transparent communication with backers
- Provide regular development and manufacturing updates
- Deliver rewards on time and as promised
- Build long-term relationships with your backer community

## ✅ FINAL RESULT
A professional Kickstarter-style crowdfunding page with compelling project storytelling, clear reward tiers, progress tracking, and seamless crypto payment integration - perfect for launching innovative products and creative projects!`,

  "linktree-tips.md": `# 🔗 Linktree with Tips - Social Link Hub & Tipping Page

Transform this crypto tipping template into a Linktree-style social hub where creators can showcase their important links AND accept tips from followers. Perfect for content creators, influencers, and digital nomads!

## 📋 WHAT YOU'RE CREATING
A modern Linktree-style page with prominent social links plus an integrated crypto tipping system - combining social discovery with supporter funding in one clean interface.

## 🧱 COMPONENTS TO USE (DO NOT CHANGE THESE)
**New Component Structure:**
- \`<Hero />\` → \`<LinkGrid />\` → \`<CustomAmountInput />\` → \`<Footer />\`
- All payment functionality (\`<WalletSendButton />\`, \`<CDPProvider />\`)
- All \`/components/ui/\` components
- All API routes in \`/app/api/\`

**REMOVE from app/page.tsx:**
- \`<SocialLinks />\` (replace with \`<LinkGrid />\`)
- \`<WishlistItems />\` (replace with \`<CustomAmountInput />\`)

## ✏️ WHAT TO CUSTOMIZE
### 1. Hero Section (\`components/hero.tsx\`)
**Replace these values only:**
- **Image**: Update \`/public/avatar.png\` with creator's professional photo
- **Name**: Change "Jane Doe" to creator's real name/brand
- **Bio**: Update to concise Linktree-style description
- Example: "Hey, I'm Sarah! ✨ Content creator, digital nomad & coffee enthusiast. Follow my journey and support my work below!"
- **Keep**: All styling, layout, and structure

### 2. Social Link Hub (\`components/link-grid.tsx\`)
**Import and use \`<LinkGrid />\` component instead of \`<SocialLinks />\`:**
\`\`\`typescript
// In app/page.tsx, replace <SocialLinks /> with:
<LinkGrid links={[
  {
    name: "YouTube",
    href: "https://youtube.com/@yourchannel",
    description: "Daily tech tutorials & reviews",
    followers: "25.3K"
  },
  {
    name: "Instagram",
    href: "https://instagram.com/yourusername",
    description: "Behind-the-scenes content",
    followers: "12.8K"
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourusername",
    description: "Tech thoughts & quick updates"
  },
  {
    name: "Website",
    href: "https://yourwebsite.com",
    description: "Portfolio & latest projects"
  },
  {
    name: "Newsletter",
    href: "https://yourlink.com",
    description: "Weekly insights & tips"
  }
]} />
\`\`\`

### 3. Tipping Section (\`components/custom-amount-input.tsx\`)
**Import and use \`<CustomAmountInput />\` component instead of \`<WishlistItems />\`:**
\`\`\`typescript
// In app/page.tsx, replace <WishlistItems /> with:
<CustomAmountInput
  recipientAddress={process.env.NEXT_PUBLIC_RECIPIENT_ADDRESS || "0xRecipientAddressHere"}
  suggestedAmounts={[5, 10, 25, 50]}
  title="Support My Work 💜"
  description="Choose an amount to tip or enter your own"
  showMessage={true}
/>
\`\`\`

### 4. Footer (\`components/footer.tsx\`)
**Update text only:**
- Change to creator's name and year
- Add main platform link
- Keep minimal and clean

## 🎨 STYLING CUSTOMIZATION (COLORS ONLY)
### Modern Linktree Color Palette
Apply these colors by updating CSS variables and Tailwind classes:**Option 1 - Light Gradient Theme:**
- Primary: \`#667eea\` to \`#764ba2\` (purple gradient)
- Secondary: \`#ffffff\` (white background)
- Cards: \`#ffffff\` with \`shadow-lg\`
- Text: \`#374151\` (dark gray)
- Accents: Platform brand colors**Option 2 - Clean Minimal:**
- Primary: \`#f093fb\` to \`#f5576c\` (pink gradient)
- Secondary: \`#f8f9fa\` (light gray background)
- Cards: \`#ffffff\` with subtle shadows
- Text: \`#212529\` (near black)**Theme Switch from Dark to Light:**
- Change \`bg-[#222222]\` to \`bg-white\` or \`bg-gray-50\`
- Update text colors from \`text-white\` to \`text-gray-900\`
- Change card backgrounds to light themes
- Maintain platform brand colors for links

## ⚠️ WHAT NOT TO CHANGE
- Any component structure or file organization
- \`<WalletSendButton />\` functionality inside \`<CustomAmountInput />\`
- \`<CDPProvider />\` configuration
- Payment processing logic
- API routes (\`/app/api/onramp/\`)
- Authentication flows
- Component imports/exports

## 🚫 REMOVE THIS COMPONENT
Delete \`<PromptBlock />\` from \`app/page.tsx\` - this is just for development.

## 📸 IMAGES TO ADD
Add these images to \`/public/\` folder:
- \`avatar.png\` - Creator's professional photo (square, 200x200px+)
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: \`query="professional portrait of a content creator, square"\`
- Platform-specific icons if needed (optional - component has built-in icons)
  - **Image Tip:** If you need custom icons not provided by \`react-icons\`, you can use stock icons or generate them with AI. For AI generation, use a prompt like: \`query="minimalist YouTube icon, vector"\`
- Keep images under 1MB each

## 📱 MOBILE-FIRST DESIGN
This template is primarily used on mobile:
- Ensure all links are thumb-friendly (minimum 44px height)
- Test touch interactions on link cards
- Verify tipping flow works smoothly on mobile
- Ensure text remains readable at all screen sizes

## 🔧 REQUIRED SETUP AFTER TRANSFORMATION
**Your app won't work without these environment variables. Get them here:**
### 1. Coinbase Developer Platform Keys
Visit https://portal.cdp.coinbase.com/projects
**Add to your \`.env.local\` file:**
\`\`\`
NEXT_PUBLIC_CDP_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_RECIPIENT_ADDRESS=your_wallet_address_here
CDP_API_KEY_NAME=your_api_key_name_here
CDP_API_KEY_PRIVATE_KEY=your_private_key_here
\`\`\`

### 2. Configure Your Domains
**Onramp Configuration:**
https://portal.cdp.coinbase.com/products/onramp
- Add your domain to allowed origins

**Embedded Wallets Configuration:**
https://portal.cdp.coinbase.com/products/embedded-wallets
- Add your domain to allowed origins

### 3. Get Your Keys:
- **Project ID**: From your CDP dashboard
- **Recipient Address**: Your crypto wallet address where tips go
- **API Keys**: Generate from https://portal.cdp.coinbase.com/projects/api-keys

## ✅ FINAL RESULT
A modern Linktree-style page with prominent social links and integrated crypto tipping - perfect for creators who want to showcase their platforms while accepting supporter tips!`
};

export function PromptBlock() {
  const [copiedPrompt, setCopiedPrompt] = useState<number | null>(null);

  const handleCopy = async (filePath: string, index: number) => {
    try {
      // Extract filename from filePath (e.g., "/prompts/fund-my-craft.md" -> "fund-my-craft.md")
      const filename = filePath.split('/').pop();
      
      if (filename && promptContents[filename]) {
        await navigator.clipboard.writeText(promptContents[filename]);
        setCopiedPrompt(index);
        setTimeout(() => setCopiedPrompt(null), 2000);
      } else {
        console.error('Prompt content not found for:', filename);
      }
    } catch (error) {
      console.error('Error copying prompt:', error);
    }
  };

  return (
    <div className="mt-8 p-6 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl">
      <h2 className="text-lg font-semibold text-center text-white">Remix this Page</h2>
      <p className="text-sm text-center text-gray-300 mt-1 mb-6">
        Copy a prompt and paste it into v0 to transform this template.
      </p>
      <div className="space-y-3">
        {prompts.map((prompt, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl"
          >
            <p className="flex-grow text-sm text-gray-300 font-mono">
              {prompt.label}
            </p>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleCopy(prompt.filePath, index)}
              className="text-gray-400 hover:text-white hover:bg-white/20 rounded-lg"
            >
              {copiedPrompt === index ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
