'use client'

import Link from 'src/components/Link'
import { MdDownload } from 'react-icons/md'
import PDFResume from './PDFResume'
import Spinner from 'src/components/Spinner'
import { cn } from 'src/utils/common'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

const PDFDownloadLink = dynamic(() => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink), {
	ssr: false,
	loading: () => <p>Loading...</p>,
})

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
		<nav className="hidden w-fit text-lg text-accent-200 lg:block">
			<ul>
				{Links.map(({ id, href, name }, idx) => (
					<li onClick={() => setActive(id)} key={`nav-${idx}`}>
						<Link className={cn('group/link link inline-flex', active === id ? 'text-highlight' : '')} href={href}>
							<span>{`> ${name}`}</span>
						</Link>
					</li>
				))}
				<PDFDownloadLink className="link" document={<PDFResume t={t_resume} />} fileName={t_resume('Resume')}>
					{/* @ts-ignore */}
					{({ loading }) =>
						loading ? (
							<Spinner />
						) : (
							<li className="inline-flex items-center gap-x-4 pt-6">
								<span>{t('Download resume')}</span>
								<MdDownload />
							</li>
						)
					}
				</PDFDownloadLink>
			</ul>
		</nav>
	)
}
