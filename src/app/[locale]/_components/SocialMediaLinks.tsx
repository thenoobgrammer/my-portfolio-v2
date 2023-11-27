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
		<div className="fixed bottom-16 left-2 text-accent-100 md:left-16">
			<button
				className="m-auto flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-accent-500 p-2 text-dark shadow disabled:bg-gray-400 md:h-12 md:w-12"
				disabled={open}
				onClick={() => setOpen(true)}
			>
				<TbSocial className="text-md md:text-lg" />
			</button>

			{open && (
				<>
					<div className="fixed inset-0 scroll-m-10 overflow-y-auto" onClick={() => setOpen(false)} />
					<AnimatePresence>
						<motion.ul
							initial="hidden"
							animate="visible"
							variants={{
								hidden: { opacity: 0, scale: 0 },
								visible: {
									opacity: 1,
									scale: 1,
									y: -30,
									transition: {
										delayChildren: 0.3,
										staggerChildren: 0.2,
									},
								},
							}}
							className="absolute -top-full left-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center"
						>
							<motion.li
								initial="hidden"
								animate="visible"
								variants={{
									hidden: {
										x: '-50%',
										y: 0,
										opacity: 0,
									},
									visible: {
										y: '-200%',
										opacity: 1,
										transition: {
											delay: 0.2,
										},
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
									hidden: {
										x: '-50%',
										y: 0,
										opacity: 0,
									},
									visible: {
										y: '-200%',
										opacity: 1,
										marginTop: 10,
										transition: {
											delay: 0.1,
										},
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
									hidden: {
										x: '-50%',
										y: 0,
										opacity: 0,
									},
									visible: {
										y: '-200%',
										marginTop: 10,
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
