import Logo from 'src/components/svgs/Logo'
import SEO from '../_components/SEO'
import { baseUrl } from 'src/utils/constants'
import { useTranslations } from 'next-intl'

export default function About() {
	const t = useTranslations('About')

	return (
		<>
			<SEO title="About" description="A little about me. About me" imageUrl={Logo} url={baseUrl} />
			<div className="space-y-3 text-light/80">
				<p className="text-md font-medium leading-8">{t('p1')}</p>
				<p className="text-md font-medium leading-8">{t('p2')}</p>
				<p className="text-md font-medium leading-8">
					{t('p3', {
						company: 'GoTo',
					})}
				</p>
			</div>
		</>
	)
}
