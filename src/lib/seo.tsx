import type { Metadata } from 'next'
import Script from 'next/script'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://arctura-analytics.vercel.app'

export const site = {
  name: 'Arctura Analytics Limited',
  shortName: 'Arctura Analytics',
  url: SITE_URL,
  description:
    'Arctura Analytics builds modern data platforms, analytics, and AI that turn data into decisions.',
  twitter: '@arctura_analytics'
}

export const defaultMetadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.shortName}`
  },
  description: site.description,
  metadataBase: new URL(site.url),
  alternates: { canonical: '/' },
  openGraph: {
    title: site.name,
    description: 'Modern data engineering, BI, and AI solutions for faster, smarter decisions.',
    type: 'website',
    url: site.url,
    images: ['/og.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: site.shortName,
    description: 'From Data to Decisions. Delivered.',
    images: ['/og.png']
  },
  icons: { icon: '/brand/logo-dark.svg' }
}

export function buildPageMetadata({
  title,
  description,
  path,
  image
}: {
  title: string
  description?: string
  path?: string
  image?: string
}): Metadata {
  const url = path ? new URL(path, site.url).toString() : site.url
  return {
    title,
    description: description ?? site.description,
    alternates: path ? { canonical: url } : undefined,
    openGraph: {
      title,
      description: description ?? site.description,
      url,
      images: image ? [image] : defaultMetadata.openGraph?.images
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: description ?? site.description,
      images: image ? [image] : defaultMetadata.twitter?.images
    }
  }
}

export function OrganizationJsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    logo: `${site.url}/brand/logo-dark.svg`,
    sameAs: []
  }
  return (
    <Script id="org-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; item: string }[] }) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      item: new URL(it.item, site.url).toString()
    }))
  }
  return (
    <Script id="breadcrumbs-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  )
}

