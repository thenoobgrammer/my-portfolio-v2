'use client'

import { CgExternal } from 'react-icons/cg'
import Chip from 'src/components/Chip'
import IconButton from 'src/components/IconButton'
import Link from 'next/link'
import { PersonalProjects } from 'lib/data'
import { VscGithub } from 'react-icons/vsc'
import { useTranslations } from 'next-intl'

export default function Projects() {
	const t = useTranslations('Resume')

	return (
		<div className="relative max-w-screen-lg min-h-[400px] items-center mx-auto px-5 py-10 space-y-3">
			<h4 className="text-light font-medium capitalize mb-5">{t('Projects')}</h4>
			<div className="grid grid-cols-2 gap-3">
				{PersonalProjects.map((project, idx) => (
					<div
						key={idx}
						className="group relative flex flex-col justify-start p-3 m-1 rounded-md bg-accent-200/5 overflow-hidden transition-all cursor-pointer shadow-md hover:bg-accent/10 hover:-translate-y-2 hover:shadow-accent-200/5"
					>
						<div className="absolute top-2 right-2 flex items-center gap-x-2 group-hover:text-accent-light transition-all">
							<IconButton className="group-hover:text-accent-light/90">
								<Link href={project.gitUrl} target="_blank">
									<VscGithub size={20} />
								</Link>
							</IconButton>
							<IconButton className="group-hover:text-accent-light/90">
								<Link href={project.url || '#'} target="_blank">
									<CgExternal size={20} />
								</Link>
							</IconButton>
						</div>
						<p className="text-lg text-light font-semibold group-hover:text-accent-primary transition-all">
							{project.name}
						</p>
						<p className="flex-grow text-light">{t(project.summary)}</p>
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
				))}
			</div>
		</div>
	)
}
