import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

// Helper to safely join siteUrl + path without double slashes
function joinUrl(base: string, path: string) {
  return `${base.replace(/\/$/, '')}/${path.replace(/^\/+/, '')}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      // url: `${siteUrl}/${post.path}`,
      url: joinUrl(siteUrl, post.path),
      lastModified: post.lastmod || post.date,
    }))

  const routes = ['', 'blog'].map((route) => ({
    //url: `${siteUrl}/${route}`,
    url: joinUrl(siteUrl, route),
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogRoutes]
}
