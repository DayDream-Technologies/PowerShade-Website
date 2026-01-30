'use client'

import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { FadeIn } from '@/components/animations/FadeIn'
import { faqItems, type FAQItem } from '@/data/faq'

function FAQItemComponent({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) {
  const contentSpring = useSpring({
    maxHeight: isOpen ? 500 : 0,
    opacity: isOpen ? 1 : 0,
    config: { tension: 300, friction: 30 },
  })

  const iconSpring = useSpring({
    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
    config: { tension: 300, friction: 20 },
  })

  return (
    <div className="bg-white rounded-xl shadow-card overflow-hidden">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center gap-4 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-2xl flex-shrink-0">{item.icon}</span>
        <span className="flex-grow font-semibold text-ocean-800">{item.question}</span>
        <animated.span
          style={iconSpring}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-ocean-100 text-ocean-600 flex items-center justify-center text-xl font-light"
        >
          +
        </animated.span>
      </button>
      <animated.div style={contentSpring} className="overflow-hidden">
        <div className="px-6 pb-5 pl-16">
          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
        </div>
      </animated.div>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding bg-gradient-to-br from-gray-50 to-ocean-50">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-ocean-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Everything you need to know about PowerShade products.
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <FadeIn key={index} delay={index * 100}>
              <FAQItemComponent
                item={item}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
