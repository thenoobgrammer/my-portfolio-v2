import { motion } from 'framer-motion'

export default function Menu({ children, open, onClose }) {
	return open ? (
		<>
			<div className="fixed inset-0 w-screen h-screen bg-black/0 z-0" onClick={onClose} />
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
				className="absolute left-0 z-10 flex flex-col w-fit h-fit my-2 bg-primary shadow-md rounded-sm"
			>
				{children}
			</motion.div>
		</>
	) : null
}
