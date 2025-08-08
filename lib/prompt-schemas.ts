// Form schema definitions for each prompt type
export interface BaseFormData {
  name: string;
  bio: string;
  style?: string;
  colorPalette?: string;
  design?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  title?: string;
  description?: string;
}

export interface WishlistItem {
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
}

export interface RewardTier {
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  limited?: boolean;
  quantity?: number;
}

// Linktree Form Schema
export interface LinktreeFormData extends BaseFormData {
  socialLinks: SocialLink[];
  tipAmounts: number[];
}

// Kickstarter Form Schema  
export interface KickstarterFormData extends BaseFormData {
  projectName: string;
  projectDescription: string;
  teamInfo: string;
  fundingGoal: number;
  timeline: string;
  rewardTiers: RewardTier[];
  videoUrl?: string;
  images?: string[];
}

// Wishlist Form Schema
export interface WishlistFormData extends BaseFormData {
  wishlistItems: WishlistItem[];
  personalityTone: string;
}

// Buy Me Coffee Form Schema
export interface CoffeeFormData extends BaseFormData {
  coffeeMessage: string;
  coffeeGoal?: string;
}

// GoFundMe Form Schema
export interface GoFundMeFormData extends BaseFormData {
  story: string;
  fundingGoal: number;
  urgency: string;
  images: string[];
  updates?: string;
}

// Charity Form Schema
export interface CharityFormData extends BaseFormData {
  organizationName: string;
  causeDescription: string;
  impactDetails: string;
  transparencyInfo: string;
  images: string[];
  donationAmounts: number[];
}

// Fund My Craft Form Schema
export interface FundMyCraftFormData extends BaseFormData {
  craft: string;
  equipmentNeeds: WishlistItem[];
  contentType: string;
  platforms: string[];
}

export type PromptFormData = 
  | LinktreeFormData
  | KickstarterFormData  
  | WishlistFormData
  | CoffeeFormData
  | GoFundMeFormData
  | CharityFormData
  | FundMyCraftFormData;

export interface PromptTemplate {
  id: string;
  label: string;
  description: string;
  category: 'creator' | 'donation' | 'personal' | 'business';
  icon: string;
  formFields: FormField[];
}

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'url' | 'email' | 'select' | 'array' | 'object-array';
  placeholder?: string;
  required?: boolean;
  options?: string[];
  arrayType?: 'social-link' | 'wishlist-item' | 'reward-tier' | 'image-url';
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
  };
}

