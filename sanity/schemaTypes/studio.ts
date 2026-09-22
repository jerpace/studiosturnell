import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'studio',
  title: 'Studio Page',
  type: 'document',
  fields: [
    defineField({ name: 'bio', title: 'Studio bio', type: 'localeText' }),
    defineField({
      name: 'images',
      title: 'Studio images',
      description: 'Source at 662×1364 (desktop) — 2 images.',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],
});
