import { Tab, TabPanel, Tabs } from 'src/context/TabContext'

import { BiLinkExternal } from 'react-icons/bi'
import Chip from 'src/components/Chip'
import IconButton from 'src/components/IconButton'
import Link from 'next/link'
import { WorkExperiences } from 'lib/data'
import { useTranslations } from 'next-intl'

export default function Career() {
	const t = useTranslations('Resume')

	return (
		<div className="relative m-auto w-full md:px-0">
			<Tabs>
				<div className="text-md relative flex gap-x-6 overflow-x-auto pb-4">
					{WorkExperiences.map((props, idx) => (
						<Tab id={props.id} key={idx} label={props.company} tabIndex={idx} />
					))}
				</div>
				{WorkExperiences.map((props, idx) => (
					<TabPanel id="tab-panel" key={idx} tabIndex={idx}>
						<div className="flex flex-col gap-y-4">
							<div className="inline-flex items-center gap-x-2 font-medium text-light">
								<span className="text-lg font-semibold">{props.company}</span>
								<span className="text-sm text-light/30">
									({props.start}-{props.end})
								</span>
								<IconButton className="text-accent-300">
									<a href={props.url} target="_blank">
										<BiLinkExternal size={20} />
									</a>
								</IconButton>
							</div>
							<p className="text-md font-semibold text-light">{props.title}</p>
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
	)
}
