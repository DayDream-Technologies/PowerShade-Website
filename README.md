# PowerShade Website

A modern React/Next.js website for PowerShade - solar-powered beach umbrellas that keep your devices charged while you enjoy the sun.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: React Spring
- **Deployment**: Static export for AWS Amplify (no SSR)

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

# Or using the build script
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
.\build.ps1 -Export   # Export static site to out/
.\build.ps1 -Clean    # Remove build artifacts
.\build.ps1 -Install  # Install dependencies
```

## Deployment (AWS Amplify only)

This site is a **static export** (no server, no SSR). Deployment is via AWS Amplify only.

Build and artifact layout are defined in `amplify.yml`; the post-build script writes a static deploy manifest so Amplify does not treat the app as Next.js SSR.

**If Amplify shows:** *"It looks like you are attempting to deploy a Next.js SSR app..."* — you do **not** need SSR. Fix it by telling Amplify this is a static app:

1. **App platform**: Set to **WEB** (static). If the console doesn’t show it, use the CLI:
   ```bash
   aws amplify update-app --app-id <APP_ID> --platform WEB --region <REGION>
   ```
2. **Branch framework**: Set to **Other** (not "Next.js - SSR").  
   In the console: Hosting → select branch (e.g. **main**) → Build settings / Edit → set **Framework** to **Other** → Save → Redeploy.

After that, Amplify will use the static artifact and the error will stop.

## License

All rights reserved. PowerShade © 2026
