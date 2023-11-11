'use client'

import About from './_sections/about'
import Curriculum from './_sections/curriculum'
import DownloadCurriculum from 'src/components/DownloadCurriculum'
import Image from 'next/image'
import Introduction from './_sections/introduction'
import { useTranslations } from 'next-intl'

export default function Index({ params }) {
	const t = useTranslations('')
	return (
		<main className="h-[calc(100vh-64px)] justify-center mt-16 border-slate-950 overflow-y-scroll">
			<Introduction />
			<About />
		</main>
	)
}
