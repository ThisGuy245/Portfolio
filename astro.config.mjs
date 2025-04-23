import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
    integrations: [svelte()],
    output: 'static', // Static site generation for SiteGround
});
