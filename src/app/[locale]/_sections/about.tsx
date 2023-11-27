'use client'

import { useTranslations } from 'next-intl'

export default function About() {
	const t = useTranslations('About')

	return (
		<div className="flex h-fit w-full items-center bg-secondary px-5 py-10 text-primary">
			<div className="mx-auto h-fit w-[960px] space-y-4 overflow-y-hidden px-10 md:px-0">
				<h3 className="mb-8 font-normal capitalize leading-tight tracking-tight text-primary">{t('title')}</h3>
				<p className="text-md font-medium leading-8">{t('p1')}</p>
				<p className="text-md font-medium leading-8">
					{t('p2')}{' '}
					<a className="link" href="https://goto.com" target="_blank">
						GoTo
					</a>{' '}
					{t('p3')}{' '}
				</p>
				<p className="text-md font-medium leading-8">{t('p4')}</p>
			</div>
		</div>
	)
}
