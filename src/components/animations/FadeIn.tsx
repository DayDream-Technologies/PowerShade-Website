'use client'

import { useSpring, animated } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  className?: string
  once?: boolean
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  distance = 30,
  className = '',
  once = true,
}: FadeInProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  })

  const getTransform = (isVisible: boolean) => {
    if (isVisible) return 'translate3d(0, 0, 0)'
    
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`
      case 'down':
        return `translate3d(0, -${distance}px, 0)`
      case 'left':
        return `translate3d(${distance}px, 0, 0)`
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`
      default:
        return 'translate3d(0, 0, 0)'
    }
  }

  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: getTransform(inView),
    delay,
    config: { tension: 280, friction: 60 },
  })

  return (
    <animated.div ref={ref} style={spring} className={className}>
      {children}
    </animated.div>
  )
}
