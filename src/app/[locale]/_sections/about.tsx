'use client'

import { useTranslations } from 'next-intl'

export default function About() {
	const t = useTranslations('About')

	return (
		<div className="flex items-center w-full h-[50vh] bg-secondary text-primary px-5 py-10">
			<div className="w-[960px] h-fit mx-auto space-y-4 overflow-y-hidden">
				<h3 className="text-primary font-normal leading-tight tracking-tight capitalize mb-8">
					{t('title')}
				</h3>
				<p className="font-medium text-md leading-8">{t('p1')}</p>
				<p className="font-medium text-md leading-8">
					{t('p2')}{' '}
					<a
						className="link"
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
