---
title: Tools & Setup
description: The core Palworld modding toolbox - FModel, UAssetGUI, repak/retoc, mappings, and extracting game files.
sidebar:
  order: 0
---

Before you can change anything, you need to see and unpack the game's files. This section covers the
core toolbox most Palworld mods rely on.

## The toolbox

- **[FModel](/tools-and-setup/fmodel/)** - browse and export cooked assets (models, textures, data)
  from the game's packages. Your window into what exists and where.
- **[UAssetGUI](/tools-and-setup/uassetgui/)** - open and edit individual cooked `.uasset` files,
  including DataTables, without an Unreal Editor.
- **[repak & retoc](/tools-and-setup/repak-and-retoc/)** - pack and unpack the game's mod containers.
  See [Packaging & Pak Pipeline](/packaging/) for the full workflow.
- **[Mappings (.usmap)](/tools-and-setup/mappings-usmap/)** - the type-mapping file FModel and
  UAssetGUI need to make sense of cooked assets. Build-specific.
- **[Extracting game files](/tools-and-setup/extracting-game-files/)** - how to open, explore and pull
  assets out of the game to work on them.

## The golden rule

Extract from *your own* game install for *your* build. Tool versions, mappings and asset paths all
track the game version, so material generated for an older build can silently be wrong. When in doubt,
re-extract. See [Palworld 1.0 vs early access](/getting-started/modding-1-0-vs-early-access/).
