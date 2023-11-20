import {
	Address,
	Education,
	Email,
	Languages,
	PersonalProjects,
	Phone,
	SpokenLanguages,
	Website,
	WorkExperiences,
} from 'lib/data'

import { BiLinkExternal } from 'react-icons/bi'
import Chip from 'src/components/Chip'
import Link from 'next/link'
import { cn } from 'src/utils/common'
import { useTranslations } from 'next-intl'

export default function Resume() {
	const t = useTranslations('Resume')

	return (
		<div
			id="CV"
			className="flex flex-col h-full font-medium text-inherit w-full gap-11 scroll-smooth md:flex-row md:max-h-[70vh] p-4"
		>
			<div className="flex flex-col gap-y-7">
				<h5 className="text-accent-300">{t('Work experience')}</h5>
				<div className="flex flex-col gap-y-4">
					{WorkExperiences.map(
						(
							{ start, end, link, company, title, logoClassname, descriptions, descriptionsHighlighted, technologies },
							idx,
						) => (
							<>
								<div className="inline-flex items-center gap-x-2">
									<span className={cn('w-10 h-6 bg-contain bg-no-repeat bg-center', logoClassname)} />
									<span>{t(title)}</span>
									<Link
										href={link}
										className="font-semibold hover:text-accent-300 hover:translate-x-1 hover:-translate-y-1 transition-all"
									>
										{company}
									</Link>
									<span className="text-sm text-light/50 font-extralight">
										{start}-{end}
									</span>
								</div>
								<ul>
									{descriptions.map((description, innerIdx) => (
										<li className="flex gap-x-4" key={innerIdx}>
											<span>•</span>
											<span>{t(description)}</span>
										</li>
									))}
									<li className="my-1 flex flex-wrap items-center font-semibold">
										{technologies.map(({ name, tag, url }) => (
											<Chip className="group/chip hover:bg-accent-400/70" key={tag}>
												<Link href={url} className="chip-link group-hover/chip:text-accent-200" target="_blank">
													{name}
												</Link>
											</Chip>
										))}
									</li>
								</ul>
							</>
						),
					)}
				</div>
			</div>
			<div className="flex flex-col gap-y-10">
				<div>
					<span className="h4">{t('Personal information')}</span>
					<div className="flex flex-col gap-y-1"></div>
				</div>

				<div>
					<span className="h4">{t('Skillset')}</span>
					<div className="flex flex-col">
						{Languages.map((language, idx) => (
							<span key={idx}>{t(language)}</span>
						))}
					</div>
				</div>
				<div>
					<span className="h4">{t('Education')}</span>
					<div className="flex flex-col gap-y-4">
						{Education.map(({ start, end, institution, program }, idx) => (
							<div className="flex flex-col items-start" key={idx}>
								<span>
									{start} - {end} - {institution}
								</span>
								<span>{program}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
