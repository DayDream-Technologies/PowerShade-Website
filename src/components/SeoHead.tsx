import { Helmet } from 'react-helmet-async'
import { siteUrl, defaultOgImage, defaultOgImageAlt } from '@/config/site'

interface SeoHeadProps {
  title: string
  description: string
  path?: string
  ogImage?: string
  ogImageAlt?: string
}

/**
 * Per-page SEO: canonical URL, Open Graph, and Twitter Card.
 * Use with path like "/", "/about", "/uses", "/shop".
 */
export function SeoHead({
  title,
  description,
  path = '/',
  ogImage = defaultOgImage,
  ogImageAlt = defaultOgImageAlt,
}: SeoHeadProps) {
  const canonicalUrl = `${siteUrl}${path === '/' ? '' : path}`
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="PowerShade" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={ogImageAlt} />
    </Helmet>
  )
}
