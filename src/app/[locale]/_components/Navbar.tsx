'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import DownloadLink from './PDFResume'
import IconButton from 'src/components/IconButton'
import Link from 'next/link'
import LocaleSwitcher from './LocaleSwitcher'
import Logo from 'src/components/svgs/Logo'
import { RxHamburgerMenu } from 'react-icons/rx'
import { cn } from 'src/utils/common'
import { useTranslations } from 'next-intl'

export default function Navbar() {
	const t = useTranslations('Navbar')

	const [hasScrolled, setHasScrolled] = useState<boolean>(false)
	const [open, setOpen] = useState<boolean>(false)

	const Links = [
		{ id: 0, name: t('About'), hash: '#about' },
		{ id: 1, name: t('Job history'), hash: '#jobs' },
		{ id: 2, name: t('Projects'), hash: '#projects' },
		{ id: 3, name: t('Services'), hash: '#services' },
	]

	useEffect(() => {
		const scrollContainer = window.document.getElementsByTagName('main')[0]

		const handleScroll = (e) => {
			if (scrollContainer.scrollTop > 200) {
				setHasScrolled(true)
			} else {
				setHasScrolled(false)
			}
		}

		scrollContainer.addEventListener('resize', () => setOpen(false))
		scrollContainer.addEventListener('scroll', handleScroll)

		return () => {
			scrollContainer.removeEventListener('resize', () => setOpen(false))
			scrollContainer.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const MobileNav = () => (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.2 }}
				className={cn('fixed inset-0 z-0 h-screen w-screen bg-black/30', !open && 'hidden')}
				onClick={() => setOpen(false)}
			/>
			<motion.aside
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className={cn('absolute right-0 top-12 h-64 w-screen md:hidden', !open && 'hidden')}
			>
				<motion.ol
					initial={{ height: 0 }}
					animate={{ height: '100%' }}
					className="grid grid-flow-row grid-rows-4 content-center bg-dark"
				>
					{Links.map(({ id, name, hash }) => (
						<li key={`mobile-nav-${id}`} className="flex items-center px-3 py-2 transition-all hover:text-accent">
							<Link className="w-full" href={hash} onClick={() => setOpen(false)}>
								{name}
							</Link>
						</li>
					))}
				</motion.ol>
			</motion.aside>
		</AnimatePresence>
	)

	const Nav = () => (
		<AnimatePresence>
			<ol className="hidden md:flex">
				{Links.map(({ id, name, hash }) => (
					<motion.li
						initial={{ opacity: 0, translateY: -80 }}
						animate={{ opacity: 1, translateY: 0 }}
						transition={{ duration: 0.5, delay: id * 0.1 }}
						key={`nav-${id}`}
						className="block px-3 py-2 transition-all hover:text-accent"
					>
						<Link href={hash}>{name}</Link>
					</motion.li>
				))}
			</ol>
		</AnimatePresence>
	)

	return (
		<nav className={cn('fixed top-0 z-50 h-fit w-full bg-primary text-accent-200', hasScrolled && 'shadow')}>
			<div className="relative flex max-w-screen-xl items-center justify-between p-3 md:w-screen md:max-w-none">
				<div className="items-centers flex">
					<Link href="#intro" className="h-8 w-8 md:h-10 md:w-10">
						<Logo />
					</Link>
					<Nav />
				</div>
				<MobileNav />
				<div className="hidden md:flex md:items-center">
					<LocaleSwitcher />
					<DownloadLink />
				</div>
				<IconButton className="inline-flex items-center md:hidden" onClick={() => setOpen(true)}>
					<RxHamburgerMenu size={20} />
				</IconButton>
			</div>
			<div className="hidden md:block"></div>
		</nav>
	)
}
