# 🎯 Charity & Donation Hub - Cause Fundraising Page

Transform this template into a comprehensive donation page for charitable causes, nonprofits, or personal fundraising campaigns. Focus on impact, transparency, and making donors feel good about contributing.

## STRUCTURE TO MAINTAIN
- Keep the existing component structure: Hero → Impact/Stats Section → Donation Options → Footer
- Use existing components from /components/ui/ folder
- Transform WishlistItems into donation tiers or single donation input
- Keep all crypto wallet and payment functionality intact

## HERO SECTION (components/hero.tsx)
- Replace avatar with organization logo or cause image (update /public/avatar.png)
- Change name to organization name or cause title
- Update bio to compelling cause description (e.g., "Help us provide clean water to 1,000 families in rural Kenya. Every donation brings us closer to our goal.")
- Include urgency or current status ("Only 30 days left" or "68% funded")
- Add emotional connection - tell the story briefly

## IMPACT/STATS SECTION (Replace or enhance SocialLinks)
**TRANSFORM INTO IMPACT METRICS:**
- Show current fundraising progress with visual progress bar
- Display key impact numbers:
  - "$12,450 raised of $25,000 goal"
  - "247 donors so far"
  - "87% to goal"
- Impact metrics specific to cause (e.g., "This funds 50 meals", "Provides clean water for 15 families")
- Use icons and visual elements to make numbers compelling
- Add testimonials or success stories if space allows

## DONATION OPTIONS (Transform WishlistItems)
**OPTION A - Donation Tiers (Recommended):**
Replace wishlist items with meaningful donation levels:
- $25 - "Feeds a family for one day"
- $50 - "Provides school supplies for one child"
- $100 - "Clean water access for one week"
- $250 - "Medical care for one person"
- Custom amount option

**OPTION B - Single Donation Input:**
- Large, prominent donation input section
- Suggested amounts as quick-select buttons
- "Other amount" custom input
- Clear description of what donation will fund
- Immediate impact description

## COLOR PALETTE & STYLING
- Primary: Trust-building colors (Deep blue #1e40af, Forest green #059669)
- Secondary: Clean whites and light grays (#ffffff, #f3f4f6)
- Accents: Warm colors for CTAs (Orange #ea580c, Warm red #dc2626)
- Background: Clean light theme (#ffffff or #f9fafb)
- Progress bars: Gradient fills showing completion
- Cards: Clean design with subtle shadows and clear hierarchy

## VISUAL ELEMENTS
- **Progress Bar:** Prominent visual showing funding progress
- **Impact Icons:** Simple icons representing the cause (water drops, books, medical cross)
- **Trust Signals:** 
  - "100% of donations go to the cause"
  - "Transparent fund usage"
  - Organization credentials or certifications
- **Urgency Indicators:** Countdown timers or "days left" messaging

## SOCIAL PROOF SECTION
Transform social links into:
- Recent donor activity ("John donated $50 2 hours ago")
- Supporter testimonials
- Organization transparency links
- Progress updates and news

## FOOTER (components/footer.tsx)
- Include organization information and contact
- Links to transparency reports, financial statements
- Tax deduction information if applicable
- Privacy policy and terms
- Nonprofit registration numbers if relevant

## WHAT NOT TO TOUCH
- Do NOT modify any wallet functionality in components/wallet-send-button.tsx
- Do NOT change onramp functionality in components/onramp-button.tsx
- Do NOT alter API routes in app/api/
- Do NOT modify CDP provider or authentication logic
- Do NOT change the payment processing functions

## IMPORTANT NOTES
- Remove the <PromptBlock /> component from the final result
- Focus on building trust and emotional connection
- Ensure mobile-first responsive design
- Make donation process as simple as possible
- Include clear impact statements for each donation level
- Test that wallet connections and payments still work
- Consider adding recurring donation options in future iterations

## TRUST & TRANSPARENCY FEATURES
- Clear statement about fee structure
- Information about organization (registration, history)
- Regular updates on fund usage
- Contact information for questions
- Clear refund/cancellation policy

## PSYCHOLOGICAL ELEMENTS
- Use social proof ("Join 247 other donors")
- Show impact immediately ("Your $25 provides...")
- Create urgency without being pushy
- Thank donors prominently
- Make the donation feel meaningful, not transactional

## REQUIRED ENVIRONMENT SETUP
After transformation, the user must configure these environment variables:
1. **NEXT_PUBLIC_CDP_PROJECT_ID** - Get this from https://portal.cdp.coinbase.com/projects (your Coinbase Developer project ID)
2. **NEXT_PUBLIC_RECIPIENT_ADDRESS** - Organization's wallet address where donations will be received
3. **CDP_API_KEY_NAME** and **CDP_API_KEY_PRIVATE_KEY** - Get these from https://portal.cdp.coinbase.com/projects/api-keys
4. **Domain Configuration:**
   - Configure your domain at: https://portal.cdp.coinbase.com/products/onramp
   - And also at: https://portal.cdp.coinbase.com/products/embedded-wallets

The app will not function without these environment variables properly set.

Create a trustworthy, impactful donation page that makes contributors feel confident about their donation and clearly shows the positive impact they're making.
