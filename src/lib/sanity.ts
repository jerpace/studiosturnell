import { createClient } from '@sanity/client';

// These get set once Jeremy creates the free Sanity project — until then,
// every page falls back to placeholder copy so the site still runs.
const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET ?? 'production';

export const sanityConfigured = Boolean(projectId);

export const sanity = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2026-01-01',
      useCdn: true,
    })
  : null;

export async function fetchSanity<T>(query: string, fallback: T): Promise<T> {
  if (!sanity) return fallback;
  try {
    const result = await sanity.fetch<T>(query);
    // An empty/missing document (e.g. no "home" doc created in Sanity yet)
    // resolves successfully with null — treat that the same as a fallback,
    // not just a thrown network error.
    return result ?? fallback;
  } catch (err) {
    console.error('[sanity] fetch failed, using fallback content:', err);
    return fallback;
  }
}
