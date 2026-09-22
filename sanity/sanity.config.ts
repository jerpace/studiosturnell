import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

// This is the actual editing interface Jeremy logs into — day-to-day content
// changes (swap a project photo, edit the Studio bio, add a new project)
// happen here, not in the Astro codebase.
export default defineConfig({
  name: 'sturnell-studio',
  title: 'studio/sturnell',

  projectId: 'afw4ubfw',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
