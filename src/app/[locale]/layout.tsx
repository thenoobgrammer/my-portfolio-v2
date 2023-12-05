import { Inter, Victor_Mono } from 'next/font/google'

import type { Metadata } from 'next'
import NextIntlClientProvider from 'src/context/NextIntlClientProvider'
import { Providers } from 'src/context/Providers'
import clsx from 'clsx'
import { notFound } from 'next/navigation'

const victor = Victor_Mono({
	weight: ['400', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
})

const locales = ['en', 'fr']

export const metadata: Metadata = {
	title: 'Antoine Hakim',
	description:
		"I'm a full stack engineer with a passion for frontend development. I have 5 years of experience with multiple frameworks under my belt and I wish to bring my creativity and expertise to build something innovative and uniq that solves issues for individuals.",
	robots: 'index, follow, max-snippet:20',
	authors: { name: 'Antoine Hakim', url: 'https://antoinehakim.ca' },
	creator: 'Antoine Hakim',
}

export function generateStaticParams() {
	return [{ locale: 'en' }]
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
			<body className={clsx(victor.className)}>
				<NextIntlClientProvider locale={locale} messages={messages} timeZone="America/Toronto" now={new Date()}>
					<Providers>{children}</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
