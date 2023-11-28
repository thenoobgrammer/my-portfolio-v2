import { Address, Education, Email, PersonalProjects, Phone, SpokenLanguages, WorkExperiences } from 'lib/data'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import Chip from 'src/components/Chip'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Resume() {
	const t = useTranslations('Resume')

	return (
		<div
			id="resume"
			className="flex h-[95%] flex-col gap-y-6 overflow-y-scroll scroll-smooth p-5 text-inherit md:flex-row-reverse md:p-10"
		>
			{/* Information */}
			<div className="flex flex-col gap-y-6">
				<div>
					<span className="text-lg text-accent-300">{t('My information')}</span>
					<div className="group flex flex-col gap-y-1">
						<span>{Address}</span>
						<a href={`mailto:${Email}`} className="text-accent-200 underline transition-all hover:text-amber-50">
							{Email}
						</a>
						<span>{Phone}</span>
						<span>{SpokenLanguages.join(', ')}</span>
					</div>
				</div>
				<div>
					<span className="text-lg text-accent-300">{t('Education')}</span>
					<div className="flex flex-col gap-y-6">
						{Education.map(({ start, end, institution, program }, idx) => (
							<div className="flex flex-col items-start" key={idx}>
								<span className="text-sm font-extralight text-light/50">
									{start} - {end} - {institution}
								</span>
								<span>{t(program)}</span>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* Experience */}
			<div className="flex flex-col gap-y-7">
				<>
					<h6 className="text-accent-300">{t('Work experience')}</h6>
					<div className="flex flex-col gap-y-4">
						{WorkExperiences.map(({ start, end, url, company, title, descriptions, technologies }, idx) => (
							<>
								<div className="inline-flex items-center gap-x-2">
									<span>{t(title)}</span>
									<Link
										href={url}
										className="font-semibold transition-all hover:-translate-y-1 hover:translate-x-1 hover:text-accent-300"
										target="_blank"
									>
										{company}
									</Link>
									<span className="text-sm font-extralight text-light/50">
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
											<Chip className="group/chip hover:bg-accent/70" key={tag}>
												<Link href={url} className="chip-link group-hover/chip:text-accent-200" target="_blank">
													{name}
												</Link>
											</Chip>
										))}
									</li>
								</ul>
							</>
						))}
					</div>
				</>
				<>
					<h6 className="text-accent-300">{t('Projects')}</h6>
					<div className="flex flex-col gap-y-4">
						{PersonalProjects.map(({ url, gitUrl, type, descriptions, technologies, name }, idx) => (
							<>
								<div className="inline-flex items-center gap-x-3">
									<span>{name}</span>
									<span>{`(${type})`}</span>
									{url && (
										<Link
											href={url}
											className="font-semibold transition-all hover:-translate-y-1 hover:translate-x-1 hover:text-accent-300"
											target="_blank"
										>
											<FaExternalLinkAlt />
										</Link>
									)}
									<Link
										href={gitUrl}
										className="font-semibold transition-all hover:-translate-y-1 hover:translate-x-1 hover:text-accent-300"
										target="_blank"
									>
										<FaGithub />
									</Link>
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
											<Chip className="group/chip hover:bg-accent/70" key={tag}>
												<Link href={url} className="chip-link group-hover/chip:text-accent-200" target="_blank">
													{name}
												</Link>
											</Chip>
										))}
									</li>
								</ul>
							</>
						))}
					</div>
				</>
			</div>
		</div>
	)
}
