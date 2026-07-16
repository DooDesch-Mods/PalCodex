---
title: Palworld Modding Kit
description: The official Unreal Engine 5.1 project for building Palworld Blueprint/C++ content - installation and the common setup pitfalls.
sidebar:
  order: 4
versionStatus: needs-review
sourceDate: "2024-02-05"
---

The **Palworld Modding Kit** (PMK) is the official Unreal Engine 5.1 project used to build content that
has to be cooked in Unreal - Blueprint logic mods, model swaps, animations, and translations. It is
heavier to set up than the file-editing tools, but it is what you need when a mod requires the actual
engine.

The install thread in the guides channel (by Norsky) is one of the most active in the community and
doubles as a help desk. This page is the orientation; the maintained prerequisites and step-by-step are
on the official wiki (linked in Credits).

## Installing it (and the common traps)

1. **Meet the prerequisites first.** Read the [install prerequisites and
   setup](https://pwmodding.wiki/docs/palworld-modding-kit/install-part-1) and make sure every one is
   satisfied before you start - most failures are a missed prerequisite.
2. **Keep the folder path short.** Put the `palworldmoddingkit` folder somewhere with a short path to
   avoid Windows `MAX_PATH` problems.
3. **Start compilation** by double-clicking `pal.uproject`.
4. **Answer the prompts:** when *Wwise is incompatible* appears, click **Yes**; when *Missing pal
   modules* appears, click **Yes**.
5. **Wait for the C++ compile.** It isn't visibly reported - it can take ~10 minutes on a six-core CPU.
   You can watch progress via `saved/logs/pal.log` or the compiler process in Task Manager. On success,
   the Unreal editor launches automatically.
6. When *Re-set Wwise path* appears, tick *don't show again* and click **No**.

:::caution[If the compile fails]
If you get "Pal could not be compiled", re-check every prerequisite. If you're certain they're all met,
the `saved/logs/pal.log` file is what the community will ask for to help diagnose it.
:::

## When you actually need PMK

You need PMK for anything that must be cooked in Unreal - Blueprint/logic mods, and the model, animation
and translation workflows that reference it. For pure data or texture edits, or Lua scripting, you can
avoid it - see [DataTable modding](/data-modding/datatable-without-unreal/),
[texture swaps](/asset-modding/texture-swaps/) and [Lua scripting](/lua-scripting/).

## Credits

- **PMK installation guide and ongoing help thread** by **Norsky**, covering the correct install steps
  and the prompts and pitfalls people hit most.

  > Source: **Norsky** - [original message](https://discord.com/channels/881638083169230928/1204077446375284826/1204077446375284826)
- **Canonical prerequisites & setup:** the [Palworld Modding Kit install
  guide](https://pwmodding.wiki/docs/palworld-modding-kit/install-part-1) on the official modding wiki.
