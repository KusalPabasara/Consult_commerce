# Children's Mental Health Consulting Website

A professional, responsive website for children's mental health consulting services. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Professional Design**: Calming, child-friendly design with trust-building elements
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices
- **Contact Form**: Comprehensive consultation request form with validation
- **SEO Optimized**: Built-in SEO features for better search engine visibility
- **Accessibility**: WCAG 2.1 AA compliant design
- **Fast Performance**: Optimized for Core Web Vitals

## 📚 Pages

1. **Homepage**: Hero section, services overview, testimonials, and call-to-action
2. **About**: Therapist information, credentials, specializations, and treatment approach
3. **Contact**: Contact form, office information, FAQ section, and crisis resources

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form with Zod validation
- **Icons**: Heroicons
- **Animations**: Framer Motion (ready for implementation)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors & Design System

The design system is defined in `src/app/globals.css` with custom CSS variables:

- **Primary Colors**: Soft blues for trust and calm
- **Accent Colors**: Soft greens for growth and healing
- **Neutral Colors**: Warm grays for comfort

### Content Customization

1. **Therapist Information**: Update content in `src/app/about/page.tsx`
2. **Contact Details**: Modify contact information in:
   - `src/app/contact/page.tsx`
   - `src/components/Footer.tsx`
3. **Services**: Update services in `src/app/page.tsx`

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first design approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface elements
- Optimized forms for mobile input

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Visit [vercel.com](https://vercel.com) and connect your repository

3. Vercel will automatically detect Next.js and deploy your application

4. Your site will be live with automatic HTTPS and global CDN

### Custom Domain Setup

1. In your Vercel dashboard, go to your project settings
2. Navigate to "Domains" section
3. Add your custom domain
4. Update your domain's DNS settings as instructed
5. Vercel will automatically provision SSL certificates

## 🔧 Production Optimizations

The website is already optimized for production with:

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loading
- **Bundle Analysis**: Built-in bundle analyzer
- **SEO**: Meta tags, Open Graph, and structured data
- **Performance**: Lazy loading and optimized fonts

## 📊 Analytics Setup

To add Google Analytics:

1. Install the package:
   ```bash
   npm install @next/third-parties
   ```

2. Add to your layout file:
   ```tsx
   import { GoogleAnalytics } from '@next/third-parties/google'
   ```

## 🛡️ Security Features

- **Form Validation**: Client and server-side validation
- **HTTPS**: Automatic SSL certificates
- **Content Security Policy**: Ready for implementation
- **Privacy**: No tracking without consent

## 📞 Support & Maintenance

### Regular Updates Needed

1. **Content**: Keep therapist information and credentials current
2. **Contact Info**: Update phone numbers, addresses, and hours
3. **Dependencies**: Regular security updates
4. **Insurance**: Update accepted insurance providers

## 📈 SEO Checklist

- ✅ Meta titles and descriptions
- ✅ Open Graph tags for social sharing
- ✅ Structured data for local business
- ✅ XML sitemap (auto-generated)
- ✅ Fast loading times
- ✅ Mobile-friendly design
- ✅ Accessible markup

---

*Built with ❤️ for children's mental health support*
