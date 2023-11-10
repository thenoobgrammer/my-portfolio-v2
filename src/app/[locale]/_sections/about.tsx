'use client'

import { useTranslations } from 'next-intl'

export default function About() {
	const t = useTranslations('About')
	return (
		<section className="border flex flex-col gap-y-3 text-slate-900 font-medium">
			<p>
				{t(
					'Minim ea aute anim dolor ea voluptate velit. Cillum minim est culpa occaecat est tempor est eiusmod ut tempor veniam cillum magna. Elit veniam do deserunt ut.',
				)}
			</p>
			<p>
				{t(
					'Adipisicing velit cillum exercitation pariatur exercitation reprehenderit. Aute culpa velit nisi esse eiusmod aute in non aliqua nulla. Laboris deserunt culpa incididunt laborum in laborum amet commodo dolore ex ad occaecat commodo nulla.',
				)}
			</p>
			<p>
				{t(
					'Nulla mollit excepteur exercitation aliqua ut quis esse magna Lorem nostrud Lorem aliquip. Ex laborum laborum aliquip nostrud ullamco excepteur deserunt consequat labore eiusmod id. Irure minim ut ad fugiat nisi aliquip enim et pariatur consequat.',
				)}
			</p>
		</section>
	)
}