export const promptTemplates: PromptTemplate[] = [
  {
    id: 'linktree-tips',
    label: 'Linktree with Tips',
    description: 'Social link hub with tipping functionality',
    category: 'creator',
    icon: '🔗',
    formFields: [
      { id: 'name', label: 'Your Name/Brand', type: 'text', required: true },
      { id: 'bio', label: 'Bio/Description', type: 'textarea', placeholder: 'Tell your followers about yourself...' },
      { id: 'socialLinks', label: 'Social Links', type: 'object-array', arrayType: 'social-link', required: true },
      { id: 'tipAmounts', label: 'Suggested Tip Amounts', type: 'array', placeholder: '5,10,25,50' },
      { id: 'style', label: 'Style Preference', type: 'select', options: ['Modern', 'Minimal', 'Colorful', 'Professional'] },
      { id: 'colorPalette', label: 'Color Palette', type: 'select', options: ['Purple Gradient', 'Pink Gradient', 'Blue', 'Green', 'Custom'] }
    ]
  },
  {
    id: 'kickstarter-project',
    label: 'Kickstarter Project',
    description: 'Crowdfunding page for innovative projects',
    category: 'business',
    icon: '🚀',
    formFields: [
      { id: 'projectName', label: 'Project Name', type: 'text', required: true },
      { id: 'name', label: 'Creator/Team Name', type: 'text', required: true },
      { id: 'projectDescription', label: 'Project Description', type: 'textarea', required: true },
      { id: 'teamInfo', label: 'About Your Team', type: 'textarea' },
      { id: 'fundingGoal', label: 'Funding Goal ($)', type: 'number', required: true },
      { id: 'timeline', label: 'Project Timeline', type: 'textarea' },
      { id: 'rewardTiers', label: 'Reward Tiers', type: 'object-array', arrayType: 'reward-tier', required: true },
      { id: 'videoUrl', label: 'Demo Video URL', type: 'url' },
      { id: 'images', label: 'Project Images (URLs)', type: 'array', arrayType: 'image-url' },
      { id: 'style', label: 'Design Style', type: 'select', options: ['Tech Innovation', 'Creative', 'Professional', 'Modern'] },
      { id: 'colorPalette', label: 'Color Theme', type: 'select', options: ['Blue Tech', 'Purple Innovation', 'Green Growth', 'Orange Energy'] }
    ]
  },
  {
    id: 'fan-wishlist',
    label: 'Fan Wishlist',
    description: 'Dreams and experiences supporters can fund',
    category: 'creator',
    icon: '🎁',
    formFields: [
      { id: 'name', label: 'Your Name', type: 'text', required: true },
      { id: 'bio', label: 'About You', type: 'textarea', required: true },
      { id: 'wishlistItems', label: 'Wishlist Items', type: 'object-array', arrayType: 'wishlist-item', required: true },
      { id: 'personalityTone', label: 'Personality Tone', type: 'select', options: ['Excited', 'Professional', 'Casual', 'Playful', 'Grateful'] },
      { id: 'style', label: 'Visual Style', type: 'select', options: ['Vibrant', 'Pastel', 'Dark', 'Minimal', 'Gradient'] },
      { id: 'colorPalette', label: 'Color Theme', type: 'select', options: ['Rainbow', 'Pink-Purple', 'Blue-Cyan', 'Warm', 'Cool'] }
    ]
  },
  {
    id: 'buy-me-coffee',
    label: 'Buy Me Coffee',
    description: 'Coffee-themed creator support page',
    category: 'creator',
    icon: '☕',
    formFields: [
      { id: 'name', label: 'Your Name', type: 'text', required: true },
      { id: 'bio', label: 'Your Story', type: 'textarea', placeholder: 'Tell supporters how coffee fuels your work...' },
      { id: 'coffeeMessage', label: 'Coffee Message', type: 'textarea', placeholder: 'Why do you need coffee support?' },
      { id: 'coffeeGoal', label: 'Monthly Coffee Goal', type: 'text' },
      { id: 'style', label: 'Café Style', type: 'select', options: ['Cozy', 'Modern', 'Rustic', 'Elegant'] },
      { id: 'colorPalette', label: 'Coffee Colors', type: 'select', options: ['Classic Coffee', 'Modern Café', 'Warm Browns', 'Cream & Coffee'] }
    ]
  },
  {
    id: 'gofundme-personal',
    label: 'GoFundMe Personal',
    description: 'Personal fundraising for life events',
    category: 'personal',
    icon: '💝',
    formFields: [
      { id: 'name', label: 'Your Name/Family Name', type: 'text', required: true },
      { id: 'story', label: 'Your Story', type: 'textarea', required: true, placeholder: 'Share what happened and why you need support...' },
      { id: 'fundingGoal', label: 'Funding Goal ($)', type: 'number', required: true },
      { id: 'urgency', label: 'Timeline/Urgency', type: 'textarea' },
      { id: 'images', label: 'Personal Images (URLs)', type: 'array', arrayType: 'image-url' },
      { id: 'updates', label: 'Progress Updates', type: 'textarea' },
      { id: 'style', label: 'Page Style', type: 'select', options: ['Trustworthy', 'Warm', 'Professional', 'Personal'] },
      { id: 'colorPalette', label: 'Color Theme', type: 'select', options: ['Trust Blue', 'Hope Green', 'Warm Orange', 'Gentle Purple'] }
    ]
  },
  {
    id: 'charity-donation',
    label: 'Charity Donation',
    description: 'Nonprofit and charitable cause funding',
    category: 'donation',
    icon: '🎯',
    formFields: [
      { id: 'organizationName', label: 'Organization Name', type: 'text', required: true },
      { id: 'name', label: 'Campaign Leader', type: 'text' },
      { id: 'causeDescription', label: 'Cause Description', type: 'textarea', required: true },
      { id: 'impactDetails', label: 'Impact Details', type: 'textarea', placeholder: 'Describe how donations make a difference...' },
      { id: 'transparencyInfo', label: 'Transparency Information', type: 'textarea' },
      { id: 'images', label: 'Cause Images (URLs)', type: 'array', arrayType: 'image-url' },
      { id: 'donationAmounts', label: 'Suggested Donation Amounts', type: 'array', placeholder: '25,50,100,250' },
      { id: 'style', label: 'Organization Style', type: 'select', options: ['Professional', 'Compassionate', 'Modern', 'Traditional'] },
      { id: 'colorPalette', label: 'Brand Colors', type: 'select', options: ['Trust Blue', 'Growth Green', 'Hope Orange', 'Stability Purple'] }
    ]
  },
  {
    id: 'fund-my-craft',
    label: 'Fund My Craft',
    description: 'Creator equipment and tools funding',
    category: 'creator',
    icon: '🎨',
    formFields: [
      { id: 'name', label: 'Creator Name', type: 'text', required: true },
      { id: 'bio', label: 'About Your Work', type: 'textarea', required: true },
      { id: 'craft', label: 'Your Craft/Medium', type: 'text', placeholder: 'e.g., Digital Art, Music Production, Video Creation' },
      { id: 'equipmentNeeds', label: 'Equipment Needs', type: 'object-array', arrayType: 'wishlist-item', required: true },
      { id: 'contentType', label: 'Content Type', type: 'text', placeholder: 'e.g., Tutorials, Art, Music' },
      { id: 'platforms', label: 'Platforms (comma separated)', type: 'text', placeholder: 'YouTube, Instagram, TikTok' },
      { id: 'style', label: 'Creative Style', type: 'select', options: ['Artistic', 'Professional', 'Modern', 'Vintage'] },
      { id: 'colorPalette', label: 'Color Scheme', type: 'select', options: ['Creative Rainbow', 'Purple-Pink', 'Blue-Teal', 'Warm Orange'] }
    ]
  }
];