export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(' ')
}

// Base path for GitHub Pages deployment - uses env variable set in next.config.js
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function img(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}
