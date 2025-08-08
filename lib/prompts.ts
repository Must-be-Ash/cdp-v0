// 💬 V0 Transformation Prompts Index
// Individual comprehensive prompts are stored in the /prompts directory
// Each prompt file contains detailed instructions for transforming this template

export interface PromptData {
  label: string;
  description: string;
  filePath: string;
  category: 'creator' | 'donation' | 'personal' | 'business';
}

export const prompts: PromptData[] = [
  {
    label: "🎨 Fund My Craft - Creator Support Page",
    description: "Transform into a creator support page for artists and makers to showcase items they need funding for",
    filePath: "/prompts/fund-my-craft.md",
    category: 'creator'
  },
  {
    label: "🔗 Linktree with Tips - Social Link Hub",
    description: "Linktree-style page with prominent social links and custom-amount tipping functionality",
    filePath: "/prompts/linktree-tips.md",
    category: 'creator'
  },
  {
    label: "🎯 Charity & Donation Hub",
    description: "Comprehensive donation page for charitable causes, nonprofits, and fundraising campaigns",
    filePath: "/prompts/charity-donation.md",
    category: 'donation'
  },
  {
    label: "💝 GoFundMe Personal Fundraising",
    description: "Personal fundraising page for medical expenses, emergencies, life events, and personal dreams",
    filePath: "/prompts/gofundme-personal.md",
    category: 'personal'
  },
  {
    label: "🚀 Kickstarter Project Crowdfunding",
    description: "Project crowdfunding page for innovative products, creative projects, and business ventures",
    filePath: "/prompts/kickstarter-project.md",
    category: 'business'
  },
  {
    label: "☕ Buy Me a Coffee Page",
    description: "Classic coffee support page with predefined payment options ($1, $5, $10, $15)",
    filePath: "/prompts/buy-me-coffee.md",
    category: 'creator'
  },
  {
    label: "🎁 Fan Wishlist - Dreams & Experiences",
    description: "Community-supported wishlist for equipment, experiences, and personal items",
    filePath: "/prompts/fan-wishlist.md",
    category: 'creator'
  },
];

// Note: The actual prompt content is now stored in individual markdown files
// in the /prompts directory. This provides better organization and readability.
