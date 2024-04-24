import LocaleSwitcher from '../_components/LocaleSwitcher'
import { useTranslations } from 'next-intl'

export default function Introduction() {
	const t = useTranslations('Introduction')

	return (
		<div className="space-y-3 whitespace-pre-wrap">
			<div className="mb-6 inline-flex items-center justify-start gap-x-4">
				<h3 className="hidden font-semibold text-light lg:block">Antoine Hakim</h3>
				<h5 className="block font-semibold text-light lg:hidden">Antoine Hakim</h5>
				<LocaleSwitcher />
			</div>

			<h5 id="title" className="font-medium leading-tight text-gray-300/90">
				{t('Web developer, based in Montreal')}
			</h5>
			<p id="desc" className="text-md font-medium text-gray-300/90">
				{t("I'm a full-stack developer with background experience in building complex platforms and design")}
			</p>
		</div>
	)
}
