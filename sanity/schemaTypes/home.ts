import { defineType, defineField } from 'sanity';

// Singleton — there's only ever one Home document. The Sanity Studio
// structure (sanity/structure.ts) pins it so Jeremy sees "Home" as a single
// editable page rather than a list he could accidentally duplicate.
export default defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({ name: 'headline', title: 'Headline', type: 'localeString' }),
    defineField({
      name: 'portraits',
      title: 'Home portraits',
      description: 'Source at 662×1364 (desktop) — 3 images.',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],
});
