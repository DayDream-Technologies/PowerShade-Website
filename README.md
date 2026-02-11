# PowerShade Website

A modern React website for PowerShade - solar-powered beach umbrellas that keep your devices charged while you enjoy the sun.

## Tech Stack

- **Framework**: React with Vite
- **Routing**: React Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: React Spring
- **Deployment**: Static build for AWS Amplify (SPA)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Or using the build script (PowerShell)
.\build.ps1 -Install
```

### Development

```bash
# Start development server
npm run dev

# Or using the build script
.\build.ps1 -Dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
# Build the static site
npm run build

# Or using the build script
.\build.ps1 -Export
```

The static site is output to the `dist/` folder. To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── public/
│   └── images/           # Static images and assets
├── src/
│   ├── pages/            # Route pages (Home, About, Uses, Shop)
│   ├── components/
│   │   ├── animations/   # React Spring animation wrappers
│   │   ├── layout/       # Header, Footer, SkipLink, RootLayout
│   │   ├── sections/     # Page sections (Hero, Features, etc.)
│   │   └── ui/           # Reusable UI components
│   ├── data/             # Static data (products, FAQ, etc.)
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Routes and root layout
│   ├── main.tsx          # Entry point
│   └── globals.css       # Global styles
├── index.html            # HTML entry
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
```

## Features

- **Responsive Design**: Fully responsive across all device sizes
- **Animations**: Smooth scroll-triggered and hover animations using React Spring
- **Accessibility**: Skip links, semantic HTML, proper ARIA attributes
- **SEO Optimized**: Per-route meta (react-helmet-async), Open Graph tags, JSON-LD schema
- **Theme**: Custom "Ocean Sunset" color palette with Tailwind CSS

## Build Script (PowerShell)

The `build.ps1` script provides convenient commands:

```powershell
.\build.ps1 -Dev      # Start development server (http://localhost:5173)
.\build.ps1 -Build    # Build for production
.\build.ps1 -Export   # Build static site to dist/
.\build.ps1 -Clean    # Remove build artifacts (dist, node_modules)
.\build.ps1 -Install  # Install dependencies
```

## Deployment (AWS Amplify)

This site is a **static SPA**. Deployment is via AWS Amplify.

Build and artifact layout are defined in `amplify.yml`: the build runs `npm run build` (Vite outputs to `dist/`), then the post-build script copies `dist/` to `.amplify-hosting/static` and writes a static deploy manifest so Amplify serves the app as static content.

1. **App platform**: Set to **WEB** (static).
2. **Branch framework**: Set to **Other** (not "Next.js - SSR").
   In the console: Hosting → select branch (e.g. **main**) → Build settings / Edit → set **Framework** to **Other** → Save → Redeploy.

## License

All rights reserved. PowerShade © 2026
