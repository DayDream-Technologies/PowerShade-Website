import { Helmet } from 'react-helmet-async'
import { PageBanner } from '@/components/sections/PageBanner'
import { CTA } from '@/components/sections/CTA'
import { UseCaseItem } from '@/components/sections/UseCaseItem'
import { useCases } from '@/data/useCases'

export function UsesPage() {
  return (
    <>
      <Helmet>
        <title>Use Cases | PowerShade</title>
        <meta name="description" content="See how PowerShade solar umbrellas enhance beach days, camping trips, outdoor events, and backyard living. Stay powered anywhere under the sun." />
      </Helmet>
      <PageBanner
        title="PowerShade Use Cases"
        description="How our solar-powered beach umbrellas can enhance your outdoor experiences"
      />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="space-y-24">
            {useCases.map((useCase, index) => (
              <UseCaseItem
                key={useCase.id}
                useCase={useCase}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Find Your Perfect PowerShade Setup"
        description="Choose from our range of models and accessories to match your outdoor lifestyle."
        primaryButton={{ text: 'Shop PowerShade', href: '/shop' }}
      />
    </>
  )
}
