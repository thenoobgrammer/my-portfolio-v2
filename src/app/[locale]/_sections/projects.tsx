import Chip from 'src/components/Chip'
import IconButton from 'src/components/IconButton'
import Image from 'next/image'
import Link from 'next/link'
import { PersonalProjects } from 'lib/data'
import { VscGithub } from 'react-icons/vsc'
import { useTranslations } from 'next-intl'

export default function Projects() {
	const t = useTranslations('Resume')

	return (
		<div className="mx-auto max-w-screen-lg items-center">
			<ul className="group/list grid h-fit grid-flow-row grid-cols-1">
				{PersonalProjects.map((project, idx) => (
					<li key={idx} className="mb-12">
						<div className="group pointer-events-auto relative grid w-fit cursor-pointer place-items-center justify-center gap-3 text-left transition-all md:grid-cols-5 lg:grid-flow-col lg:place-items-center lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
							<div className="absolute -inset-3 z-0 rounded-md transition-all group-hover:bg-light/5 md:-inset-4" />
							{/* Text */}
							<div className="z-10 col-span-3 flex flex-col gap-y-4 text-light">
								<div className="inline-flex items-center">
									<span className="text-md group-hover:text-highlight pr-2 font-semibold transition-all">
										{project.name}
									</span>
									<IconButton className="group-hover:text-highlight">
										<Link href={project.gitUrl} target="_blank">
											<VscGithub size={20} />
										</Link>
									</IconButton>
								</div>
								<a href={project.url} target="_blank" rel="noreferrer" className="text-md">
									{t(project.summary)}
									<span className="absolute -inset-3 -z-10 md:-inset-4 lg:block" />
								</a>
								<div className="flex flex-wrap">
									{project.technologies.map(({ name, url, tag }) => (
										<Chip className="group-hover/chip:bg-highlight group-hover/chip:text-accent-200" key={tag}>
											<Link href={url} className="chip-link" target="_blank">
												{name}
											</Link>
										</Chip>
									))}
								</div>
							</div>
							{/* Image */}
							<Image
								className="col-span-2 rounded-lg border-2 border-light/20 transition-all group-hover:border-light/60"
								src={project.imgSrc}
								width={200}
								height={48}
								alt={project.name}
							/>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
