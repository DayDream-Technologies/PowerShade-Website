export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(' ')
}

// Base path for deployment (e.g. GitHub Pages subpath) - Vite sets BASE_URL
export const basePath = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || ''

export function img(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}
