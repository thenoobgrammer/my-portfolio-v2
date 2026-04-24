'use client'

import Career from './_sections/career'
import Contact from './_sections/contact'
import Footer from './_sections/footer'
import Introduction from './_sections/introduction'
import Navbar from './_components/Navbar'
import Projects from './_sections/projects'
import Section from 'src/components/Section'
import SocialMediaLinks from './_components/SocialMediaLinks'
import { SECTION_TITLES } from 'lib/content'

export default function Index() {
	return (
		<>
			<div className="pointer-events-none fixed inset-0 h-screen w-screen bg-gradient-to-r from-dark to-primary" />
			<div className="relative mx-auto flex min-h-screen max-w-screen-xl flex-col px-5 py-10 lg:flex-row lg:py-0">
				<header className="fixed left-full top-0 flex items-center"></header>
				<aside className="top-0 hidden lg:sticky lg:flex lg:h-fit lg:max-h-screen lg:w-1/2 lg:flex-col lg:gap-y-6 lg:px-6 lg:py-24">
					<Introduction />
					<Navbar />
				</aside>
				<main className="flex flex-col lg:w-1/2 lg:py-24">
					<Section id="intro" className="lg:hidden">
						<Introduction />
					</Section>
					<Section id="jobs" title={SECTION_TITLES.career}>
						<Career />
					</Section>
					<Section id="projects" title={SECTION_TITLES.projects}>
						<Projects />
					</Section>
					<Section id="contact" title={SECTION_TITLES.contact}>
						<Contact />
					</Section>
					<Footer className="z-50" />
				</main>
			</div>
		</>
	)
}
