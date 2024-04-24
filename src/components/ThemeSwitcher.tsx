'use client'

import { useContext, useState } from 'react'

import ThemeContext from 'src/context/ThemeContext'
import { VscColorMode } from 'react-icons/vsc'
import clsx from 'clsx'

export default function ThemeSwitcher() {
	const { theme, toggleThemeHandler } = useContext(ThemeContext)
	const [isHover, setIsHover] = useState<boolean>(false)

	return (
		<div className="">
			<button
				className="flex items-center gap-x-2 text-white font-medium hover:text-indigo-200/70 hover:scale-90 transition-all capitalize"
				onClick={toggleThemeHandler}
			>
				<VscColorMode className={clsx(theme === 'light' && 'rotate-180')} size={25} />
				{theme}
			</button>
		</div>
	)
}
