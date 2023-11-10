import { BsArrow90DegDown, BsArrow90DegRight, BsArrowBarRight } from 'react-icons/bs'

import Dialog from 'src/components/Dialog'
import { RiFullscreenLine } from 'react-icons/ri'
import { WorkExperiences } from 'lib/data'
import clsx from 'clsx'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function Curriculum() {
	const t = useTranslations('Career')

	const [hover, setHovered] = useState(false)
	const [selectedWork, setSelectedWork] = useState<any>()
	const [open, setOpen] = useState(false)

	const handleOpen = (props) => {
		setOpen(true)
		setSelectedWork(props)
	}

	const handleClose = () => {
		setOpen(false)
		setSelectedWork(undefined)
	}

	return (
		<>
			{selectedWork && (
				<Dialog
					title={
						<div className="flex items-center gap-x-6 font-semibold">
							<div className={clsx('w-10 h-10 bg-contain bg-center bg-no-repeat', selectedWork.logoClassname)} />
							{selectedWork.company}
						</div>
					}
					open={open}
					onClose={handleClose}
				>
					<p className="text-lg font-medium py-2">{t(`dialogtitle`, { company: selectedWork.company })}</p>
					<ul className="list-item">
						{selectedWork.descriptions.map((description, idx) => (
							<li className="relative flex items-center gap-x-2 border-l border-b mt-4 py-1 rounded-md" key={idx}>
								<div className="absolute w-2 h-2 bg-indigo-600 rounded-full left-0 -translate-x-1/2" />
								<span className="pl-6">{t(description)}</span>
							</li>
						))}
					</ul>
				</Dialog>
			)}
			<section className="relative block overflow-y-scroll pr-4">
				<ol className="group/list space-y-3 mx-2 mt-2">
					{WorkExperiences.map((props, idx) => (
						<li key={idx} onClick={() => handleOpen(props)}>
							<div className="group/link flex items-start p-3 gap-x-4 rounded-md transition-all group-hover/list:opacity-50 hover:!opacity-100 hover:bg-slate-400/10 cursor-pointer">
								<div className="w-fit whitespace-nowrap">
									<p className="text-sm text-slate-900/60 group-hover/link:text-slate-600">
										{props.start} - {props.end}
									</p>
								</div>
								<div className="flex-grow flex flex-col">
									<p className="text-sm text-slate-700 font-medium group-hover/link:text-teal-600">
										{props.title} · {props.company}
									</p>
									<p className="text-sm text-slate-500">{t(props.summary)}</p>
									<ul className="flex flex-wrap">
										{props.technologies.map((tech, k) => (
											<li key={k} className="mr-1.5 mt-2">
												<div className="rounded-full bg-slate-500/10 text-emerald-500 w-fit px-2 py-1 text-sm font-medium">
													{tech}
												</div>
											</li>
										))}
									</ul>
								</div>
							</div>
						</li>
					))}
				</ol>
			</section>
		</>
	)
}
