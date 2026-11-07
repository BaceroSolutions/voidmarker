import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://bacerosolutions.com',
	integrations: [
		starlight({
			title: 'Mep Opening Marker',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{ label: 'Overview', slug: 'docs/mepopeningmarker' },
				{
					label: 'Getting started',
					items: [
						{ label: 'Installation', slug: 'docs/mepopeningmarker/getting-started/installation' },
						{ label: 'Quick start', slug: 'docs/mepopeningmarker/getting-started/quick-start' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Mark intersections', slug: 'docs/mepopeningmarker/guides/mark-intersections' },
						{ label: 'Combine voids', slug: 'docs/mepopeningmarker/guides/combine-voids' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Settings', slug: 'docs/mepopeningmarker/reference/settings' },
						{ label: 'Troubleshooting and FAQ', slug: 'docs/mepopeningmarker/troubleshooting' },
					],
				},
			],
		}),
	],

});
