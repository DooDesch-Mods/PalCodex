---
title: FModel
description: The community's standard tool for browsing and exporting Palworld's cooked assets.
sidebar:
  order: 1
versionStatus: needs-review
sourceDate: "2024-02-05"
---

**FModel** is a free asset explorer for Unreal Engine games. For Palworld it is the standard way to
browse the game's packages and export models, textures and data so you can work on them.

- **Download:** [fmodel.app/download](https://fmodel.app/download) (needs the .NET 8.0 Desktop Runtime).
- **Engine preset for Palworld:** `GAME_UE5_1` (Palworld is Unreal Engine 5.1.1).
- **Requires a [mappings file (`.usmap`)](/tools-and-setup/mappings-usmap/)** for your build.

## What you use it for

- Exploring what assets exist and their exact paths (essential before editing anything).
- Exporting textures and models to edit externally.
- Exporting cooked `.uasset` files as raw data to edit in
  [UAssetGUI](/tools-and-setup/uassetgui/) or repack.

For the full first-time setup, see [Extracting game files](/tools-and-setup/extracting-game-files/).

## Credits

- **FModel-for-Palworld setup** documented by **Norsky** - see
  [Extracting game files](/tools-and-setup/extracting-game-files/) for the credited step-by-step.
