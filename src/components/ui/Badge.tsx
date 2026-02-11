type BadgeVariant = 'bestseller' | 'new' | 'sale' | 'default'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
  pulse?: boolean
}

const variantClasses: Record<BadgeVariant, string> = {
  bestseller: 'bg-sunset-400 text-gray-900',
  new: 'bg-ocean-500 text-white',
  sale: 'bg-red-500 text-white',
  default: 'bg-gray-200 text-gray-700',
}

export function Badge({
  children,
  variant = 'default',
  className = '',
  pulse = false,
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        px-3 py-1 rounded-full
        text-xs font-semibold uppercase tracking-wide
        ${variantClasses[variant]}
        ${pulse ? 'animate-pulse-slow' : ''}
        ${className}
      `}
    >
      {children}
    </span>
  )
}
