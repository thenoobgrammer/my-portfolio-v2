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
		<div className="relative mx-auto min-h-[400px] max-w-screen-lg items-center space-y-3 px-10 py-10 md:px-0">
			<h4 className="mx-auto mb-5 max-w-screen-lg font-medium capitalize text-light">{t('Services')}</h4>
			<div className="grid grid-flow-col grid-rows-3 gap-2 text-accent-50 md:grid-flow-row md:grid-cols-3">
				{Packages.map((p, idx) => (
					<div
						key={idx}
						className="m-1 flex flex-col justify-start gap-y-2 rounded-sm border-2 border-accent-100/50 p-3 shadow-inner shadow-dark"
					>
						<p className="flex h-12 items-center border-b-4 border-secondary text-lg font-semibold text-accent-200/90">
							{t(p.title)}
						</p>
						<div className={cn('flex-grow space-y-2')}>
							<p>
								{t('Starting price')} <span className="font-semibold">{p.price}</span>
							</p>
							<p>{t(`What's included`)}:</p>
							<ul className="text-md space-y-2 font-light">
								{p.description.map((d, innerIdx) => (
									<li key={innerIdx} className="flex items-start gap-x-2">
										<span>•</span>
										<span>{t(d)}</span>
									</li>
								))}
							</ul>
						</div>
						<button
							className="m-1 border-2 border-accent-200/50 p-2 font-semibold text-accent-100 transition-all hover:border-light hover:bg-light/50 hover:text-accent"
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
