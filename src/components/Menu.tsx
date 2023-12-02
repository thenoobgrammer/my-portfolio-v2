import { motion } from 'framer-motion'

export default function Menu({ children, open, onClose }) {
	return open ? (
		<>
			<div className="fixed inset-0 z-0 h-screen w-screen bg-black/0" onClick={onClose} />
			<motion.div
				initial={{ y: -40, opacity: 0 }}
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
				className="boder-2 absolute left-0 z-10 my-2 flex h-fit w-fit flex-col overflow-hidden rounded-sm border-dark/80 bg-primary shadow-md"
			>
				{children}
			</motion.div>
		</>
	) : null
}
