# 🎨 Fund My Craft - Creator Support Page

Transform this template into a comprehensive "Fund My Craft" page for creators, artists, and makers to showcase items they need funding for.

## STRUCTURE TO MAINTAIN
- Keep the existing component structure: Hero → SocialLinks → WishlistItems → Footer
- Use existing components from /components/ui/ folder
- Maintain the WishlistItem and WishlistItems component functionality
- Keep all crypto wallet and payment functionality intact

## HERO SECTION (components/hero.tsx)
- Replace avatar with a creator's profile photo (update /public/avatar.png)
- Change name to the creator's name
- Update bio to describe their craft (e.g., "Hey, I'm [Name]. I'm a ceramic artist creating handmade pottery. Support my craft by helping me get the tools and materials I need.")

## WISHLIST ITEMS (lib/wishlist.ts)
Replace current items with craft-specific supplies:
- Art supplies (brushes, paints, canvases) - $15-50 range
- Tools (pottery wheel, kiln time, specialized equipment) - $100-500 range
- Materials (clay, glazes, wood, fabric) - $25-150 range
- Workshop/class fees - $75-200 range
Update images in /public/ folder with relevant craft item photos

## COLOR PALETTE & STYLING
- Primary: Warm earth tones (#8B4513 brown, #D2691E chocolate)
- Secondary: Soft creams and beiges (#F5F5DC, #FAEBD7)
- Accents: Artistic colors like deep teal (#008080) or warm orange (#FF7F50)
- Background: Keep dark theme but soften to charcoal (#2F2F2F) instead of pure black
- Maintain current card styling but add subtle artistic borders

## SOCIAL LINKS (components/social-links.tsx)
- Update to creator-relevant platforms (Instagram, Etsy, Portfolio site)
- Use artistic icons or keep minimal

## FOOTER (components/footer.tsx)
- Customize with creator's information
- Add links to their shop, portfolio, or social media

## WHAT NOT TO TOUCH
- Do NOT modify any wallet functionality in components/wallet-send-button.tsx
- Do NOT change onramp functionality in components/onramp-button.tsx
- Do NOT alter API routes in app/api/
- Do NOT modify CDP provider or authentication logic
- Do NOT change the payment processing functions

## IMPORTANT NOTES
- Remove the <PromptBlock /> component from the final result
- Keep all existing crypto/Web3 functionality intact
- Ensure responsive design is maintained
- Test that wallet connections and payments still work

## REQUIRED ENVIRONMENT SETUP
After transformation, the user must configure these environment variables:
1. **NEXT_PUBLIC_CDP_PROJECT_ID** - Get this from https://portal.cdp.coinbase.com/projects (your Coinbase Developer project ID)
2. **NEXT_PUBLIC_RECIPIENT_ADDRESS** - Your wallet address where you want to receive funds
3. **CDP_API_KEY_NAME** and **CDP_API_KEY_PRIVATE_KEY** - Get these from https://portal.cdp.coinbase.com/projects/api-keys
4. **Domain Configuration:**
   - Configure your domain at: https://portal.cdp.coinbase.com/products/onramp
   - And also at: https://portal.cdp.coinbase.com/products/embedded-wallets

The app will not function without these environment variables properly set.

Create a warm, inviting page that makes supporters feel good about funding creative work while maintaining all the existing technical functionality.
