// @ts-nocheck
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import icon from 'astro-icon'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	site: 'https://www.fluid-plumbing-llc',
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
					'calendar-check',
					'check-circle-fill',
					'chevron-down',
					'chevron-left',
					'chevron-right',
					'clock-history',
					'cone-striped',
					'currency-dollar',
					'envelope',
					'envelope-fill',
					'eye',
					'flag',
					'flower1',
					'folder-fill',
					'gear-fill',
					'gem',
					'geo-alt',
					'geo-alt-fill',
					'graph-up',
					'graph-up-arrow',
					'heart-fill',
					'house-door',
					'house-door-fill',
					'houses',
					'info-circle',
					'journal-check',
					'list',
					'map',
					'people',
					'person',
					'person-check',
					'search',
					'send',
					'send-fill',
					'shield',
					'shield-check',
					'star-fill',
					'star-half',
					'tag',
					'telephone',
					'telephone-fill',
					'truck',
					'truck-front',
					'wrench',
					'x-lg',
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
