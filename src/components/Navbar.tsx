import Image from 'next/image'
import Link from 'next/link'
import { Links } from 'lib/data'
import LocaleSwitcher from './LocaleSwitcher'
import Logo from 'public/logo.svg'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar() {
	return (
		<nav className="fixed z-50 top-0 left-1/2 -translate-x-1/2 w-full h-16 py-2 bg-indigo-900">
			<div className="flex items-center justify-between h-full max-w-screen-xl mx-auto px-4">
				<Image src={Logo} alt="" />
				<div className="flex items-center gap-x-4 h-full">
					<ThemeSwitcher />
					<LocaleSwitcher />
				</div>
			</div>
		</nav>
	)
}
