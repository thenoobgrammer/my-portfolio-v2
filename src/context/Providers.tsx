'use client'

import { DialogProvider } from 'src/context/DialogContext'
import { WindowProvider } from './WindowContext'

export function Providers({ children }) {
	return (
		<WindowProvider>
			<DialogProvider>{children}</DialogProvider>
		</WindowProvider>
	)
}
