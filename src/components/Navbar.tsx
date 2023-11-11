import Image from 'next/image'
import Link from 'next/link'
import { Links } from 'lib/data'
import LocaleSwitcher from './LocaleSwitcher'
import Logo from './Logo'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar() {
	return (
		<nav className="fixed z-50 top-0 left-1/2 -translate-x-1/2 w-full h-16 py-2 bg-primary shadow-lg">
			<div className="flex items-center justify-between h-full px-4">
				<div className="w-10 h-10">
					<Logo />
				</div>
				<div className="flex items-center gap-x-4 h-full"></div>
			</div>
		</nav>
	)
}
