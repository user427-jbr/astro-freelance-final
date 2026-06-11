// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://jb-solutions.digital',
  base: '/',
  server: process.env.PORT ? { port: Number(process.env.PORT) } : undefined,
  integrations: [sitemap(), icon()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: 'dark',
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
