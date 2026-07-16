---
title: Creating & Editing Recipes
description: Find Palworld's recipe data, edit existing recipes, add new ones, and test them in game.
sidebar:
  order: 2
versionStatus: needs-review
sourceDate: "2024-02-13"
---

Crafting recipes in Palworld are data, not code - which means you can change what an item costs to
craft, or add entirely new recipes, by editing the recipe DataTable. This builds directly on
[DataTable modding without Unreal](/data-modding/datatable-without-unreal/).

This page orients you; the full written walkthrough (with screenshots) is Doctor Duck's guide linked
in Credits.

## What the guide covers

1. **Finding the recipe files** - locating the DataTable(s) that hold Palworld's recipes among the
   extracted game data.
2. **Editing an existing recipe** - changing ingredients, counts, or the produced item.
3. **Adding a new recipe** - cloning a recipe row and adjusting its fields so the game treats it as a
   new, valid entry.
4. **Testing in game** - packaging the change and confirming the recipe appears and works.

## Practical notes

- **Clone an existing recipe row** rather than authoring one from scratch, so every field and type is
  present - then change only the ingredients, amounts and output. Missing fields are the usual reason a
  new recipe fails to appear.
- **Reference items by their correct IDs.** Ingredients and outputs point at item identifiers; get
  these from the item data rather than guessing display names.
- **Package as a `_P` mod** and keep paired `.uasset`/`.uexp` files together - see
  [Packaging & Pak Pipeline](/packaging/).
- For a lower-conflict, JSON-based alternative to editing the cooked table, see
  [PalSchema](/frameworks/palschema/).

## Credits

- **Guide created and shared by Doctor Duck** - a full walkthrough of finding, editing, adding and
  testing Palworld recipes, written after being asked repeatedly how it's done.

  > Source: **Doctor Duck** - [original message](https://discord.com/channels/881638083169230928/1207081251991855114/1207081251991855114)
- The guide document itself is linked from that message (hosted on Google Docs).
