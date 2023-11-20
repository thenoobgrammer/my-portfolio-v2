import About from './_sections/about'
import Introduction from './_sections/introduction'
import JobHistory from './_sections/job-history'
import Projects from './_sections/projects'
import Section from 'src/components/Section'
import SocialMediaLinks from './_components/SocialMediaLinks'
import { notFound } from 'next/navigation'
import { unstable_setRequestLocale } from 'next-intl/server'

const locales = ['en', 'fr']

export default function Index({ params: { locale } }) {
	const isValidLocale = locales.some((cur) => cur === locale)

	if (!isValidLocale) {
		notFound()
	}

	unstable_setRequestLocale(locale)

	return (
		<main className="relative h-[calc(100vh-64px)] justify-center mt-16 overflow-y-scroll">
			<Section id="intro" className="flex items-center w-full h-full p-5">
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
			<footer>
				<SocialMediaLinks />
			</footer>
		</main>
	)
}
