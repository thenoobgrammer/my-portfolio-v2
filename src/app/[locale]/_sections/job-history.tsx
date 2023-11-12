'use client'

import { BiCloudDownload, BiFullscreen, BiLinkExternal } from 'react-icons/bi'
import { Tab, TabPane, Tabs } from 'src/context/TabContext'

import CV from 'src/components/CV'
import Chip from 'src/components/Chip'
import { DialogDispatchContext } from 'src/context/DialogContext'
import { WorkExperiences } from 'lib/data'
import { useContext } from 'react'
import { useTranslations } from 'next-intl'

export default function JobHistory(props) {
	const dispatch = useContext(DialogDispatchContext)
	const t = useTranslations('JobHistory')

	return (
		<div className="relative flex items-center w-full h-[50vh] py-10 space-y-3">
			<div className="max-w-screen-lg m-auto px-5">
				<header className="flex items-center justify-between">
					<h4 className="text-light/90 font-medium leading-tight tracking-tight capitalize mb-5">job history</h4>
					<div className="group/links space-x-3">
						<span
							className="text-light/75 inline-flex items-center gap-x-2 whitespace-nowrap text-sm font-medium cursor-pointer w-fit transition-all rounded-md py-1 px-2 hover:bg-light/20 hover:text-accent-200"
							onClick={() => dispatch({ type: 'open', content: <CV />, title: t('curriculumDialogTitle') })}
						>
							<BiFullscreen className="text-accent-500" size={20} />
						</span>
						<span
							className="text-light/75 inline-flex items-center gap-x-2 whitespace-nowrap text-sm font-medium cursor-pointer w-fit transition-all rounded-md py-1 px-2 hover:bg-light/20 hover:text-accent-200"
							onClick={() => {}}
						>
							<BiCloudDownload className="text-accent-500" size={20} />
						</span>
					</div>
				</header>
				<Tabs>
					<div className="relative flex items-center justify-start">
						{WorkExperiences.map((props, idx) => (
							<Tab id={props.id} className="w-36 h-10" key={idx} label={props.company} tabIndex={idx} />
						))}
						<span className="glider absolute w-36 h-10 bg-accent-200/50 rounded-md" />
					</div>
					{WorkExperiences.map((props, idx) => (
						<TabPane key={idx} tabIndex={idx}>
							<header className="text-sm text-light font-medium mt-2 mb-3">
								{props.start}-{props.end}
							</header>
							<h6 className="inline-flex items-center text-light font-medium gap-x-2">
								{props.company}{' '}
								<a
									className="hover:bg-accent-50/20 p-2 rounded-md hover:scale-90 text-accent-300 transition-all"
									href={props.link}
									target="_blank"
								>
									<BiLinkExternal size={15} />
								</a>
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
