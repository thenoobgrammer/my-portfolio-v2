import { BiFullscreen, BiLinkExternal } from 'react-icons/bi'
import { Tab, TabPanel, Tabs } from 'src/context/TabContext'

import Chip from 'src/components/Chip'
import { DialogDispatchContext } from 'src/context/DialogContext'
import IconButton from 'src/components/IconButton'
import Link from 'next/link'
import PDFResume from '../_components/PDFResume'
import { PDFViewer } from '@react-pdf/renderer'
import Resume from '../_components/Resume'
import { WorkExperiences } from 'lib/data'
import { cn } from 'src/utils/common'
import { useContext } from 'react'
import { useTranslations } from 'next-intl'

export default function JobHistory() {
	const dispatch = useContext(DialogDispatchContext)
	const t = useTranslations('Resume')

	return (
		<div className="relative flex h-fit w-full items-center space-y-3 py-10">
			<div className="m-auto max-w-screen-lg px-10 md:px-0">
				<header className="relative mb-10 flex items-center justify-between">
					<h4 className="w-fit font-medium capitalize leading-tight tracking-tight text-light">{t('Job History')}</h4>
					<div className="flex items-center gap-x-3 text-light">
						<span>{t('Full resume')}</span>
						<IconButton
							className="text-accent-300"
							onClick={() =>
								dispatch({
									type: 'open',
									content: <Resume />,
									title: t('Resume'),
								})
							}
						>
							<BiFullscreen size={20} />
						</IconButton>
					</div>
				</header>
				<Tabs>
					<div className="relative grid w-full grid-flow-col grid-cols-4 overflow-x-auto text-sm">
						{WorkExperiences.map((props, idx) => (
							<Tab id={props.id} key={idx} label={props.company} tabIndex={idx} />
						))}
					</div>
					{WorkExperiences.map((props, idx) => (
						<TabPanel id="tab-panel" key={idx} tabIndex={idx}>
							<div className="flex flex-col gap-y-4">
								<p className="mt-4 text-sm font-medium text-light">
									{props.start}-{props.end}
								</p>
								<h6 className="inline-flex items-center gap-x-2 font-medium text-light">
									{props.company}{' '}
									<IconButton className="text-accent-300">
										<a href={props.url} target="_blank">
											<BiLinkExternal size={20} />
										</a>
									</IconButton>
								</h6>
								<p className="text- font-medium text-light">{props.title}</p>
								<p className="text-md font-medium text-light/70">{t(props.summary)}</p>
								<div className="my-2 flex flex-wrap">
									{props.technologies.map(({ name, url, tag }) => (
										<Chip className="group/chip hover:bg-accent/70" key={tag}>
											<Link href={url} className="chip-link group-hover/chip:text-accent-200" target="_blank">
												{name}
											</Link>
										</Chip>
									))}
								</div>
							</div>
						</TabPanel>
					))}
				</Tabs>
			</div>
		</div>
	)
}
