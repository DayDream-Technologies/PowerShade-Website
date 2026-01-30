'use client'

import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/animations/FadeIn'

const benefits = [
  {
    icon: '🔋',
    title: '2-Year Warranty',
    description: 'All PowerShade products come with our industry-leading warranty and support',
  },
  {
    icon: '🚚',
    title: 'Free Shipping',
    description: 'Free standard shipping on all orders over $100 within the continental US',
  },
  {
    icon: '↩️',
    title: 'Easy Returns',
    description: '30-day hassle-free return policy if you\'re not completely satisfied',
  },
  {
    icon: '💚',
    title: 'Eco-Friendly',
    description: 'Every purchase contributes to our Great Lakes conservation initiatives',
  },
]

export function WhyShop() {
  return (
    <section className="section-padding bg-gray-50 scene-beach">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-ocean-800 mb-12">
            Why Shop with PowerShade?
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <FadeIn key={benefit.title} delay={index * 100}>
              <Card className="h-full text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-ocean-700 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
