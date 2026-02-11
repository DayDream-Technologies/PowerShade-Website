import { FadeIn } from '@/components/animations/FadeIn'
import { SlideIn } from '@/components/animations/SlideIn'
import { type UseCase } from '@/data/useCases'
import { img, cn } from '@/lib/utils'

interface UseCaseItemProps {
  useCase: UseCase
  reverse?: boolean
}

// Map scene names to subtle section background classes
const sceneClasses: Record<UseCase['scene'], string> = {
  'waves': 'section-soft-gradient',
  'waves-double': 'section-subtle-grid',
  'grass': 'section-soft-gradient',
  'camping': 'section-subtle-grid',
  'backyard': 'section-soft-gradient',
  'clouds': 'section-subtle-grid',
  'sun-rays': 'section-soft-gradient',
  'beach': 'section-soft-gradient',
}

export function UseCaseItem({ useCase, reverse = false }: UseCaseItemProps) {
  const sceneClass = sceneClasses[useCase.scene]
  
  return (
    <div className={cn(
      'grid lg:grid-cols-2 gap-12 items-center rounded-2xl p-8 -mx-4 md:-mx-8',
      sceneClass,
      reverse ? 'lg:grid-flow-dense' : ''
    )}>
      {/* Content */}
      <SlideIn direction={reverse ? 'right' : 'left'} className={reverse ? 'lg:col-start-2' : ''}>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-ocean-800 mb-4">
            {useCase.title}
          </h2>
          <p className="text-gray-600 mb-6">
            {useCase.description}
          </p>

          <ul className="space-y-3 mb-6">
            {useCase.benefits.map((benefit, index) => (
              <FadeIn key={index} delay={index * 50}>
                <li className="flex items-start gap-3">
                  <span className="text-ocean-500 text-lg">•</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              </FadeIn>
            ))}
          </ul>

          <p className="text-gray-600 text-sm italic">
            {useCase.additionalInfo}
          </p>
        </div>
      </SlideIn>

      {/* Image */}
      <SlideIn direction={reverse ? 'left' : 'right'} className={reverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
        <div className="relative">
          <div className={`absolute inset-0 bg-ocean-gradient rounded-2xl transform ${reverse ? '-rotate-3' : 'rotate-3'} opacity-20`} />
          <img
            src={img(useCase.image)}
            alt={useCase.title}
            width={600}
            height={400}
            className="relative rounded-2xl shadow-card w-full"
          />
          {useCase.id === 'beach' && (
            <p className="text-center text-gray-500 text-sm mt-3 italic">
              *Images are AI-generated for demonstration purposes
            </p>
          )}
        </div>
      </SlideIn>
    </div>
  )
}
