'use client'

import { DialogProvider } from 'src/context/DialogContext'
import { ThemeProvider } from './ThemeContext'

export function Providers({ children }) {
	return (
		<ThemeProvider>
			<DialogProvider>{children}</DialogProvider>
		</ThemeProvider>
	)
}
