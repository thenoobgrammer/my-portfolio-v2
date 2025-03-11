import BlogGrid from 'src/features/blogs/components/BlogGrid'
import Link from 'next/link'
import { MdHomeFilled } from 'react-icons/md'
import Section from 'src/components/Section'
import { getAllBlogs } from 'src/features/blogs/utils/markdown'
import { getTranslations } from 'next-intl/server'
export default async function BlogPage({ params: { locale } }: { params: { locale: string } }) {
	const blogs = await getAllBlogs(locale)
	const t = await getTranslations('Blog')

	return (
		<div className="min-h-screen w-screen bg-dark px-5 py-10">
			<div className="mx-auto max-w-screen-xl flex-col">
				<Link href={`/${locale}`} className="link mb-4 flex w-fit items-center gap-2 text-light">
					<MdHomeFilled size={20} />
					{/* TODO: Needs translations */}
					Back to homepage
				</Link>
				<Section id="blog" title={t('Blog')}>
					<div className="mb-6">
						<h3 className="text-3xl font-bold text-highlight">{t('Latest Posts')}</h3>
						<p className="mt-2 text-accent-200">{t('explore')}</p>
					</div>
					<BlogGrid blogs={blogs} />
				</Section>
			</div>
		</div>
	)
}
