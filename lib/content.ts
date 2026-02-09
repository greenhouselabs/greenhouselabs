import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"
import type { BlogPost, BlogFrontmatter, Project, ProjectFrontmatter } from "./types"

const BLOG_DIR = path.join(process.cwd(), "content", "blog")
const PROJECTS_DIR = path.join(process.cwd(), "content", "projects")

function getMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"))
}

// --- Blog ---

export function getAllPosts(): BlogPost[] {
  const files = getMdxFiles(BLOG_DIR)

  const posts = files
    .map((filename) => {
      const filePath = path.join(BLOG_DIR, filename)
      const fileContent = fs.readFileSync(filePath, "utf-8")
      const { data, content } = matter(fileContent)
      const frontmatter = data as BlogFrontmatter

      if (!frontmatter.published) return null

      return {
        frontmatter,
        content,
        readingTime: readingTime(content).text,
      }
    })
    .filter(Boolean) as BlogPost[]

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | null {
  const files = getMdxFiles(BLOG_DIR)

  for (const filename of files) {
    const filePath = path.join(BLOG_DIR, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(fileContent)
    const frontmatter = data as BlogFrontmatter

    if (frontmatter.slug === slug) {
      return {
        frontmatter,
        content,
        readingTime: readingTime(content).text,
      }
    }
  }

  return null
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((post) => post.frontmatter.slug)
}

// --- Projects ---

export function getAllProjects(): Project[] {
  const files = getMdxFiles(PROJECTS_DIR)

  const projects = files.map((filename) => {
    const filePath = path.join(PROJECTS_DIR, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(fileContent)

    return {
      frontmatter: data as ProjectFrontmatter,
      content,
    }
  })

  return projects.sort(
    (a, b) =>
      new Date(b.frontmatter.updated_at).getTime() -
      new Date(a.frontmatter.updated_at).getTime()
  )
}

export function getProjectBySlug(slug: string): Project | null {
  const files = getMdxFiles(PROJECTS_DIR)

  for (const filename of files) {
    const filePath = path.join(PROJECTS_DIR, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(fileContent)
    const frontmatter = data as ProjectFrontmatter

    if (frontmatter.slug === slug) {
      return { frontmatter, content }
    }
  }

  return null
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.frontmatter.featured)
}

export function getProjectSlugs(): string[] {
  return getAllProjects().map((p) => p.frontmatter.slug)
}
