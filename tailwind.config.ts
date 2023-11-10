import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
	content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		fontFamily: {
			primary: ['sans-serif'],
			secondary: '"Roboto Slab"',
			tertiary: 'Aldrich',
		},
		fontSize: {
			xs: ['10px', { lineHeight: '1.5' }],
			sm: ['13px', { lineHeight: '1.5' }],
			base: ['16px', { lineHeight: '1.5' }],
			lg: ['20px', { lineHeight: '1.5' }],
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'goto-color': "url('/Goto-colored.webp')",
				'desjardins-color': "url('/Desjardins-colored.png')",
				'bell-color': "url('/Bell-colored.png')",
			},
			colors: {
				primary: '#071330',
				secondary: '#7895CB',
				tertiary: '#A0BFE0',
				background: '#F8F9F7',
				foreground: '#2E4F4F',
				accent: '#CBE4DE',
				sucess: '#46D339',
				error: '#D50000',
				dark: '#0C1615',
				light: '#F8F8F8',
			},
		},
		screens: {
			xs: '430px',
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
		},
	},
	plugins: [],
}
export default config
