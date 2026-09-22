import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contact',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone / WhatsApp', type: 'string' }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'address', title: 'Address', type: 'localeText' }),
    defineField({ name: 'ctaLabel', title: 'Contact button label', type: 'localeString' }),
  ],
});
