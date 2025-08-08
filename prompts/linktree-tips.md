# 🔗 Linktree with Tips - Social Link Hub & Tipping Page

Transform this crypto tipping template into a Linktree-style social hub where creators can showcase their important links AND accept tips from followers. Perfect for content creators, influencers, and digital nomads!

## 📋 WHAT YOU'RE CREATING
A modern Linktree-style page with prominent social links plus an integrated crypto tipping system - combining social discovery with supporter funding in one clean interface.

## 🧱 COMPONENTS TO USE (DO NOT CHANGE THESE)
**New Component Structure:**
- `<Hero />` → `<LinkGrid />` → `<CustomAmountInput />` → `<Footer />`
- All payment functionality (`<WalletSendButton />`, `<CDPProvider />`)
- All `/components/ui/` components
- All API routes in `/app/api/`

**REMOVE from app/page.tsx:**
- `<SocialLinks />` (replace with `<LinkGrid />`)
- `<WishlistItems />` (replace with `<CustomAmountInput />`)

## ✏️ WHAT TO CUSTOMIZE
### 1. Hero Section (`components/hero.tsx`)
**Replace these values only:**
- **Image**: Update `/public/avatar.png` with creator's professional photo
- **Name**: Change "Jane Doe" to creator's real name/brand
- **Bio**: Update to concise Linktree-style description
- Example: "Hey, I'm Sarah! ✨ Content creator, digital nomad & coffee enthusiast. Follow my journey and support my work below!"
- **Keep**: All styling, layout, and structure

### 2. Social Link Hub (`components/link-grid.tsx`)
**Import and use `<LinkGrid />` component instead of `<SocialLinks />`:**
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

### 3. Tipping Section (`components/custom-amount-input.tsx`)
**Import and use `<CustomAmountInput />` component instead of `<WishlistItems />`:**
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

### 4. Footer (`components/footer.tsx`)
**Update text only:**
- Change to creator's name and year
- Add main platform link
- Keep minimal and clean

## 🎨 STYLING CUSTOMIZATION (COLORS ONLY)
### Modern Linktree Color Palette
Apply these colors by updating CSS variables and Tailwind classes:**Option 1 - Light Gradient Theme:**
- Primary: `#667eea` to `#764ba2` (purple gradient)
- Secondary: `#ffffff` (white background)
- Cards: `#ffffff` with `shadow-lg`
- Text: `#374151` (dark gray)
- Accents: Platform brand colors**Option 2 - Clean Minimal:**
- Primary: `#f093fb` to `#f5576c` (pink gradient)
- Secondary: `#f8f9fa` (light gray background)
- Cards: `#ffffff` with subtle shadows
- Text: `#212529` (near black)**Theme Switch from Dark to Light:**
- Change `bg-[#222222]` to `bg-white` or `bg-gray-50`
- Update text colors from `text-white` to `text-gray-900`
- Change card backgrounds to light themes
- Maintain platform brand colors for links

## ⚠️ WHAT NOT TO CHANGE
- Any component structure or file organization
- `<WalletSendButton />` functionality inside `<CustomAmountInput />`
- `<CDPProvider />` configuration
- Payment processing logic
- API routes (`/app/api/onramp/`)
- Authentication flows
- Component imports/exports

## 🚫 REMOVE THIS COMPONENT
Delete `<PromptBlock />` from `app/page.tsx` - this is just for development.

## 📸 IMAGES TO ADD
Add these images to `/public/` folder:
- `avatar.png` - Creator's professional photo (square, 200x200px+)
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: `query="professional portrait of a content creator, square"`
- Platform-specific icons if needed (optional - component has built-in icons)
  - **Image Tip:** If you need custom icons not provided by `react-icons`, you can use stock icons or generate them with AI. For AI generation, use a prompt like: `query="minimalist YouTube icon, vector"`
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
- **Recipient Address**: Your crypto wallet address where tips go
- **API Keys**: Generate from https://portal.cdp.coinbase.com/projects/api-keys

## ✅ FINAL RESULT
A modern Linktree-style page with prominent social links and integrated crypto tipping - perfect for creators who want to showcase their platforms while accepting supporter tips!
