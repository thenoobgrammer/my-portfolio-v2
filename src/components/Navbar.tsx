'use client'

import Link from 'next/link'
import Logo from './Logo'
import { useMemo } from 'react'
import { useTranslations } from 'next-intl'

export default function Navbar() {
	const t = useTranslations('Navbar')

	const Links = useMemo(
		() => [
			{ name: t('About'), hash: '#about' },
			{ name: t('Job history'), hash: '#jobs' },
			{ name: t('Projects'), hash: '#projects' },
		],
		[t],
	)

	return (
		<nav className="fixed z-50 top-0 left-1/2 -translate-x-1/2 w-full h-16 py-2 bg-primary shadow-lg">
			<div className="flex items-center justify-between h-full px-4">
				<Link href="#intro" className="w-10 h-10">
					<Logo />
				</Link>
				<div className="flex items-center gap-x-4 h-full text-accent-400">
					{Links.map(({ name, hash }, idx) => (
						<Link key={idx} href={hash}>
							{name}
						</Link>
					))}
					<button className="ml-2 border-2 rounded-sm border-accent-300 p-2 text-accent-100 hover:bg-accent-300/30 hover:border-accent-300/50 hover:text-accent-50 transition-all">
						{t('Resume')}
					</button>
				</div>
			</div>
		</nav>
	)
}
