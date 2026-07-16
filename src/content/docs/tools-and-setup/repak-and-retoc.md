---
title: repak & retoc
description: The tools for packing and unpacking Palworld's mod containers - legacy .pak and IoStore.
sidebar:
  order: 3
versionStatus: needs-review
---

To turn your edited files into a mod - or to open someone else's mod to study it - you pack and unpack
containers. Two community tools cover this.

## repak - legacy .pak

**repak** packs and unpacks legacy Unreal `.pak` files. This is the primary path for Palworld mods.

- **Unpack** an existing `.pak` to inspect or modify its contents.
- **Pack** your modified files into a new `.pak` (remember the [`_P` suffix](/packaging/pak-pipeline/)
  for override paks).

## retoc - IoStore (utoc/ucas)

**retoc** handles the IoStore / Zen container format (`.utoc` / `.ucas`). Some Unreal games ship content
this way. Keep it in your back pocket in case you need to work with IoStore containers, but for most
Palworld mod work the legacy `.pak` path with repak is what you'll use.

:::caution[Confirm the format for your build]
Which container format applies can depend on the game build. Confirm before packing - see
[Palworld 1.0 vs early access](/getting-started/modding-1-0-vs-early-access/) and
[Pak pipeline](/packaging/pak-pipeline/).
:::

## References

- **repak** and **retoc** are open-source Unreal container tools; get current builds from their
  respective repositories and match versions to your workflow.
- The Unreal-Engine-based workflows (model/audio/translation) use Unreal's own **UnrealPak** instead,
  as covered in those guides.
