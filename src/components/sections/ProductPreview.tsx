'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/animations/FadeIn'
import { SlideIn } from '@/components/animations/SlideIn'
import { img } from '@/lib/utils'

const productFeatures = [
  'Premium UV protection fabric',
  'Adjustable tilt mechanism',
  'Sturdy sand anchor',
  'Integrated solar panels',
  'USB charging ports',
  'Battery storage system',
]

export function ProductPreview() {
  return (
    <section className="section-padding bg-white scene-sun-rays-right">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <SlideIn direction="left">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-ocean-800 mb-6">
                The PowerShade Experience
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our revolutionary beach umbrellas seamlessly combine premium sun protection 
                with cutting-edge solar technology, keeping you connected and powered 
                throughout your entire beach day.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {productFeatures.map((feature, index) => (
                  <FadeIn key={feature} delay={index * 50}>
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ocean-100 text-ocean-600 flex items-center justify-center text-sm font-bold">
                        ✓
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  </FadeIn>
                ))}
              </ul>

              <Button href="/about" variant="primary" size="lg">
                Discover PowerShade
              </Button>
            </div>
          </SlideIn>

          {/* Image */}
          <SlideIn direction="right">
            <div className="relative">
              <div className="absolute inset-0 bg-ocean-gradient rounded-2xl transform rotate-3 opacity-20" />
              <Image
                src={img('/images/beach-family-demo.png')}
                alt="Family enjoying PowerShade at the beach"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-card w-full"
              />
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
