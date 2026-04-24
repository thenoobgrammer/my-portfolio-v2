import { MetadataRoute } from 'next'

const BASE_URL = 'https://antoinehakim.ca'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: `${BASE_URL}/en`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
		{ url: `${BASE_URL}/fr`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
	]
}
