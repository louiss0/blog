// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import markdoc from '@astrojs/markdoc';
import vue from '@astrojs/vue';
import unocss from '@unocss/astro';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), markdoc(), vue(), unocss()],
});