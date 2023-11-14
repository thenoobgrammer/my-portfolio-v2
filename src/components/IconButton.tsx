'use client'

import clsx from 'clsx'

export default function IconButton(props) {
	const { children, className, ...rest } = props

	return (
		<button className={clsx('icon-btn', className)} {...rest}>
			{children}
		</button>
	)
}
