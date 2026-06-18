import type { MetadataRoute } from "next"
import { getAllPosts, getAllProjects } from "@/lib/content"

const BASE_URL = "https://www.greenhouselabs.io"
const SITE_UPDATED_AT = new Date("2026-06-18")

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const projects = getAllProjects()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: SITE_UPDATED_AT, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: SITE_UPDATED_AT, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/products`, lastModified: SITE_UPDATED_AT, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/products/cuescope-mcp`, lastModified: SITE_UPDATED_AT, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/projects`, lastModified: SITE_UPDATED_AT, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: SITE_UPDATED_AT, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: SITE_UPDATED_AT, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/privacy`, lastModified: SITE_UPDATED_AT, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: SITE_UPDATED_AT, changeFrequency: "yearly", priority: 0.3 },
  ]

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.frontmatter.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.frontmatter.slug}`,
    lastModified: new Date(project.frontmatter.updated_at),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages, ...projectPages]
}
