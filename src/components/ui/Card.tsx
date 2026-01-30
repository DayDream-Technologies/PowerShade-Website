'use client'

import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function Card({
  children,
  className = '',
  hover = true,
  padding = 'md',
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const springProps = useSpring({
    transform: hover && isHovered ? 'translateY(-8px)' : 'translateY(0px)',
    boxShadow: hover && isHovered
      ? '0 20px 40px rgba(0, 119, 182, 0.15)'
      : '0 4px 20px rgba(0, 119, 182, 0.08)',
    config: { tension: 300, friction: 20 },
  })

  return (
    <animated.div
      style={springProps}
      className={`
        bg-white rounded-xl border border-gray-100
        transition-colors duration-300
        ${hover ? 'hover:border-ocean-200' : ''}
        ${paddingClasses[padding]}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </animated.div>
  )
}
