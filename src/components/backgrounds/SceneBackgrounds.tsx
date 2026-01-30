'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SceneBackgroundProps {
  children: ReactNode
  className?: string
}

/**
 * Waves background - gentle ocean waves at the bottom of sections
 */
export function WavesBackground({ children, className }: SceneBackgroundProps) {
  return (
    <div className={cn('scene-waves', className)}>
      {children}
    </div>
  )
}

/**
 * Double layered waves - two layers of waves for more depth
 */
export function WavesDoubleBackground({ children, className }: SceneBackgroundProps) {
  return (
    <div className={cn('scene-waves-double', className)}>
      {children}
    </div>
  )
}

/**
 * Sun rays from top-left corner
 */
export function SunRaysBackground({ children, className }: SceneBackgroundProps) {
  return (
    <div className={cn('scene-sun-rays', className)}>
      {children}
    </div>
  )
}

/**
 * Sun rays from top-right corner
 */
export function SunRaysRightBackground({ children, className }: SceneBackgroundProps) {
  return (
    <div className={cn('scene-sun-rays-right', className)}>
      {children}
    </div>
  )
}

/**
 * Grass pattern at the bottom - perfect for park/outdoor scenes
 */
export function GrassBackground({ children, className }: SceneBackgroundProps) {
  return (
    <div className={cn('scene-grass', className)}>
      {children}
    </div>
  )
}

/**
 * Soft clouds floating in the background
 */
export function CloudsBackground({ children, className }: SceneBackgroundProps) {
  return (
    <div className={cn('scene-clouds', className)}>
      {children}
    </div>
  )
}

/**
 * Sand dunes at the bottom
 */
export function SandDunesBackground({ children, className }: SceneBackgroundProps) {
  return (
    <div className={cn('scene-sand-dunes', className)}>
      {children}
    </div>
  )
}

/**
 * Full beach scene with waves and sand
 */
export function BeachBackground({ children, className }: SceneBackgroundProps) {
  return (
    <div className={cn('scene-beach', className)}>
      {children}
    </div>
  )
}

/**
 * Camping/mountain silhouettes
 */
export function CampingBackground({ children, className }: SceneBackgroundProps) {
  return (
    <div className={cn('scene-camping', className)}>
      {children}
    </div>
  )
}

/**
 * Backyard deck pattern
 */
export function BackyardBackground({ children, className }: SceneBackgroundProps) {
  return (
    <div className={cn('scene-backyard', className)}>
      {children}
    </div>
  )
}

// Export a combined type for scene variants
export type SceneType = 
  | 'waves' 
  | 'waves-double' 
  | 'sun-rays' 
  | 'sun-rays-right' 
  | 'grass' 
  | 'clouds' 
  | 'sand-dunes' 
  | 'beach' 
  | 'camping' 
  | 'backyard'

interface DynamicSceneBackgroundProps extends SceneBackgroundProps {
  scene: SceneType
}

/**
 * Dynamic scene background component - use when scene type needs to be determined at runtime
 */
export function SceneBackground({ scene, children, className }: DynamicSceneBackgroundProps) {
  const sceneClasses: Record<SceneType, string> = {
    'waves': 'scene-waves',
    'waves-double': 'scene-waves-double',
    'sun-rays': 'scene-sun-rays',
    'sun-rays-right': 'scene-sun-rays-right',
    'grass': 'scene-grass',
    'clouds': 'scene-clouds',
    'sand-dunes': 'scene-sand-dunes',
    'beach': 'scene-beach',
    'camping': 'scene-camping',
    'backyard': 'scene-backyard',
  }

  return (
    <div className={cn(sceneClasses[scene], className)}>
      {children}
    </div>
  )
}
