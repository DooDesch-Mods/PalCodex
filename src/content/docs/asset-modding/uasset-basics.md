---
title: Cooked uasset Basics
description: What a cooked Palworld .uasset is, how its pieces fit together, and why that matters when you edit one.
sidebar:
  order: 1
versionStatus: needs-review
sourceDate: "2024-02-13"
---

Palworld ships **cooked** assets: the editor's source assets have been processed into a runtime format
inside `.pak` containers. Understanding the shape of a cooked asset makes every other kind of asset
modding less mysterious.

## The pieces

- **`.uasset`** - the asset header and structure (properties, references, exports).
- **`.uexp`** - the bulk data that goes with it (the actual bytes of the asset's content).
- These two are a **pair**: always keep and pack them together. Editing one without the other, or
  losing the pair, is a common cause of an asset failing to load.
- Tools like [UAssetGUI](/tools-and-setup/uassetgui/) read this cooked format directly - but only with
  the correct [mappings (`.usmap`)](/tools-and-setup/mappings-usmap/) for your game build.

## Why it matters for editing

- **Types are strict.** Cooked data records exact property types. When you edit a value or clone a row,
  keep the types intact - mismatches make the asset fail to load.
- **Paths are internal.** Assets reference each other by internal package paths. Get these from
  [FModel](/tools-and-setup/fmodel/) rather than guessing.
- **You are editing the runtime form, not source.** There is no "undo in the editor" - work on copies
  and keep the originals.

From here, the practical paths are [texture swaps](/asset-modding/texture-swaps/),
[model swaps](/asset-modding/model-swaps/), and [DataTable editing](/data-modding/datatable-without-unreal/).

## Credits

- **Basic uasset modding how-to** recorded and shared by **Heavenly Demon**, made after repeated
  requests to explain how the changes in their Nexus mod were done - a beginner-oriented introduction to
  editing Palworld's assets.

  > Source: **Heavenly Demon** - [original message](https://discord.com/channels/881638083169230928/1207033300636536863/1207033300636536863)
