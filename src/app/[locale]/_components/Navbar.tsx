'use client'

import DownloadLink from './PDFResume'
import Link from 'next/link'
import LocaleSwitcher from './LocaleSwitcher'
import Logo from 'src/components/Logo'
import { useTranslations } from 'next-intl'

export default function Navbar() {
	const t = useTranslations('Navbar')

	const Links = [
		{ name: t('About'), hash: '#about' },
		{ name: t('Job history'), hash: '#jobs' },
		{ name: t('Projects'), hash: '#projects' },
	]

	return (
		<nav className="fixed z-50 top-0 left-1/2 -translate-x-1/2 w-full h-16 py-2 px-10 bg-primary shadow-lg">
			<div className="flex items-center justify-between h-full px-4 text-accent-200">
				<div className="flex items-center gap-x-4">
					<Link href="#intro" className="w-10 h-10">
						<Logo />
					</Link>
					{Links.map(({ name, hash }, idx) => (
						<Link className="hover:text-accent-400 transition-all p-2 h-full" key={idx} href={hash}>
							{name}
						</Link>
					))}
				</div>
				<div className="flex items-center gap-x-4">
					<LocaleSwitcher />
					<DownloadLink />
				</div>
			</div>
		</nav>
	)
}
