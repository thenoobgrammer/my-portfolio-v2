'use client'

import { cn } from 'src/utils/common'

export default function IconButton(props) {
	const { children, className, ...rest } = props

	return (
		<button className={cn('icon-btn', className)} {...rest}>
			{children}
		</button>
	)
}
