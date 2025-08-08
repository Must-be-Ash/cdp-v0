import { PromptFormData } from './prompt-schemas';

interface GeneratePromptParams {
  templateId: string;
  formData: Record<string, any>;
}

export function generateCustomPrompt({ templateId, formData }: GeneratePromptParams): string {
  const baseInstructions = getBaseInstructions();
  
  switch (templateId) {
    case 'linktree-tips':
      return generateLinktreePrompt(formData);
    case 'kickstarter-project':
      return generateKickstarterPrompt(formData);
    case 'fan-wishlist':
      return generateWishlistPrompt(formData);
    case 'buy-me-coffee':
      return generateCoffeePrompt(formData);
    case 'gofundme-personal':
      return generateGoFundMePrompt(formData);
    case 'charity-donation':
      return generateCharityPrompt(formData);
    case 'fund-my-craft':
      return generateFundMyCraftPrompt(formData);
    default:
      return `Error: Unknown template ID: ${templateId}`;
  }
}

function getBaseInstructions(): string {
  return `
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
- **Recipient Address**: Your crypto wallet address where payments go
- **API Keys**: Generate from https://portal.cdp.coinbase.com/projects/api-keys

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
`;
}

function generateLinktreePrompt(formData: Record<string, any>): string {
  const { name, bio, socialLinks, tipAmounts, style, colorPalette } = formData;
  
  const socialLinksCode = socialLinks?.map((link: any) => `
  {
    name: "${link.platform}",
    href: "${link.url}",
    description: "${link.description || link.title || ''}"${link.title ? `,\n    followers: "${link.title}"` : ''}
  }`).join(',') || '';

  const tipAmountsArray = Array.isArray(tipAmounts) ? tipAmounts.join(',') : (tipAmounts || '5,10,25,50');

  return `# 🔗 Linktree with Tips - Social Link Hub & Tipping Page

Transform this crypto tipping template into a Linktree-style social hub with your personal information and links.

## 📋 YOUR PERSONAL INFORMATION
**Name/Brand:** ${name || 'Your Name'}
**Bio:** ${bio || 'Content creator and digital enthusiast'}
**Style Preference:** ${style || 'Modern'}
**Color Palette:** ${colorPalette || 'Purple Gradient'}

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
- **Image**: Update \`/public/avatar.png\` with your photo
- **Name**: Change "Jane Doe" to "${name || 'Your Name'}"
- **Bio**: Update to: "${bio || 'Content creator and digital enthusiast'}"
- **Keep**: All styling, layout, and structure

### 2. Social Link Hub (\`components/link-grid.tsx\`)
**Import and use \`<LinkGrid />\` component instead of \`<SocialLinks />\`:**
\`\`\`typescript
// In app/page.tsx, replace <SocialLinks /> with:
<LinkGrid links={[${socialLinksCode}
]} />
\`\`\`

### 3. Tipping Section (\`components/custom-amount-input.tsx\`)
**Import and use \`<CustomAmountInput />\` component instead of \`<WishlistItems />\`:**
\`\`\`typescript
// In app/page.tsx, replace <WishlistItems /> with:
<CustomAmountInput
  recipientAddress={process.env.NEXT_PUBLIC_RECIPIENT_ADDRESS || "0xRecipientAddressHere"}
  suggestedAmounts={[${tipAmountsArray}]}
  title="Support My Work 💜"
  description="Choose an amount to tip or enter your own"
  showMessage={true}
/>
\`\`\`

### 4. Footer (\`components/footer.tsx\`)
**Update text only:**
- Change to "${name || 'Your Name'}" and current year
- Keep minimal and clean

## 🎨 STYLING CUSTOMIZATION
### ${colorPalette || 'Modern Linktree'} Color Palette
Apply these colors by updating CSS variables and Tailwind classes:
- Change \`bg-[#222222]\` to bright, welcoming backgrounds
- Update text colors to modern, readable schemes  
- Use ${style?.toLowerCase() || 'modern'} gradients and themes
- Apply ${colorPalette?.toLowerCase() || 'purple gradient'} colors to buttons and accents

## 📱 MOBILE-FIRST DESIGN
This template is primarily used on mobile:
- Ensure all links are thumb-friendly (minimum 44px height)
- Test touch interactions on link cards
- Verify tipping flow works smoothly on mobile
- Ensure text remains readable at all screen sizes

${getBaseInstructions()}

## ✅ FINAL RESULT
A personalized Linktree-style page showcasing your social links with integrated crypto tipping functionality!`;
}

