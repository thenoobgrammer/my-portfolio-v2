'use client'

import { cloneElement } from 'react'
import { cn } from 'src/utils/common'

export default function Section({ children, ...props }) {
	return (
		<section id={props.id} className={cn('section', props.className)}>
			{props.title && <h6 className="mb-6 w-full font-semibold text-light">{props.title}</h6>}
			{cloneElement(children)}
		</section>
	)
}
