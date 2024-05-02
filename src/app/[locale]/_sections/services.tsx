import Image from 'next/image'
import Logo from 'src/components/svgs/Logo'
import SEO from '../_components/SEO'
import { baseUrl } from 'src/utils/constants'
import { cn } from 'src/utils/common'
import { useTranslations } from 'next-intl'

export async function getStaticProps() {
	return {
		props: {
			packages: [
				{
					title: 'Design.title',
					imgSrc: '/img1.png',
					description: ['Design.a', 'Design.b', 'Design.c', 'Design.d'],
				},
				{
					title: 'SinglePage.title',
					imgSrc: '/img2.png',
					description: ['SinglePage.a', 'SinglePage.b', 'SinglePage.c', 'SinglePage.d'],
				},
				{
					title: 'Custom.title',
					imgSrc: '/img3.png',
					description: ['Custom.a', 'Custom.b', 'Custom.c', 'Custom.d', 'Custom.e'],
				},
			],
		},
	}
}

export default function Services({ packages }) {
	const t = useTranslations('Services')
	const t_resume = useTranslations('Resumes')

	return (
		<>
			<SEO title={t_resume('Services')} description={t_resume('ServicesDescription')} imageUrl={Logo} url={baseUrl} />
			<div className="mx-auto max-w-screen-lg text-start">
				{packages.map(({ title, imgSrc, description }, idx) => (
					<div key={idx} className="grid-rows-8 mb-16 grid grid-flow-row grid-cols-1 text-accent-50">
						<div className="grid-rows-8 grid gap-8 md:grid-cols-8">
							<Image
								width={300}
								height={220}
								className={cn('col row-span-4 rounded-md md:col-span-4', idx % 2 !== 0 && 'md:order-last')}
								alt=""
								src={imgSrc}
							/>
							<ul className="row-span-4 md:col-span-4">
								<div className="inline-flex items-center gap-x-2">
									<p className="row-span-1 mb-4 text-lg font-semibold text-highlight">{t(title)}</p>
								</div>
								{description.map((text, innerIdx) => (
									<li key={innerIdx} className="flex items-start gap-x-2">
										<span>•</span> {t(text)}
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</>
	)
}
