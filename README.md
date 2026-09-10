# SMM Panel Landing Page

A modern, responsive landing page for an SMM (Social Media Marketing) panel built with React and Vite. Designed for Bangladeshi businesses, creators, and agencies looking for fast, safe, and affordable social media growth services.

## Live Link

[Deployed on Netlify](https://smm-panel-landing-page.netlify.app/)

## Features

- **Hero Section** - Eye-catching intro with rating, headline, and CTAs
- **Stats Section** - Key metrics and numbers
- **Services Section** - Platform-based social media marketing services with filters
- **Working Process** - Step-by-step guide on how the panel works
- **Payment Methods** - Multiple payment options (Visa, Mastercard, PayPal, bKash, Nagad, etc.)
- **Growth Section** - Timeline-based growth strategy for social media
- **Advantages** - Key benefits of using the panel services
- **FAQ Section** - Frequently asked questions with accordion UI
- **CTA Section** - Call-to-action with "See All Services" and "Create Free Account"
- **Footer** - Quick links, service pages, and contact info

## Tech Stack

### Core Technologies
- **React** (18.2) - Component-based UI library for building the user interface
- **Vite** (5.0) - Next-generation frontend build tool for fast development and optimized production builds
- **React Router DOM** (6.20) - For client-side routing and navigation

### Styling
- **Plain CSS** - No external CSS framework; custom styles written in `src/App.css`
- **CSS Grid & Flexbox** - For responsive layouts
- **Media Queries** - For responsive design across desktop, tablet, and mobile devices

### Build & Deployment
- **Vite Build** - Production build optimization with code splitting and asset optimization
- **Netlify** - Hosting and deployment platform with automatic deploys from GitHub

### Development Tools
- **npm** - Package manager for dependencies
- **Git** - Version control
- **GitHub** - Code repository and version hosting

### Browser APIs
- **Smooth Scrolling** - Native CSS `scroll-behavior: smooth` for navigation
- **Intersection Observer** - Not used; scroll-based navigation via `scrollIntoView` API

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- **Node.js** v16 or higher ([Download](https://nodejs.org/))
- **npm** (comes bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Saiful1253/SMM-Panel-Landing-Page.git

# 2. Navigate into the project folder
cd SMM-Panel-Landing-Page

# 3. Install all dependencies
npm install
```

### Run Development Server

```bash
npm run dev
```

This starts the Vite dev server. By default it opens on:

- Local: `http://localhost:5173`

If port `5173` is already in use, Vite will automatically use the next available port.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build Locally

```bash
npm run preview
```

This serves the built files locally so you can verify the production output before deploying.

## Deployment

This project is configured for deployment on **Netlify**.

- Build command: `npm run build`
- Publish directory: `dist`

A `netlify.toml` file is included in the project root for automatic deployment configuration.

### Deploy Steps

1. Push the code to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Click **"New site from Git"**
4. Select your GitHub repo
5. Netlify will auto-detect the `netlify.toml` and deploy

## Project Structure

```
SMM-Panel-Landing-Page/
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml
├── public/
│   ├── hero.png
│   ├── upper.jpg
│   ├── people.png
│   ├── trophy.png
│   ├── order.png
│   └── cloud.png
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── pages/
    │   └── Home.jsx
    └── components/
        ├── Navbar.jsx
        ├── Footer.jsx
        ├── Stats.jsx
        ├── WorkingProcess.jsx
        ├── PaymentMethods.jsx
        ├── GrowthSection.jsx
        ├── Advantages.jsx
        ├── FAQ.jsx
        └── CTASection.jsx
```

## Customization

- **Logo**: Replace `LOGO` text in `Navbar.jsx` and `Footer.jsx` with your brand logo
- **Images**: Replace images in the `public/` folder with your own assets
- **Colors**: Update the orange theme colors in `src/App.css`
- **Content**: Edit section content in individual component files under `src/components/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All Rights Reserved

---

Built with React + Vite
