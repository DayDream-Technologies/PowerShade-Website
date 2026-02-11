import { Link } from 'react-router-dom'
import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-ocean-500 text-white hover:bg-ocean-600 shadow-button hover:shadow-button-hover',
  secondary: 'bg-white text-ocean-500 border-2 border-ocean-500 hover:bg-ocean-50',
  outline: 'bg-transparent text-white border-2 border-white hover:bg-white/10',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const springProps = useSpring({
    transform: isHovered ? 'scale(1.02) translateY(-2px)' : 'scale(1) translateY(0px)',
    config: { tension: 300, friction: 20 },
  })

  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold rounded-lg
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-ocean-300 focus:ring-offset-2
    disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `

  if (href && !disabled) {
    return (
      <animated.div
        style={springProps}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={href} className={baseClasses}>
          {children}
        </Link>
      </animated.div>
    )
  }

  return (
    <animated.button
      style={springProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </animated.button>
  )
}