function generateKickstarterPrompt(formData: Record<string, any>): string {
  const { projectName, name, projectDescription, teamInfo, fundingGoal, timeline, rewardTiers, videoUrl, images, style, colorPalette } = formData;
  
  const rewardTiersCode = rewardTiers?.map((tier: any, index: number) => `
  {
    id: ${index + 1},
    name: "${tier.name}",
    price: ${tier.price},
    imageUrl: "/reward-tier-${index + 1}.jpg",
  }`).join(',') || '';

  const rewardDescriptions = rewardTiers?.map((tier: any, index: number) => 
    `- **$${tier.price} - ${tier.name}** - "${tier.description}"${tier.quantity ? ` (Limited to ${tier.quantity})` : ''}`
  ).join('\n') || '';

  return `# 🚀 Kickstarter Project Crowdfunding - ${projectName || 'Innovation Project'}

Transform this template into a crowdfunding page for your innovative project with crypto payments.

## 📋 YOUR PROJECT INFORMATION
**Project Name:** ${projectName || 'Your Project'}
**Creator/Team:** ${name || 'Your Name'}
**Funding Goal:** $${fundingGoal || '50,000'}
**Style:** ${style || 'Tech Innovation'}
**Color Theme:** ${colorPalette || 'Blue Tech'}

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
- **Name**: Change "Jane Doe" to "${projectName || 'Your Project'}"
- **Bio**: "${projectDescription || 'Revolutionary product launching soon'}"
- **Keep**: All styling, layout, and structure

### 2. Project Story Section (\`components/story-section.tsx\`)
**Import and use \`<StorySection />\` component instead of \`<SocialLinks />\`:**
\`\`\`typescript
// In app/page.tsx, replace <SocialLinks /> with:
<StorySection
  title="The Innovation"
  content={\`${projectDescription || 'Your project description goes here...'}

${teamInfo ? `About the team: ${teamInfo}` : ''}

${timeline ? `Timeline: ${timeline}` : ''}\`}
  imageUrl="/product-demo.jpg"
  imageAlt="${projectName || 'Project'} demonstration"
/>
\`\`\`

### 3. Progress Tracking (\`components/progress-bar.tsx\`)
**Add below StorySection to show crowdfunding progress:**
\`\`\`typescript
// Add after <StorySection />:
<ProgressBar
  current={0}
  goal={${fundingGoal || 75000}}
  title="Crowdfunding Progress"
  showStats={true}
/>
\`\`\`

### 4. Reward Tiers (\`lib/wishlist.ts\`)
**Replace the items array with your reward tiers:**
\`\`\`typescript
export const wishlistItems: WishlistItemData[] = [${rewardTiersCode}
];
\`\`\`

**Your Reward Tiers:**
${rewardDescriptions}

${videoUrl ? `### 5. Video Demo
Add your demo video: ${videoUrl}` : ''}

### 6. Footer (\`components/footer.tsx\`)
**Update with project information:**
- ${name || 'Creator name'} and current year
- Contact information for questions
- Shipping and delivery policies

## 🎨 STYLING CUSTOMIZATION
### ${colorPalette || 'Innovation'} Color Palette
Apply ${style?.toLowerCase() || 'modern'} styling with ${colorPalette?.toLowerCase() || 'tech'} colors:
- Change \`bg-[#222222]\` to professional backgrounds
- Use ${colorPalette?.toLowerCase() || 'blue'} colors for trust and innovation
- Apply modern gradients to progress bars and reward cards

${getBaseInstructions()}

## 📸 IMAGES TO ADD
Add these images to \`/public/\` folder:
- \`avatar.png\` - Project logo or product hero image (square, 200x200px+)
- \`product-demo.jpg\` - Product in action (1200x600px+)
${rewardTiers?.map((_: any, index: number) => `- \`reward-tier-${index + 1}.jpg\` - Reward tier ${index + 1} image`).join('\n') || ''}
${images?.map((img: string, index: number) => `- Additional image ${index + 1}: ${img}`).join('\n') || ''}

