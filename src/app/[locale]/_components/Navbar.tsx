'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import DownloadLink from './PDFResume'
import Link from 'next/link'
import LocaleSwitcher from './LocaleSwitcher'
import Logo from 'src/components/svgs/Logo'
import { cn } from 'src/utils/common'
import { useTranslations } from 'next-intl'

export default function Navbar() {
	const t = useTranslations('Navbar')

	const [hasScrolled, setHasScrolled] = useState<boolean>(false)

	const Links = [
		{ id: 0, name: t('About'), hash: '#about' },
		{ id: 1, name: t('Job history'), hash: '#jobs' },
		{ id: 2, name: t('Projects'), hash: '#projects' },
		{ id: 3, name: t('Services'), hash: '#services' },
	]

	useEffect(() => {
		const debounce = (fn) => {
			let frame
			return (...params) => {
				if (frame) {
					cancelAnimationFrame(frame)
				}
				frame = requestAnimationFrame(() => {
					fn(...params)
				})
			}
		}

		const scrollContainer = document.getElementsByTagName('main')[0]

		const handleScroll = (e) => {
			if (scrollContainer.scrollTop > 200) {
				setHasScrolled(true)
			} else {
				setHasScrolled(false)
			}
		}

		scrollContainer.addEventListener('scroll', debounce(handleScroll))
		return () => scrollContainer.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<AnimatePresence>
			<nav className={cn('fixed top-0 z-50 w-full h-16 py-2 px-10 bg-primary', hasScrolled && 'shadow')}>
				<div className="flex items-center justify-between h-full px-4 text-accent-200">
					<ol className="flex items-center gap-x-4">
						<Link href="#intro" className="w-10 h-10">
							<Logo />
						</Link>
						{Links.map(({ id, name, hash }) => (
							<motion.li
								initial={{ opacity: 0, translateY: -80 }}
								animate={{ opacity: 1, translateY: 0 }}
								transition={{ duration: 0.5, delay: id * 0.1 }}
								key={id}
							>
								<Link className="hover:text-accent transition-all p-2 h-full" href={hash}>
									{name}
								</Link>
							</motion.li>
						))}
					</ol>
					<div className="flex items-center gap-x-4">
						<LocaleSwitcher />
						<DownloadLink />
					</div>
				</div>
			</nav>
		</AnimatePresence>
	)
}
