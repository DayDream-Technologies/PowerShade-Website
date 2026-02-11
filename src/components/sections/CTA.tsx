import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/animations/FadeIn'

interface CTAProps {
  title?: string
  description?: string
  primaryButton?: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
}

export function CTA({
  title = 'Ready to Upgrade Your Beach Experience?',
  description = 'Join thousands of satisfied customers who never worry about device power at the beach.',
  primaryButton = { text: 'Shop PowerShade', href: '/shop' },
  secondaryButton,
}: CTAProps) {
  return (
    <section className="section-padding bg-cta-gradient">
      <div className="container">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {title}
            </h2>
            <p className="text-lg text-ocean-100 mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={primaryButton.href} variant="secondary" size="lg">
                {primaryButton.text}
              </Button>
              {secondaryButton && (
                <Button href={secondaryButton.href} variant="outline" size="lg">
                  {secondaryButton.text}
                </Button>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
