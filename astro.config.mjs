// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      // Dual themes — the dark theme is the default (matches site default),
      // and light-theme colors are emitted as --shiki-light CSS variables
      // that we switch on via [data-theme="light"] in global.css.
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: 'dark',
    },
  },
});
