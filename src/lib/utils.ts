export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(' ')
}

export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/PowerShade-Website' : ''
}

export function getImagePath(path: string) {
  const basePath = getBasePath()
  return `${basePath}${path}`
}
