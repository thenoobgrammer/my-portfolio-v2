'use client'

import { BlogMetadata } from '../types'
import Chip from 'src/components/Chip'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

interface BlogCardProps {
	blog: BlogMetadata
}

export default function BlogCard({ blog }: BlogCardProps) {
	const t = useTranslations('Blog')

	return (
		<Link href={`/blog/${blog.slug}`} className="group">
			<article className="relative w-full cursor-pointer place-items-center gap-3 text-left transition-all">
				<div className="absolute -inset-3 z-0 rounded-md border border-light/20 transition-all group-hover:bg-light/5 md:-inset-4" />

				{/* Text Content */}
				<Image
					className="w-full rounded-lg border-2 border-light/20 transition-all group-hover:border-light/60"
					src={blog.thumbnail}
					width={200}
					height={150}
					alt={blog.title}
				/>
				<div className="z-10 flex flex-col gap-y-4  text-light">
					<div className="flex flex-col gap-y-2">
						<h4 className="text-xl font-semibold transition-all group-hover:text-highlight">{blog.title}</h4>
						<h6 className="text-md text-accent-200">{blog.subtitle}</h6>
					</div>

					<p className="text-sm text-light">{blog.synopsis}</p>

					<div className="flex flex-wrap gap-2">
						{blog.categories.map((category) => (
							<Chip key={category} className="group-hover/chip:bg-highlight group-hover/chip:text-accent-200">
								{category}
							</Chip>
						))}
					</div>

					<div className="text-sm text-accent-200">
						{new Date(blog.date).toLocaleDateString(blog.locale, {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</div>
				</div>

				{/* Thumbnail */}
				<div className="col-span-2"></div>
			</article>
		</Link>
	)
}
