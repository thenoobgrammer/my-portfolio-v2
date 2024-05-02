import NextIntlClientProvider from 'src/context/NextIntlClientProvider'
import NotFound from '../pages/not-found'
import { Providers } from 'src/context/Providers'
import { Victor_Mono } from 'next/font/google'
import clsx from 'clsx'

const victor = Victor_Mono({
	weight: ['400', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
})

const locales = ['en', 'fr']

export function generateStaticParams() {
	return [{ locale: 'en' }]
}

export async function generateMetadata() {
	return {
		title: 'Antoine Hakim',
		description:
			"I'm a full stack engineer with a variety of background. I have 5 years of experience with multiple stacks of technologies under my belt. I wish to bring my creativity and expertise to build something innovative and uniq that solves issues for individuals.",
		robots: 'index, follow, max-snippet:20',
		authors: { name: 'Antoine Hakim', url: 'https://antoinehakim.ca' },
		creator: 'Antoine Hakim',
	}
}

export default async function RootLayout({ children, params: { locale } }) {
	let messages
	try {
		messages = (await import(`src/messages/${locale}.json`)).default
	} catch (error) {
		return <NotFound />
	}

	if (!locales.includes(locale as any)) {
		return <NotFound />
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
