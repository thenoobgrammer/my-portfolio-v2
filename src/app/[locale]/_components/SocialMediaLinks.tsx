import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { GITHUB_PROFILE_URL, INSTAGRAM_URL, LINKEDIN_URL } from 'lib/data'

import IconButton from 'src/components/IconButton'
import Link from 'next/link'

export default function SocialMediaLinks() {
	return (
		<AnimatePresence>
			<motion.ul
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{ ease: 'easeInOut', duration: 1 }}
				className="text-dark-gray flex items-center gap-y-2"
			>
				<li key="github" className="relative active:bg-slate-100">
					<IconButton>
						<Link href={GITHUB_PROFILE_URL} target="_blank" rel="noreferrer">
							<FaGithub size={25} />
						</Link>
					</IconButton>
				</li>
				<li key="linkedin" className="relative active:bg-slate-100">
					<IconButton>
						<Link href={LINKEDIN_URL} target="_blank" rel="noreferrer">
							<FaLinkedin size={25} />
						</Link>
					</IconButton>
				</li>
				<li key="instagram" className="relative active:bg-slate-100">
					<IconButton>
						<Link href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
							<FaInstagram size={25} />
						</Link>
					</IconButton>
				</li>
			</motion.ul>
		</AnimatePresence>
	)
}
