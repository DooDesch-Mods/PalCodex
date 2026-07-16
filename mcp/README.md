# PalCodex MCP server

A tiny [Model Context Protocol](https://modelcontextprotocol.io/) server that indexes this wiki so an
AI agent (Claude Code, Claude Desktop, Cursor, etc.) can **search and read PalCodex directly** while it
helps you build a Palworld mod. Fully local, no network, no API cost - it reads the curated markdown in
`../src/content/docs`, builds an in-memory search index at startup, and serves it over stdio.

## Tools

- **`search_palcodex`** `{ query, limit?, section?, versionStatus? }` - full-text search; returns ranked
  pages with a snippet, section, slug, versionStatus and live URL.
- **`get_page`** `{ path }` - read one page in full as markdown (credits and versionStatus included).
  Accepts a slug (`data-modding/datatable-without-unreal`), a section, or a full page URL.
- **`list_pages`** `{ section?, versionStatus? }` - the table of contents.
- **`list_sections`** - the top-level sections and their page counts (use these keys to filter).

The `versionStatus` filter (`verified-1.0` / `needs-review` / `legacy-ea`) lets an agent prefer content
that has been verified against Palworld 1.0.

## Setup

```bash
cd mcp
npm install
```

Then register it with your MCP client. For example, in a project `.mcp.json` (Claude Code):

```json
{
  "mcpServers": {
    "palcodex": {
      "command": "node",
      "args": ["path/to/PalCodex/mcp/index.mjs"]
    }
  }
}
```

The server locates the docs relative to itself, so no extra config is needed when it lives inside a
checkout of this repo. To point it at a docs folder elsewhere, set `PALCODEX_DOCS_DIR` (and
`PALCODEX_SITE_URL` to control the URLs it returns).

## Verify

```bash
npm run smoke   # offline check of indexing + search over the local corpus
```

## Typical agent flow

1. `search_palcodex { "query": "datatable without unreal" }`
2. `get_page { "path": "data-modding/datatable-without-unreal" }`
3. Use the guidance, keeping the `> Source:` credit.