## ✅ FINAL RESULT  
A professional Kickstarter-style crowdfunding page for ${projectName || 'your project'} with compelling storytelling, clear reward tiers, and seamless crypto payment integration!`;
}

function generateWishlistPrompt(formData: Record<string, any>): string {
  const { name, bio, wishlistItems, personalityTone, style, colorPalette } = formData;
  
  const wishlistCode = wishlistItems?.map((item: any, index: number) => `
  {
    id: ${index + 1},
    name: "${item.name}",
    price: ${item.price},
    imageUrl: "/wishlist-${index + 1}.jpg",
  }`).join(',') || '';

  const itemDescriptions = wishlistItems?.map((item: any) => 
    `- **${item.name} ($${item.price})**: "${item.description}"`
  ).join('\n') || '';

  return `# 🎁 Fan Wishlist - Dreams & Experiences Page

Transform this template into your personal fan-supported wishlist where followers can fund your dreams and goals.

## 📋 YOUR PERSONAL INFORMATION  
**Name:** ${name || 'Your Name'}
**About:** ${bio || 'Content creator sharing my journey'}
**Personality:** ${personalityTone || 'Excited'}
**Style:** ${style || 'Vibrant'}
**Colors:** ${colorPalette || 'Rainbow'}

## 🧱 COMPONENTS TO USE (DO NOT CHANGE THESE)
**Component Structure:**
- \`<Hero />\` → \`<SocialLinks />\` → \`<WishlistItems />\` → \`<Footer />\`
- All payment functionality (\`<WalletSendButton />\`, \`<CDPProvider />\`)
- All \`/components/ui/\` components
- All API routes in \`/app/api/\`

**Perfect Existing Structure:**
- This is essentially the current demo but with your specific content!
- \`<WishlistItems />\` component is already perfect for this use case

## ✏️ WHAT TO CUSTOMIZE
### 1. Hero Section (\`components/hero.tsx\`)
**Replace these values only:**
- **Image**: Update \`/public/avatar.png\` with your engaging creator photo
- **Name**: Change "Jane Doe" to "${name || 'Your Name'}"
- **Bio**: "${bio || 'Content creator sharing my journey and dreams with amazing supporters!'}"
- **Keep**: All styling, layout, and structure

### 2. Wishlist Items (\`lib/wishlist.ts\`)
**Replace the items array with your wishlist:**
\`\`\`typescript
export const wishlistItems: WishlistItemData[] = [${wishlistCode}
];
\`\`\`

**Your Wishlist Items:**
${itemDescriptions}

### 3. Footer (\`components/footer.tsx\`)
**Update with your information:**
- ${name || 'Your name'} and current year
- Links to main content platforms  
- Thank you message: "Powered by amazing fans 💖"

## 🎨 STYLING CUSTOMIZATION
### ${colorPalette || 'Vibrant'} & ${personalityTone || 'Energetic'} Color Palette
Apply ${style?.toLowerCase() || 'vibrant'} colors with ${personalityTone?.toLowerCase() || 'excited'} energy:
- Change \`bg-[#222222]\` to bright, welcoming backgrounds
- Use ${colorPalette?.toLowerCase() || 'colorful'} gradients and themes
- Apply energetic colors to progress indicators
- Make it feel ${personalityTone?.toLowerCase() || 'exciting'} and community-focused

${getBaseInstructions()}

## 📸 IMAGES TO ADD
Add these wishlist images to \`/public/\` folder:
- \`avatar.png\` - Your creator photo looking excited and approachable (square, 200x200px+)
${wishlistItems?.map((_: any, index: number) => `- \`wishlist-${index + 1}.jpg\` - Image for ${wishlistItems[index]?.name || `item ${index + 1}`}`).join('\n') || ''}

## 💭 FAN PSYCHOLOGY & COMMUNITY
Your ${personalityTone?.toLowerCase() || 'excited'} personality will help fans feel:
- **Shared Success**: Part of your creator journey
- **Visible Impact**: See their support improve your content quality
- **Personal Connection**: Direct impact on your life and happiness
- **Community Pride**: Feel good about contributing to dreams

