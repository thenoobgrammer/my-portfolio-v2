'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GITHUB_PROFILE_URL, LINKEDIN_URL } from 'lib/data'

import IconButton from 'src/components/IconButton'
import Link from 'next/link'
import { TbSocial } from 'react-icons/tb'
import { useState } from 'react'

export default function SocialMediaLinks() {
	const [open, setOpen] = useState<boolean>(false)

	return (
		<div className="hidden text-primary md:fixed md:bottom-16 md:left-8 lg:left-16">
			<button
				className="m-auto flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-secondary p-2 text-primary disabled:bg-gray-400"
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
									y: -10,
									transition: {
										delayChildren: 0.3,
										staggerChildren: 0.2,
									},
								},
							}}
							className="absolute -top-full left-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center text-accent-700"
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
											delay: 0.1,
										},
									},
								}}
								key="github"
								className="relative active:bg-slate-100"
							>
								<IconButton>
									<Link href={GITHUB_PROFILE_URL} target="_blank">
										<FaGithub size={25} />
									</Link>
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
									<Link href={LINKEDIN_URL} target="_blank">
										<FaLinkedin size={25} />
									</Link>
								</IconButton>
							</motion.li>
						</motion.ul>
					</AnimatePresence>
				</>
			)}
		</div>
	)
}
