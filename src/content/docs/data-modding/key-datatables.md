---
title: Key DataTables (where things live)
description: The Palworld DataTables that hold partner skills, Pal stats, recipes and icons - so you know exactly what to edit.
sidebar:
  order: 1
versionStatus: needs-review
sourceDate: "2026-07"
---

Half of data modding is just knowing *which* DataTable holds the thing you want to change. This is a
community-sourced map of the most-asked-about tables, current for Palworld 1.0. Edit them with
[UAssetGUI](/tools-and-setup/uassetgui/) or patch them with [PalSchema](/frameworks/palschema/).

## Partner / passive skills

- **`DT_PartnerSkillParameter`** (`Pal/Content/Pal/DataTable/PassiveSkill/DT_PartnerSkillParameter`)
  holds the partner/passive-skill settings for every Pal. Override the relevant rows to change or add
  partner skills.

  > Source: **Okaetsu** - [original message](https://discord.com/channels/881638083169230928/1204916830653775895/1525549385910587633)

## Pal base stats (and making a Pal uncatchable)

- **`DT_PalMonsterParameter`** holds a Pal's base stats. Use **`DT_PalHumanParameter`** for human/NPC
  entries. For example, setting the **capture rate to 0** makes a Pal uncatchable.

  > Source: **Snorkles** - [original message](https://discord.com/channels/881638083169230928/1204916830653775895/1460212731037880372)

## Item / tech-tree icons

- Point a recipe's **`IconName`** in **`DT_TechnologyRecipeUnlock_Common`** to a new icon key, then
  define that key in **`DT_ItemIconDataTable_Common`** with an `Icon` value referencing your packed
  texture via a `$resource` path, e.g. `"Icon": "$resource/Tools/metal_axe_icon"`.

  > Source: **Nchi** - [original message](https://discord.com/channels/881638083169230928/1199881629095694427/1525881325020643530)

## Recipes

- Crafting recipes have their own table - see [Creating & editing recipes](/data-modding/editing-recipes/).

:::note[Confirm against your build]
Table and row names can shift between game builds. Re-extract from your own install to confirm a path
before relying on it - see [Palworld 1.0 vs early access](/getting-started/modding-1-0-vs-early-access/).
:::