${getBaseInstructions()}

## ✅ FINAL RESULT
An exciting fan wishlist page where your community can directly support ${name || 'your'} dreams and goals, creating a stronger connection between you and your supporters!`;
}

function generateCoffeePrompt(formData: Record<string, any>): string {
  const { name, bio, coffeeMessage, coffeeGoal, style, colorPalette } = formData;

  return `# ☕ Buy Me a Coffee - Creator Support Page

Transform this template into a coffee-themed creator support page with your personal touch.

## 📋 YOUR INFORMATION
**Name:** ${name || 'Your Name'}
**Story:** ${bio || 'Content creator who runs on coffee'}
**Coffee Message:** ${coffeeMessage || 'Coffee fuels my creativity and late-night work sessions'}
**Monthly Goal:** ${coffeeGoal || 'No specific goal - just grateful for any support'}
**Café Style:** ${style || 'Cozy'}
**Colors:** ${colorPalette || 'Classic Coffee'}

## 🧱 COMPONENTS TO USE (DO NOT CHANGE THESE)
**Component Structure:**
- \`<Hero />\` → \`<SocialLinks />\` → \`<WishlistItems />\` (as coffee tiers) → \`<Footer />\`
- All payment functionality (\`<WalletSendButton />\`, \`<CDPProvider />\`)
- All \`/components/ui/\` components
- All API routes in \`/app/api/\`

## ✏️ WHAT TO CUSTOMIZE
### 1. Hero Section (\`components/hero.tsx\`)
**Replace these values only:**
- **Image**: Update \`/public/avatar.png\` with your friendly photo
- **Name**: Change "Jane Doe" to "${name || 'Your Name'}"
- **Bio**: "${bio || 'Content creator who runs on coffee'} ☕ ${coffeeMessage || 'Every coffee helps fuel my creativity!'}"
- **Keep**: All styling, layout, and structure

### 2. Coffee Tiers (\`lib/wishlist.ts\`)
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

### 3. Footer (\`components/footer.tsx\`)
**Update with coffee-themed messaging:**
- "Powered by coffee and community ☕"
- Links to your main content platforms
- Thank you message to supporters: "Thanks for keeping ${name || 'me'} caffeinated!"

## 🎨 STYLING CUSTOMIZATION
### ${colorPalette || 'Coffee Shop'} Color Palette
Apply ${style?.toLowerCase() || 'cozy'} coffee shop aesthetics:
- Primary: Warm coffee browns and rich tones
- Secondary: Cream and café colors
- Background: ${colorPalette === 'Classic Coffee' ? 'Warm whites and light browns' : 'Modern café backgrounds'}
- Make it feel ${style?.toLowerCase() || 'cozy'} and welcoming

${coffeeGoal ? `## ☕ COFFEE GOAL
${coffeeGoal}

Consider adding a coffee counter component to show progress toward your monthly goal.` : ''}

${getBaseInstructions()}

## 📸 IMAGES TO ADD
Add these coffee-themed images to \`/public/\` folder:
- \`avatar.png\` - Your friendly, approachable photo (square, 200x200px+)
- \`coffee-espresso.jpg\` - Espresso shot image
- \`coffee-cappuccino.jpg\` - Cappuccino with latte art
- \`coffee-premium.jpg\` - Premium coffee setup
- \`coffee-pastry.jpg\` - Coffee with pastry/croissant

## 🧠 COFFEE PSYCHOLOGY
Why "Buy Me Coffee" works for ${name || 'you'}:
- **Universal ritual**: Everyone understands coffee culture
- **Low commitment**: Small amounts feel comfortable
- **Personal connection**: Coffee as shared daily experience
- **Appreciation token**: Simple way to say "thank you"

## ✅ FINAL RESULT
A warm, inviting "Buy Me Coffee" page for ${name || 'you'} with coffee shop aesthetics and seamless crypto payments!`;
}

