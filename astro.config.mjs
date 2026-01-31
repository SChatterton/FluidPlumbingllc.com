// @ts-nocheck
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import icon from 'astro-icon'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	site: 'https://constructors.madethemes.com',
	base: '/',
	output: 'static',

	integrations: [
		icon({
			include: {
				// Include Bootstrap icons used in the project
				bi: [
					'arrow-left',
					'arrow-right',
					'arrow-right',
					'arrow-up',
					'award',
					'award-fill',
					'bar-chart-fill',
					'braces',
					'building',
					'calculator',
					'calendar-check',
					'cash-stack',
					'check-circle-fill',
					'chevron-down',
					'chevron-left',
					'chevron-right',
					'clipboard',
					'clock-fill',
					'clock-history',
					'cone-striped',
					'cup-hot',
					'currency-dollar',
					'egg-fried',
					'envelope',
					'envelope-fill',
					'eye',
					'facebook',
					'flag',
					'flower1',
					'folder-fill',
					'fuel-pump',
					'gear-fill',
					'gem',
					'geo-alt',
					'geo-alt-fill',
					'github',
					'google',
					'graph-up',
					'graph-up-arrow',
					'headset',
					'heart-fill',
					'house-door',
					'house-door-fill',
					'houses',
					'info-circle',
					'instagram',
					'journal-check',
					'layers',
					'linkedin',
					'list',
					'map',
					'minecart-loaded',
					'palette-fill',
					'people',
					'person',
					'person-check',
					'play-circle-fill',
					'play-fill',
					'search',
					'send',
					'send-fill',
					'shield',
					'shield-check',
					'speedometer2',
					'star-fill',
					'star-half',
					'tag',
					'telephone',
					'telephone-fill',
					'tiktok',
					'truck',
					'truck-front',
					'twitter-x',
					'whatsapp',
					'wrench',
					'x-lg',
					'youtube'
				]
			}
		}),
		mdx()
	],

	vite: {
		resolve: {
			alias: {
				'@img': '/src/img'
			}
		},
		plugins: [tailwindcss()]
	}
})
