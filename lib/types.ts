export interface BlogFrontmatter {
  title: string
  slug: string
  date: string
  excerpt: string
  author: string
  categories: string[]
  featured_image?: string
  published: boolean
}

export interface ProjectFrontmatter {
  title: string
  slug: string
  stage: "Seedling" | "Blooming" | "Harvest"
  category: string
  blurb: string
  tags: string[]
  updated_at: string
  featured: boolean
  featured_size?: "2x1" | "1x2" | "1x1"
  sort_order?: number
  hero_image?: string
  icon_image?: string
  tech_stack: string[]
  links?: {
    live?: string
    repo?: string
    doc?: string
  }
  results?: {
    metric: string
    value: string
  }[]
}

export interface BlogPost {
  frontmatter: BlogFrontmatter
  content: string
  readingTime: string
}

export interface Project {
  frontmatter: ProjectFrontmatter
  content: string
}
