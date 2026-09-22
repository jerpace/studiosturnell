import { defineType, defineField } from 'sanity';

// Nav labels, footer copy, button/CTA text — the small bits of chrome
// that appear on every page. Kept separate from page content so changing
// "Contact" to something else in the nav doesn't mean hunting through
// every page document.
export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'navHome', title: 'Nav: Home', type: 'localeString' }),
    defineField({ name: 'navStudio', title: 'Nav: Studio', type: 'localeString' }),
    defineField({ name: 'navWork', title: 'Nav: Work', type: 'localeString' }),
    defineField({ name: 'navContact', title: 'Nav: Contact', type: 'localeString' }),
    defineField({ name: 'footerRights', title: 'Footer rights line', type: 'localeString' }),
  ],
});
