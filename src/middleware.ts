import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
	locales: ['en', 'fr'],
	defaultLocale: 'en',
})

export const config = {
	matcher: ['/', '/(fr|en)/:path*', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
