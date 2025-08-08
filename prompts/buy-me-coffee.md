# ☕ Buy Me a Coffee - Creator Support Page

Transform this crypto tipping template into a classic "Buy Me a Coffee" style support page with predefined payment tiers ($1, $5, $10, $15) where supporters can quickly tip creators for their content and work. Perfect for content creators, writers, developers, and artists!

## 📋 WHAT YOU'RE CREATING
A warm, coffee-shop inspired support page where fans can buy you virtual coffee as a simple way to show appreciation for your work using cryptocurrency payments.

## 🧱 COMPONENTS TO USE (DO NOT CHANGE THESE)
**Component Structure:**
- `<Hero />` → `<SocialLinks />` → `<WishlistItems />` (as coffee tiers) → `<Footer />`
- All payment functionality (`<WalletSendButton />`, `<CDPProvider />`)
- All `/components/ui/` components
- All API routes in `/app/api/`

**Keep Everything:**
- Perfect existing structure - just customize content!
- `<WishlistItems />` component works perfectly for coffee tiers

## ✏️ WHAT TO CUSTOMIZE
### 1. Hero Section (`components/hero.tsx`)
**Replace these values only:**
- **Image**: Update `/public/avatar.png` with your friendly, approachable photo
- **Name**: Change "Jane Doe" to your real name
- **Bio**: Create warm, coffee-themed greeting
- Example: "Hey, I'm Alex! ☕ I create daily coding tutorials and write about web development. If my content helps you learn something new, consider buying me a coffee to keep the creativity flowing!"
- **Keep**: All styling, layout, and structure

### 2. Social Links (`components/social-links.tsx`)
**Update links only:**
- Change URLs to your real social accounts and content platforms
- Keep the same styling and icons
- Consider: YouTube, GitHub, Twitter, Blog, Portfolio

### 3. Coffee Tiers (`lib/wishlist.ts`)
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

### 4. Footer (`components/footer.tsx`)
**Update with coffee-themed messaging:**
- "Powered by coffee and community ☕"
- Links to your main content platforms
- Thank you message to supporters

## 🎨 STYLING CUSTOMIZATION (COLORS ONLY)
### Coffee Shop Color Palette
Apply these warm, cozy colors by updating CSS variables and Tailwind classes:**Option 1 - Classic Coffee:**
- Primary: `#8B4513` (saddle brown) for rich coffee tones
- Secondary: `#D2691E` (chocolate) for warmth
- Accent: `#CD853F` (peru) for highlights
- Background: `#FFF8DC` (cornsilk) or `#F5F5F5` (white smoke)**Option 2 - Modern Café:**
- Primary: `#6F4E37` (coffee) for sophisticated brown
- Secondary: `#DEB887` (burlywood) for cream tones
- Accent: `#D2691E` (chocolate) for CTAs
- Background: `#FAEBD7` (antique white)**Theme Switch to Light & Cozy:**
- Change `bg-[#222222]` to coffee shop backgrounds
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
    <div className={`bg-amber-50 border border-amber-200 rounded-3xl p-6 mb-6 text-center ${className}`}>
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-3xl">☕</span>
        <span className="text-2xl font-bold text-amber-800">{totalCoffees}</span>
      </div>
      <p className="text-amber-700 text-sm font-medium">
        {monthlyGoal ? `${totalCoffees}/${monthlyGoal} coffees this month` : 'Total coffees received'}
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
- `<WalletSendButton />` functionality inside coffee tiers
- `<CDPProvider />` configuration
- Payment processing logic
- API routes (`/app/api/onramp/`)
- Authentication flows
- Component imports/exports

## 🚫 REMOVE THIS COMPONENT
Delete `<PromptBlock />` from `app/page.tsx` - this is just for development.

## 📸 IMAGES TO ADD
Add these coffee-themed images to `/public/` folder:
- `avatar.png` - Your friendly, approachable photo (square, 200x200px+)
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: `query="friendly approachable person for creator profile"`
- `coffee-espresso.jpg` - Espresso cup image
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: `query="close-up of a single espresso shot in a small cup"`
- `coffee-cappuccino.jpg` - Cappuccino with latte art
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: `query="cappuccino with beautiful latte art on a wooden table"`
- `coffee-premium.jpg` - Fancy coffee setup
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: `query="gourmet coffee setup with pour-over and fresh beans"`
- `coffee-pastry.jpg` - Coffee with pastry/croissant
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: `query="coffee cup next to a delicious croissant on a cafe table"`
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
**Add to your `.env.local` file:**
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
A warm, inviting "Buy Me Coffee" page with fixed pricing tiers, coffee shop aesthetics, and seamless crypto payments - perfect for creators who want simple, recurring support from their community!
