import { SeoHead } from '@/components/SeoHead'
import { ShopStructuredData } from '@/components/StructuredData'
import { PageBanner } from '@/components/sections/PageBanner'
import { ProductCard } from '@/components/sections/ProductCard'
import { WhyShop } from '@/components/sections/WhyShop'
import { FAQ } from '@/components/sections/FAQ'
import { FadeIn } from '@/components/animations/FadeIn'
import { getProductsByCategory } from '@/data/products'

const categoryLinks = [
  { href: '#umbrellas', label: '☀️ Umbrellas' },
  { href: '#accessories', label: '🔧 Accessories' },
  { href: '#bundles', label: '📦 Bundles' },
]

export function ShopPage() {
  const umbrellas = getProductsByCategory('umbrella')
  const accessories = getProductsByCategory('accessory')
  const bundles = getProductsByCategory('bundle')

  return (
    <>
      <SeoHead
        title="Shop | PowerShade"
        description="Shop PowerShade solar-powered beach umbrellas starting at $259.99. Free shipping over $100, 2-year warranty, and 30-day returns on all orders."
        path="/shop"
      />
      <ShopStructuredData />
      <PageBanner
        title="Shop PowerShade"
        description="Discover the perfect solar-powered umbrella for your outdoor adventures"
      />

      {/* Category Links */}
      <section className="py-8 bg-gray-50 sticky top-[72px] z-30">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categoryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-6 py-3 bg-ocean-500 text-white rounded-lg font-medium hover:bg-ocean-600 transition-colors shadow-button hover:shadow-button-hover"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Umbrellas Section */}
      <section id="umbrellas" className="section-padding bg-white scroll-mt-32 scene-waves">
        <div className="container">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-ocean-800 mb-8">
              ☀️ Solar Umbrellas
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {umbrellas.map((product, index) => (
              <FadeIn key={product.id} delay={index * 100}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section id="accessories" className="section-padding bg-gray-50 scroll-mt-32 scene-clouds">
        <div className="container">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-ocean-800 mb-8">
              🔧 Accessories
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {accessories.map((product, index) => (
              <FadeIn key={product.id} delay={index * 100}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles Section */}
      <section id="bundles" className="section-padding bg-white scroll-mt-32 scene-sun-rays-right">
        <div className="container">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-ocean-800 mb-8">
              📦 Bundles
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {bundles.map((product, index) => (
              <FadeIn key={product.id} delay={index * 100}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <WhyShop />
      <FAQ />
    </>
  )
}
