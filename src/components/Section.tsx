import { cloneElement } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export default function Section({ children, ...props }) {
	return (
		<motion.section
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.8 }}
			id={props.id}
			className={clsx(props.className)}
		>
			<motion.div
				variants={{
					offscreen: {
						y: 300,
					},
					onscreen: {
						y: 50,
						transition: {
							type: 'spring',
							bounce: 0.2,
							duration: 0.4,
						},
					},
				}}
				className="w-full"
			>
				{cloneElement(children)}
			</motion.div>
		</motion.section>
	)
}
