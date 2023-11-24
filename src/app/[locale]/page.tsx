'use client'

import About from './_sections/about'
import Introduction from './_sections/introduction'
import JobHistory from './_sections/job-history'
import Loader from './_components/Loader'
import Navbar from './_components/Navbar'
import Projects from './_sections/projects'
import Section from 'src/components/Section'
import Services from './_sections/services'
import SocialMediaLinks from './_components/SocialMediaLinks'
import { useState } from 'react'

export default function Index() {
	const [isLoading, setIsLoading] = useState<boolean>(true)

	return isLoading ? (
		<Section id="loader" className="flex items-center justify-center w-screen h-screen overflow-hidden">
			<Loader finishLoading={() => setIsLoading(false)} />
		</Section>
	) : (
		<>
			<Navbar />
			<main className="relative h-screen justify-center overflow-y-scroll overflow-x-hidden">
				<Section id="intro" className="flex items-center w-full h-full p-5">
					<Introduction />
				</Section>
				<Section id="about">
					<About />
				</Section>
				<Section id="jobs">
					<JobHistory />
				</Section>
				<Section id="projects">
					<Projects />
				</Section>
				<Section id="services">
					<Services />
				</Section>
				<footer>
					<SocialMediaLinks />
				</footer>
			</main>
		</>
	)
}
