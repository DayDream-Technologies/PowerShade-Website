export interface FAQItem {
  icon: string
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    icon: '⚡',
    question: 'How much power can the PowerShade generate?',
    answer: 'Depending on the model, PowerShade umbrellas can generate between 15W (Mini) and 50W (XL) of solar power in optimal sunlight conditions. This is sufficient to charge smartphones, tablets, speakers, and other small devices.',
  },
  {
    icon: '☁️',
    question: 'Do PowerShade umbrellas work on cloudy days?',
    answer: 'Yes, but with reduced efficiency. Our solar panels can still collect energy on cloudy days, just at a lower rate. All our models except the Mini also include battery storage to save energy for when you need it most.',
  },
  {
    icon: '🚚',
    question: 'How long does shipping take?',
    answer: 'Standard shipping within Michigan typically takes 6-9 business days. For other states in the continental US, expect 12-21 business days. Express shipping options are available at checkout for faster delivery.',
  },
  {
    icon: '💧',
    question: 'Are PowerShade umbrellas waterproof?',
    answer: 'Yes! The umbrella canopy is fully waterproof, and all electronic components are protected with IPX4-rated water resistance. However, we recommend closing the umbrella during heavy storms.',
  },
  {
    icon: '📦',
    question: 'Do you offer bulk discounts?',
    answer: 'Yes! We offer attractive bulk discounts for orders of 5 or more units. This is perfect for resorts, beach clubs, event planners, and corporate gifting. Contact our sales team for custom pricing and volume orders.',
  },
]
