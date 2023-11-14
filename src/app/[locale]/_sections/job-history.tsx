'use client'

import { BiCloudDownload, BiFullscreen, BiLinkExternal } from 'react-icons/bi'
import { Tab, TabPane, Tabs } from 'src/context/TabContext'

import CV from 'src/components/CV'
import Chip from 'src/components/Chip'
import { DialogDispatchContext } from 'src/context/DialogContext'
import IconButton from 'src/components/IconButton'
import { WorkExperiences } from 'lib/data'
import { useContext } from 'react'
import { useTranslations } from 'next-intl'

export default function JobHistory(props) {
	const dispatch = useContext(DialogDispatchContext)
	const t = useTranslations('JobHistory')

	return (
		<div className="relative flex items-center w-full h-[50vh] py-10 space-y-3">
			<div className="max-w-screen-lg m-auto px-5">
				<header className="relative flex items-center justify-between mb-5">
					<h4 className="w-fit text-light/90 font-medium leading-tight tracking-tight capitalize">job history</h4>
					<div className="w-64 border-t-2 border-accent-50/25 left-52" />
					<div className="flex-grow-0 group/links space-x-3">
						<IconButton
							className="text-accent-500"
							onClick={() => dispatch({ type: 'open', content: <CV />, title: t('curriculumDialogTitle') })}
						>
							<BiFullscreen size={20} />
						</IconButton>
						<IconButton className="text-accent-500" onClick={() => {}}>
							<BiCloudDownload size={20} />
						</IconButton>
					</div>
				</header>
				<Tabs>
					<div className="relative flex items-center justify-start">
						{WorkExperiences.map((props, idx) => (
							<Tab id={props.id} className="w-36 h-10" key={idx} label={props.company} tabIndex={idx} />
						))}
						<p className="glider absolute w-36 h-10 bg-accent-200/50 rounded-md" />
					</div>
					{WorkExperiences.map((props, idx) => (
						<TabPane key={idx} tabIndex={idx}>
							<p className="text-sm text-light font-medium mt-2 mb-3">
								{props.start}-{props.end}
							</p>
							<h6 className="inline-flex items-center text-light font-medium gap-x-2">
								{props.company}{' '}
								<IconButton className="text-accent-500">
									<a href={props.link} target="_blank">
										<BiLinkExternal size={20} />
									</a>
								</IconButton>
							</h6>
							<p className="text- text-light font-medium">{props.title}</p>
							<p className="text-md text-light/70 font-medium">{t(props.summary)}</p>
							<div className="flex flex-wrap my-2">
								{props.technologies.map((tech, idx) => (
									<Chip key={idx}>{tech}</Chip>
								))}
							</div>
						</TabPane>
					))}
				</Tabs>
			</div>
		</div>
	)
}
