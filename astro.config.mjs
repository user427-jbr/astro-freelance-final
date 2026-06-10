// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://user427-jbr.github.io' : 'http://localhost:4321',
  base: isGitHubPages ? '/astro-freelance-final' : '/',
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
