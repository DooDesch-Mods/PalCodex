---
title: Extracting Game Files
description: Set up FModel to open, explore and export Palworld's models, textures and data.
sidebar:
  order: 5
versionStatus: needs-review
sourceDate: "2024-02-05"
---

Before you can mod anything you need to see and export the game's cooked files. The community's standard
tool for browsing and extracting Palworld content is **[FModel](/tools-and-setup/fmodel/)**.

## Setting up FModel for Palworld

1. **Install FModel** from [fmodel.app/download](https://fmodel.app/download). It requires the
   **.NET 8.0 Desktop Runtime** installed on your machine.
2. **Add the game.** In FModel, use *Add Undetected game*, give it any name, and point the directory at
   your Palworld install folder. Confirm with the add button.
3. **Set the engine version.** Palworld is **Unreal Engine 5.1.1**, so select the **`GAME_UE5_1`**
   setting.
4. **Enable mappings.** In Settings, enable the local mapping file and select a **`Mappings.usmap`**
   file. Without it you cannot open or extract models and textures. See
   [Mappings (.usmap)](/tools-and-setup/mappings-usmap/) for where to get one and why it is
   build-specific.
5. **Browse and export.** You can now explore the packages and export textures, models and data.

:::caution[Match the mappings to your build]
A `.usmap` is tied to a specific game build. Using one from a different Palworld version is the most
common reason extraction misbehaves. See
[Palworld 1.0 vs early access](/getting-started/modding-1-0-vs-early-access/).
:::

## Credits

- **FModel setup guide shared by Norsky** - the step-by-step for pointing FModel at Palworld with the
  correct engine version and mappings.

  > Source: **Norsky** - [original message](https://discord.com/channels/881638083169230928/1203930305195540521/1203930305195540521)
