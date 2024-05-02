import Head from 'next/head'
import { useTranslations } from 'next-intl'

const SEO = ({ title, description, imageUrl, url }) => {
	const t = useTranslations()

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={imageUrl} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={imageUrl} />
		</Head>
	)
}

export default SEO
