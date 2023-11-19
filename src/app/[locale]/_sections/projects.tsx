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
			<h4 className="text-light/90 font-medium leading-tight tracking-tight capitalize mb-5">Projects</h4>
			<div className="grid grid-cols-2 gap-3">
				{PersonalProjects.map((project, idx) => (
					<div
						key={idx}
						className="group relative p-3 m-1 rounded-md overflow-hidden hover:-translate-y-2 transition-all"
					>
						<div className="absolute inset-0 bg-dark/10 group-hover:cursor-pointer" />
						<div className="absolute top-2 right-2 flex items-center gap-x-2 group-hover:text-accent-400 transition-all">
							<IconButton>
								<Link href={project.gitUrl} target="_blank">
									<VscGithub size={20} />
								</Link>
							</IconButton>
							<IconButton>
								<Link href={project.url || '#'} target="_blank">
									<CgExternal size={20} />
								</Link>
							</IconButton>
						</div>
						<p className="text-lg text-light/80 group-hover:text-accent-400 transition-all">{project.name}</p>
						<p className="text-light/60">{t(project.summary)}</p>
						<div className="flex flex-wrap">
							{project.technologies.map((tech, idx) => (
								<Chip className="group-hover:text-accent-400 transition-all" key={idx}>
									{tech}
								</Chip>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
