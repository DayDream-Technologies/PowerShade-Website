/**
 * Public base URL for the site (no trailing slash).
 * Set VITE_SITE_URL at build time to override (e.g. for production domain).
 */
export const siteUrl =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ||
  'https://dwasilewski3.github.io/PowerShade-Website'

/** Default OG/Twitter image for social sharing (absolute URL). */
export const defaultOgImage = `${siteUrl}/images/pro-product-photo.png`

/** Alt text for the default OG image. */
export const defaultOgImageAlt =
  'PowerShade Pro solar-powered beach umbrella with USB charging ports'
