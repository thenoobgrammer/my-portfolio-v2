'use client'

import { BlogPost } from '../types'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import { useTranslations } from 'next-intl'

interface BlogContentProps {
	blog: BlogPost
}

export default function BlogContent({ blog }: BlogContentProps) {
	const t = useTranslations('Blog')

	return (
		<article className="prose prose-invert mx-auto max-w-4xl">
			{/* Blog Header */}
			<header className="mb-8">
				<h1 className="text-4xl mb-4 font-bold text-highlight">{blog.title}</h1>
				<h2 className="text-2xl mb-4 text-accent-200">{blog.subtitle}</h2>
				<div className="mb-6">
					<Image src={blog.thumbnail} alt={blog.title} width={800} height={400} className="rounded-lg" priority />
				</div>
				<div className="flex flex-wrap items-center gap-4 text-sm text-accent-200">
					<time dateTime={blog.date}>
						{new Date(blog.date).toLocaleDateString(blog.locale, {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</time>
					<div className="flex gap-2">
						{blog.categories.map((category) => (
							<span key={category} className="rounded-full bg-light/10 px-3 py-1 text-xs text-accent-200">
								{category}
							</span>
						))}
					</div>
				</div>
			</header>

			{/* Blog Content */}
			<div className="prose-headings:text-highlight prose-a:text-highlight prose-a:no-underline prose-a:transition-colors hover:prose-a:text-accent-200 prose-blockquote:border-highlight prose-blockquote:text-accent-200 prose-strong:text-accent-200 prose-code:text-highlight prose-pre:bg-light/5">
				<ReactMarkdown
					rehypePlugins={[rehypeHighlight]}
					components={{
						// Custom components for markdown elements
						img: ({ src, alt }) => (
							<Image src={src || ''} alt={alt || ''} width={800} height={400} className="rounded-lg" />
						),
						a: ({ href, children }) => (
							<a href={href} target="_blank" rel="noopener noreferrer">
								{children}
							</a>
						),
					}}
				>
					{blog.content}
				</ReactMarkdown>
			</div>

			{/* Tags */}
			<footer className="mt-8 flex flex-wrap gap-2">
				{blog.tags.map((tag) => (
					<span key={tag} className="rounded-full bg-light/10 px-3 py-1 text-xs text-accent-200">
						#{tag}
					</span>
				))}
			</footer>
		</article>
	)
}
