import { Helmet } from 'react-helmet-async'
import { PageBanner } from '@/components/sections/PageBanner'
import { CTA } from '@/components/sections/CTA'
import { FadeIn } from '@/components/animations/FadeIn'
import { SlideIn } from '@/components/animations/SlideIn'
import { Card } from '@/components/ui/Card'
import { img } from '@/lib/utils'

const productFeatures = [
  'Integrated 25W solar panel array',
  'Dual USB-A and USB-C charging ports',
  'Optional wireless charging pad',
  'Battery storage for charging after sunset',
  'UPF 50+ sun protection',
  'Lightweight aluminum frame',
  'Wind-resistant design',
]

const technologies = [
  {
    title: 'Flexible Solar Panels',
    description: 'Our proprietary flexible solar panels are lightweight, durable, and designed to withstand the rigors of beach use. Unlike rigid panels, our technology bends with the umbrella and resists cracking.',
    image: img('/images/Mini Product Photo.png'),
  },
  {
    title: 'Power Management System',
    description: 'Our intelligent power management system optimizes energy collection, storage, and distribution to your devices. The waterproof housing protects sensitive electronics while maintaining efficient charging.',
    image: img('/images/Accessory Pack.png'),
  },
  {
    title: 'Battery Storage',
    description: 'Each PowerShade comes with a 10,000mAh lithium battery that stores excess energy for use after sunset or on cloudy days. The removable battery pack can also be pre-charged at home before your beach day.',
    image: img('/images/PowerShade XL.png'),
  },
]

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Our Product | PowerShade</title>
        <meta name="description" content="Discover PowerShade's solar technology - flexible panels, battery storage, and USB charging ports. Learn how our Michigan-made beach umbrellas keep you connected." />
      </Helmet>
      <PageBanner
        title="Solar-Powered Beach Umbrellas"
        description="Stay cool, stay connected—experience the future of beach days with PowerShade"
        backgroundImage={img('/images/beach-family-demo.png')}
      />

      {/* Product Showcase */}
      <section className="section-padding bg-white scene-clouds">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-ocean-800 mb-6">
                  Meet the PowerShade Umbrella
                </h2>
                <p className="text-gray-600 mb-4">
                  PowerShade combines cutting-edge solar technology with classic beach comfort.
                  Our umbrellas feature flexible, weatherproof solar panels seamlessly integrated
                  into the canopy design.
                </p>
                <p className="text-gray-600 mb-6">
                  Each PowerShade umbrella generates up to 25 watts of clean energy—enough to
                  charge phones, tablets, speakers, and other small devices while you enjoy
                  your day at the beach.
                </p>

                <ul className="space-y-3">
                  {productFeatures.map((feature, index) => (
                    <FadeIn key={feature} delay={index * 50}>
                      <li className="flex items-center gap-3 py-2 border-b border-gray-100">
                        <span className="text-ocean-500 font-bold">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    </FadeIn>
                  ))}
                </ul>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <img
                src={img('/images/pro-product-photo.png')}
                alt="PowerShade Pro Model showing integrated solar panels"
                width={600}
                height={600}
                className="rounded-2xl shadow-card w-full"
              />
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section-padding bg-gray-50 scene-sun-rays">
        <div className="container">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-ocean-800 mb-12">
              Our Solar Technology
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <FadeIn key={tech.title} delay={index * 150}>
                <Card padding="none" className="overflow-hidden h-full">
                  <div className="bg-ocean-500 text-white p-4">
                    <h3 className="text-xl font-semibold text-center">
                      {tech.title}
                    </h3>
                  </div>
                  <div className="aspect-square relative bg-gray-100">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="absolute inset-0 w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="section-padding bg-white scene-grass">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-ocean-800 mb-6">
                  Committed to Sustainability
                </h2>
                <p className="text-gray-600 mb-4">
                  At PowerShade, we believe in harnessing nature's energy without harming
                  the environment. Our materials are selected for durability and sustainability,
                  and we're proud to manufacture our products in Michigan with a focus on
                  reducing our carbon footprint.
                </p>
                <p className="text-gray-600">
                  For every PowerShade sold, we donate 1% of proceeds to Great Lakes
                  conservation efforts. Enjoy the sun responsibly while helping protect
                  our beautiful Michigan waters.
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <img
                src={img('/images/Relaxing demo.png')}
                alt="PowerShade being used at a beautiful beach setting"
                width={600}
                height={400}
                className="rounded-2xl shadow-card w-full"
              />
            </SlideIn>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Experience PowerShade?"
        description="Join the solar revolution and make your beach days more powerful."
        primaryButton={{ text: 'Shop Now', href: '/shop' }}
        secondaryButton={{ text: 'See Use Cases', href: '/uses' }}
      />
    </>
  )
}
