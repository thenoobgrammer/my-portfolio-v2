import { BlogMetadata, BlogPost } from '../types'

import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const BLOG_CONTENT_DIR = path.join(process.cwd(), 'src/features/blogs/content')

export async function getBlogBySlug(slug: string, locale: string): Promise<BlogPost | null> {
	try {
		const fullPath = path.join(BLOG_CONTENT_DIR, locale, `${slug}.md`)
		const fileContents = fs.readFileSync(fullPath, 'utf8')
		const { data, content } = matter(fileContents)

		return {
			...data,
			slug,
			content,
			locale,
		} as BlogPost
	} catch (error) {
		console.error(`Error loading blog post: ${slug}`, error)
		return null
	}
}

export async function getAllBlogs(locale: string): Promise<BlogMetadata[]> {
	try {
		const localeDir = path.join(BLOG_CONTENT_DIR, locale)
		const files = fs.readdirSync(localeDir)

		const blogs = files
			.filter((filename) => filename.endsWith('.md'))
			.map((filename) => {
				const fullPath = path.join(localeDir, filename)
				const fileContents = fs.readFileSync(fullPath, 'utf8')
				const { data } = matter(fileContents)
				const slug = filename.replace(/\.md$/, '')

				return {
					...data,
					slug,
					locale,
				} as BlogMetadata
			})
			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

		return blogs
	} catch (error) {
		console.error(`Error loading blogs for locale: ${locale}`, error)
		return []
	}
}

export async function searchBlogs(query: string, locale: string): Promise<BlogMetadata[]> {
	const allBlogs = await getAllBlogs(locale)
	const searchQuery = query.toLowerCase()

	return allBlogs.filter((blog) => {
		const titleMatch = blog.title.toLowerCase().includes(searchQuery)
		const subtitleMatch = blog.subtitle.toLowerCase().includes(searchQuery)
		const synopsisMatch = blog.synopsis.toLowerCase().includes(searchQuery)
		const categoryMatch = blog.categories.some((category) => category.toLowerCase().includes(searchQuery))
		const tagMatch = blog.tags.some((tag) => tag.toLowerCase().includes(searchQuery))

		return titleMatch || subtitleMatch || synopsisMatch || categoryMatch || tagMatch
	})
}

export async function getBlogsByCategory(category: string, locale: string): Promise<BlogMetadata[]> {
	const allBlogs = await getAllBlogs(locale)
	return allBlogs.filter((blog) => blog.categories.includes(category))
}

export async function getBlogsByTag(tag: string, locale: string): Promise<BlogMetadata[]> {
	const allBlogs = await getAllBlogs(locale)
	return allBlogs.filter((blog) => blog.tags.includes(tag))
}

export async function getAllCategories(locale: string): Promise<string[]> {
	const allBlogs = await getAllBlogs(locale)
	const categories = new Set<string>()
	allBlogs.forEach((blog) => blog.categories.forEach((category) => categories.add(category)))
	return Array.from(categories)
}

export async function getAllTags(locale: string): Promise<string[]> {
	const allBlogs = await getAllBlogs(locale)
	const tags = new Set<string>()
	allBlogs.forEach((blog) => blog.tags.forEach((tag) => tags.add(tag)))
	return Array.from(tags)
}
