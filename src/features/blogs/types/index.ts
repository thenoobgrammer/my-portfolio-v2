export interface BlogPost {
	slug: string
	title: string
	subtitle: string
	date: string
	synopsis: string
	thumbnail: string
	categories: string[]
	tags: string[]
	content: string
	locale: string
}

export interface BlogMetadata {
	slug: string
	title: string
	subtitle: string
	date: string
	synopsis: string
	thumbnail: string
	categories: string[]
	tags: string[]
	locale: string
}

export interface BlogSearchParams {
	query: string
	categories?: string[]
	tags?: string[]
	locale: string
}

export interface BlogFilterState {
	categories: string[]
	tags: string[]
	searchQuery: string
}
