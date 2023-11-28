'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { GITHUB_PROFILE_URL, LINKEDIN_URL } from 'lib/data'
import { useEffect, useState } from 'react'

import { CgClose } from 'react-icons/cg'
import IconButton from 'src/components/IconButton'
import Link from 'src/components/Link'
import LocaleSwitcher from './LocaleSwitcher'
import Logo from 'src/components/svgs/Logo'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PDFResume from './PDFResume'
import { RxHamburgerMenu } from 'react-icons/rx'
import Spinner from 'src/components/Spinner'
import { cn } from 'src/utils/common'
import { useTranslations } from 'next-intl'

export default function Navbar() {
	const t = useTranslations('Navbar')
	const t_resume = useTranslations('Resume')

	const [hasScrolled, setHasScrolled] = useState<boolean>(false)
	const [open, setOpen] = useState<boolean>(false)

	const Links = [
		{ name: t('About'), id: '#about' },
		{ name: t('Job history'), id: '#jobs' },
		{ name: t('Projects'), id: '#projects' },
		{ name: t('Services'), id: '#services' },
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

	return (
		<nav className={cn('fixed top-0 z-50 h-fit w-full bg-primary text-accent-200', hasScrolled && 'shadow')}>
			<div className="relative flex max-w-screen-xl items-center justify-between p-3 md:w-screen md:max-w-none md:px-10">
				{/* Regular nav */}
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						className="flex items-center gap-x-4"
					>
						<Link href="#intro" className="h-8 w-8 md:h-10 md:w-10">
							<Logo />
						</Link>
						<ol className="hidden md:flex">
							{Links.map(({ id, name }, idx) => (
								<motion.li
									initial={{ translateY: -80 }}
									animate={{ translateY: 0 }}
									transition={{ duration: 0.5, delay: idx * 0.1, staggerChildren: 0.1 }}
									key={`nav-${idx}`}
									className="link"
								>
									<Link href={id}>{name}</Link>
								</motion.li>
							))}
						</ol>
					</motion.div>

					{/* Mobile nav */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.2 }}
						className={cn('fixed inset-0 z-0 h-screen w-screen bg-black/30', !open && 'hidden')}
						onClick={() => setOpen(false)}
					/>
					<motion.aside className={cn('absolute right-0 top-12 h-64 w-screen md:hidden', !open && 'hidden')}>
						<motion.ol
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: '100%', opacity: 1 }}
							className="grid grid-flow-row grid-rows-4 content-center bg-dark"
						>
							{Links.map(({ id, name }, idx) => (
								<li key={`mobile-nav-${idx}`} className="link">
									<Link className="w-full" href={id} onClick={() => setOpen(false)}>
										{name}
									</Link>
								</li>
							))}
							<li key="mobile-nav-github" className="link">
								<Link href={GITHUB_PROFILE_URL} target="_blank" onClick={() => setOpen(false)}>
									Github
								</Link>
							</li>
							<li key="mobile-nav-linkedin" className="link">
								<Link href={LINKEDIN_URL} target="_blank" onClick={() => setOpen(false)}>
									LinkedIn
								</Link>
							</li>
							<li key="mobile-nav-resume" className="link">
								<PDFDownloadLink document={<PDFResume t={t_resume} />} fileName={t('Filename')}>
									{({ loading }) => (loading ? <Spinner /> : t('Download'))}
								</PDFDownloadLink>
							</li>
						</motion.ol>
					</motion.aside>
				</AnimatePresence>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="hidden md:flex md:items-center md:gap-x-4"
				>
					<LocaleSwitcher />
					<PDFDownloadLink
						className="text-accent-100 transition-all hover:border-accent-300/50 hover:text-accent-50 md:ml-2 md:rounded-sm md:border-2 md:border-accent-300 md:p-2 md:hover:bg-accent-300/30"
						document={<PDFResume t={t_resume} />}
						fileName={t('Filename')}
					>
						{({ loading }) => (loading ? <Spinner /> : t('Download'))}
					</PDFDownloadLink>
				</motion.div>
				<IconButton className="inline-flex items-center md:hidden" onClick={() => setOpen(true)}>
					{open ? <CgClose size={20} /> : <RxHamburgerMenu size={20} />}
				</IconButton>
			</div>
		</nav>
	)
}
