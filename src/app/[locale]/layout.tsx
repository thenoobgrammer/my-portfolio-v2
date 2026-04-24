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

const locales = ['en']

export function generateStaticParams() {
	return [{ locale: 'en' }]
}

const BASE_URL = 'https://antoinehakim.ca'
const DESCRIPTION =
	'Senior Software Engineer with 6+ years building distributed systems across enterprise SaaS, fintech, and telecom. Specializing in React, TypeScript, Go, Java, and AWS.'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
	const isEn = locale === 'en'

	return {
		metadataBase: new URL(BASE_URL),
		title: {
			default: 'Antoine Hakim — Senior Software Engineer',
			template: '%s | Antoine Hakim',
		},
		description: DESCRIPTION,
		keywords: [
			'Antoine Hakim',
			'Senior Software Engineer',
			'Full Stack Developer',
			'React Developer',
			'TypeScript',
			'Go',
			'Java',
			'AWS',
			'Montreal Software Engineer',
			'Portfolio',
		],
		authors: [{ name: 'Antoine Hakim', url: BASE_URL }],
		creator: 'Antoine Hakim',
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-snippet': -1,
				'max-image-preview': 'large' as const,
				'max-video-preview': -1,
			},
		},
		openGraph: {
			type: 'website',
			locale: isEn ? 'en_CA' : 'fr_CA',
			alternateLocale: isEn ? 'fr_CA' : 'en_CA',
			url: `${BASE_URL}/${locale}`,
			siteName: 'Antoine Hakim',
			title: 'Antoine Hakim — Senior Software Engineer',
			description: DESCRIPTION,
		},
		twitter: {
			card: 'summary' as const,
			title: 'Antoine Hakim — Senior Software Engineer',
			description: DESCRIPTION,
			creator: '@antoinehakim',
		},
		alternates: {
			canonical: `${BASE_URL}/${locale}`,
			languages: {
				'en-CA': `${BASE_URL}/en`,
				'fr-CA': `${BASE_URL}/fr`,
			},
		},
	}
}

export default async function RootLayout({ children, params: { locale } }) {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Antoine Hakim',
		url: BASE_URL,
		jobTitle: 'Senior Software Engineer',
		description: DESCRIPTION,
		email: 'antonyyhakim@gmail.com',
		telephone: '+15149668481',
		address: { '@type': 'PostalAddress', addressLocality: 'Montreal', addressRegion: 'QC', addressCountry: 'CA' },
		sameAs: [
			'https://www.linkedin.com/in/antoine-h-359669105/',
			'https://github.com/thenoobgrammer',
		],
		knowsAbout: ['React', 'TypeScript', 'Go', 'Java', 'AWS', 'Node.js', 'Docker', 'Terraform'],
	}

	return (
		<html lang={locale}>
			<body className={clsx(victor.className)}>
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
				<NextIntlClientProvider locale={locale} timeZone="America/Toronto" now={new Date()}>
					<Providers>{children}</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
