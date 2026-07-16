---
title: Pak Pipeline
description: Packing and unpacking Palworld mod containers, the _P suffix, and how a cooked change becomes a loadable .pak.
sidebar:
  order: 1
versionStatus: needs-review
---

Once you've edited assets or data, you package them into a `.pak` the game loads from its mod folder.
This page covers the mechanics that every asset and data mod shares.

## Packing and unpacking

- **Unpack** an existing container to see or modify its contents. A common question in the help channels
  is simply "how do I open a PAK mod to change it?" - you unpack it with a pak tool, edit the files
  inside, and repack.
- **Pack** your modified files (keeping the correct internal folder structure) into a new `.pak`.
- The community standard tool for this is **[repak](/tools-and-setup/repak-and-retoc/)**; Unreal's own
  UnrealPak is used in the Unreal-Engine-based workflows (model/audio/translation).

## The `_P` suffix

Mod `.pak` files that should **override** base game content are named with a **`_P`** suffix (for
example `MyMod_P.pak`). The `_P` marks the pak as a patch so it loads after, and takes priority over,
the base content it replaces. Getting this wrong is a frequent reason "my mod isn't doing anything."

## Keep cooked pairs together

Cooked assets are `.uasset` + `.uexp` **pairs** (see
[cooked uasset basics](/asset-modding/uasset-basics/)). Pack both, in the correct path, or the asset
won't load.

## Where mods go

Built mod `.pak` files are placed in the game's mod paks folder (e.g. under
`...\Pal\Content\Paks`). The exact subfolder depends on your setup and whether you're loading via a mod
manager - see [Unreal Shimloader](/frameworks/unreal-shimloader/).

:::caution[Match your build's container format]
Confirm which container format your Palworld build expects before packing - guides written for older
builds may assume a different tool or format. See
[Palworld 1.0 vs early access](/getting-started/modding-1-0-vs-early-access/).
:::

Next: [Load order & conflicts](/packaging/load-order-and-conflicts/).
