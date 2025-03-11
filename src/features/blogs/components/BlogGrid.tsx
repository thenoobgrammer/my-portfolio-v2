'use client'

import { BlogFilterState, BlogMetadata } from '../types'
import { useCallback, useEffect, useMemo, useState } from 'react'

import BlogCard from './BlogCard'
import { useTranslations } from 'next-intl'

interface BlogGridProps {
	blogs: BlogMetadata[]
}

export default function BlogGrid({ blogs }: BlogGridProps) {
	const [mounted, setMounted] = useState(false)
	const t = useTranslations('Blog')
	const [filter, setFilter] = useState<BlogFilterState>({
		categories: [],
		tags: [],
		searchQuery: '',
	})
	const handleSearchChange = useCallback((query: string) => {
		setFilter((prev) => ({ ...prev, searchQuery: query }))
	}, [])

	useEffect(() => {
		setMounted(true)
	}, [])

	const filteredBlogs = useMemo(() => {
		return blogs.filter((blog) => {
			if (filter.searchQuery) {
				const searchLower = filter.searchQuery.toLowerCase()
				const matchesSearch =
					blog.title.toLowerCase().includes(searchLower) ||
					blog.subtitle.toLowerCase().includes(searchLower) ||
					blog.synopsis.toLowerCase().includes(searchLower)
				if (!matchesSearch) return false
			}

			if (filter.categories.length > 0) {
				const hasCategory = blog.categories.some((category) => filter.categories.includes(category))
				if (!hasCategory) return false
			}

			if (filter.tags.length > 0) {
				const hasTag = blog.tags.some((tag) => filter.tags.includes(tag))
				if (!hasTag) return false
			}

			return true
		})
	}, [blogs, filter])

	if (!mounted) {
		return (
			<div className="flex h-64 items-center justify-center">
				<div className="h-8 w-8 animate-spin rounded-full border-4 border-highlight border-t-transparent" />
			</div>
		)
	}

	return (
		<div className="flex flex-col gap-y-8">
			{/* Search and Filter Section */}
			<div className="flex flex-col gap-4 rounded-lg bg-light/5 p-4 md:flex-row md:items-center md:justify-between">
				<input
					type="text"
					placeholder={t('searchPlaceholder')}
					value={filter.searchQuery}
					onChange={(e) => handleSearchChange(e.target.value)}
					className="rounded-md bg-light/10 px-4 py-2 text-light outline-none focus:ring-2 focus:ring-highlight"
				/>
			</div>

			{/* Blog Grid */}
			<div className="grid grid-cols-2 gap-8 p-2">
				{filteredBlogs.map((blog) => (
					<BlogCard key={blog.slug} blog={blog} />
				))}
			</div>

			{/* No Results Message */}
			{filteredBlogs.length === 0 && <div className="text-center text-accent-200">{t('noResults')}</div>}
		</div>
	)
}
