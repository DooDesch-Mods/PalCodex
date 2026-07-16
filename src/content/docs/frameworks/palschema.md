---
title: PalSchema
description: A data/schema modding framework that patches Palworld items, Pals, recipes and translations from JSON instead of cooked DataTables.
sidebar:
  order: 2
versionStatus: needs-review
---

**PalSchema** is a data-modding framework for Palworld. Instead of editing and shipping whole cooked
DataTables, you describe your changes in **JSON** and PalSchema applies them at load time. That makes
data mods easier to write and much less likely to conflict with other mods that touch the same tables.

## What it's good for

- Adding or patching **items**, **Pals**, **recipes** and **translations** through readable JSON.
- **Minimising conflicts** - because you patch specific fields rather than replacing an entire table,
  two PalSchema mods editing different rows can coexist where two raw cooked-table mods would collide.
- **Surviving small updates** more gracefully than a hardcoded cooked table, since you only assert the
  fields you care about.

## PalSchema vs a raw DataTable edit

| PalSchema | Raw [DataTable edit](/data-modding/datatable-without-unreal/) |
| --- | --- |
| Edit readable JSON | Edit the cooked table in UAssetGUI |
| Patches specific fields - low conflict | Ships the whole table - higher conflict |
| Great for values, items, recipes, strings | Needed for structural changes a schema can't express |

## Using it

- Install PalSchema per the official [Palworld Modding Wiki](https://pwmodding.wiki/) instructions for
  your build, and place your JSON patches where it expects them.
- Like other loaded frameworks, confirm it is updated for your Palworld build after a game patch before
  relying on it - see [Compatibility & updates](/troubleshooting/compatibility-and-updates/).

:::caution[Reloading]
When iterating on data mods, prefer a full game/mod restart over an in-place "reload all mods" - partial
reloads with data frameworks can hang or crash. Restart cleanly when in doubt.
:::

## When to use it

Use PalSchema when you're changing **data** - stats, items, recipes, drops, strings - and want a clean,
low-conflict workflow. For behavior use [UE4SS Lua](/lua-scripting/); for new Blueprint content use the
[Palworld Modding Kit](/frameworks/palworld-modding-kit/).
