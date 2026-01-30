import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { ProductPreview } from '@/components/sections/ProductPreview'
import { CTA } from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
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
