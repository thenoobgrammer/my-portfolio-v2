'use client'

import About from './_sections/about'
import Introduction from './_sections/introduction'
import JobHistory from './_sections/job-history'
import Projects from './_sections/projects'
import Section from 'src/components/Section'

export default function Index({ params }) {
	return (
		<main className="relative h-[calc(100vh-64px)] justify-center mt-16 border-slate-950 overflow-y-scroll">
			<Section id="intro" className="flex items-center w-full h-full bg-primary p-5">
				<Introduction />
			</Section>
			<Section id="about" className="w-full h-fit bg-primary">
				<About />
			</Section>
			<Section id="jobs" className="w-full h-fit bg-primary">
				<JobHistory />
			</Section>
			<Section id="projects" className="w-full h-full bg-primary p-5">
				<Projects />
			</Section>
		</main>
	)
}
