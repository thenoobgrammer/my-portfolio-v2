/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		animation: {
			'drop-in': 'drop-in 700ms ease-in-out',
		},
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
				'goto-color': "url('/Goto-colored.webp')",
				'goto-white': "url('/Goto-white.png')",
				'desjardins-color': "url('/Desjardins-colored.png')",
				'desjardins-white': "url('/Desjardins-white.png')",
				'bell-color': "url('/Bell-colored.png')",
				'bell-white': "url('/Bell-white.png')",
			},
			colors: {
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
				light: '#EEEEEE',
				dark: '#3A4750',
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
	plugins: [require('./plugins/animationDelay'), require('./plugins/textShadow')],
}
export default config
