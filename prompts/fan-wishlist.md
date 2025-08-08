# 🎁 Fan Wishlist - Dreams & Experiences Page

Transform this template into a fan-supported wishlist where followers can buy items, experiences, or equipment for their favorite creator. Perfect for streamers, content creators, and influencers who want to share their dreams and goals with their community.

## STRUCTURE TO MAINTAIN
- Keep the existing component structure: Hero → Wishlist Story → Wishlist Items → Community Support → Footer
- Use existing components from /components/ui/ folder
- Enhance WishlistItems with more detailed item presentations
- Keep all crypto wallet and payment functionality intact

## HERO SECTION (components/hero.tsx)
- Replace avatar with creator's engaging photo (update /public/avatar.png)
- Change name to creator's name/brand
- Create enthusiastic, dream-focused greeting (e.g., "Help me level up my content! 🚀")
- Include aspirational bio about goals and dreams (e.g., "I'm building an amazing setup to create better content for you! Every item brings me closer to my streaming dreams.")
- Add excitement and gratitude for community support
- Include current progress toward goals

## WISHLIST STORY SECTION (Transform SocialLinks)
**REPLACE WITH WISHLIST NARRATIVE:**
- **Your Journey:** Share your content creation story and where you're headed
- **Community Impact:** How better equipment/experiences improve content for fans
- **Dreams & Goals:** Paint a picture of what you're building toward
- **Gratitude:** Express appreciation for community support
- **Behind the Scenes:** Show current setup vs. dream setup
- **Personal Connection:** Share why specific items matter to your content
- Include progress photos, mood boards, or vision boards

## WISHLIST ITEMS (Enhance existing structure)
**EXPAND CURRENT WISHLIST WITH DIVERSE CATEGORIES:**
### Equipment & Tech ($50-$2000)
- **Streaming Equipment:** Better camera, microphone, lighting setup
- **Gaming Gear:** Mechanical keyboard, gaming mouse, controller
- **Content Creation:** Video editing software, graphics tablet, ring light
- **Audio:** Studio headphones, audio interface, boom arm
### Experiences & Travel ($100-$1500)
- **Content Trips:** "Tokyo food tour for travel vlogs - $800"
- **Learning:** "Photography workshop - $250"
- **Events:** "Gaming convention ticket - $150"
- **Adventures:** "Skydiving experience video - $300"
### Personal & Lifestyle ($25-$500)
- **Books:** Industry-related books, inspiration, learning materials
- **Comfort:** Ergonomic chair, desk setup, workspace organization
- **Health:** Fitness equipment, wellness items for better content creation
- **Hobbies:** Items that fuel creativity and inspiration
### Novelty & Fun ($10-$200)
- **Collectibles:** Figures, art, fandom items for background/content
- **Games:** New releases for gaming content
- **Props:** Items for skits, videos, themed content
- **Merchandise:** Items from favorite brands, creators, shows
Each item should include:
- High-quality image and detailed description
- Why this item matters for content creation
- How it will benefit the community/audience
- Estimated delivery timeline
- Progress bar if partially funded
- Thank you message for supporters

