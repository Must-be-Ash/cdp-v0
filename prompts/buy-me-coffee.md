# ☕ Buy Me a Coffee - Creator Support Page

Transform this template into a classic "Buy Me a Coffee" style support page with predefined payment options ($1, $5, $10, $15) where supporters can quickly tip creators for their content and work.

## STRUCTURE TO MAINTAIN
- Keep the existing component structure: Hero → Coffee Message → Coffee Payment Options → Supporter Feed → Footer
- Use existing components from /components/ui/ folder
- Transform WishlistItems into coffee payment tiers with fixed amounts
- Keep all crypto wallet and payment functionality intact

## HERO SECTION (components/hero.tsx)
- Replace avatar with creator's friendly photo (update /public/avatar.png)
- Change name to creator's name
- Create warm, coffee-themed greeting (e.g., "Hey, I'm [Name]! ☕")
- Include brief, friendly bio about their work (e.g., "I create daily tech tutorials and write about productivity. If my content helps you, consider buying me a coffee!")
- Add coffee-related imagery or icons
- Keep the tone casual, warm, and appreciative

## COFFEE STORY SECTION (Transform SocialLinks)
**REPLACE WITH COFFEE-THEMED MESSAGE:**
- **What You Do:** Brief description of your content/work
- **Why Coffee Matters:** "Coffee fuels my late-night coding sessions" or "Every coffee helps me create better content"
- **Community Appreciation:** Thank your supporters and explain how coffee helps
- **Personal Touch:** Share your actual coffee preferences, workspace setup, or creative routine
- **Impact Statement:** "Your coffee support keeps me motivated and caffeinated!"
- Include coffee-related visuals (coffee cup icons, workspace photos)

## COFFEE PAYMENT OPTIONS (Transform WishlistItems)
**REPLACE WITH FIXED COFFEE TIERS:**
- **$1 - "Espresso Shot"** ☕ - "Quick energy boost!"
- **$5 - "Cappuccino"** ☕ - "Perfect morning fuel"
- **$10 - "Premium Coffee"** ☕ - "Gourmet support"
- **$15 - "Coffee & Pastry"** ☕🥐 - "The full café experience"
Each tier should include:
- Coffee-themed icon (different coffee types)
- Playful description of what this "buys"
- Quick one-click payment (no custom amounts needed)
- Thank you message preview
- Cute coffee-related graphics or animations

## COLOR PALETTE & STYLING
- Primary: Warm coffee colors (#8B4513 coffee brown, #D2691E chocolate)
- Secondary: Cream and beige tones (#F5F5DC cream, #FAEBD7 antique white)
- Accents: Cozy café colors (#CD853F peru, #DEB887 burlywood)
- Background: Warm, inviting light theme (#FFF8DC cornsilk, #F5F5F5 white smoke)
- Button colors: Each tier gets a coffee-shade gradient
- Typography: Friendly, rounded fonts that feel warm and approachable

## SUPPORTER FEED SECTION (New addition)
**ADD COFFEE SUPPORTER STREAM:**
- **Recent Supporters:** "Sarah bought you a cappuccino ☕ • 2 hours ago"
- **Coffee Counter:** "23 coffees this month ☕"
- **Supporter Messages:** Optional messages with coffee purchases
- **Coffee Goal:** Monthly coffee target (e.g., "25 coffees this month")
- **Thank You Board:** Rotating appreciation messages
- **Coffee Stats:** Fun metrics like "Total coffees: 156" or "Longest coffee streak: 7 days"

## COFFEE THEME ELEMENTS
- **Visual Coffee Icons:** Different coffee types for each tier
- **Coffee Quotes:** Fun coffee-related sayings and quotes
- **Workspace Photos:** Show your actual coffee setup/workspace
- **Coffee Journey:** Share your coffee preferences and habits
- **Seasonal Themes:** Adapt for different coffee seasons (iced coffee summer, pumpkin spice fall)
- **Coffee Shop Vibe:** Warm, cozy atmosphere like a favorite café

## FOOTER (components/footer.tsx)
- Include creator's social media and content links
- "Powered by coffee and community" type messaging
- Link to creator's main content/work
- Simple coffee-themed footer graphics
- Thank you message to all supporters

## WHAT NOT TO TOUCH
- Do NOT modify any wallet functionality in components/wallet-send-button.tsx
- Do NOT change onramp functionality in components/onramp-button.tsx
- Do NOT alter API routes in app/api/
- Do NOT modify CDP provider or authentication logic
- Do NOT change the payment processing functions

## IMPORTANT NOTES
- Remove the <PromptBlock /> component from the final result
- Focus on simplicity - quick, easy coffee purchases
- Ensure mobile-first responsive design for easy mobile tipping
- Make payment process one-click simple
- Create warm, coffee shop atmosphere
- Test that wallet connections and payments still work with fixed amounts
- Consider adding coffee-related animations or micro-interactions

## COFFEE CULTURE PSYCHOLOGY
- **Ritual Connection:** Coffee as part of daily routine
- **Appreciation Token:** Small way to say thank you
- **Community Building:** Coffee supporters as a special community
- **Casual Support:** Low-pressure way to support creators
- **Instant Gratification:** Quick, satisfying way to help
- **Personal Connection:** Coffee as universal shared experience

## COFFEE TIER PERSONALITY
- **$1 Espresso:** Quick, energetic, for regular supporters
- **$5 Cappuccino:** Thoughtful, standard support level
- **$10 Premium:** Special appreciation, quality support
- **$15 Coffee & Pastry:** Generous, treat-level support

## MOBILE OPTIMIZATION
- Large, thumb-friendly coffee tier buttons
- Swipe-friendly interface for quick selection
- One-tap payment flow
- Coffee emojis and visual feedback
- Simple, clean layout perfect for mobile tipping

## REQUIRED ENVIRONMENT SETUP
After transformation, the user must configure these environment variables:
1. **NEXT_PUBLIC_CDP_PROJECT_ID** - Get this from https://portal.cdp.coinbase.com/projects (your Coinbase Developer project ID)
2. **NEXT_PUBLIC_RECIPIENT_ADDRESS** - Your wallet address where coffee payments will be received
3. **CDP_API_KEY_NAME** and **CDP_API_KEY_PRIVATE_KEY** - Get these from https://portal.cdp.coinbase.com/projects/api-keys
4. **Domain Configuration:**
   - Configure your domain at: https://portal.cdp.coinbase.com/products/onramp
   - And also at: https://portal.cdp.coinbase.com/products/embedded-wallets

The app will not function without these environment variables properly set.

Create a warm, inviting coffee shop atmosphere where supporters can quickly and easily buy you coffee as a simple way to show appreciation for your work.
