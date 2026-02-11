import { useSpring, animated } from '@react-spring/web'
import { useState, ReactNode } from 'react'

interface ScaleOnHoverProps {
  children: ReactNode
  scale?: number
  className?: string
}

export function ScaleOnHover({
  children,
  scale = 1.05,
  className = '',
}: ScaleOnHoverProps) {
  const [isHovered, setIsHovered] = useState(false)

  const spring = useSpring({
    transform: isHovered ? `scale(${scale})` : 'scale(1)',
    config: { tension: 300, friction: 20 },
  })

  return (
    <animated.div
      style={spring}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </animated.div>
  )
}
