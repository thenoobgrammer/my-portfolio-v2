'use client'

import { createContext, useEffect, useState } from 'react'

interface ThemeContextProps {
	theme: 'light' | 'dark'
	toggleThemeHandler: () => any
}

const ThemeContext = createContext<ThemeContextProps>({
	theme: 'light',
	toggleThemeHandler: () => {},
})

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState<'light' | 'dark'>('light')

	useEffect(() => {
		if (!localStorage.getItem('theme')) {
			localStorage.setItem('theme', 'light')
		}
	}, [])

	useEffect(() => {
		if (theme) {
			localStorage.setItem('theme', theme)
		}
		document.documentElement.classList.toggle('dark')
	}, [theme])

	function toggleThemeHandler() {
		setTheme((prevTheme) => {
			if (prevTheme === 'light') {
				return 'dark'
			}
			return 'light'
		})
	}

	return <ThemeContext.Provider value={{ theme, toggleThemeHandler }}>{children}</ThemeContext.Provider>
}

export default ThemeContext