function generateGoFundMePrompt(formData: Record<string, any>): string {
  const { name, story, fundingGoal, urgency, images, updates, style, colorPalette } = formData;

  return `# 💝 GoFundMe Personal Fundraising - ${name || 'Personal Campaign'}

Transform this template into a personal fundraising page for your important cause.

## 📋 YOUR CAMPAIGN INFORMATION
**Name/Family:** ${name || 'Your Name'}
**Funding Goal:** $${fundingGoal || '25,000'}
**Style:** ${style || 'Trustworthy'}
**Colors:** ${colorPalette || 'Trust Blue'}
${urgency ? `**Timeline:** ${urgency}` : ''}

## YOUR STORY
${story || 'Share your story here - what happened, why you need support, and how funds will help...'}

## 🧱 COMPONENTS TO USE (DO NOT CHANGE THESE)
**Component Structure:**
- \`<Hero />\` → \`<StorySection />\` + \`<ProgressBar />\` → \`<CustomAmountInput />\` → \`<Footer />\`
- All payment functionality (\`<WalletSendButton />\`, \`<CDPProvider />\`)
- All \`/components/ui/\` components
- All API routes in \`/app/api/\`

**REMOVE from app/page.tsx:**
- \`<SocialLinks />\` (replace with story section)
- \`<WishlistItems />\` (replace with \`<CustomAmountInput />\`)

## ✏️ WHAT TO CUSTOMIZE
### 1. Hero Section (\`components/hero.tsx\`)
**Replace these values only:**
- **Image**: Update \`/public/avatar.png\` with personal/family photo
- **Name**: Change "Jane Doe" to "${name || 'Your Name'}"
- **Bio**: Brief, emotional summary of your situation and need for support
- **Keep**: All styling, layout, and structure

### 2. Story Section (\`components/story-section.tsx\`)
**Import and use \`<StorySection />\` component instead of \`<SocialLinks />\`:**
\`\`\`typescript
// In app/page.tsx, replace <SocialLinks /> with:
<StorySection
  title="Our Story"
  content={\`${story || 'Your detailed story goes here...'}\`}
  imageUrl="/family-photo.jpg"
  imageAlt="${name || 'Family'} photo"
/>
\`\`\`

### 3. Progress Tracking (\`components/progress-bar.tsx\`)
**Add below StorySection:**
\`\`\`typescript
// Add after <StorySection />:
<ProgressBar
  current={0}
  goal={${fundingGoal || 25000}}
  title="Fundraising Progress"
  showStats={true}
/>
\`\`\`

### 4. Donation Section (\`components/custom-amount-input.tsx\`)
**Replace \`<WishlistItems />\` with:**
\`\`\`typescript
<CustomAmountInput
  recipientAddress={process.env.NEXT_PUBLIC_RECIPIENT_ADDRESS || "0xRecipientAddressHere"}
  suggestedAmounts={[25, 50, 100, 250]}
  title="Support ${name || 'Our Family'}"
  description="Choose an amount or enter a custom donation"
  showMessage={true}
/>
\`\`\`

### 5. Footer (\`components/footer.tsx\`)
**Update with personal information:**
- Campaign organizer name and relationship to beneficiary
- Contact information for questions
- Privacy and fund usage commitments

## 🎨 STYLING CUSTOMIZATION
### ${colorPalette || 'Trust-Building'} Color Palette
Apply ${style?.toLowerCase() || 'trustworthy'} colors:
- Primary: ${colorPalette?.includes('Blue') ? 'Trust-building blues' : colorPalette?.includes('Green') ? 'Hopeful greens' : 'Warm, supportive tones'}
- Background: Clean, accessible light themes
- Focus on readability and emotional connection
- Use ${style?.toLowerCase() || 'professional'} styling throughout

${urgency ? `## ⏰ TIMELINE
${urgency}

This adds appropriate urgency without being pushy.` : ''}

${updates ? `## 📋 PLANNED UPDATES
${updates}

Consider adding regular progress updates to build trust and maintain engagement.` : ''}

${getBaseInstructions()}

## 📸 IMAGES TO ADD  
Add these images to \`/public/\` folder:
- \`avatar.png\` - Personal or family photo (square, 200x200px+)
- \`family-photo.jpg\` - Story section image (1200x600px+)
${images?.map((img: string, index: number) => `- Additional image ${index + 1}: Use meaningful photos that support your story`).join('\n') || ''}

## 💭 PSYCHOLOGICAL ELEMENTS
### Building Trust & Connection:
- **Transparency**: Be clear about fund usage
- **Personal Details**: Make your situation relatable  
- **Gratitude**: Express genuine appreciation
- **Community**: Show this affects more than just you

### ${style || 'Trustworthy'} Approach:
- Focus on ${style?.toLowerCase() === 'warm' ? 'emotional connection and community support' : style?.toLowerCase() === 'personal' ? 'intimate storytelling and individual impact' : 'professional presentation and clear communication'}
- Use ${colorPalette?.toLowerCase() || 'trust-building'} visual elements
- Maintain hope and positivity while being honest about challenges

## 💡 IMPORTANT CONSIDERATIONS
### Privacy & Safety:
- Only share information you're comfortable being public
- Consider privacy implications of crypto transactions
- Verify with family/friends before sharing their information

### Legal & Taxes:
- Check local regulations about fundraising  
- Consider tax implications of receiving donations
- Keep records of all donations received

## ✅ FINAL RESULT
A deeply personal, trustworthy GoFundMe-style fundraising page for ${name || 'your campaign'} that tells your story compellingly and makes it easy for people to help using crypto donations!`;
}

