import { SeoHead } from '@/components/SeoHead'
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { ProductPreview } from '@/components/sections/ProductPreview'
import { CTA } from '@/components/sections/CTA'

export function HomePage() {
  return (
    <>
      <SeoHead
        title="PowerShade - Solar-Powered Beach Umbrellas"
        description="PowerShade solar-powered beach umbrellas keep your devices charged while you enjoy the sun. Shop our innovative USB-charging umbrellas made in Michigan."
        path="/"
      />
      <Hero />
      <Features />
      <ProductPreview />
      <CTA
        title="Ready to Upgrade Your Beach Experience?"
        description="Join thousands of satisfied customers who never worry about device power at the beach."
        primaryButton={{ text: 'Shop PowerShade', href: '/shop' }}
        secondaryButton={{ text: 'Learn More', href: '/about' }}
      />
    </>
  )
}
