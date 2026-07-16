---
title: DataTable Modding Without Unreal Engine
description: Edit Palworld's DataTables directly with UAssetGUI - no Unreal Engine install - to change stats, drops, recipes and more.
sidebar:
  order: 1
versionStatus: needs-review
sourceDate: "2024-12-09"
---

Most of Palworld's tunable values - Pal parameters, item definitions, drop rates, recipes, spawns -
live in **DataTables** inside cooked `.uasset` files. You do not need Unreal Engine to change them:
you can unpack the game's data, edit the table directly in **[UAssetGUI](/tools-and-setup/uassetgui/)**,
and repack the result as a mod.

This page is the community's orientation to that workflow. The full, maintained step-by-step lives on
the official modding wiki (linked in Credits); read it alongside this page.

## The workflow at a glance

1. **Extract the game's data.** Unpack the relevant `.pak`/container with
   [repak](/tools-and-setup/repak-and-retoc/), or browse and export in
   [FModel](/tools-and-setup/fmodel/), to get the cooked `.uasset` (+ `.uexp`) that holds the table you
   want.
2. **Open it in UAssetGUI.** You need the correct **[mappings file (`.usmap`)](/tools-and-setup/mappings-usmap/)**
   for your game build so UAssetGUI can interpret the cooked data. Load the `.usmap`, then open the
   `.uasset`.
3. **Find the DataTable and edit rows.** Navigate to the table export, edit the cell values (or add a
   new row by cloning an existing one and changing its row name and fields).
4. **Save, then repack.** Save the `.uasset` from UAssetGUI, place it under the correct mod path, and
   pack it into a `_P` mod `.pak` - see [Packaging & Pak Pipeline](/packaging/).
5. **Test in game** and check the value actually changed.

## Notes & gotchas from the community

- **Match the mappings to your build.** The single most common failure is using a `.usmap` from a
  different game version - UAssetGUI then misreads the asset. Regenerate or re-download mappings for
  your current build. See [Palworld 1.0 vs early access](/getting-started/modding-1-0-vs-early-access/).
- **Clone, don't hand-type, new rows.** When adding a row, duplicate an existing one so every field and
  type is present, then change only what you need. Missing or mistyped fields are a frequent cause of
  the table failing to load.
- **Keep `.uasset` and `.uexp` together.** Cooked assets are split across paired files; move and pack
  them as a pair.
- **A raw DataTable edit ships the whole table.** If you only want to tweak a few values and play well
  with other mods, consider **[PalSchema](/frameworks/palschema/)**, which patches data from JSON
  instead of shipping a full cooked table (fewer conflicts).

## When to use this vs PalSchema

| Use a raw DataTable edit when... | Use PalSchema when... |
| --- | --- |
| You are comfortable in UAssetGUI and want direct control | You prefer editing readable JSON |
| You are changing structural things a schema patch can't express | You are tweaking values and want to minimise mod conflicts |
| You are learning how the cooked data is actually laid out | You want your change to survive small game updates more easily |

## Credits

- **Guide shared by Guillotine**, catering to complete beginners, bringing you to a working
  understanding of UAssetGUI for DataTables, blueprints and more.

  > Source: **Guillotine** - [original message](https://discord.com/channels/881638083169230928/1315765050522468507/1315765050522468507)
- **Canonical step-by-step:** the [With UAssetGUI](https://pwmodding.wiki/docs/category/with-uassetgui)
  category on the official Palworld Modding Wiki, which is kept up to date for the current game build.
