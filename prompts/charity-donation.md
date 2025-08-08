# 🎯 Charity & Donation Hub - Cause Fundraising Page

Transform this crypto tipping template into a comprehensive donation page for charitable causes, nonprofits, or personal fundraising campaigns. Perfect for organizations seeking transparent, global fundraising with crypto payments!

## 📋 WHAT YOU'RE CREATING
A professional donation page that builds trust, shows impact, and makes it easy for supporters to contribute to meaningful causes using cryptocurrency payments.

## 🧱 COMPONENTS TO USE (DO NOT CHANGE THESE)
**Component Structure:**
- `<Hero />` → `<StorySection />` + `<ProgressBar />` → `<CustomAmountInput />` → `<Footer />`
- All payment functionality (`<WalletSendButton />`, `<CDPProvider />`)
- All `/components/ui/` components
- All API routes in `/app/api/`

**REMOVE from app/page.tsx:**
- `<SocialLinks />` (replace with cause-specific content)
- `<WishlistItems />` (replace with `<CustomAmountInput />`)

## ✏️ WHAT TO CUSTOMIZE
### 1. Hero Section (`components/hero.tsx`)
**Replace these values only:**
- **Image**: Update `/public/avatar.png` with organization logo or cause image
- **Name**: Change "Jane Doe" to organization name or cause title
- **Bio**: Update to compelling cause description
- Example: "Help us provide clean water to 1,000 families in rural Kenya. Every donation brings us closer to our goal and transforms lives."
- **Keep**: All styling, layout, and structure

### 2. Story Section (`components/story-section.tsx`)
**Import and use `<StorySection />` component instead of `<SocialLinks />`:**
\`\`\`typescript
// In app/page.tsx, replace <SocialLinks /> with:
<StorySection
  title="Our Mission"
  content={`Clean water is a basic human right, yet millions of people worldwide lack access to safe drinking water.
In rural Kenya, families walk miles every day just to collect water from contaminated sources, leading to preventable diseases and keeping children out of school.
Our organization works directly with local communities to build sustainable water wells, providing immediate relief and long-term solutions.
With your support, we can install 10 new wells this year, serving over 1,000 families and changing lives forever.`}
  imageUrl="/cause-image.jpg"
  imageAlt="Community members gathering around a new water well"
/>
\`\`\`

### 3. Progress Tracking (`components/progress-bar.tsx`)
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

### 4. Donation Section (`components/custom-amount-input.tsx`)
**Import and use `<CustomAmountInput />` component instead of `<WishlistItems />`:**
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

### 5. Footer (`components/footer.tsx`)
**Update with organization information:**
- Organization name and year
- Contact information
- Links to transparency reports
- Tax-deductible status if applicable

## 🎨 STYLING CUSTOMIZATION (COLORS ONLY)
### Trust-Building Color Palette
Apply these colors by updating CSS variables and Tailwind classes:**Option 1 - Professional Trust:**
- Primary: `#1e40af` (blue-800) for trust and reliability
- Secondary: `#059669` (emerald-600) for growth and hope
- Accent: `#ea580c` (orange-600) for donation CTAs
- Background: `#ffffff` (white) or `#f9fafb` (light gray)**Option 2 - Warm Compassion:**
- Primary: `#0f766e` (teal-700) for stability
- Secondary: `#dc2626` (red-600) for urgency/importance
- Accent: `#7c3aed` (violet-600) for impact highlights
- Background: `#f8fafc` (slate-50)**Theme Switch to Light:**
- Change `bg-[#222222]` to `bg-white` or `bg-gray-50`
- Update all text colors from `text-white` to `text-gray-900`
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
- `avatar.png` - Organization logo or cause hero image (square, 200x200px+)
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: `query="organization logo for clean water charity"` or `query="hero image of a community benefiting from clean water"`
- `cause-image.jpg` - Story section image showing impact/beneficiaries (1200x600px+)
  - **Image Tip:** You can use a stock image or generate one with AI. For AI generation, use a prompt like: `query="community members gathering around a new water well in a rural village"`
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
**Add to your `.env.local` file:**
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
A professional, trustworthy charity donation page with progress tracking, compelling storytelling, and seamless crypto donation capabilities - perfect for organizations wanting to expand their global fundraising reach!
