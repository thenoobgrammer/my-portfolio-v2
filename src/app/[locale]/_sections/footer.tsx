'use client'

import { cn } from 'src/utils/common'

export default function Footer({ className }) {
	const currentYear = new Date().getFullYear()

	return (
		<footer className={cn('flex items-center justify-center text-light/70', className)}>
			<p>&copy; {currentYear} Antoine Hakim. All rights reserved.</p>
		</footer>
	)
}
