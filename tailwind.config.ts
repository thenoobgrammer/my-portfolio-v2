/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		fontFamily: {
			sans: ['var(--font-inter)'],
			mono: ['var(--font-roboto-mono)'],
		},
		fill: {
			primary: '#232541',
			secondary: '#c3bdb6',
			accent: {
				50: '#EDE7F6',
				100: '#D1C4E9',
				200: '#B39DDB',
				300: '#9575CD',
				400: '#7E57C2',
				500: '#673AB7',
				600: '#5E35B1',
				700: '#512DA8',
				800: '#4527A0',
				DEFAULT: '#311B92',
			},
			// accent: {
			// 	50: '#e1f4f1',
			// 	100: '#b6e5da',
			// 	200: '#87d4c3',
			// 	300: '#57c3ab',
			// 	400: '#34b499',
			// 	500: '#1aa688',
			// 	600: '#17987b',
			// 	700: '#12886b',
			// 	DEFAULT: '#74a3c9',
			// 	900: '#005b41',
			// },
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
				'goto-white': "url('/Goto-white.png')",
				'desjardins-color': "url('/Desjardins-colored.png')",
				'desjardins-white': "url('/Desjardins-white.png')",
				'bell-color': "url('/Bell-colored.png')",
				'bell-white': "url('/Bell-white.png')",
			},
			colors: {
				primary: '#232541',
				secondary: '#c3bdb6',
				accent: {
					50: '#EDE7F6',
					100: '#D1C4E9',
					200: '#B39DDB',
					300: '#9575CD',
					400: '#7E57C2',
					500: '#673AB7',
					600: '#5E35B1',
					700: '#512DA8',
					800: '#4527A0',
					DEFAULT: '#311B92',
				},
				// accent: {
				// 	50: '#e1f4f1',
				// 	100: '#b6e5da',
				// 	200: '#87d4c3',
				// 	300: '#57c3ab',
				// 	400: '#34b499',
				// 	500: '#1aa688',
				// 	600: '#17987b',
				// 	700: '#12886b',
				// 	DEFAULT: '#74a3c9',
				// 	900: '#005b41',
				// },
				'accent-primary': '#78a6c3',
				'accent-secondary': '#6882ac',
				light: '#627ea6',
				dark: '#005B41',
			},
			textShadow: {
				DEFAULT: 'var(--tw-shadow-color) .5px .5px 10px',
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
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') },
			)
		}),
	],
}
export default config
