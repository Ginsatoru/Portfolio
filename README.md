# 🚀 Bo Nai - Portfolio Website

<div align="center">

![Portfolio Banner](./public/og-image.png)

**A modern, performant, and accessible portfolio showcasing my work as a Full-Stack Web Developer**

[![Live Demo](https://img.shields.io/badge/Live-Demo-0284c7?style=for-the-badge&logo=vercel)](https://bonai.dev)
[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🎨 Design System](#-design-system)
- [⚡ Performance](#-performance)
- [🌐 Deployment](#-deployment)
- [📧 Contact](#-contact)
- [📄 License](#-license)

---

## ✨ Features

### 🎯 Core Features

- ⚡ **Lightning Fast** - Optimized bundle size with lazy loading
- 📱 **Fully Responsive** - Looks great on all devices
- 🌙 **Dark Mode** - Seamless theme switching with persistence
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🔍 **SEO Optimized** - Meta tags, OpenGraph, and sitemap
- 📧 **Contact Form** - Integrated with EmailJS
- 🎨 **Modern UI** - Smooth animations and micro-interactions
- 🔧 **PWA Ready** - Installable with offline support

### 🚀 Performance Features

- Code splitting and lazy loading
- Image optimization
- Critical CSS inlining
- Prefetching and preloading
- Web Vitals monitoring
- Scroll progress indicator

### 🎨 Design Features

- Custom color palette with primary and accent colors
- Gradient text effects
- Smooth scroll animations
- Hover effects and transitions
- Glassmorphism effects
- Custom scrollbar styling

---

## 🛠️ Tech Stack

### Frontend

- **React 19** - UI library with concurrent features
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Framer Motion 12** - Animation library
- **React Icons 5** - Icon library

### Tools & Libraries

- **EmailJS** - Contact form integration
- **Web Vitals** - Performance monitoring
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Development

- **Create React App** - Build tooling
- **ESLint** - Code linting
- **Prettier** - Code formatting (recommended)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 16.0.0
- **npm** >= 8.0.0 or **yarn** >= 1.22.0

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/bonai/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (optional)

   ```bash
   cp .env.example .env.local
   ```

   Add your EmailJS credentials:

   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

### Development

```bash
# Start development server
npm start

# Run tests
npm test

# Format code (requires Prettier)
npm run format

# Lint code
npm run lint
```

### Production

```bash
# Build for production
npm run build

# Analyze bundle size
npm run build:analyze

# Serve production build locally
npm run serve
```

### Tailwind

```bash
# Build Tailwind CSS
npm run build:css
```

---

## 📁 Project Structure

```
portfolio/
├── public/                 # Static files
│   ├── favicon.ico
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt         # SEO robots file
│   └── index.html         # HTML template
├── src/
│   ├── Components/        # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Tools.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── Images/            # Image assets
│   ├── Styles/            # CSS files
│   │   ├── Index.css     # Global styles
│   │   └── App.css       # Component styles
│   ├── App.js            # Main app component
│   └── index.js          # Entry point
├── .gitignore
├── package.json
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── README.md
```

---

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--primary-500: #0ea5e9  /* Main brand color */
--primary-600: #0284c7  /* Hover states */
--primary-700: #0369a1  /* Active states */

/* Accent Colors */
--accent-500: #d946ef   /* Secondary accent */
--accent-600: #c026d3   /* Hover states */

/* Dark Theme */
--dark-800: #1e293b
--dark-900: #0f172a
--dark-950: #020617
```

### Typography

- **Display Font:** Poppins (headings, hero text)
- **Body Font:** Inter (paragraphs, UI text)
- **Mono Font:** Fira Code (code snippets)

### Spacing Scale

- Base: 4px (0.25rem)
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96

---

## ⚡ Performance

### Lighthouse Scores (Target)

- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### Optimization Techniques

1. **Code Splitting** - Lazy loading for below-the-fold components
2. **Image Optimization** - WebP format, lazy loading, proper sizing
3. **Font Optimization** - Preconnect to Google Fonts, font-display: swap
4. **CSS Optimization** - PurgeCSS via Tailwind, critical CSS inlining
5. **JavaScript Optimization** - Tree shaking, minification, compression
6. **Caching Strategy** - Service worker for offline support

### Bundle Size Analysis

```bash
npm run build:analyze
```

---

## 🌐 Deployment

### Recommended Platforms

- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**
- **Firebase Hosting**

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=build
```

### Environment Variables

Set these in your deployment platform:

```
REACT_APP_EMAILJS_SERVICE_ID
REACT_APP_EMAILJS_TEMPLATE_ID
REACT_APP_EMAILJS_PUBLIC_KEY
```

---

## 🔧 Configuration

### Tailwind Configuration

Custom theme extensions in `tailwind.config.js`:

- Custom colors (primary, accent, dark)
- Custom animations (fade-in, slide, float, glow)
- Custom utilities (text-shadow, scrollbar-thin)
- Custom shadows (glow, soft, dark)

### PWA Configuration

Progressive Web App features in `manifest.json`:

- App name and description
- Icons (multiple sizes)
- Theme colors
- Display mode (standalone)
- Start URL and shortcuts

---

## 📧 Contact Form Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add credentials to `.env.local`

---

## 🐛 Troubleshooting

### Common Issues

**Issue:** Dark mode not persisting

```bash
# Clear localStorage
localStorage.clear()
```

**Issue:** Tailwind classes not applying

```bash
# Rebuild CSS
npm run build:css
```

**Issue:** Images not loading

```bash
# Check image paths and formats
# Ensure images are in /src/Images/
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Bo Nai** - Full-Stack Web Developer

- 🌐 Website: [bonai.dev](https://bonai.dev)
- 📧 Email: naibo2002@gmail.com
- 💼 LinkedIn: [linkedin.com/in/bonai](https://linkedin.com/in/bonai)
- 🐙 GitHub: [github.com/bonai](https://github.com/bonai)

---

## 🙏 Acknowledgments

- Design inspiration from [Awwwards](https://www.awwwards.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Color palette tools: [Coolors](https://coolors.co/), [Adobe Color](https://color.adobe.com/)

---

<div align="center">

**⭐ If you like this project, please give it a star! ⭐**

Made with ❤️ and ☕ by Bo Nai

</div>