## COLOR PALETTE & STYLING
- Primary: Exciting, energetic colors (#6366f1 indigo, #8b5cf6 violet)
- Secondary: Clean and modern (#f8fafc, #e2e8f0)
- Accents: Bright, optimistic colors (#10b981 emerald, #f59e0b amber)
- Background: Fresh, clean light theme (#ffffff, #f9fafb)
- Progress bars: Gradient fills showing funding progress
- Category colors: Different accent colors for equipment, experiences, personal items

## COMMUNITY FEATURES (New enhancement)
**ADD FAN INTERACTION ELEMENTS:**
- **Recent Supporters:** "Alex just bought you the wireless microphone! 🎤"
- **Community Goals:** "Help me reach 10 items this month!"
- **Supporter Leaderboard:** Most supportive fans (optional, tasteful)
- **Thank You Wall:** Photos/videos using gifted items
- **Wish Progress:** Visual progress toward completing the wishlist
- **Community Polls:** Let fans vote on next priority items

## WISHLIST CATEGORIES & PSYCHOLOGY
- **Essential vs. Dream:** Mix of practical needs and aspirational wants
- **Community Benefit:** Show how each item improves content for fans
- **Personal Touch:** Share stories about why you want specific items
- **Accessibility:** Range of price points so everyone can contribute
- **Transparency:** Clear about how items will be used
- **Gratitude:** Prominent thanks and recognition for supporters

## VISUAL ENHANCEMENTS
- **Item Galleries:** Multiple photos showing items in use
- **Progress Visualization:** Creative progress bars and completion graphics
- **Category Icons:** Visual organization of different item types
- **Mood Boards:** Show how items fit into overall vision
- **Before/After:** Current setup vs. dream setup comparisons
- **Usage Examples:** Show items being used in content creation

## FOOTER (components/footer.tsx)
- Include creator's content links and social media
- Link to content that showcases purchased items
- Community guidelines for wishlist support
- Thank you message to all supporters
- Links to creator's main content platforms

## WHAT NOT TO TOUCH
- Do NOT modify any wallet functionality in components/wallet-send-button.tsx
- Do NOT change onramp functionality in components/onramp-button.tsx
- Do NOT alter API routes in app/api/
- Do NOT modify CDP provider or authentication logic
- Do NOT change the payment processing functions

## IMPORTANT NOTES
- Remove the <PromptBlock /> component from the final result
- Focus on community and shared dreams
- Ensure mobile-first responsive design
- Make items feel exciting and worthwhile
- Show clear impact of community support
- Test that wallet connections and payments still work
- Consider adding item priority indicators

## FAN PSYCHOLOGY ELEMENTS
- **Shared Success:** Fans feel part of the creator's journey
- **Visible Impact:** See their support improve content quality
- **Community Pride:** Feel good about contributing to dreams
- **Personal Connection:** Direct impact on creator's life and work
- **Status Recognition:** Acknowledgment for being supportive
- **Investment in Content:** Better equipment = better content for them

## ITEM PRESENTATION BEST PRACTICES
- **Clear Photos:** High-quality images of desired items
- **Detailed Descriptions:** Why you want it, how you'll use it
- **Price Transparency:** Clear pricing and shipping considerations
- **Timeline:** When you hope to get each item
- **Usage Promise:** How you'll showcase items in content
- **Community Impact:** How this benefits your audience

## WISHLIST STRATEGIES
- **Mix Price Points:** $10 novelty items to $2000 equipment
- **Seasonal Updates:** Refresh wishlist regularly with new goals
- **Milestone Rewards:** Special content when big items are funded
- **Community Input:** Let fans suggest items they'd like to see
- **Progress Sharing:** Regular updates on wishlist achievements
- **Gratitude Content:** Dedicated thank-you content for supporters

## REQUIRED ENVIRONMENT SETUP
After transformation, the user must configure these environment variables:
1. **NEXT_PUBLIC_CDP_PROJECT_ID** - Get this from https://portal.cdp.coinbase.com/projects (your Coinbase Developer project ID)
2. **NEXT_PUBLIC_RECIPIENT_ADDRESS** - Your wallet address where wishlist payments will be received
3. **CDP_API_KEY_NAME** and **CDP_API_KEY_PRIVATE_KEY** - Get these from https://portal.cdp.coinbase.com/projects/api-keys
4. **Domain Configuration:**
   - Configure your domain at: https://portal.cdp.coinbase.com/products/onramp
   - And also at: https://portal.cdp.coinbase.com/products/embedded-wallets

The app will not function without these environment variables properly set.

Create an exciting, community-driven wishlist that makes fans feel like they're directly contributing to your success and the improvement of content they love.
