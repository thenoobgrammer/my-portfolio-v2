'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { GITHUB_PROFILE_URL, INSTAGRAM_URL, LINKEDIN_URL } from 'lib/data'
import { PDFDownloadLink, PDFViewLink } from './PDFResume'
import { useState } from 'react'

import IconButton from 'src/components/IconButton'
import Link from 'src/components/Link'
import { MdDownload, MdOpenInNew } from 'react-icons/md'
import { NAVBAR } from 'lib/content'
import { cn } from 'src/utils/common'

export default function Navbar() {
	const Links = [
		{ name: NAVBAR.career, id: 'jobs', href: '#jobs' },
		{ name: NAVBAR.projects, id: 'projects', href: '#projects' },
		{ name: NAVBAR.contact, id: 'contact', href: '#contact' },
	]

	const [active, setActive] = useState('about')

	return (
		<nav className="hidden w-fit text-lg text-accent-200 lg:block">
			<motion.ul
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: 'easeInOut', duration: 0.5 }}
			>
				{Links.map(({ id, href, name }, idx) => (
					<li onClick={() => setActive(id)} key={`nav-${idx}`}>
						<Link className={cn('group/link link inline-flex', active === id ? 'text-highlight' : '')} href={href}>
							<span>{`> ${name}`}</span>
						</Link>
					</li>
				))}

				<PDFViewLink>
					<li className="link mb-6 flex items-center gap-x-4 pt-2">
						<span>{NAVBAR.viewResume}</span>
						<MdOpenInNew />
					</li>
				</PDFViewLink>

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
				</li>
			</motion.ul>
		</nav>
	)
}
