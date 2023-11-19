const withNextIntl = require('next-intl/plugin')()
const withFonts = require('next-fonts')

const nextConfig = {
	// i18n: {
	// 	locales: ['default', 'en', 'fr'],
	// 	localeDetection: false,
	// 	defaultLocale: 'default',
	// },
	// trailingSlash: true,
	webpack(config, options) {
		config.module.rules.push({
			test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: 100000,
				},
			},
		})

		return config
	},
}

module.exports = withNextIntl(nextConfig)