function generateCharityPrompt(formData: Record<string, any>): string {
  const { organizationName, name, causeDescription, impactDetails, transparencyInfo, images, donationAmounts, style, colorPalette } = formData;

  const donationAmountsArray = Array.isArray(donationAmounts) ? donationAmounts.join(',') : (donationAmounts || '25,50,100,250');

  return `# 🎯 Charity & Donation Hub - ${organizationName || 'Charitable Organization'}

Transform this template into a comprehensive donation page for your charitable cause.

## 📋 ORGANIZATION INFORMATION
**Organization:** ${organizationName || 'Your Organization'}
**Campaign Leader:** ${name || 'Campaign Organizer'}
**Style:** ${style || 'Professional'}
**Brand Colors:** ${colorPalette || 'Trust Blue'}

## CAUSE DESCRIPTION
${causeDescription || 'Describe your charitable cause, the problem you\'re solving, and why it matters...'}

## IMPACT DETAILS  
${impactDetails || 'Explain how donations make a difference, what specific outcomes you achieve, and the communities you serve...'}

## 🧱 COMPONENTS TO USE (DO NOT CHANGE THESE)
**Component Structure:**
- \`<Hero />\` → \`<StorySection />\` + \`<ProgressBar />\` → \`<CustomAmountInput />\` → \`<Footer />\`
- All payment functionality (\`<WalletSendButton />\`, \`<CDPProvider />\`)
- All \`/components/ui/\` components
- All API routes in \`/app/api/\`

**REMOVE from app/page.tsx:**
- \`<SocialLinks />\` (replace with cause story)
- \`<WishlistItems />\` (replace with \`<CustomAmountInput />\`)

## ✏️ WHAT TO CUSTOMIZE
### 1. Hero Section (\`components/hero.tsx\`)
**Replace these values only:**
- **Image**: Update \`/public/avatar.png\` with organization logo or cause image
- **Name**: Change "Jane Doe" to "${organizationName || 'Your Organization'}"
- **Bio**: "${causeDescription || 'Making a difference in communities worldwide through sustainable charitable work'}"
- **Keep**: All styling, layout, and structure

### 2. Story Section (\`components/story-section.tsx\`)
**Import and use \`<StorySection />\` component instead of \`<SocialLinks />\`:**
\`\`\`typescript
// In app/page.tsx, replace <SocialLinks /> with:
<StorySection
  title="Our Mission"
  content={\`${causeDescription || 'Our cause description...'}

${impactDetails || 'Impact details and how donations help...'}

${transparencyInfo || 'Information about our transparency and how funds are used...'}\`}
  imageUrl="/cause-image.jpg"
  imageAlt="${organizationName || 'Organization'} impact photo"
/>
\`\`\`

### 3. Progress Tracking (\`components/progress-bar.tsx\`)
**Add below StorySection:**
\`\`\`typescript
// Add after <StorySection />:
<ProgressBar
  current={0}
  goal={50000}
  title="Fundraising Progress"
  showStats={true}
/>
\`\`\`

### 4. Donation Section (\`components/custom-amount-input.tsx\`)
**Replace \`<WishlistItems />\` with:**
\`\`\`typescript
<CustomAmountInput
  recipientAddress={process.env.NEXT_PUBLIC_RECIPIENT_ADDRESS || "0xOrganizationAddressHere"}
  suggestedAmounts={[${donationAmountsArray}]}
  title="Make a Donation"
  description="Choose an amount or enter a custom donation"
  showMessage={true}
/>
\`\`\`

### 5. Footer (\`components/footer.tsx\`)
**Update with organization information:**
- ${organizationName || 'Organization name'} and year
- Contact information for questions
- Links to transparency reports and certifications
- Tax-deductible status if applicable

## 🎨 STYLING CUSTOMIZATION
### ${colorPalette || 'Trust-Building'} Color Palette
Apply ${style?.toLowerCase() || 'professional'} styling:
- Primary: ${colorPalette?.includes('Blue') ? 'Trust-building blues for reliability' : colorPalette?.includes('Green') ? 'Growth and hope greens' : 'Professional, trustworthy colors'}
- Background: Clean, accessible light themes
- Focus on ${style?.toLowerCase() || 'professional'} presentation
- Use colors that build confidence in your organization

## 🛡️ TRUST ELEMENTS TO INCLUDE
### Transparency Features:
- Clear impact metrics and progress tracking
- Information about how funds are used (${transparencyInfo || 'Add your transparency information'})
- Organization credentials and registration info
- Contact information for questions: ${name ? `Contact ${name} for questions` : 'Provide contact information'}

### Social Proof:
- Previous impact achievements
- Number of donors/supporters  
- Testimonials from beneficiaries
- Organization history and experience

${getBaseInstructions()}

## 📸 IMAGES TO ADD
Add these images to \`/public/\` folder:
- \`avatar.png\` - Organization logo or cause hero image (square, 200x200px+)
- \`cause-image.jpg\` - Story section image showing impact (1200x600px+)
${images?.map((img: string, index: number) => `- Impact image ${index + 1}: ${img}`).join('\n') || ''}

## 💡 ADDITIONAL RECOMMENDATIONS  
### Legal Compliance:
- Ensure compliance with local fundraising regulations
- Include appropriate disclaimers about cryptocurrency donations
- Consider tax implications for donors
- Maintain transparent records for regulatory purposes

### User Experience:
- Make the impact of each donation level crystal clear
- Use specific, concrete examples of what donations achieve
- Show progress toward goals to create momentum
- Keep the donation process simple and trustworthy

## ✅ FINAL RESULT
A professional, trustworthy charity donation page for ${organizationName || 'your organization'} with compelling storytelling, progress tracking, and seamless crypto donation capabilities!`;
}

