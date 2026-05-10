import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://arctura-analytics.vercel.app'
  const now = new Date()
  const staticPages: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/contact'
  ].map((p) => ({ url: base + p, lastModified: now }))
  return staticPages
}
