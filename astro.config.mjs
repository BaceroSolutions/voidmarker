import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://bacerosolutions.com',
	integrations: [
		starlight({
			title: 'Mep Opening Marker',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Mark intersections', slug: 'docs/mepopeningmarker/guides/mark-intersections', },
						{ label: 'Combine voids', slug: 'docs/mepopeningmarker/guides/combine-voids' }
					],
				},
			],
		}),
	],

});
