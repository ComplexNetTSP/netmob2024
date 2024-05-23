import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url : 'https://netmob.org/',
      lastModified : new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    {
      url : 'https://netmob.org/challenge',
      lastModified : new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
  ]
}