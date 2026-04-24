import Logo from 'src/components/svgs/Logo'
import SEO from '../_components/SEO'
import { INTRO } from 'lib/content'
import { baseUrl } from 'src/utils/constants'

export default function Introduction() {
	return (
		<>
			<SEO title="Introduction" description="Introduction to my software life" imageUrl={Logo} url={baseUrl} />
			<div className="space-y-3 whitespace-pre-wrap">
				<div className="mb-6 inline-flex items-center justify-start gap-x-4">
					<h3 className="hidden font-semibold text-light lg:block">Antoine Hakim</h3>
					<h5 className="block font-semibold text-light lg:hidden">Antoine Hakim</h5>
				</div>
				<h5 id="title" className="font-medium leading-tight text-gray-300/90">
					{INTRO.subtitle}
				</h5>
				<p id="desc" className="text-md font-medium text-gray-300/90">
					{INTRO.description}
				</p>
			</div>
		</>
	)
}
