'use client'

import About from './_sections/about'
import Career from './_sections/career'
import Introduction from './_sections/introduction'
import Loader from './_components/Loader'
import Navbar from './_components/Navbar'
import Projects from './_sections/projects'
import Section from 'src/components/Section'
import Services from './_sections/services'
import SocialMediaLinks from './_components/SocialMediaLinks'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function Index() {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const t = useTranslations('Index')

	return isLoading ? (
		<Section id="loader" className="flex h-screen w-screen items-center justify-center overflow-hidden bg-dark">
			<Loader finishLoading={() => setIsLoading(false)} />
		</Section>
	) : (
		<>
			<div className="pointer-events-none fixed inset-0 h-screen w-screen bg-gradient-to-r from-dark to-primary" />
			<div className="relative mx-auto flex min-h-screen max-w-screen-xl flex-col px-5 py-10 lg:flex-row lg:py-0">
				<header className="fixed left-full top-0 flex items-center"></header>
				<aside className="top-0 hidden lg:sticky lg:flex lg:h-fit lg:max-h-screen lg:w-1/2 lg:flex-col lg:gap-y-6 lg:px-6 lg:py-24">
					<Introduction />
					<Navbar />
					<SocialMediaLinks />
				</aside>
				<main className="flex flex-col lg:w-1/2 lg:py-24">
					<Section id="intro" className="lg:hidden">
						<Introduction />
					</Section>
					<Section id="about" title={t('About me')}>
						<About />
					</Section>
					<Section id="jobs" title={t('Career timeline')}>
						<Career />
					</Section>
					<Section id="projects" title={t('Projects')}>
						<Projects />
					</Section>
					<Section id="services" title={t('My packages')}>
						<Services />
					</Section>
				</main>
			</div>
		</>
	)
}
