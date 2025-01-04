import { cn } from 'src/utils/common'
import { version } from 'package.json'

export default function Footer({ className }) {
	const currentYear = new Date().getFullYear()

	return (
		<footer className={cn('flex flex-col items-center justify-center text-light/70', className)}>
			<p>&copy; {currentYear} Antoine Hakim. All rights reserved.</p>
			<p className="text-sm">v.{version}</p>
		</footer>
	)
}
