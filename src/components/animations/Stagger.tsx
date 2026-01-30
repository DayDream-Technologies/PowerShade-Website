'use client'

import { useTrail, animated } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import { ReactNode, Children } from 'react'

interface StaggerProps {
  children: ReactNode
  delay?: number
  staggerDelay?: number
  className?: string
}

export function Stagger({
  children,
  delay = 0,
  staggerDelay = 100,
  className = '',
}: StaggerProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const items = Children.toArray(children)

  const trail = useTrail(items.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    delay,
    config: { tension: 280, friction: 60 },
  })

  return (
    <div ref={ref} className={className}>
      {trail.map((style, index) => (
        <animated.div key={index} style={{ ...style, transitionDelay: `${index * staggerDelay}ms` }}>
          {items[index]}
        </animated.div>
      ))}
    </div>
  )
}
