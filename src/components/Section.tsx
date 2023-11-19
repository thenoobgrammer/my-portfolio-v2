'use client'

import { cloneElement } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export default function Section({ children, ...props }) {
	return (
		<motion.section id={props.id} className={clsx(props.className)}>
			<motion.div className="w-full">{cloneElement(children)}</motion.div>
		</motion.section>
	)
}
