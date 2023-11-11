'use client'

import { Tab, TabPane, Tabs } from 'src/context/TabContext'

import Chip from 'src/components/Chip'
import { WorkExperiences } from 'lib/data'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

export default function About() {
	const t = useTranslations('About')
	return (
		<section className="w-full h-fit bg-primary">
			<div className="flex items-center w-full h-1/2 bg-light p-5">
				<div className="w-[960px] h-fit mx-auto space-y-4 overflow-y-hidden">
					<h3 className="text-dark/90 font-medium leading-tight tracking-tight capitalize underline mb-8">
						Little about me
					</h3>
					<p className="font-medium text-md leading-8">
						Hello :) My name is Antoine and I take joy in creating content for myself as a hobby. I never worked for a
						client independantly but I am looking fourth to that day. Anyways, I'm 29 years old, based in Montreal,
						Canada (yes I speak french). I was very into sports when I was still in school. So much that I tried to
						become pro. However, it took me quite some time to understand that I wanted to dedicate my life to become
						more entrepeneurial.
					</p>
					<p className="font-medium text-md leading-8">
						I took an interest in web development during one of my internship and here I am today, still loving it. I
						currently work at{' '}
						<a
							className="rounded-md text-accent-400 font-semibold hover:text-accent-500 hover:bg-accent-200/50 hover:p-1 transition-all"
							href="https://goto.com"
							target="_blank"
						>
							GoTo
						</a>{' '}
						as a frontend developer. I am constantly challenged with new constraints weekly and I take pride and joy
						into the work I'm doing.
					</p>
					<p className="font-medium text-md leading-8">
						My end goal is a mansion and soccer field in my backyard, and that day will comes with effort. But don't
						worry, I am very down to earth and enjoying the process to that mountain.
					</p>
				</div>
			</div>
			<div className="w-full">
				<div className="block max-w-screen-lg h-[600px] items-center mx-auto p-5">
					<h4 className="text-light/90 font-medium leading-tight tracking-tight capitalize mb-8">What did I do at</h4>
					<Tabs>
						<>
							<div className="flex items-center gap-x-5 justify-start">
								{WorkExperiences.map((props, idx) => (
									<Tab className="text-lg" key={idx} label={props.company} tabIndex={idx} />
								))}
							</div>
							{WorkExperiences.map((props, idx) => (
								<TabPane key={idx} tabIndex={idx}>
									<article key={idx} className="">
										<p className="text-sm text-light font-medium">
											{props.start}-{props.end}
										</p>
										<p className="text-lg text-light font-medium">{props.company}</p>
										<p className="text-lg text-light font-medium">{props.title}</p>
										<p>{t(props.summary)}</p>
										<div className="flex flex-wrap">
											{props.technologies.map((tech, idx) => (
												<Chip key={idx}>{tech}</Chip>
											))}
										</div>
									</article>
								</TabPane>
							))}
						</>
					</Tabs>
				</div>
			</div>
		</section>
	)
}
