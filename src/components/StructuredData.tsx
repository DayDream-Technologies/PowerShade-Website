import { Helmet } from 'react-helmet-async'
import { siteUrl } from '@/config/site'
import { faqItems } from '@/data/faq'
import { products } from '@/data/products'
import { absoluteUrl } from '@/lib/utils'

/** Escape </script> in JSON so it doesn't break the script tag. */
function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/<\/script>/gi, '<\\/script>')
}

const organizationId = `${siteUrl}/#organization`

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': organizationId,
  name: 'PowerShade',
  url: `${siteUrl}/`,
  description: 'Solar-powered beach umbrellas that keep your devices charged',
  logo: absoluteUrl('/images/Logos/PowerShade_logo_4._croppedPNG.PNG'),
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PowerShade',
  url: siteUrl,
  description:
    'PowerShade solar-powered beach umbrellas keep your devices charged while you enjoy the sun. Shop our innovative USB-charging umbrellas made in Michigan.',
  publisher: { '@id': organizationId },
}

/** Organization + WebSite schema for all pages. Mount in RootLayout. */
export function GlobalStructuredData() {
  return (
    <Helmet>
      <script type="application/ld+json">{safeJsonLd(organizationSchema)}</script>
      <script type="application/ld+json">{safeJsonLd(webSiteSchema)}</script>
    </Helmet>
  )
}

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer' as const,
      text: item.answer,
    },
  })),
}

function productToSchema(product: (typeof products)[0]) {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'Product' as const,
    name: product.name,
    description: product.description,
    image: absoluteUrl(product.image),
    offers: {
      '@type': 'Offer' as const,
      price: product.price.toFixed(2),
      priceCurrency: 'USD' as const,
    },
  }
}

/** FAQPage + Product list schema for the Shop page. */
export function ShopStructuredData() {
  const productSchemas = products.map(productToSchema)
  return (
    <Helmet>
      <script type="application/ld+json">{safeJsonLd(faqPageSchema)}</script>
      {productSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {safeJsonLd(schema)}
        </script>
      ))}
    </Helmet>
  )
}
