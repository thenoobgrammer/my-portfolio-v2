'use client'

import { useTranslations } from 'next-intl'

export default function About(props) {
	const t = useTranslations('About')

	return (
		<div className="flex items-center w-full h-[50vh] bg-light px-5 py-10">
			<div className="w-[960px] h-fit mx-auto space-y-4 overflow-y-hidden">
				<h3 className="text-dark/90 font-medium leading-tight tracking-tight capitalize underline mb-8">
					Little about me
				</h3>
				<p className="font-medium text-md leading-8">
					Hello :) My name is Antoine and I take joy in creating content for myself as a hobby. I never worked for a
					client independantly but I am looking fourth to that day. Anyways, I'm 29 years old, based in Montreal, Canada
					(yes I speak french). I was very into sports when I was still in school. So much that I tried to become pro.
					However, it took me quite some time to understand that I wanted to dedicate my life to become more
					entrepeneurial.
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
					as a frontend developer. I am constantly challenged with new constraints weekly and I take pride and joy into
					the work I'm doing.
				</p>
				<p className="font-medium text-md leading-8">
					My end goal is a mansion and soccer field in my backyard, and that day will comes with effort. But don't
					worry, I am very down to earth and enjoying the process to that mountain.
				</p>
			</div>
		</div>
	)
}
