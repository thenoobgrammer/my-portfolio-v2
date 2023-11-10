import { AnimatePresence, motion } from 'framer-motion'

import { MdClose } from 'react-icons/md'

export default function Dialog({ children, open, onClose, title }) {
	return open ? (
		<>
			<div className="fixed inset-0 w-screen h-screen bg-black/30 z-50" onClick={onClose} />
			<AnimatePresence>
				<motion.div
					initial={{ y: -80, opacity: 0 }}
					animate={{
						y: 0,
						x: 0,
						opacity: 1,
						transition: {
							type: 'tween',
							duration: 0.1,
							ease: [0.25, 0.25, 0.25, 0.4],
						},
					}}
					exit={{
						y: 280,
						opacity: 0,
						transition: {
							type: 'tween',
							duration: 2,
							ease: [0.25, 0.25, 0.25, 0.4],
						},
					}}
					className="fixed inset-0 m-auto w-[1200px] h-[600px] bg-white shadow-inner rounded-md z-50 dark:bg-slate-900 border-[0.5px] backdrop-blur-md border-indigo-50"
				>
					<header className="flex items-center justify-between border-b-2 p-3">
						{title}
						<button
							className="p-2 hover:bg-gray-300/60 hover:text-indigo-500 rounded-md transition-all"
							onClick={onClose}
						>
							<MdClose size={20} />
						</button>
					</header>
					<div className="px-6 py-3">{children}</div>
				</motion.div>
			</AnimatePresence>
		</>
	) : null
}
