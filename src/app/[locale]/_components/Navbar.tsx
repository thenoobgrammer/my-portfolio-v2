// @ts-nocheck

import Link from 'src/components/Link'
import { MdDownload } from 'react-icons/md'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PDFResume from './PDFResume'
import Spinner from 'src/components/Spinner'
import { cn } from 'src/utils/common'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function Navbar() {
	const t = useTranslations('Navbar')
	const t_resume = useTranslations('Resume')
	const Links = [
		{ name: t('About'), id: 'about', href: '#about' },
		{ name: t('Career'), id: 'jobs', href: '#jobs' },
		{ name: t('Projects'), id: 'projects', href: '#projects' },
		{ name: t('Skillsets'), id: 'skills', href: '#skills' },
		{ name: t('Contact'), id: 'contact', href: '#contact' },
	]

	const [active, setActive] = useState('about')

	return (
		<motion.nav className="hidden w-fit text-lg text-accent-200 lg:block">
			<ul>
				{Links.map(({ id, href, name }, idx) => (
					<motion.li
						initial={{ translateX: -80, opacity: 0 }}
						animate={{ translateX: 0, opacity: 1 }}
						transition={{ duration: 0.1, delay: idx * 0.1, staggerChildren: 1 }}
						onClick={() => setActive(id)}
						key={`nav-${idx}`}
					>
						<Link className={cn('group/link link inline-flex', active === id ? 'text-highlight' : '')} href={href}>
							<motion.span>{`> ${name}`}</motion.span>
						</Link>
					</motion.li>
				))}

				<PDFDownloadLink className="link" document={<PDFResume t={t_resume} />} fileName={t_resume('Resume')}>
					{({ loading }) =>
						loading ? (
							<Spinner />
						) : (
							<motion.li className="inline-flex items-center gap-x-4 pt-6">
								<span>{t('Download resume')}</span>
								<MdDownload />
							</motion.li>
						)
					}
				</PDFDownloadLink>
			</ul>
		</motion.nav>
	)
}
