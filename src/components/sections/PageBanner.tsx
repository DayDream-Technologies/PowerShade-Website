'use client'

import { FadeIn } from '@/components/animations/FadeIn'

interface PageBannerProps {
  title: string
  description?: string
  backgroundImage?: string
}

export function PageBanner({ title, description, backgroundImage }: PageBannerProps) {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(3, 4, 94, 0.7), rgba(0, 119, 182, 0.7)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Default gradient background if no image */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-100 via-ocean-50 to-sand-50" />
      )}

      <div className="container relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h1
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                backgroundImage ? 'text-white drop-shadow-lg' : 'text-ocean-800'
              }`}
            >
              {title}
            </h1>
            {description && (
              <p
                className={`text-lg md:text-xl ${
                  backgroundImage ? 'text-ocean-100 drop-shadow' : 'text-gray-600'
                }`}
              >
                {description}
              </p>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
