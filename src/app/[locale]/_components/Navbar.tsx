'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { GITHUB_PROFILE_URL, INSTAGRAM_URL, LINKEDIN_URL } from 'lib/data'
import PDFResume, { PDFDownloadLink } from './PDFResume'
import { useEffect, useState } from 'react'

import IconButton from 'src/components/IconButton'
import Link from 'src/components/Link'
import { MdDownload } from 'react-icons/md'
import Spinner from 'src/components/Spinner'
import { cn } from 'src/utils/common'
import dynamic from 'next/dynamic'
import { useTranslations } from 'next-intl'

export default function Navbar() {
	const t = useTranslations('Navbar')
	const t_resume = useTranslations('Resume')
	const Links = [
		// { name: t('About'), id: 'about', href: '#about' },
		{ name: t('Career'), id: 'jobs', href: '#jobs' },
		{ name: t('Projects'), id: 'projects', href: '#projects' },
		// { name: t('Skillsets'), id: 'skills', href: '#skills' },
		{ name: t('Contact'), id: 'contact', href: '#contact' },
	]

	const [active, setActive] = useState('about')
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	return (
		<nav className="hidden w-fit text-lg text-accent-200 lg:block">
			{mounted ? (
				<motion.ul
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					transition={{ ease: 'easeInOut', duration: 0.5 }}
				>
					{Links.map(({ id, href, name }, idx) => (
						<li onClick={() => setActive(id)} key={`nav-${idx}`}>
							<Link className={cn('group/link link inline-flex', active === id ? 'text-highlight' : '')} href={href}>
								<span>{`> ${name}`}</span>
							</Link>
						</li>
					))}

					<PDFDownloadLink t={t_resume}>
						<li className="link mb-6 flex items-center gap-x-4 pt-6">
							<span>{t('Download resume')}</span>
							<MdDownload />
						</li>
					</PDFDownloadLink>

					<li key="github" className="flex items-center text-dark-gray">
						<IconButton className="relative">
							<Link href={GITHUB_PROFILE_URL} target="_blank" rel="noreferrer">
								<FaGithub size={25} />
							</Link>
						</IconButton>
						<IconButton>
							<Link href={LINKEDIN_URL} target="_blank" rel="noreferrer">
								<FaLinkedin size={25} />
							</Link>
						</IconButton>
						<IconButton>
							<Link href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
								<FaInstagram size={25} />
							</Link>
						</IconButton>
					</li>
				</motion.ul>
			) : (
				<Spinner />
			)}
		</nav>
	)
}
