import { useSpring, animated } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface SlideInProps {
  children: ReactNode
  delay?: number
  direction?: 'left' | 'right'
  distance?: number
  className?: string
}

export function SlideIn({
  children,
  delay = 0,
  direction = 'left',
  distance = 100,
  className = '',
}: SlideInProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? 'translateX(0)'
      : `translateX(${direction === 'left' ? -distance : distance}px)`,
    delay,
    config: { tension: 200, friction: 40 },
  })

  return (
    <animated.div ref={ref} style={spring} className={className}>
      {children}
    </animated.div>
  )
}
