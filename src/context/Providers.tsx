'use client'

import { DialogProvider } from 'src/context/DialogContext'
import { ThemeProvider } from './ThemeContext'
import { WindowProvider } from './WindowContext'

export function Providers({ children }) {
	return (
		<ThemeProvider>
			<WindowProvider>
				<DialogProvider>{children}</DialogProvider>
			</WindowProvider>
		</ThemeProvider>
	)
}
