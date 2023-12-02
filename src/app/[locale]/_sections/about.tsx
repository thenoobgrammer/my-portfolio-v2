import { useTranslations } from 'next-intl'

export default function About() {
	const t = useTranslations('About')

	return (
		<div className="text-light/70">
			<p className="text-md font-medium leading-8">{t('p1')}</p>
			<p className="text-md font-medium leading-8">
				{t('p2', {})}{' '}
				<a
					className="font-semibold text-light transition-all hover:text-accent-300"
					href="https://goto.com"
					target="_blank"
				>
					GoTo
				</a>{' '}
				{t('p3')}
			</p>
		</div>
	)
}
