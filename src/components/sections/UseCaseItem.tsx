'use client'

import Image from 'next/image'
import { FadeIn } from '@/components/animations/FadeIn'
import { SlideIn } from '@/components/animations/SlideIn'
import { type UseCase } from '@/data/useCases'
import { img } from '@/lib/utils'

interface UseCaseItemProps {
  useCase: UseCase
  reverse?: boolean
}

export function UseCaseItem({ useCase, reverse = false }: UseCaseItemProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
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
          <Image
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
