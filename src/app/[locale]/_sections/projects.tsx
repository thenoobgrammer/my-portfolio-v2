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
		<div className="relative mx-auto min-h-[400px] max-w-screen-lg items-center space-y-3 px-10 py-10 md:px-0">
			<h4 className="mb-5 font-medium capitalize text-light">{t('Projects')}</h4>
			<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
				{PersonalProjects.map((project, idx) => (
					<div
						key={idx}
						className="group relative m-1 flex cursor-pointer flex-col justify-start overflow-hidden rounded-md bg-accent-200/5 p-3 shadow-md transition-all hover:-translate-y-2 hover:bg-accent/10 hover:shadow-accent-200/5"
					>
						<div className="group-hover:text-accent-light absolute right-2 top-2 flex items-center gap-x-2 transition-all">
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
						<p className="group-hover:text-accent-primary text-lg font-semibold text-light transition-all">
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
