import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rebirthsdc.org'
  const now = new Date()

  const routes = [
    '/',
    '/mission',
    '/director',
    '/our-story',
    '/technology',
    '/partnerships',
    '/resources',
    '/community',
    '/volunteers',
    '/portal',
    '/privacy-policy',
    '/terms-of-use',
    '/legal-disclosures',
    '/fair-housing',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: route === '/' ? 1 : 0.7,
  }))
}
