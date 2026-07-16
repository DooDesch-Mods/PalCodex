import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Extend Starlight's docs schema with PalCodex curation metadata:
// - versionStatus drives the automatic 1.0-vs-early-access banner (see src/components/Banner.astro)
// - sourceDate  is the date of the original Discord post the page was curated from
// - lastReviewed is the date a human last verified the page against Palworld 1.0
export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        versionStatus: z
          .enum(['verified-1.0', 'needs-review', 'legacy-ea'])
          .default('verified-1.0'),
        sourceDate: z.string().optional(),
        lastReviewed: z.string().optional(),
      }),
    }),
  }),
};
