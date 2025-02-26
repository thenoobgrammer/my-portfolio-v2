/** @type {import('tailwindcss').Config} */

import { BREAKPOINTS } from './src/utils/constants'
import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		fontFamily: {
			sans: ['var(--font-inter)'],
			mono: ['var(--font-roboto-mono)'],
		},
		fill: {
			primary: '#303841',
			secondary: '#c3bdb6',
			accent: {
				50: '#fef8e0',
				100: '#fbebb0',
				200: '#f9de7c',
				300: '#f7d345',
				DEFAULT: '#F6C90E',
				500: '#f5be00',
				600: '#f6b000',
				700: '#f79d00',
				800: '#f88c00',
				900: '#f96b00',
			},
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
			},
			colors: {
				primary: '#303841',
				secondary: '#c3bdb6',
				accent: {
					50: '#e5fced',
					100: '#c1f6d2',
					200: '#95f1b5',
					DEFAULT: '#5bec95',
					400: '#00e57a',
					500: '#00dd65',
					600: '#00cc59',
					700: '#00b84c',
					800: '#00a641',
					900: '#00852c',
				},
				light: '#EEEEEE',
				dark: '#232a2f',
				'dark-gray': '#707A84',
				highlight: '#BA8EF7',
			},
			textShadow: {
				DEFAULT: 'var(--tw-shadow-color) .5px .5px 10px',
			},
		},
		screens: {
			...BREAKPOINTS,
		},
	},
	plugins: [require('./plugins/animationDelay'), require('./plugins/textShadow')],
}
export default config
