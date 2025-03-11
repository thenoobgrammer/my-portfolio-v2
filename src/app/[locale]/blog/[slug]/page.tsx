import BlogContent from 'src/features/blogs/components/BlogContent'
import Link from 'next/link'
import { getBlogBySlug } from 'src/features/blogs/utils/markdown'
import { getTranslations } from 'next-intl/server'

export default async function BlogPostPage({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
	const t = await getTranslations('Blog')
	const blog = await getBlogBySlug(slug, locale)

	if (!blog) {
		return (
			<div className="flex min-h-screen flex-col items-center justify-center bg-dark">
				<h1 className="text-2xl font-bold text-highlight">{t('Blog post not found')}</h1>
				<Link href="/blog" className="mt-4 text-accent-200 hover:text-highlight">
					← {t('Return to blog')}
				</Link>
			</div>
		)
	}

	return (
		<div className="relative bg-dark px-5 py-10">
			<div className="relative mx-auto flex min-h-screen max-w-screen-xl flex-col px-5 py-10">
				<Link href="/blog" className="mb-8 text-accent-200 hover:text-highlight">
					← {t('Back to blog')}
				</Link>
				<BlogContent blog={blog} />
			</div>
		</div>
	)
}
