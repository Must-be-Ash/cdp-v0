# 💝 GoFundMe Personal Fundraising - Emergency & Life Events

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

### 2. Personal Story Section (`components/story-section.tsx`)
**Import and use `<StorySection />` component instead of `<SocialLinks />`:**
\`\`\`typescript
// In app/page.tsx, replace <SocialLinks /> with:
<StorySection
  title="Our Story"
  content={`Three months ago, our lives changed forever when Sarah was diagnosed with stage 2 breast cancer. As a single mother of two young children, Sarah has always been the rock of our family. She worked two jobs to support her kids and was always the first to help others in our community.
The diagnosis came suddenly after a routine checkup, and the medical bills are overwhelming. Insurance covers some treatments, but we're facing $35,000 in out-of-pocket costs for specialized treatments, medication, and childcare during recovery.
Sarah is a fighter, and her doctors are optimistic about her treatment plan. With surgery scheduled for next month and chemotherapy starting shortly after, we need our community's help to focus on healing instead of worrying about finances.
Every donation, no matter the size, brings us closer to giving Sarah the best possible chance at recovery and getting back to being the amazing mom and friend we all know and love.`}
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

### 4. Donation Section (`components/custom-amount-input.tsx`)
**Import and use `<CustomAmountInput />` component instead of `<WishlistItems />`:**
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

### 5. Footer (`components/footer.tsx`)
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
- Remove the `<PromptBlock />` component from the final result
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
Add these images to `/public/` folder:
- `avatar.png` - Personal or family photo showing the person in better times (square, 200x200px+)
- `family-photo.jpg` - Story section image showing person with family/friends (1200x600px+)
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
**Add to your `.env.local` file:**
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
A deeply personal, trustworthy GoFundMe-style fundraising page that tells your story compellingly, builds community support, and makes it easy for people to help during your time of need using crypto donations!
