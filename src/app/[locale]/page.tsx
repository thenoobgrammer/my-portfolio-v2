'use client'

import About from './_sections/about'
import Career from './_sections/career'
import Contact from './_sections/contact'
import Footer from './_sections/footer'
import Head from 'next/head'
import Introduction from './_sections/introduction'
import Loader from './_components/Loader'
import Navbar from './_components/Navbar'
import Projects from './_sections/projects'
import Section from 'src/components/Section'
import Skills from './_sections/skills'
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
			<Head>
				<meta property="og:title" content="Antone Hakim Portfolio" />
				<meta property="og:description" content="Senior software engineer based in the greater Montreal." />
				<meta property="og:url" content="https://antoinehakim.ca/" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://antoinehakim.ca/favicon.ico" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Antoine Hakim Portfolio" />
				<meta name="twitter:description" content="Senior software engineer based in the greater Montreal." />
				<meta name="twitter:image" content="https://antoinehakim.ca/favicon.ico" />
			</Head>

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
					<Section id="skills" title={t('Skillsets')}>
						<Skills />
					</Section>
					<Section id="contact" title={t('Contact')}>
						<Contact />
					</Section>
					{/* <Section id="services" title={t('Services')}>
						<Services />
					</Section> */}
					<Footer className="z-50" />
				</main>
			</div>
		</>
	)
}