function generateFundMyCraftPrompt(formData: Record<string, any>): string {
  const { name, bio, craft, equipmentNeeds, contentType, platforms, style, colorPalette } = formData;
  
  const equipmentCode = equipmentNeeds?.map((item: any, index: number) => `
  {
    id: ${index + 1},
    name: "${item.name}",
    price: ${item.price},
    imageUrl: "/equipment-${index + 1}.jpg",
  }`).join(',') || '';

  const equipmentDescriptions = equipmentNeeds?.map((item: any) => 
    `- **${item.name} ($${item.price})**: "${item.description}"`
  ).join('\n') || '';

  const platformsList = typeof platforms === 'string' ? platforms : (Array.isArray(platforms) ? platforms.join(', ') : 'Your platforms');

  return `# 🎨 Fund My Craft - Creator Support & Equipment Page

Transform this template into a creator support page for your specific craft and equipment needs.

## 📋 CREATOR INFORMATION
**Name:** ${name || 'Your Name'}
**Craft/Medium:** ${craft || 'Digital Creation'}
**Content Type:** ${contentType || 'Creative Content'}
**Platforms:** ${platformsList}
**Style:** ${style || 'Artistic'}
**Colors:** ${colorPalette || 'Creative Rainbow'}

## ABOUT YOUR WORK
${bio || 'Content creator sharing knowledge and passion for my craft'}

## 🧱 COMPONENTS TO USE (DO NOT CHANGE THESE)
Keep these exact components and structure:
- \`<Hero />\` → \`<SocialLinks />\` → \`<WishlistItems />\` → \`<Footer />\`
- All payment functionality (\`<WalletSendButton />\`, \`<CDPProvider />\`)
- All \`/components/ui/\` components
- All API routes in \`/app/api/\`

## ✏️ WHAT TO CUSTOMIZE
### 1. Hero Section (\`components/hero.tsx\`)
**Replace these values only:**
- **Image**: Update \`/public/avatar.png\` with your creator photo
- **Name**: Change "Jane Doe" to "${name || 'Your Name'}"
- **Bio**: "${bio || `I create ${contentType || 'content'} about ${craft || 'my craft'}. Help me upgrade my gear so I can create even better ${contentType || 'content'} for you!`}"
- **Keep**: All styling, layout, and structure

### 2. Social Links (\`components/social-links.tsx\`)
**Update links only:**
- Change URLs to your real social accounts: ${platformsList}
- Keep the exact same icons and styling
- Focus on platforms where you create ${contentType || 'content'}

### 3. Equipment List (\`lib/wishlist.ts\`)
**Replace the items array with your equipment needs:**
\`\`\`typescript
export const wishlistItems: WishlistItemData[] = [${equipmentCode}
];
\`\`\`

**Your Equipment Needs:**
${equipmentDescriptions}

### 4. Footer (\`components/footer.tsx\`)
**Update text only:**
- Change to "${name || 'Your Name'}" and current year
- Add link to main platform
- Keep all styling and structure

## 🎨 STYLING CUSTOMIZATION
### ${colorPalette || 'Creative'} Color Palette
Apply ${style?.toLowerCase() || 'artistic'} styling:
- Primary: ${colorPalette?.includes('Rainbow') ? 'Multi-color creative themes' : colorPalette?.includes('Purple') ? 'Purple and pink creative tones' : 'Colors that match your creative style'}
- Background: ${style?.toLowerCase() === 'vintage' ? 'Vintage-inspired backgrounds' : style?.toLowerCase() === 'modern' ? 'Clean, modern backgrounds' : 'Creative, inspiring backgrounds'}
- Make it feel ${style?.toLowerCase() || 'artistic'} and inspiring
- Use gradients and effects that match ${craft || 'your craft'}

## 🎯 EQUIPMENT CATEGORIES
Your ${craft || 'craft'} equipment falls into these categories:
${equipmentNeeds?.length ? equipmentNeeds.map((item: any) => `- **${item.name}** - Essential for ${contentType || 'content creation'}`).join('\n') : '- Professional equipment for creating quality content\n- Tools that improve production value\n- Gear that enables new content types'}

## 📱 PLATFORMS INTEGRATION
Show how new equipment will improve content on:
${platformsList.split(',').map((platform: string) => `- **${platform.trim()}** - Better ${contentType || 'content'} quality and production`).join('\n')}

${getBaseInstructions()}

## 📸 IMAGES TO ADD
Add these images to \`/public/\` folder:
- \`avatar.png\` - Your creator photo (square, 200x200px+)
${equipmentNeeds?.map((_: any, index: number) => `- \`equipment-${index + 1}.jpg\` - ${equipmentNeeds[index]?.name || `Equipment item ${index + 1}`}`).join('\n') || '- Equipment images for each item you need'}

## 💡 CREATOR SUCCESS TIPS
### Content Integration:
- Show how each piece of equipment will improve your ${contentType || 'content'}
- Explain the direct impact on ${craft || 'your creative work'}
- Connect equipment upgrades to better value for your audience
- Thank supporters by showcasing new equipment in use

### Community Building:
- Share equipment unboxing and setup content
- Create behind-the-scenes content showing your improved setup
- Acknowledge supporters when showcasing new equipment
- Use new gear to create exclusive content for supporters

## ✅ FINAL RESULT
A personalized creator funding page where supporters can directly fund specific equipment for ${name || 'your'} ${craft || 'craft'}, helping you create better ${contentType || 'content'} for your community on ${platformsList}!`;
}
