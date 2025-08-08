# 🎨 Fund My Craft - Creator Support & Equipment Page

Transform this crypto tipping template into a creator support page where artists, makers, podcasters, and creatives can showcase specific gear, tools, or materials they need supporters to help fund. Perfect for content creators who need equipment upgrades!

## 📋 WHAT YOU'RE CREATING
A one-page funding site where supporters can directly fund specific equipment items for creators - just like the current demo, but customized for your creative needs.

## 🧱 COMPONENTS TO USE (DO NOT CHANGE THESE)
Keep these exact components and structure:
- `<Hero />` → `<SocialLinks />` → `<WishlistItems />` → `<Footer />`
- All payment functionality (`<WalletSendButton />`, `<CDPProvider />`)
- All `/components/ui/` components
- All API routes in `/app/api/`

## ✏️ WHAT TO CUSTOMIZE
### 1. Hero Section (`components/hero.tsx`)
**Replace these values only:**
- **Image**: Update `/public/avatar.png` with creator's photo
- **Name**: Change "Jane Doe" to creator's real name
- **Bio**: Update the description to creator's story
- Example: "Hey, I'm Alex! I create digital art tutorials on YouTube and help aspiring artists learn illustration. Help me upgrade my gear so I can create even better content for you!"
- **Keep**: All styling, layout, and structure

### 2. Social Links (`components/social-links.tsx`)
**Update links only:**
- Change URLs to creator's real social accounts
- Keep the exact same icons and styling
- Consider: YouTube, Instagram, TikTok, Twitter, Behance, etc.

### 3. Equipment List (`lib/wishlist.ts`)
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

### 4. Footer (`components/footer.tsx`)
**Update text only:**
- Change creator name and year
- Add link to main platform
- Keep all styling and structure

## 🎨 STYLING CUSTOMIZATION (COLORS ONLY)
### Creative Color Palette
Apply these colors by updating CSS variables and Tailwind classes:**Option 1 - Artistic Purple:**
- Primary: `#6366f1` (purple-500)
- Secondary: `#ec4899` (pink-500)
- Accent: `#0d9488` (teal-600)
- Background: Keep `#222222` or change to `#1a1a2e`**Option 2 - Warm Creator:**
- Primary: `#f97316` (orange-500)
- Secondary: `#8b5cf6` (violet-500)
- Accent: `#06b6d4` (cyan-500)
- Background: Keep `#222222` or change to `#2d1b3d`**Apply colors to:**
- Button backgrounds and hover states
- Border colors (`border-white/20` → `border-purple-500/20`)
- Gradient backgrounds
- Accent text colors

## ⚠️ WHAT NOT TO CHANGE
- Any component structure or file organization
- `<WalletSendButton />` functionality
- `<CDPProvider />` configuration
- Payment processing logic
- API routes (`/app/api/onramp/`)
- Authentication flows
- Component imports/exports

## 🚫 REMOVE THIS COMPONENT
Delete `<PromptBlock />` from `app/page.tsx` - this is just for development.

## 📸 IMAGES TO ADD
Add these images to `/public/` folder:
- `avatar.png` - Creator's profile photo (square, 200x200px+)
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: `query="professional creator profile picture, square"`
- Equipment images for each wishlist item (500x500px+)
  - **Image Tip:** For each item, you can use a stock image or generate one with AI.
    - For `equipment-mic.jpg`: `query="professional studio microphone on a stand"`
    - For `equipment-camera.jpg`: `query="high-end mirrorless camera with a lens"`
- Keep images under 1MB each

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
- **Recipient Address**: Your crypto wallet address where funds go
- **API Keys**: Generate from https://portal.cdp.coinbase.com/projects/api-keys

## ✅ FINAL RESULT
A personalized creator funding page where supporters can directly fund specific equipment items using crypto payments, customized with your branding and gear list!
