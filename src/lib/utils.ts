import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(' ')
}

export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/PowerShade-Website' : ''
}

export function getImagePath(path: string) {
  const basePath = getBasePath()
  return `${basePath}${path}`
}
