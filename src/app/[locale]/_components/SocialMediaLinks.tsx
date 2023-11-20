'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { FACEBOOK_URL, GITHUB_PROFILE_URL, LINKEDIN_URL } from 'lib/data'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

import IconButton from 'src/components/IconButton'
import { TbSocial } from 'react-icons/tb'
import { useState } from 'react'

export default function SocialMediaLinks() {
	const [open, setOpen] = useState<boolean>(false)

	return (
		<div className="fixed bottom-16 left-16">
			<div className="relative">
				<IconButton disabled={open} onClick={() => setOpen(true)}>
					<TbSocial size={25} />
				</IconButton>
			</div>

			{open && (
				<>
					<div className="fixed inset-0 overflow-y-auto scroll-m-10" onClick={() => setOpen(false)} />
					<AnimatePresence>
						<motion.ul
							initial="hidden"
							animate="visible"
							variants={{
								hidden: { opacity: 0, scale: 0 },
								visible: {
									opacity: 1,
									scale: 1,
									transition: {
										delayChildren: 0.3,
										staggerChildren: 0.2,
									},
								},
							}}
							className="absolute -top-full left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center"
						>
							<motion.li
								initial="hidden"
								animate="visible"
								variants={{
									hidden: { y: 0, opacity: 0, translateX: 0, translateY: 0 },
									visible: {
										y: -10,
										x: -10,
										opacity: 1,
									},
								}}
								key="github"
								className="relative active:bg-slate-100"
							>
								<IconButton>
									<a href={GITHUB_PROFILE_URL} target="_blank">
										<FaGithub size={25} />
									</a>
								</IconButton>
							</motion.li>
							<motion.li
								initial="hidden"
								animate="visible"
								variants={{
									hidden: { y: 0, opacity: 0, translateX: 0, translateY: 0 },
									visible: {
										y: 0,
										x: 30,
										opacity: 1,
									},
								}}
								key="facebook"
								className="relative active:bg-slate-100"
							>
								<IconButton>
									<a href={FACEBOOK_URL} target="_blank">
										<FaFacebook size={25} />
									</a>
								</IconButton>
							</motion.li>
							<motion.li
								initial="hidden"
								animate="visible"
								variants={{
									hidden: { y: 0, opacity: 0, translateX: 0, translateY: 0 },
									visible: {
										y: 10,
										x: -10,
										opacity: 1,
									},
								}}
								key="linkedin"
								className="relative active:bg-slate-100"
							>
								<IconButton>
									<a href={LINKEDIN_URL} target="_blank">
										<FaLinkedin size={25} />
									</a>
								</IconButton>
							</motion.li>
						</motion.ul>
					</AnimatePresence>
				</>
			)}
		</div>
	)
}
