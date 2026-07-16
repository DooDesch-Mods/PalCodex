// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { rehypeBaseLinks } from './plugins/rehype-base-links.mjs';

// For GitHub Pages project sites the site is the org page and base is the repo name.
// If a custom domain (e.g. palcodex.doodesch.de) is added later, set BASE to '/'.
const BASE = '/PalCodex';

export default defineConfig({
  site: 'https://doodesch-mods.github.io',
  base: BASE,
  markdown: {
    rehypePlugins: [[rehypeBaseLinks, { base: BASE }]],
  },
  integrations: [
    starlight({
      title: 'PalCodex',
      description:
        'A community knowledge base for modding Palworld 1.0 - frameworks, tools, asset and data modding, Lua scripting, packaging and dedicated-server modding, curated from the Palworld Modding Community Discord.',
      tagline: 'The community handbook for modding Palworld 1.0.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/DooDesch-Mods/PalCodex',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/DooDesch-Mods/PalCodex/edit/main/',
      },
      lastUpdated: true,
      customCss: ['./src/styles/custom.css'],
      components: {
        // Auto version-status banner (1.0 vs early-access) on every page.
        Banner: './src/components/Banner.astro',
      },
      sidebar: [
        { label: 'Introduction', link: '/' },
        {
          label: 'Getting Started',
          items: [{ autogenerate: { directory: 'getting-started' } }],
        },
        {
          label: 'API & Framework Mods',
          items: [{ autogenerate: { directory: 'frameworks' } }],
        },
        {
          label: 'Tools & Setup',
          items: [{ autogenerate: { directory: 'tools-and-setup' } }],
        },
        {
          label: 'Asset, Model & Texture Modding',
          items: [{ autogenerate: { directory: 'asset-modding' } }],
        },
        {
          label: 'Data & DataTable Modding',
          items: [{ autogenerate: { directory: 'data-modding' } }],
        },
        {
          label: 'Lua Scripting',
          items: [{ autogenerate: { directory: 'lua-scripting' } }],
        },
        {
          label: 'Animations',
          items: [{ autogenerate: { directory: 'animations' } }],
        },
        {
          label: 'Audio Modding',
          items: [{ autogenerate: { directory: 'audio' } }],
        },
        {
          label: 'Packaging & Pak Pipeline',
          items: [{ autogenerate: { directory: 'packaging' } }],
        },
        {
          label: 'Translations',
          items: [{ autogenerate: { directory: 'translations' } }],
        },
        {
          label: 'Dedicated Server Modding',
          items: [{ autogenerate: { directory: 'dedicated-server' } }],
        },
        {
          label: 'Troubleshooting & FAQ',
          items: [{ autogenerate: { directory: 'troubleshooting' } }],
        },
        {
          label: 'Reference & Links',
          items: [{ autogenerate: { directory: 'reference' } }],
        },
        { label: 'Contributors', link: '/contributors' },
      ],
    }),
  ],
});
