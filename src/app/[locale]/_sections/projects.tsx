'use client'

import { useState } from 'react'
import Chip from 'src/components/Chip'
import IconButton from 'src/components/IconButton'
import Link from 'next/link'
import Logo from 'src/components/svgs/Logo'
import { PersonalProjects } from 'lib/data'
import SEO from '../_components/SEO'
import { VscGithub } from 'react-icons/vsc'
import { baseUrl } from 'src/utils/constants'

const VISIBLE_COUNT = 3

const filteredProjects = PersonalProjects.filter((x) => !['pv1', 'pv2', 'pv12'].includes(x.tag))

export default function Projects() {
	const [expanded, setExpanded] = useState(false)

	const visible = expanded ? filteredProjects : filteredProjects.slice(0, VISIBLE_COUNT)

	return (
		<>
			<SEO title="Projects" description="Explore my personal projects" imageUrl={Logo} url={baseUrl} />
			<div className="mx-auto max-w-screen-lg items-center">
				<ul className="group/list grid h-fit grid-flow-row grid-cols-1">
					{visible.map((project, idx) => (
						<li key={idx} className="mb-12">
							<div className="group pointer-events-auto grid relative w-fit cursor-pointer text-left transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
								<div className="absolute -inset-3 z-0 rounded-md transition-all group-hover:bg-light/5 md:-inset-4" />
								<div className="z-10 flex flex-col gap-y-4 text-light">
									<div className="inline-flex items-center">
										<span className="text-md pr-2 font-semibold transition-all group-hover:text-highlight">
											{project.name}
										</span>
										<IconButton className="group-hover:text-highlight">
											<Link href={project.gitUrl} target="_blank">
												<VscGithub size={20} />
											</Link>
										</IconButton>
									</div>
									{project.url && (
										<a href={project.url} target="_blank" rel="noreferrer" className="text-md">
											{project.summary}
											<span className="absolute -inset-3 -z-10 md:-inset-4 lg:block" />
										</a>
									)}
									{!project.url && project.summary && (
										<p className="text-md text-light/70">{project.summary}</p>
									)}
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
							</div>
						</li>
					))}
				</ul>
				{filteredProjects.length > VISIBLE_COUNT && (
					<button
						onClick={() => setExpanded((prev) => !prev)}
						className="text-sm font-medium text-accent-200 transition-all hover:text-highlight"
					>
						{expanded ? 'Show less' : 'More...'}
					</button>
				)}
			</div>
		</>
	)
}
