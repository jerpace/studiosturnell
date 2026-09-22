import { defineType, defineField } from 'sanity';

// A reusable "one field, two languages" type. Every piece of copy on the site
// uses this instead of a plain string, so EN and MT always travel together
// in the same document — no risk of the Maltese version quietly falling
// out of sync with an English edit.
export const localeString = defineType({
  name: 'localeString',
  title: 'Text (EN / MT)',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', type: 'string' }),
    defineField({ name: 'mt', title: 'Malti', type: 'string' }),
  ],
});

export const localeText = defineType({
  name: 'localeText',
  title: 'Paragraph (EN / MT)',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', type: 'text' }),
    defineField({ name: 'mt', title: 'Malti', type: 'text' }),
  ],
});
