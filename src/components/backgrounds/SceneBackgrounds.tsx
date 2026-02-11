import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionBackgroundProps {
  children: ReactNode
  className?: string
}

/** Soft gradient (ocean-50 to white) for section variety */
export function SectionSoftGradient({ children, className }: SectionBackgroundProps) {
  return <div className={cn('section-soft-gradient', className)}>{children}</div>
}

/** Very low-opacity grid for a tech feel */
export function SectionSubtleGrid({ children, className }: SectionBackgroundProps) {
  return <div className={cn('section-subtle-grid', className)}>{children}</div>
}

/** Single low-opacity wave at bottom */
export function SectionSoftWave({ children, className }: SectionBackgroundProps) {
  return <div className={cn('section-soft-wave', className)}>{children}</div>
}

export type SceneType = 'soft-gradient' | 'subtle-grid' | 'soft-wave'

interface DynamicSceneBackgroundProps extends SectionBackgroundProps {
  scene: SceneType
}

/** Dynamic section background - use when scene type is determined at runtime */
export function SceneBackground({ scene, children, className }: DynamicSceneBackgroundProps) {
  const sceneClasses: Record<SceneType, string> = {
    'soft-gradient': 'section-soft-gradient',
    'subtle-grid': 'section-subtle-grid',
    'soft-wave': 'section-soft-wave',
  }
  return <div className={cn(sceneClasses[scene], className)}>{children}</div>
}
