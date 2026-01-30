# PowerShade Website

A modern React/Next.js website for PowerShade - solar-powered beach umbrellas that keep your devices charged while you enjoy the sun.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: React Spring
- **Deployment**: Static export for GitHub Pages

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

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Build the static site
npm run build

# Or using the build script (recommended for GitHub Pages)
.\build.ps1 -Export
```

The static site will be exported to the `out/` folder.

## Project Structure

```
├── public/
│   └── images/           # Static images and assets
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Home page
│   │   ├── about/        # About/Product page
│   │   ├── uses/         # Use Cases page
│   │   └── shop/         # Shop page
│   ├── components/
│   │   ├── animations/   # React Spring animation wrappers
│   │   ├── layout/       # Header, Footer, SkipLink
│   │   ├── sections/     # Page sections (Hero, Features, etc.)
│   │   └── ui/           # Reusable UI components
│   ├── data/             # Static data (products, FAQ, etc.)
│   └── lib/              # Utility functions
├── tailwind.config.ts    # Tailwind CSS configuration
└── next.config.js        # Next.js configuration
```

## Features

- **Responsive Design**: Fully responsive across all device sizes
- **Animations**: Smooth scroll-triggered and hover animations using React Spring
- **Accessibility**: Skip links, semantic HTML, proper ARIA attributes
- **SEO Optimized**: Meta descriptions, Open Graph tags, JSON-LD schema
- **Performance**: Image optimization, lazy loading, font preloading
- **Theme**: Custom "Ocean Sunset" color palette with Tailwind CSS

## Build Script (PowerShell)

The `build.ps1` script provides convenient commands:

```powershell
.\build.ps1 -Dev      # Start development server
.\build.ps1 -Build    # Build for production
.\build.ps1 -Export   # Export static site for GitHub Pages
.\build.ps1 -Clean    # Remove build artifacts
.\build.ps1 -Install  # Install dependencies
```

## Deployment

This site is configured for GitHub Pages deployment:

1. Run `.\build.ps1 -Export` to build the static site
2. The `out/` folder contains the deployable files
3. Configure GitHub Pages to serve from the `out/` folder or use a GitHub Action

## License

All rights reserved. PowerShade © 2026
