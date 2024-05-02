import { CgEditBlackPoint } from 'react-icons/cg'
import Dropdown from 'src/components/Dropdown'
import Logo from 'src/components/svgs/Logo'
import SEO from '../_components/SEO'
import { Skillsets } from 'lib/data'
import { baseUrl } from 'src/utils/constants'
import { useTranslations } from 'next-intl'

export default function Skills() {
	const t = useTranslations('Skills')

	return (
		<>
			<SEO title="Skillsets" description="My skillsets" imageUrl={Logo} url={baseUrl} />
			<div className="mx-auto max-w-screen-lg items-center">
				<div className="flex flex-col gap-y-4 text-light">
					{Skillsets.map((s, idx) => (
						<ul key={idx} className="block">
							<Dropdown
								header={
									<div className="flex items-center gap-x-4">
										<p className="text-lg font-semibold">{t(s.title)}</p>
										{s.icon}
									</div>
								}
								content={s.metaData.map((s, idx) => (
									<li key={idx} className="text-md mb-2 inline-flex items-center gap-x-4">
										<CgEditBlackPoint className="text-highlight" size={15} />
										<span className="max-w-xs md:max-w-xl">{t(s)}</span>
									</li>
								))}
							/>
						</ul>
					))}
				</div>
			</div>
		</>
	)
}
