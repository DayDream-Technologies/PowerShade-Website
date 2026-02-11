import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/animations/FadeIn'
import { Stagger } from '@/components/animations/Stagger'
import { features } from '@/data/features'

export function Features() {
  return (
    <section className="section-padding bg-gray-50 section-soft-gradient">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-ocean-800 mb-4">
            Why Choose PowerShade?
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Experience the perfect blend of innovation and convenience with our solar-powered beach umbrellas.
          </p>
        </FadeIn>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={80}>
          {features.map((feature) => (
            <Card key={feature.title} className="h-full text-center group">
              <div className="text-5xl mb-4 group-hover:animate-bounce-subtle">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-ocean-700 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
