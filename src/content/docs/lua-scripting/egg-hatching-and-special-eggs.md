---
title: Egg hatching and special eggs
description: How eggs, incubators and hatching behave at runtime in Lua - the hooks, the egg data object, a timing trap, and how to tell the base game's special eggs (mutation and WorldTree) apart from normal ones.
sidebar:
  order: 5
versionStatus: verified-1.0
sourceDate: "2026-07-22"
---

If a Lua mod wants to change what an egg hatches into, or leave certain eggs alone, it works on the
incubator model server-side. This page covers the hooks, the egg data object, a timing trap that
catches everyone once, and how to tell a base-game special egg (mutation or WorldTree) apart from a
normal one.

## The incubator model and its hooks

Hatching runs on `PalMapObjectHatchingEggModel` and its base `PalMapObjectHatchingEggModelBase`.
The hooks worth knowing:

- `OnUpdateContainerContentInServer` - fires when the incubator's contents change, for example when
  an egg is placed.
- `OnFinishWorkInServer` - fires when incubation completes. This is where the egg data and the
  hatched pal are settled.
- `ObtainHatchedCharacter_ServerInternal` - the final spawn step for the newborn pal.

All are server-side (`...InServer` / `...ServerInternal`). In single player the listen host is the
server, so they fire locally.

## The egg data object

Each incubator exposes its egg as `HatchedPalEggData` (single incubator), or per slot via
`RepInfoArray.Items[i].PalEggData` (multi-slot). Both are `PalDynamicPalEggItemDataBase`, which:

- declares `CharacterID` (the species that will hatch) and `SaveParameter`, and
- inherits `StaticId` (the egg *item* id, such as `PalEgg_Normal_01`) from `PalDynamicItemDataBase`.

So `eggData.StaticId` sits right next to `eggData.CharacterID`.

## The timing trap

Read the egg at the wrong hook and it is empty:

- At the **place** hook, `HatchedPalEggData` is usually not valid yet. The egg data is not populated
  at the instant the container updates.
- At the **finish** hook, the egg data and its `StaticId` are populated. Act here.

One more subtlety: the pal that actually hatches is spawned from the model's
`HatchedCharacterSaveParameter` (the replicated notification copy), not only from
`HatchedPalEggData`. If you rewrite an egg's species, set both, or the egg hatches its original pal.

## Detecting special eggs

The base game has two special egg types, defined by the enum `EPalEggSpecialType`:

- `WorldTree` (1) - the glowing late-game egg. Players sometimes call it the "celestial" egg; the
  game has no "Celestial" type, so that name maps to WorldTree.
- `Mutation` (2) - the bred mutation egg.

Both carry a distinct item `StaticId`: `PalEgg_WorldTree_01..05` and `PalEgg_MutationPal(_01..05)`.
That is the reliable signal, and it reads off the same object you already hold at the finish hook.
A skip check, failing closed when the id cannot be read:

```lua
local sid = ""
pcall(function() sid = eggData.StaticId:ToString() end)
if sid == "" or sid:find("PalEgg_WorldTree", 1, true) or sid:find("PalEgg_MutationPal", 1, true) then
    return -- leave special eggs alone
end
```

Do not use `IsRarePal`, `bIsAwakening` or `PalRarity` for this. Those belong to the alpha and
condenser (soul) systems and have nothing to do with breeding mutation.

## What you cannot do from here

These incubator hooks are hatch-time only. There is no hook here into breeding generation, the egg
lottery or the mutation rate, so nothing on this path changes how often an egg spawns or how often a
mutation egg is rolled. That behaviour lives on the breeding-farm model
(`PalMapObjectBreedFarmModel`), not the incubator.

## Credits

- **Egg and special-egg internals** verified on Palworld 1.0 against the UE4SS object dump and a live incubator test, while building the [Palvolve](https://github.com/DooDesch-Mods/Palworld-Palvolve) egg filter. By **DooDesch**.

  > Corrections and questions: the **DooDesch Mods Discord**.
