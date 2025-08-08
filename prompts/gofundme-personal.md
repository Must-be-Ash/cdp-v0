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

## WHAT NOT TO TOUCH
- Do NOT modify any wallet functionality in components/wallet-send-button.tsx
- Do NOT change onramp functionality in components/onramp-button.tsx
- Do NOT alter API routes in app/api/
- Do NOT modify CDP provider or authentication logic
- Do NOT change the payment processing functions

## IMPORTANT NOTES
- Remove the <PromptBlock /> component from the final result
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
