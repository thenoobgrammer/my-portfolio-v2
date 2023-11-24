'use client'

import { cloneElement } from 'react'
import { cn } from 'src/utils/common'
import { motion } from 'framer-motion'

export default function Section({ children, ...props }) {
	return (
		<motion.section id={props.id} className={cn('backdrop-blur-3xl bg-primary', props.className)}>
			{cloneElement(children)}
		</motion.section>
	)
}
