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
		<div className="fixed hidden text-primary md:bottom-16 md:left-8 md:block lg:left-16">
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
							initial={{
								opacity: 0,
								scale: 0,
								y: 80,
							}}
							animate={{
								opacity: 1,
								scale: 1,
								y: 0,
							}}
							transition={{
								delayChildren: 0.3,
								staggerChildren: 0.2,
							}}
							className="absolute -top-[200%] left-0 flex flex-col items-center gap-y-2 text-accent-700"
						>
							<li key="github" className="relative active:bg-slate-100">
								<IconButton>
									<Link href={GITHUB_PROFILE_URL} target="_blank">
										<FaGithub size={25} />
									</Link>
								</IconButton>
							</li>
							<li key="linkedin" className="relative active:bg-slate-100">
								<IconButton>
									<Link href={LINKEDIN_URL} target="_blank">
										<FaLinkedin size={25} />
									</Link>
								</IconButton>
							</li>
						</motion.ul>
					</AnimatePresence>
				</>
			)}
		</div>
	)
}
