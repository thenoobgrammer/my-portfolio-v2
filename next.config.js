const withNextIntl = require('next-intl/plugin')()

const nextConfig = {
	experimental: {
		esmExternals: 'loose', // Enable ESM support for external modules
	},
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
