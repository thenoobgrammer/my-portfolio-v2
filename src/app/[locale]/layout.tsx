import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from 'src/app/[locale]/_components/Navbar'
import NextIntlClientProvider from 'src/context/NextIntlClientProvider'
import { Providers } from 'src/context/Providers'
import clsx from 'clsx'
import { notFound } from 'next/navigation'

const inter = Inter({
	weight: ['400', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
})

const locales = ['en', 'fr']

export const metadata: Metadata = {
	title: 'Antoine | Personal Portfolio',
	description: 'Antoine is a full-stack developer with 5 years of experience',
}

export default async function RootLayout({ children, params: { locale } }) {
	let messages
	try {
		messages = (await import(`src/messages/${locale}.json`)).default
	} catch (error) {
		notFound()
	}

	if (!locales.includes(locale as any)) {
		notFound()
	}

	return (
		<html lang={locale}>
			<body className={clsx(inter.className)}>
				<NextIntlClientProvider locale={locale} messages={messages} timeZone="America/Toronto" now={new Date()}>
					<Providers>
						<Navbar />
						{children}
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
