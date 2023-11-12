import '../globals.css'

import { DialogProvider } from 'src/context/DialogContext'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from 'src/components/Navbar'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'src/context/ThemeContext'
import clsx from 'clsx'
import { notFound } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Antoine | Personal Portfolio',
	description: 'Antoine is a full-stack developer with 5 years of experience',
}

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: any }) {
	let messages
	try {
		messages = (await import(`../../messages/${locale}.json`)).default
	} catch (error) {
		notFound()
	}

	return (
		<html lang="en">
			<body className={clsx(inter.className)}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<ThemeProvider>
						<Navbar />
						<DialogProvider>{children}</DialogProvider>
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
