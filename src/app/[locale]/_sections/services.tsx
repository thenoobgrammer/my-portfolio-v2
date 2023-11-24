'use client'

import { DialogDispatchContext } from 'src/context/DialogContext'
import { cn } from 'src/utils/common'
import { useContext } from 'react'
import { useTranslations } from 'next-intl'

const Packages = [
	{
		title: 'Design.title',
		price: 500,
		description: ['Design.a', 'Design.b', 'Design.c', 'Design.d'],
	},
	{
		title: 'SinglePage.title',
		price: 800,
		description: ['SinglePage.a', 'SinglePage.b', 'SinglePage.c', 'SinglePage.d', 'SinglePage.e'],
	},
	{
		title: 'Custom.title',
		price: 2000,
		description: ['Custom.a', 'Custom.b', 'Custom.c', 'Custom.d', 'Custom.e', 'Custom.f'],
	},
]

export default function Services() {
	const dispatch = useContext(DialogDispatchContext)
	const t = useTranslations('Services')

	return (
		<div className="relative max-w-screen-lg min-h-[400px] items-center mx-auto px-5 py-10 space-y-3">
			<h4 className="text-light max-w-screen-lg mx-auto font-medium  capitalize mb-5">{t('Services')}</h4>
			<div className="grid grid-flow-row grid-cols-3 gap-2 text-accent-50">
				{Packages.map((p, idx) => (
					<div
						key={idx}
						className="border-2 border-accent-100/50 rounded-sm p-3 m-1 flex flex-col justify-start gap-y-2 shadow-inner shadow-dark"
					>
						<p className="flex items-center h-12 border-b-4 border-secondary text-lg font-semibold text-accent-200/90">
							{t(p.title)}
						</p>
						<div className={cn('flex-grow space-y-2')}>
							<p>
								{t('Starting price')} <span className="font-semibold">{p.price}</span>
							</p>
							<p>{t(`What's included`)}:</p>
							<ul className="text-md font-light space-y-2">
								{p.description.map((d, innerIdx) => (
									<li key={innerIdx} className="flex items-start gap-x-2">
										<span>•</span>
										<span>{t(d)}</span>
									</li>
								))}
							</ul>
						</div>
						<button
							className="border-2 border-accent-200/50 p-2 m-1 font-semibold text-accent-100 hover:bg-light/50 hover:text-accent hover:border-light transition-all"
							onClick={() => dispatch({ title: '' })}
						>
							{t('Inquire')}
						</button>
					</div>
				))}
			</div>
		</div>
	)
}
