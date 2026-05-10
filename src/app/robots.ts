import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://arctura-analytics.vercel.app'
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${base}/sitemap.xml`,
    host: base
  }
}
