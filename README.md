# PalCodex

The community handbook for modding [Palworld](https://store.steampowered.com/app/1623730/Palworld/) 1.0 - frameworks, tools, asset and data modding, Lua scripting, packaging and dedicated-server modding, curated from the **Palworld Modding Community** Discord.

> 🛟 **Need help or found a bug?** Get support at [support.doodesch.de/palcodex](https://support.doodesch.de/palcodex).

## What this is

A searchable, categorized knowledge base that collects Palworld modding know-how which was previously only findable by scrolling Discord. It is curated **1.0-first**: every page carries a version status, and content from the early-access era is clearly marked as legacy. Every piece is credited to its original author with a link back to the source message. Built with [Astro Starlight](https://starlight.astro.build/) and deployed to GitHub Pages.

- **Read it:** https://doodesch-mods.github.io/PalCodex
- **Contributors & credits:** see the [Contributors](https://doodesch-mods.github.io/PalCodex/contributors/) page.

## Use it from an AI agent (MCP)

This repo ships a small [MCP](https://modelcontextprotocol.io/) server so an AI coding agent (Claude Code, Claude Desktop, Cursor, ...) can search and read PalCodex while it helps you build a mod - fully local, no API cost. It exposes `search_palcodex`, `get_page`, `list_pages` and `list_sections` over the curated corpus, with a `versionStatus` filter so agents can prefer verified-1.0 content. See [`mcp/README.md`](./mcp/README.md) for setup.

## Local development

```bash
npm install
npm run dev      # local preview at http://localhost:4321/PalCodex
npm run build    # production build into ./dist (fails on broken internal links)
```

Pages live under `src/content/docs/`, organized by the sidebar categories in `astro.config.mjs`.

## Contributing

Found something to add, fix or correct? Open an issue or PR. If you authored a guide or snippet republished here and want the credit adjusted or the content removed, contact [support.doodesch.de/palcodex](https://support.doodesch.de/palcodex) and we will sort it out.

## Credits & license

Knowledge here comes from the members of the Palworld Modding Community Discord - thank you. Documentation prose and structure is licensed under [CC BY 4.0](./LICENSE). Code snippets remain under their original authors' terms; they are reproduced here with attribution, not relicensed. See [LICENSE](./LICENSE) for details.
