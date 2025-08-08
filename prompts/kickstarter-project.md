# 🚀 Kickstarter Project Crowdfunding - Innovation & Creative Projects

Transform this crypto tipping template into a Kickstarter-style project crowdfunding page for innovative products, creative projects, or business ventures. Perfect for entrepreneurs, inventors, and creators launching new products or ideas!

## 📋 WHAT YOU'RE CREATING
A professional crowdfunding page that showcases your project, builds excitement, and offers reward tiers to backers using cryptocurrency payments - just like Kickstarter but with crypto!

## 🧱 COMPONENTS TO USE (DO NOT CHANGE THESE)
**Component Structure:**
- `<Hero />` → `<StorySection />` + `<ProgressBar />` → `<WishlistItems />` (as reward tiers) → `<Footer />`
- All payment functionality (`<WalletSendButton />`, `<CDPProvider />`)
- All `/components/ui/` components
- All API routes in `/app/api/`

**REMOVE from app/page.tsx:**
- `<SocialLinks />` (replace with project story)
- Keep `<WishlistItems />` (perfect for reward tiers!)

## ✏️ WHAT TO CUSTOMIZE
### 1. Hero Section (`components/hero.tsx`)
**Replace these values only:**
- **Image**: Update `/public/avatar.png` with project logo or product mockup
- **Name**: Change "Jane Doe" to project title (e.g., "EcoSmart Water Bottle")
- **Bio**: Create compelling project tagline and brief description
- Example: "The world's first self-cleaning water bottle with smart hydration tracking. Revolutionary UV-C technology meets sleek design. Launching March 2024!"
- **Keep**: All styling, layout, and structure

### 2. Project Story Section (`components/story-section.tsx`)
**Import and use `<StorySection />` component instead of `<SocialLinks />`:**
\`\`\`typescript
// In app/page.tsx, replace <SocialLinks /> with:
<StorySection
  title="The Innovation"
  content={`Every day, millions of people drink from bottles that harbor harmful bacteria, even after washing. Traditional cleaning methods miss 40% of germs that cause illness and affect taste.
Our team of engineers and designers spent 3 years developing the EcoSmart Bottle - the first water bottle with integrated UV-C LED technology that eliminates 99.9% of bacteria in just 60 seconds.
But we didn't stop there. The EcoSmart Bottle connects to your phone, tracks your hydration, reminds you to drink water, and even monitors water quality. It's not just a bottle - it's your personal hydration coach.
We've completed working prototypes, secured manufacturing partnerships, and filed for patents. Now we need your support to bring this game-changing product to market and revolutionize how the world stays hydrated.`}
  imageUrl="/product-demo.jpg"
  imageAlt="EcoSmart Water Bottle with UV-C cleaning cycle active"
/>
\`\`\`

### 3. Progress Tracking (`components/progress-bar.tsx`)
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

### 4. Reward Tiers (`lib/wishlist.ts`)
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

### 5. Footer (`components/footer.tsx`)
**Update with project information:**
- Project creator/company name and year
- Contact information for questions
- Links to patents, certifications, manufacturing details
- Shipping and delivery policies

## 🎨 STYLING CUSTOMIZATION (COLORS ONLY)
### Innovation & Trust Color Palette
Apply these colors by updating CSS variables and Tailwind classes:**Option 1 - Tech Innovation:**
- Primary: `#2563eb` (blue-600) for trust and technology
- Secondary: `#7c3aed` (violet-600) for innovation and creativity
- Accent: `#ea580c` (orange-600) for CTAs and excitement
- Background: `#ffffff` (white) or `#f9fafb` (gray-50)**Option 2 - Modern Professional:**
- Primary: `#059669` (emerald-600) for growth and success
- Secondary: `#dc2626` (red-600) for urgency and energy
- Accent: `#7c3aed` (violet-600) for premium feel
- Background: `#f8fafc` (slate-50)**Theme Switch to Light:**
- Change `bg-[#222222]` to `bg-white` or `bg-gray-50`
- Update all text colors from `text-white` to `text-gray-900`
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
    <div className={`bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 mb-6 ${className}`}>
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
Delete `<PromptBlock />` from `app/page.tsx` - this is just for development.

## 📸 IMAGES TO ADD
Add these images to `/public/` folder:
- `avatar.png` - Project logo or product hero image (square, 200x200px+)
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: `query="futuristic product logo for a smart water bottle"` or `query="sleek product mockup of a new tech gadget"`
- `product-demo.jpg` - Story section image showing product in action (1200x600px+)
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: `query="EcoSmart Water Bottle with UV-C cleaning cycle active, glowing blue light"`
- `reward-*.jpg` - Images for each reward tier showing what backers get
  - **Image Tip:** For each reward tier, you can use a stock image or generate one with AI.
    - For `reward-early-bird.jpg`: `query="minimalist image representing an early bird special, with a small product icon"`
    - For `reward-standard.jpg`: `query="standard product packaging for a smart water bottle"`
    - For `reward-deluxe.jpg`: `query="deluxe package for a smart water bottle, including premium accessories"`
    - For `reward-founder.jpg`: `query="limited edition engraved smart water bottle with a founder certificate"`
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
**Add to your `.env.local` file:**
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
A professional Kickstarter-style crowdfunding page with compelling project storytelling, clear reward tiers, progress tracking, and seamless crypto payment integration - perfect for launching innovative products and creative projects!
