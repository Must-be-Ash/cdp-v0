# 🚀 Next.js + Coinbase Developer Platform Template

> **Outdated, not maintained.** Next.js and CDP packages are out of date and need to be updated before use.

A modern wishlist/donation platform built with [v0.dev](https://v0.dev) and powered by [Coinbase Developer Platform (CDP) Embedded Wallets](https://www.coinbase.com/developer-platform) for seamless Web3 payments.

## ✨ What Makes This Special

This template showcases the power of **CDP Embedded Wallets** - the easiest way to add Web3 payments to any application without the complexity of traditional crypto wallets.

### 🔑 Why CDP Embedded Wallets Are Game-Changing

**📧 Email-Based Authentication (No Seed Phrases)**
- Users create wallets with just email + OTP verification
- Eliminates the #1 barrier to crypto adoption
- Enables mass consumer apps with social media-like UX
- Creates viral growth potential and reduces support burden

**🔐 Non-Custodial but Feels Custodial**
- Users own their keys but don't manage them directly
- Best of both worlds: security + usability
- Regulatory compliance built-in
- Trust through Coinbase's reputation

**🏢 Enterprise-Grade Infrastructure**
- Built on Coinbase's regulated, institutional-grade systems
- Instant credibility with enterprises and institutions
- Global scalability (100M+ Coinbase users)
- Built-in AML/KYC capabilities

**🌐 Multi-Network Support with Base Optimization**
- Works across chains but optimized for Base (ultra-low fees)
- Enables microtransactions and frequent interactions
- Future-proofs your app as new networks emerge

**📱 Web-Native, Mobile-First**
- No browser extensions required
- Works seamlessly on all devices
- Captures the mobile-first user base (80% of internet users)
- No more "redirect to wallet app" friction

**🛡️ Built-in Policy Controls**
- Filter spam tokens and set spending limits
- Reduces user confusion and scam exposure
- Enables safer consumer applications
- Perfect for gradual Web3 feature introduction

**🔒 Passkey/Biometric Authentication**
- Modern authentication beyond just email
- Feels like modern banking apps
- Higher security than passwords with faster flows

## 🎯 The Meta-Effect: "Invisible Web3"

CDP Embedded Wallets create **Web3 functionality that feels like Web2**, enabling:
- Consumer apps that happen to use crypto (vs "crypto apps")  
- Viral growth through familiar user experiences
- Enterprise adoption without security concerns
- Developer confidence in building production apps
- Mainstream readiness for the next wave of Web3

## 🛠️ Built With

- **[Next.js 14](https://nextjs.org)** - React framework for production
- **[v0.dev](https://v0.dev)** - AI-powered UI generation platform
- **[CDP Embedded Wallets](https://www.coinbase.com/developer-platform)** - Seamless Web3 payments
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://typescriptlang.org)** - Type-safe development

## 🚀 Getting Started

### Step 1: Clone & Install

```bash
git clone <your-repo>
cd cdp-v0
npm install
```

### Step 2: Get Your CDP API Keys

1. Visit the [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)
2. Create a new project or use an existing one
3. Navigate to **API Keys** → **Secret API Keys**
4. Create a new Secret API Key
5. Note down your:
   - **CDP Project ID**
   - **API Key Name** 
   - **Private Key**

### Step 3: Configure Environment

Create a `.env.local` file:

```env
CDP_PROJECT_ID=your_project_id
CDP_API_KEY_NAME=your_api_key_name
CDP_API_KEY_PRIVATE_KEY=your_private_key
```

### Step 4: Configure CDP Settings

1. Go to [CDP CORS Configuration](https://portal.cdp.coinbase.com/products/embedded-wallets/cors)
2. Add your domain URL to the allowed origins
3. Go to [CDP Onramp Configuration](https://portal.cdp.coinbase.com/products/onramp)
4. Add your domain to enable seamless balance top-ups
5. This enables the crypto payment functionality to work properly

### Step 5: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app!

## 🎨 Powered by v0.dev

This template was initially generated using [v0.dev](https://v0.dev), Vercel's AI-powered UI generation platform. v0.dev allows you to:

- Generate React components from text descriptions
- Iterate quickly on UI designs
- Get production-ready code instantly
- Build with modern best practices

The combination of v0.dev's rapid prototyping and CDP's seamless Web3 integration creates the perfect stack for building the next generation of consumer crypto applications.

## 🌟 Key Features

- ✅ **Email-based wallet creation** - No seed phrases needed
- ✅ **Mobile-first responsive design** - Works everywhere
- ✅ **Dark mode support** - Beautiful in any theme
- ✅ **Type-safe development** - Full TypeScript support
- ✅ **Multi-chain support** - Base optimized, works everywhere
- ✅ **Built-in security** - Enterprise-grade infrastructure
- ✅ **Easy customization** - Tailwind CSS styling

## 🔧 Customization

### Modify Wishlist Items

Edit the wishlist data in `lib/wishlist.ts`:

```typescript
export const wishlistItems = [
  {
    id: 1,
    name: "Your Item",
    price: 25.00,
    image: "/your-image.jpg",
    description: "Your description"
  }
  // Add more items...
]
```

### Update Branding

- Replace `/public/avatar.png` with your profile image
- Update metadata in `app/layout.tsx`
- Customize colors in `tailwind.config.ts`

## 🚀 Deploy

Deploy easily on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

Don't forget to add your environment variables in the Vercel dashboard!

## 📚 Learn More

- [CDP Embedded Wallets Documentation](https://docs.cdp.coinbase.com)
- [v0.dev Documentation](https://v0.dev/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Made by [@must_be_ash] (https://x.com/Must_be_Ash)**

This is made by me and not an official CDP app. It's not perfect and it's not meant to be the end product though it's fully functional and production ready. I made this as your starting point so you don't have to start from scratch. It's meant to get you started to build your next idea 🤍

---

## 📄 License

MIT License - feel free to use this template for your projects!