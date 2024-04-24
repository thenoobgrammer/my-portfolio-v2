import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
	locales: ['en', 'fr'],
	defaultLocale: 'en',
})

export const config = {
	matcher: ['/', '/(fr|en)/:path*', '/((?!api|static|.*\\..*|_next).*)'],
}
// /((?!api|_next/static|_next/image|fonts|favicon.ico).*)
