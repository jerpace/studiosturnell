import { defineType, defineField } from 'sanity';

// One document per project on the Work page. This is the whole point of
// moving off static pages: adding a new project is filling out this form,
// not building a new page by hand.
export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'client',
      title: 'Client name',
      description: 'Shown above the project name on the Work page gallery card.',
      type: 'localeString',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      options: { source: 'title.en' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Work grid thumbnail',
      description: 'Source at 1040×760 — the site scales it down for smaller screens.',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroImage',
      title: 'Project hero image',
      description: 'Source at 2400px wide.',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'overlayImages',
      title: 'Project overlay images',
      description: 'Source at 2400px wide (desktop) — 3–4 images typical.',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers show first on the Work page.',
    }),
  ],
  preview: {
    select: { title: 'title.en', media: 'thumbnail' },
  },
});
