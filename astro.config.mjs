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
						{ label: 'Place a void', slug: 'docs/mepopeningmarker/guides/place-a-void' },
						{ label: 'Combine voids', slug: 'docs/mepopeningmarker/guides/combine-voids' }
						// { autogenerate: { directory: 'docs/mepopeningmarker/guides' } }
					],
				},
			],
		}),
	],

});
