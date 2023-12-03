import { DialogDispatchContext } from 'src/context/DialogContext'
import Image from 'next/image'
import { cn } from 'src/utils/common'
import { useContext } from 'react'
import { useTranslations } from 'next-intl'

const Packages = [
	{
		title: 'Design.title',
		price: 500,
		imgSrc: '/img1.png',
		description: ['Design.a', 'Design.b', 'Design.c', 'Design.d'],
	},
	{
		title: 'SinglePage.title',
		price: 800,
		imgSrc: '/img2.png',
		description: ['SinglePage.a', 'SinglePage.b', 'SinglePage.c', 'SinglePage.d'],
	},
	{
		title: 'Custom.title',
		price: 2000,
		imgSrc: '/img3.png',
		description: ['Custom.a', 'Custom.b', 'Custom.c', 'Custom.d', 'Custom.e'],
	},
]

export default function Services() {
	const t = useTranslations('Services')

	return (
		<div className="mx-auto max-w-screen-lg items-center">
			{Packages.map(({ title, imgSrc, price, description }, idx) => (
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
								<p className="row-span-1 mb-4 text-lg font-semibold">{t(title)}</p>
								<p className="text-md row-span-1 mb-4 font-medium">({t('Starting from', { price })})</p>
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
	)
}

// ;<a href="https://storyset.com/online">Online illustrations by Storyset</a>
