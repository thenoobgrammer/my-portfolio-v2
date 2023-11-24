import plugin from 'tailwindcss/plugin'

const textShadow = plugin(function ({ matchUtilities, theme }) {
	matchUtilities(
		{
			'text-shadow': (value) => ({
				textShadow: value,
			}),
		},
		{ values: theme('textShadow') },
	)
})

export default textShadow
