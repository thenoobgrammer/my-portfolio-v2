import { FaExternalLinkAlt, FaExternalLinkSquareAlt } from 'react-icons/fa'

import { CgExternal } from 'react-icons/cg'
import Chip from 'src/components/Chip'
import IconButton from 'src/components/IconButton'
import Image from 'next/image'
import Link from 'next/link'
import { PersonalProjects } from 'lib/data'
import { VscGithub } from 'react-icons/vsc'
import { useTranslations } from 'next-intl'

export default function Projects() {
	const t = useTranslations('Resume')
	const project = PersonalProjects[0]
	return (
		<div className="relative mx-auto min-h-[400px] max-w-screen-lg items-center space-y-3 px-10 py-10 md:px-0">
			<h4 className="mb-5 font-medium capitalize text-light">{t('Projects')}</h4>
			<ul className=" group/list grid h-fit grid-flow-row grid-cols-1 gap-3 md:grid-cols-2">
				{PersonalProjects.map((project, idx) => (
					<Link
						key={idx}
						href={project.url}
						target="_blank"
						className="group relative grid cursor-pointer gap-2 overflow-hidden p-3 text-left md:grid-flow-col md:grid-cols-2 md:hover:!opacity-100 md:group-hover/list:opacity-50 lg:p-5"
					>
						<div className="absolute inset-0 -z-10 h-full w-full rounded-md transition-all group-hover:bg-light/20" />
						{/* Image */}
						<div className="order-last clear-right block">
							<Image
								className="rounded-md border-2 border-light/20 group-hover:border-light/60"
								src={project.imgSrc}
								width={200}
								height={48}
								alt={project.name}
							/>
						</div>
						{/* Text */}
						<div className="block text-accent-50/80">
							<div className="inline-flex w-full items-center justify-between text-lg font-semibold">
								<span>{project.name}</span>
								<div className="space-x-2">
									<IconButton className="group-hover:text-accent-light/90">
										<Link href={project.gitUrl} target="_blank">
											<VscGithub size={20} />
										</Link>
									</IconButton>
									<IconButton className="group-hover:text-accent-light/90">
										<Link href={project.url || '#'} target="_blank">
											<FaExternalLinkSquareAlt size={20} />
										</Link>
									</IconButton>
								</div>
							</div>
							<p className="text-md">{t(project.summary)}</p>
							<div className="flex flex-wrap">
								{project.technologies.map(({ name, url, tag }) => (
									<Chip className="group/chip hover:bg-accent/70" key={tag}>
										<Link href={url} className="chip-link group-hover/chip:text-accent-200" target="_blank">
											{name}
										</Link>
									</Chip>
								))}
							</div>
						</div>
					</Link>
				))}
			</ul>
		</div>
	)
}
