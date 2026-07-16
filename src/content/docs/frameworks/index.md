---
title: API & Framework Mods
description: The frameworks and loaders Palworld mods are built on - UE4SS, PalSchema, Unreal Shimloader, the Palworld Modding Kit and PalDefender - plus a decision guide for which to use.
sidebar:
  order: 0
---

A **framework**, **API**, or **loader** is something you build *on top of* rather than a mod a player
runs for fun. It provides the plumbing - a scripting runtime, a data-patching layer, a mod loader, an
engine project - so your mod can skip the fragile reverse-engineering and get to the feature you
actually want to make.

This section explains each of the tools worth knowing and, most importantly, **when to reach for
which**.

## Which one do I use?

Start from your goal, not from the tool:

| Your goal | Reach for | Why |
| --- | --- | --- |
| Change game *values* - stats, recipes, drop rates, spawns, item definitions | **[PalSchema](/frameworks/palschema/)** (or a raw [DataTable edit](/data-modding/)) | Patches game data from JSON without cooking assets or shipping a full `.pak`. |
| Runtime *behavior* - custom logic, hooks into game functions, in-game commands, reading/writing live objects | **[UE4SS](/frameworks/ue4ss/)** (Lua) | A scripting runtime that loads into the game and lets you hook UFunctions and manipulate objects at runtime. |
| New *Blueprint* actors or logic mods | **[Palworld Modding Kit](/frameworks/palworld-modding-kit/)** | The official UE 5.1 project; build Blueprint/C++ content and cook it into a LogicMod `.pak`. |
| Swap *models / textures / audio* | Asset pipeline (not a framework) - see [Asset Modding](/asset-modding/) and [Packaging](/packaging/) | Edit cooked assets and repack; no framework required. |
| Distribute to players via mod managers / Thunderstore | **[Unreal Shimloader](/frameworks/unreal-shimloader/)** | A loader shim that lets UE mods be installed and managed like other modded games. |
| Administer a *dedicated server* (give items, manage players, anti-cheat) | **[PalDefender](/frameworks/paldefender/)** | Server-side admin toolkit with commands and a local REST API. |

Many real mods combine several: for example a Pal-overhaul might use **PalSchema** for data,
**UE4SS Lua** for behavior, and the asset pipeline for new visuals.

## The tools

- **[UE4SS](/frameworks/ue4ss/)** - RE-UE4SS: the Lua/C++ scripting runtime, object dumper and console.
  The backbone of script mods. Rebuilt per game version - use a build made for Palworld 1.0.
- **[PalSchema](/frameworks/palschema/)** - a data/schema modding framework for adding and patching
  items, Pals, recipes and translations through JSON.
- **[Unreal Shimloader](/frameworks/unreal-shimloader/)** - the loader used to distribute and manage
  UE mods (notably on Thunderstore).
- **[Palworld Modding Kit](/frameworks/palworld-modding-kit/)** - the official Unreal Engine 5.1
  project for building Blueprint/C++ logic mods.
- **[PalDefender](/frameworks/paldefender/)** - server-side administration and anti-cheat for
  dedicated servers.

:::caution[Match the framework to your game build]
Frameworks that load into the game (UE4SS, and anything depending on it) are sensitive to the exact
Palworld build. After a game patch, wait for the framework to be updated for the new build before
relying on it - see [Compatibility & updates](/troubleshooting/compatibility-and-updates/).
:::
