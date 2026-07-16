---
title: Getting Started
description: What Palworld modding is, how PalCodex marks 1.0 vs early-access content, installing the modding kit, and building your first mod.
sidebar:
  order: 0
---

New to modding Palworld? Start here. This section orients you before you dive into a specific
discipline.

## Read this first

- **[Palworld 1.0 vs early access](/getting-started/modding-1-0-vs-early-access/)** - the single most
  important thing to understand when reading any Palworld modding guide. A lot of community knowledge
  was written during early access (early 2024) and some of it no longer applies to Palworld 1.0. Every
  page on PalCodex carries a version-status banner so you always know what you're looking at.

## What "modding Palworld" actually means

Palworld is an Unreal Engine 5.1 game, and mods fall into a few broad families:

- **Asset mods** - swap or edit cooked assets (models, textures, audio) and repackage them as `.pak`
  files. See [Asset, Model & Texture Modding](/asset-modding/) and [Audio Modding](/audio/).
- **Data mods** - change game values in DataTables (recipes, stats, drops) without touching Unreal.
  See [Data & DataTable Modding](/data-modding/).
- **Script mods** - run logic at runtime with UE4SS Lua. See [Lua Scripting](/lua-scripting/).
- **Framework / library mods** - the tooling you build *on top of* to make the above faster and
  cleaner. See [API & Framework Mods](/frameworks/).

## The rough path

1. Understand the [1.0 vs early access](/getting-started/modding-1-0-vs-early-access/) situation.
2. Set up your [tools](/tools-and-setup/) (FModel, UAssetGUI, repak, mappings).
3. Pick an approach - and if you're unsure, read [API & Framework Mods](/frameworks/) to decide which
   framework fits your goal.
4. Make a change, [package it](/packaging/), and test.

If you get stuck, the [Troubleshooting & FAQ](/troubleshooting/) section collects the errors and fixes
that come up most often in the help channels.
