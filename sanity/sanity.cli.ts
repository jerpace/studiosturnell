import { defineCliConfig } from 'sanity/cli';

// Separate from sanity.config.ts on purpose — this is the file the Sanity
// CLI itself reads (deploy, dev, etc.) before the Studio app even loads,
// so it needs its own copy of the project identifier.
export default defineCliConfig({
  api: {
    projectId: 'afw4ubfw',
    dataset: 'production',
  },
});
