# Portfolio — Developer Reference

## Stack

| Layer | Choice |
|---|---|
| Framework | Astro 6 (static output) |
| Styling | Plain CSS, scoped `<style>` per component + one global stylesheet |
| i18n | File-based via `src/pages/[lang]/` dynamic route |
| Content | Astro Content Collections (new loader API, Astro v5+) |
| Transitions | Astro View Transitions (`ClientRouter` from `astro:transitions`) |
| Theme | Dark/light via `data-theme` attribute on `<html>` |
| SEO | `@astrojs/sitemap` + hand-rolled RSS via `@astrojs/rss` |

---

## i18n Pattern

- Default language: **German (`de`)**
- Supported languages defined in `src/i18n/ui.ts` → `languages` object
- All translated strings live in `src/i18n/ui.ts` → `ui` object — **never hardcode strings in components**
- Two helpers in `src/i18n/utils.ts`:
  - `getLangFromUrl(url)` — extracts `Lang` from URL pathname
  - `useTranslations(lang)` — returns a `t(key)` function
- Adding a new page = **one file** in `src/pages/[lang]/your-page.astro`; never duplicate per language
- `getStaticPaths()` on every `[lang]` page: `Object.keys(languages).map(lang => ({ params: { lang } }))`

---

## Content Collections

Defined in `src/content.config.ts` (Astro v6 new loader API — NOT `src/content/config.ts`).

### Blog schema (`src/content/blog/*.md`)

```ts
{
  title:       string
  date:        Date    // coerced
  description: string
  tags:        string[] // default []
}
```

### Projects schema (`src/content/projects/*.md`)

```ts
{
  title:       string
  description: string
  techs:       string[]
  url?:        string  // valid URL
  featured:    boolean // default false
}
```

**Rendering content** (Astro v6 loader API):
```ts
import { render } from 'astro:content';
const { Content } = await render(entry); // NOT entry.render()
```

**Entry IDs**: entries use `entry.id`, not `entry.slug` (slug is gone in v6 loader API).

---

## CSS Token Conventions

All tokens are CSS custom properties on `:root` in `src/styles/global.css`.

### Colors
- `--color-bg`, `--color-surface`, `--color-border`
- `--color-text`, `--color-muted`, `--color-heading`
- `--color-accent` (#00c49a teal-green), `--color-accent-dim`
- Light theme overrides via `[data-theme="light"]` on `<html>`

### Fluid type scale (`--text-*`)
`clamp(min, Xvw, max)` — never use raw `px` for font sizes in components. Use the token.

| Token | Range |
|---|---|
| `--text-sm` | 0.75–0.875rem |
| `--text-base` | 0.9375–1rem |
| `--text-lg` | 1–1.125rem |
| `--text-xl` | 1.125–1.25rem |
| `--text-2xl` | 1.25–1.5rem |
| `--text-3xl` | 1.5–2rem |
| `--text-4xl` | 2–3rem |
| `--text-5xl` | 2.5–4.5rem |

### Fluid spacing scale (`--space-*`)
`clamp(min, Xvw, max)` — never use raw `px` for spacing in components.

| Token | Range |
|---|---|
| `--space-xs` | 0.25–0.5rem |
| `--space-sm` | 0.5–0.75rem |
| `--space-md` | 0.75–1rem |
| `--space-lg` | 1–1.5rem |
| `--space-xl` | 1.5–2rem |
| `--space-2xl` | 2–4rem |

### Layout
- `.container` — `max-width: 72rem`, centered, fluid `padding-inline`
- Components must **not** set their own `max-width` for page rhythm — wrap in `.container`
- Exception: `PostLayout` uses `max-width: 65ch` for readable prose columns

---

## Fluid Sizing Approach

- **No breakpoints, no `@media` queries for sizing**
- Everything scales between a min and max using `clamp()`
- All font sizes: token variables (`var(--text-*)`)
- All spacing: token variables (`var(--space-*)`)
- The only `@media` query in the project is `prefers-reduced-motion`

---

## Theme Toggle Implementation

**No flash on load** — theme is applied before first paint via an inline `<script is:inline>` in `BaseLayout.astro` `<head>`:

```js
(function () {
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored);
    }
  } catch (_) {}
})();
```

`ThemeToggle.astro` re-registers its click listener on `astro:after-swap` to survive View Transition navigation.

---

## View Transitions Setup

- `ClientRouter` from `astro:transitions` is mounted in `BaseLayout.astro` `<head>`
- `transition:animate="slide"` on `<main>` in `BaseLayout` — all pages slide on navigation
- `transition:name={`project-${id}`}` on `ProjectCard` article and the detail page `<article>` — cards morph into their detail page
- Reduced motion: `prefers-reduced-motion: reduce` block in `global.css` disables all transitions globally

---

## RSS Feed

`src/pages/rss.xml.ts` — language-agnostic, links to English (`/en/blog/{id}/`).  
Uses `@astrojs/rss`. Update the title/description strings when adding real content.

## Sitemap

Configured via `@astrojs/sitemap` in `astro.config.mjs`. Replace `site: 'https://example.com'` with the real domain before deploying.
