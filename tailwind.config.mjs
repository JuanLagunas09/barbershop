/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-color': '#111114',
				'secondary-color': '#232323',
				'font-color': '#dadada',
				'title-color': '#e4e1e6',
				'button-color': '#e6bb61'
			},
		},
	},
	plugins: [],
}
