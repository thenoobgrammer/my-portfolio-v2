import Logo from 'src/components/svgs/Logo'
import { MdOutlineEmail } from 'react-icons/md'
import SEO from '../_components/SEO'
import { CONTACT } from 'lib/content'
import { baseUrl } from 'src/utils/constants'

export default function Contact() {
	return (
		<>
			<SEO
				title="Contact"
				description="Please contact me if you wish to talk about new projects or any discussions"
				imageUrl={Logo}
				url={baseUrl}
			/>
			<div className="mx-auto max-w-screen-lg text-start text-light">
				<p>{CONTACT.description}</p>&nbsp;
				<button className="flex w-fit items-center gap-x-2 rounded-md border-2 border-highlight px-3 py-2 transition-all hover:border-highlight/80 hover:bg-highlight/40">
					<MdOutlineEmail />
					<a href="mailto:antonyyhakim@gmail.com">{CONTACT.emailButton}</a>
				</button>
			</div>
		</>
	)
}
