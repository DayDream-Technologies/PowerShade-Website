import { Helmet } from 'react-helmet-async'
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { ProductPreview } from '@/components/sections/ProductPreview'
import { CTA } from '@/components/sections/CTA'

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>PowerShade - Solar-Powered Beach Umbrellas</title>
        <meta name="description" content="PowerShade solar-powered beach umbrellas keep your devices charged while you enjoy the sun. Shop our innovative USB-charging umbrellas made in Michigan." />
      </Helmet>
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
