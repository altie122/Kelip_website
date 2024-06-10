import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import webmanifest from "astro-webmanifest";

// https://astro.build/config
export default defineConfig({
  site: 'https://kelip.altie122.xyz',
  integrations: [starlight({
			credits: true,
			favicon: 'Kelip.png',
			title: 'Kelip Wiki',
			social: {
				github: 'https://github.com/altie122/kelip'
			},
			editLink: {
				baseUrl: 'https://github.com/altie122/kelip_website/edit/main/'
			},
			customCss: [
			'./src/styles/main.css',
			],
			logo: {
				src: './src/assets/Kelip.png'
			},
			lastUpdated: true,
    sidebar: [
			{ label: 'Landing', link: '/landing/' },
			{
				label: 'Items',
				items: [
					{ label: 'Burning Coal', autogenerate: { directory: '/items/burning_coal/' } },
					{ label: 'Copper Armor', autogenerate: { directory: '/items/copper_armor/' } },
					{ label: 'Copper Tools', autogenerate: { directory: '/items/copper_tools/' } },
				],
			},
			]
  }), webmanifest({
		name: 'Kelip Wiki',
		icon: './src/assets/Kelip.png',
		short_name: 'Kelip',
		description: "The Wiki for the Kelip Minecraft Mod",
		start_url: '/',
		theme_color: '#59AB30',
		background_color: '#59AB30',
		display: 'standalone',
	}),],
	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});