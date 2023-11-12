/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		fontFamily: {
			primary: ['sans-serif'],
			secondary: '"Roboto Slab"',
			tertiary: 'Aldrich',
			sans: ['Calibre', 'Inter', 'San Francisco', 'SF Pro Text', '-apple-system,system-ui', 'sans-serif'],
		},
		fill: {
			primary: '#2D4263',
			accent: '#C84B31',
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
				primary: '#2D4263',
				accent: {
					50: '#f7e9e9',
					100: '#f8ccc2',
					200: '#f4ab9b',
					300: '#f28c74',
					400: '#f07357',
					500: '#f05c3e',
					600: '#e55639',
					700: '#d75035',
					800: '#C84B31', //accent
					900: '#ad402b',
				},
				light: '#ECDBBA',
				dark: '#191919',
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
