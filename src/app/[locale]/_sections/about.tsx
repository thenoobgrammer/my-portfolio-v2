import { useTranslations } from 'next-intl'

export default function About() {
	const t = useTranslations('About')

	return (
		<div className="space-y-3 text-light/80">
			<p className="text-md font-medium leading-8">{t('p1')}</p>
			<p className="text-md font-medium leading-8">{t('p2')}</p>
			<p className="text-md font-medium leading-8">
				{t('p3', {
					company: 'GoTo',
				})}
			</p>
		</div>
	)
}
