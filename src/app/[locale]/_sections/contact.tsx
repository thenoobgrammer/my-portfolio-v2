import Logo from 'src/components/svgs/Logo'
import { MdOutlineEmail } from 'react-icons/md'
import SEO from '../_components/SEO'
import { baseUrl } from 'src/utils/constants'
import { useTranslations } from 'next-intl'

export default function Contact() {
	const t = useTranslations('Contact')

	return (
		<>
			<SEO
				title="Contact"
				description="Please contact me if you wish to talk about new projects or any discussions"
				imageUrl={Logo}
				url={baseUrl}
			/>
			<div className="mx-auto max-w-screen-lg text-start text-light">
				<p>{t('Description')}</p>&nbsp;
				<button className="flex w-fit items-center gap-x-2 rounded-md border-2 border-highlight px-3 py-2 transition-all hover:border-highlight/80 hover:bg-highlight/40">
					<MdOutlineEmail />
					<a href="mailto:antoine.hakim33@gmail.com">{t(`Send me an email`)}</a>
				</button>
			</div>
		</>
	)
}
