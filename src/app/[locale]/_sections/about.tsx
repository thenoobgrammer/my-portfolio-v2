'use client'

import { useTranslations } from 'next-intl'

export default function About() {
	const t = useTranslations('About')

	return (
		<div className="flex items-center w-full h-[50vh] bg-light px-5 py-10">
			<div className="w-[960px] h-fit mx-auto space-y-4 overflow-y-hidden">
				<h3 className="text-dark/90 font-medium leading-tight tracking-tight capitalize underline mb-8">
					{t('title')}
				</h3>
				<p className="font-medium text-md leading-8">{t('p1')}</p>
				<p className="font-medium text-md leading-8">
					{t('p2')}{' '}
					<a
						className="rounded-md text-accent-400 font-semibold hover:text-accent-500 hover:bg-accent-200/50 hover:p-1 transition-all"
						href="https://goto.com"
						target="_blank"
					>
						GoTo
					</a>{' '}
					{t('p3')}{' '}
				</p>
				<p className="font-medium text-md leading-8">{t('p4')}</p>
			</div>
		</div>
	)
}
