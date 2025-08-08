# 🔗 Linktree with Tips - Social Link Hub

Transform this template into a Linktree-style page where users can tip creators while accessing their important links. The focus shifts from specific items to highlighted social links with an open-amount tipping system.

## STRUCTURE TO MAINTAIN
- Keep the existing component structure: Hero → SocialLinks → Custom Tip Section → Footer
- Use existing components from /components/ui/ folder
- Replace WishlistItems with a custom tip input section
- Keep all crypto wallet and payment functionality intact

## HERO SECTION (components/hero.tsx)
- Replace avatar with creator's professional photo (update /public/avatar.png)
- Change name to the creator's name/brand
- Update bio to be concise and engaging (e.g., "Hey, I'm [Name]. Content creator, podcaster & digital nomad. Follow my journey and support my work!")
- Keep it short and punchy - Linktree style

## SOCIAL LINKS (components/social-links.tsx)
**MAJOR ENHANCEMENT NEEDED:**
- Make social links the PRIMARY focus - larger, more prominent
- Add more link types: YouTube, TikTok, Instagram, Twitter, Website, Newsletter, Shop, etc.
- Style links as prominent buttons/cards rather than small icons
- Each link should be a full-width card with:
  - Platform icon
  - Platform name
  - Brief description (e.g., "Daily tech tips & tutorials")
  - Follower count or engagement metric (optional)
- Use gradient backgrounds or brand colors for each platform
- Add hover effects and animations

## TIPPING SECTION (Replace WishlistItems)
**REPLACE lib/wishlist.ts functionality with:**
- Remove fixed-price items completely
- Create a custom tip input section with:
  - "Support my work" heading
  - Custom amount input field (user enters any amount)
  - Suggested tip amounts as quick buttons ($5, $10, $25, $50)
  - Personal message input (optional)
  - Single "Send Tip" button that uses the wallet functionality
- Style as a prominent card section between social links and footer

## COLOR PALETTE & STYLING
- Primary: Modern gradients (#667eea to #764ba2) or (#f093fb to #f5576c)
- Secondary: Clean whites and light grays (#ffffff, #f8f9fa)
- Accents: Platform brand colors (Instagram pink, Twitter blue, etc.)
- Background: Light theme preferred (#ffffff or #f8f9fa) - opposite of current dark theme
- Cards: Clean white cards with subtle shadows and rounded corners
- Typography: Modern, clean fonts - consider Inter or Poppins

## SOCIAL LINKS STYLING DETAILS
- Each social platform gets its brand color:
  - Instagram: Linear gradient (#E4405F to #9B59B6)
  - Twitter/X: #1DA1F2 or black for X
  - YouTube: #FF0000
  - TikTok: #000000 with accent of #ff0050
  - Website: Custom brand color
  - Newsletter: #FF6B35 or custom
- Full-width buttons with left-aligned icon and text
- Include subtle animations (hover effects, slight scale)

## FOOTER (components/footer.tsx)
- Minimal footer with creator's branding
- Include copyright and "Powered by [Your Brand]" if desired
- Keep it clean and unobtrusive

## WHAT NOT TO TOUCH
- Do NOT modify any wallet functionality in components/wallet-send-button.tsx
- Do NOT change onramp functionality in components/onramp-button.tsx
- Do NOT alter API routes in app/api/
- Do NOT modify CDP provider or authentication logic
- Do NOT change the payment processing functions

## IMPORTANT NOTES
- Remove the <PromptBlock /> component from the final result
- Convert from dark theme to light theme for modern Linktree feel
- Ensure responsive design works perfectly on mobile (Linktree's main usage)
- Social links should be the star of the show
- Tipping should feel natural and non-intrusive
- Test that wallet connections and payments still work with custom amounts

## COMPONENT MODIFICATIONS NEEDED
1. **Enhance SocialLinks component** - make it the primary focus with larger, more prominent styling
2. **Replace WishlistItems** with a custom tip input component
3. **Update color scheme** from dark to light theme
4. **Add input validation** for custom tip amounts
5. **Ensure mobile-first responsive design**

## REQUIRED ENVIRONMENT SETUP
After transformation, the user must configure these environment variables:
1. **NEXT_PUBLIC_CDP_PROJECT_ID** - Get this from https://portal.cdp.coinbase.com/projects (your Coinbase Developer project ID)
2. **NEXT_PUBLIC_RECIPIENT_ADDRESS** - Your wallet address where you want to receive tips
3. **CDP_API_KEY_NAME** and **CDP_API_KEY_PRIVATE_KEY** - Get these from https://portal.cdp.coinbase.com/projects/api-keys
4. **Domain Configuration:**
   - Configure your domain at: https://portal.cdp.coinbase.com/products/onramp
   - And also at: https://portal.cdp.coinbase.com/products/embedded-wallets

The app will not function without these environment variables properly set.

Create a modern, clean Linktree-style page that puts social links front and center while providing an elegant way for supporters to send tips of any amount.
