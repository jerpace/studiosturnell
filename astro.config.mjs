import { defineConfig } from 'astro/config';

// sturnell.com — hand-coded rebuild
// i18n handles the EN/MT split natively: /en/... and /mt/... routes,
// with English as the default/root locale.
export default defineConfig({
  site: 'https://sturnell.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'mt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
