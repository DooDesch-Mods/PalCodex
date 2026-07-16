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

## Common PalSchema gotchas

Recurring PalSchema problems from the help channels, with the fixes:

- **Swapping a Blueprint's skeletal mesh** (a weapon/tool model): setting `"SkeletalMesh": "/Game/..."`
  directly errors that it wants a `SkeletalMeshComponent`, not a `SkeletalMesh`. Nest the property under
  the component so the path sits inside a `SkeletalMesh` object, and **also set `SkinnedAsset`** to the
  same value or the model won't actually change:

  ```json
  { "BP_PickaxeTier1_C": { "SkeletalMesh": { "SkeletalMesh": "/Game/Pal/Model/Weapon/Hammer/SK_Weapon_Hammer_001.SK_Weapon_Hammer_001" } } }
  ```

  > Source: **Okaetsu** - [original message](https://discord.com/channels/881638083169230928/1199881629095694427/1526242205470294166)

- **"Property ActionMap was supplied an invalid class of /Game/Mods/.../BP_..._C"** (load stops on the
  first Pal alphabetically): the JSON references a Blueprint class that isn't present because a required
  **dependency pak is missing** - the companion pak that ships those `BP_*_C` classes. Install the
  missing pak dependency and the classes resolve.

  > Source: **Okaetsu** - [original message](https://discord.com/channels/881638083169230928/1107095001248301128/1527265029714350081)

- **A custom Pal's partner skill shows only placeholder text and doesn't work:** you must also define
  the skill in `DT_PartnerSkillParameter` - add a `TextReferencePassiveSkills` array (nested
  `PassiveSkillIds` entries, one group per rank) for that Pal, placed in PalSchema's `raw` folder.
  Without this the skill is broken, not just the text.

  > Source: **Primarinabee** - [original message](https://discord.com/channels/881638083169230928/1107095001248301128/1527316622539231263)

For where the relevant tables live, see [Key DataTables](/data-modding/key-datatables/).

## When to use it

Use PalSchema when you're changing **data** - stats, items, recipes, drops, strings - and want a clean,
low-conflict workflow. For behavior use [UE4SS Lua](/lua-scripting/); for new Blueprint content use the
[Palworld Modding Kit](/frameworks/palworld-modding-kit/).
