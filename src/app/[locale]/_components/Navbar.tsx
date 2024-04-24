'use client'

import Link from 'src/components/Link'
import { MdDownload } from 'react-icons/md'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PDFResume from './PDFResume'
import Spinner from 'src/components/Spinner'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function Navbar() {
	const t = useTranslations('Navbar')
	const t_resume = useTranslations('Resume')
	const Links = [
		{ name: t('About'), id: '#about' },
		{ name: t('Career'), id: '#jobs' },
		{ name: t('Projects'), id: '#projects' },
		{ name: t('Services'), id: '#services' },
	]

	return (
		<motion.nav className="hidden w-fit text-lg text-accent-200 lg:block">
			<ul>
				{Links.map(({ id, name }, idx) => (
					<motion.li
						initial={{ translateX: -80, opacity: 0 }}
						animate={{ translateX: 0, opacity: 1 }}
						transition={{ duration: 0.1, delay: idx * 0.1, staggerChildren: 1 }}
						key={`nav-${idx}`}
					>
						<Link className="group/link link inline-flex" href={id}>
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
