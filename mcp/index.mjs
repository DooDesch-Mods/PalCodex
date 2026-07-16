#!/usr/bin/env node
// MCP server for PalCodex - the Palworld 1.0 modding wiki.
// Exposes the curated wiki corpus to agents as search + read tools. Fully local.

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import {
  loadCorpus,
  search,
  getPage,
  listPages,
  listSections,
  VERSION_STATES,
} from './lib.mjs';

let corpus;
try {
  corpus = loadCorpus();
} catch (err) {
  console.error(
    `[palcodex-mcp] Failed to load the docs corpus. Set PALCODEX_DOCS_DIR to the ` +
      `wiki's src/content/docs folder.\n${err?.stack || err}`,
  );
  process.exit(1);
}
console.error(
  `[palcodex-mcp] Indexed ${corpus.pages.length} pages from ${corpus.docsDir}`,
);

const server = new McpServer(
  { name: 'palcodex', version: '1.0.0' },
  {
    instructions:
      'PalCodex: a community knowledge base for modding Palworld 1.0 (UE4SS Lua, PalSchema, ' +
      'DataTable/asset editing, packaging, dedicated-server modding). Use search_palcodex to find ' +
      'relevant pages by keyword (e.g. "datatable", "model swap", "mappings usmap", "UE4SS Lua hook", ' +
      '"dedicated server"), then get_page to read the full markdown. Each page credits its original ' +
      'Discord author with a backlink and carries a versionStatus (verified-1.0 / needs-review / ' +
      'legacy-ea) - prefer verified-1.0 and treat legacy-ea as background. Use list_sections / ' +
      'list_pages to browse. All content is local and offline.',
  },
);

const asText = (obj) => ({ content: [{ type: 'text', text: JSON.stringify(obj, null, 2) }] });

server.tool(
  'search_palcodex',
  'Full-text search across PalCodex (the Palworld modding wiki). Returns ranked pages with a ' +
    'snippet, section, slug, versionStatus and live URL. Follow up with get_page to read a result ' +
    'in full.',
  {
    query: z.string().describe('Keywords, e.g. "datatable without unreal" or "kawaii physics bones".'),
    limit: z.number().int().min(1).max(25).optional().describe('Max results (default 8).'),
    section: z
      .string()
      .optional()
      .describe('Optional section key to filter, e.g. "frameworks", "data-modding", "packaging".'),
    versionStatus: z
      .enum(VERSION_STATES)
      .optional()
      .describe('Optional filter: only pages with this curation state (prefer "verified-1.0").'),
  },
  async ({ query, limit, section, versionStatus }) => {
    const results = search(corpus, query, { limit, section, versionStatus });
    if (results.length === 0)
      return asText({ query, results: [], hint: 'No matches. Try broader keywords or list_sections.' });
    return asText({ query, count: results.length, results });
  },
);

server.tool(
  'get_page',
  'Read one PalCodex page in full (raw markdown, including its "> Source:" author credits and ' +
    'versionStatus). Accepts a slug like "data-modding/datatable-without-unreal", a section like ' +
    '"frameworks", or a full page URL.',
  {
    path: z
      .string()
      .describe('Page slug (e.g. "lua-scripting/lua-modding-in-palworld"), section, or full URL.'),
  },
  async ({ path }) => {
    const page = getPage(corpus, path);
    if (!page) {
      const suggestions = listPages(corpus)
        .map((p) => p.slug || '(home)')
        .slice(0, 80);
      return {
        isError: true,
        content: [
          {
            type: 'text',
            text: `No page for "${path}". Known slugs include:\n${suggestions.join('\n')}`,
          },
        ],
      };
    }
    const header =
      `# ${page.title}\n\nSection: ${page.section}\nURL: ${page.url}\n` +
      `Version status: ${page.versionStatus}` +
      (page.sourceDate ? ` (source ${page.sourceDate})` : '') +
      (page.sources?.length ? `\nCredited authors: ${page.sources.map((s) => s.author).join(', ')}` : '') +
      `\n\n---\n\n`;
    return { content: [{ type: 'text', text: header + page.markdown }] };
  },
);

server.tool(
  'list_pages',
  'List PalCodex pages (title, section, slug, URL, versionStatus, description). Optionally filter ' +
    'by section and/or versionStatus.',
  {
    section: z
      .string()
      .optional()
      .describe('Optional section key, e.g. "data-modding" or "frameworks".'),
    versionStatus: z
      .enum(VERSION_STATES)
      .optional()
      .describe('Optional filter by curation state.'),
  },
  async ({ section, versionStatus }) => asText({ pages: listPages(corpus, { section, versionStatus }) }),
);

server.tool(
  'list_sections',
  'List the top-level sections of PalCodex with page counts. Use these keys to filter ' +
    'search_palcodex and list_pages.',
  {},
  async () => asText({ sections: listSections(corpus) }),
);

const transport = new StdioServerTransport();
await server.connect(transport);
console.error('[palcodex-mcp] ready on stdio');
