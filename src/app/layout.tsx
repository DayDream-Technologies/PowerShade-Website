import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SkipLink } from '@/components/layout/SkipLink'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'PowerShade - Solar-Powered Beach Umbrellas',
    template: '%s | PowerShade',
  },
  description: 'PowerShade solar-powered beach umbrellas keep your devices charged while you enjoy the sun. Shop our innovative USB-charging umbrellas made in Michigan.',
  keywords: ['solar umbrella', 'beach umbrella', 'solar powered', 'USB charging', 'Michigan', 'outdoor'],
  authors: [{ name: 'PowerShade' }],
  creator: 'PowerShade',
  metadataBase: new URL('https://dwasilewski3.github.io/PowerShade-Website'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dwasilewski3.github.io/PowerShade-Website',
    siteName: 'PowerShade',
    title: 'PowerShade - Solar-Powered Beach Umbrellas',
    description: 'PowerShade solar-powered beach umbrellas keep your devices charged while you enjoy the sun.',
    images: [
      {
        url: '/images/pro-product-photo.png',
        width: 1200,
        height: 630,
        alt: 'PowerShade Solar Beach Umbrella',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PowerShade - Solar-Powered Beach Umbrellas',
    description: 'PowerShade solar-powered beach umbrellas keep your devices charged while you enjoy the sun.',
    images: ['/images/pro-product-photo.png'],
  },
  icons: {
    icon: '/images/Logos/PowerShade_logo_4._croppedPNG.PNG',
    apple: '/images/Logos/PowerShade_logo_4._croppedPNG.PNG',
  },
  themeColor: '#0077b6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'PowerShade',
              url: 'https://dwasilewski3.github.io/PowerShade-Website/',
              description: 'Solar-powered beach umbrellas that keep your devices charged',
              logo: 'https://dwasilewski3.github.io/PowerShade-Website/images/Logos/PowerShade_logo_4._croppedPNG.PNG',
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
