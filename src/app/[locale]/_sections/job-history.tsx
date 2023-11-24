'use client'

import { BiFullscreen, BiLinkExternal } from 'react-icons/bi'
import { Tab, TabPane, Tabs } from 'src/context/TabContext'

import Chip from 'src/components/Chip'
import { DialogDispatchContext } from 'src/context/DialogContext'
import IconButton from 'src/components/IconButton'
import Link from 'next/link'
import Resume from '../_components/Resume'
import { WorkExperiences } from 'lib/data'
import { useContext } from 'react'
import { useTranslations } from 'next-intl'

export default function JobHistory() {
	const dispatch = useContext(DialogDispatchContext)
	const t = useTranslations('Resume')

	return (
		<div className="relative flex items-center w-full h-[50vh] py-10 space-y-3">
			<div className="max-w-screen-lg m-auto px-5">
				<header className="relative flex items-center justify-between mb-10">
					<h4 className="w-fit text-light font-medium leading-tight tracking-tight capitalize">{t('Job History')}</h4>
					<div className="flex items-center gap-x-3 text-light">
						<span>{t('Full screen')}</span>
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
					<div className="relative flex items-center justify-start">
						{WorkExperiences.map((props, idx) => (
							<Tab id={props.id} className="w-36 h-10" key={idx} label={props.company} tabIndex={idx} />
						))}
						<p className="glider absolute w-36 h-10 border-b-2 border-accent" />
					</div>
					{WorkExperiences.map((props, idx) => (
						<TabPane key={idx} tabIndex={idx}>
							<div className="flex flex-col gap-y-4">
								<p className="text-sm text-light font-medium mt-4">
									{props.start}-{props.end}
								</p>
								<h6 className="inline-flex items-center text-light font-medium gap-x-2">
									{props.company}{' '}
									<IconButton className="text-accent-300">
										<a href={props.url} target="_blank">
											<BiLinkExternal size={20} />
										</a>
									</IconButton>
								</h6>
								<p className="text- text-light font-medium">{props.title}</p>
								<p className="text-md text-light/70 font-medium">{t(props.summary)}</p>
								<div className="flex flex-wrap my-2">
									{props.technologies.map(({ name, url, tag }) => (
										<Chip className="group/chip hover:bg-accent/70" key={tag}>
											<Link href={url} className="chip-link group-hover/chip:text-accent-200" target="_blank">
												{name}
											</Link>
										</Chip>
									))}
								</div>
							</div>
						</TabPane>
					))}
				</Tabs>
			</div>
		</div>
	)
}
