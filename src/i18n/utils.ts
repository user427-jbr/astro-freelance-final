import { defaultLang, ui, type Lang } from './ui';

/** Trailing-slash-free deploy base, e.g. "" at root or "/astro-freelance-final". */
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an absolute site path with the deploy base so links work under a subpath. */
export function localizePath(path: string): string {
  const p = path.startsWith('/') ? path : '/' + path;
  return BASE + p;
}

export function getLangFromUrl(url: URL): Lang {
  const path = BASE && url.pathname.startsWith(BASE)
    ? url.pathname.slice(BASE.length)
    : url.pathname;
  const [, lang] = path.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
