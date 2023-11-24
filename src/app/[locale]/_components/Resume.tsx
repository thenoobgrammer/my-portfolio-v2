import {
	Address,
	Education,
	Email,
	Languages,
	PersonalProjects,
	Phone,
	SpokenLanguages,
	WorkExperiences,
} from 'lib/data'
import { FaExternalLinkAlt, FaGit, FaGithub } from 'react-icons/fa'

import Chip from 'src/components/Chip'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Resume() {
	const t = useTranslations('Resume')

	return (
		<div id="CV" className="flex text-inherit scroll-smooth h-[95%] overflow-y-scroll px-10 py-10">
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
										className="font-semibold hover:text-accent-300 hover:translate-x-1 hover:-translate-y-1 transition-all"
										target="_blank"
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
											className="font-semibold hover:text-accent-300 hover:translate-x-1 hover:-translate-y-1 transition-all"
											target="_blank"
										>
											<FaExternalLinkAlt />
										</Link>
									)}
									<Link
										href={gitUrl}
										className="font-semibold hover:text-accent-300 hover:translate-x-1 hover:-translate-y-1 transition-all"
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
			<div className="flex flex-col gap-y-10">
				<div>
					<span className="text-lg text-accent-300">{t('My information')}</span>
					<div className="group flex flex-col gap-y-1">
						<span>{Address}</span>
						<span>{Email}</span>
						<span>{Phone}</span>
						<span>{SpokenLanguages.join(', ')}</span>
					</div>
				</div>
				<div>
					<span className="text-lg text-accent-300">{t('Education')}</span>
					<div className="flex flex-col gap-y-4">
						{Education.map(({ start, end, institution, program }, idx) => (
							<div className="flex flex-col items-start" key={idx}>
								<span className="text-sm text-light/50 font-extralight">
									{start} - {end} - {institution}
								</span>
								<span>{t(program)}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
