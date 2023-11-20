'use client'

import { cloneElement } from 'react'
import { cn } from 'src/utils/common'
import { motion } from 'framer-motion'

export default function Section({ children, ...props }) {
	return (
		<motion.section
			id={props.id}
			className={cn('bg-gradient-to-tl backdrop-blur-3xl from-primary/90 to-primary', props.className)}
		>
			<motion.div className="w-full">{cloneElement(children)}</motion.div>
		</motion.section>
	)
}
