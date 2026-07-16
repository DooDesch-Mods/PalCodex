---
title: Common Errors
description: The crashes and load failures Palworld modders hit most, and what causes them.
sidebar:
  order: 2
versionStatus: needs-review
---

The failures that come up most, grouped by symptom.

## The game crashes on launch

- **UE4SS double-load.** Installing [UE4SS](/frameworks/ue4ss/) two ways in the same install (e.g. a
  Workshop copy plus a manual copy) crashes on load. Use exactly one.
- **Mod-vs-game build mismatch.** A mod (especially anything loading into the game like UE4SS or a
  script mod) built for a different Palworld build can crash. Match everything to your current build -
  see [Compatibility & updates](/troubleshooting/compatibility-and-updates/).

## My mod does nothing

- **Missing `_P` suffix.** An override pak must be named `..._P.pak` to take priority. See
  [Pak pipeline](/packaging/pak-pipeline/).
- **Wrong folder.** The pak isn't in the game's mod paks folder (or the folder your loader expects).
- **A conflicting mod wins.** Another mod ships the same file and loads later, replacing your change.
  See [Load order & conflicts](/packaging/load-order-and-conflicts/).
- **Script mod not enabled.** For Lua mods, UE4SS must be installed and the mod switched on.

## Assets won't open, or fields look wrong

- **Mappings mismatch.** The [`.usmap`](/tools-and-setup/mappings-usmap/) doesn't match your build.
  This is the number-one cause of tools misbehaving.

## A DataTable won't load after editing

- **Missing or mistyped fields.** When you added a row, a field is missing or has the wrong type. Clone
  a complete existing row and change only what you need. See
  [DataTable modding](/data-modding/datatable-without-unreal/).
- **Split pair broken.** The `.uasset` and `.uexp` weren't kept together. See
  [cooked uasset basics](/asset-modding/uasset-basics/).

## Animations break after a model swap

- Adding bones to a modded skeleton breaks other animations unless you fix the skeleton. Use the
  [custom-animation tool](/animations/custom-animations/), and for physics on custom bones see
  [Kawaii physics](/asset-modding/kawaii-physics/).

## UE4SS crashes when generating a usmap or Lua types

Generating a fresh `.usmap` or Lua type definitions from the UE4SS console crashes the game with a fatal
error on the latest experimental UE4SS.

- **Cause:** an incorrect member-variable layout for UE 5.1.
- **Fix:** apply the corrected UE4SS config - place the correct `MemberVariableLayout.ini` (the 5.1
  layout with the manual fixes) next to the UE4SS dll. With that in place, usmap / Lua-type generation no
  longer crashes. A prebuilt one is in the community UsefulFiles repo (see
  [Useful links](/reference/useful-links/)).

  > Source: **Okaetsu** - [original message](https://discord.com/channels/881638083169230928/1107095001248301128/1522973388010684669)

## Blueprint SaveGame variables don't persist

Custom variables stored in a Blueprint `SaveGame` object (using a custom struct) don't survive
save/load.

- **Fix:** enable the **`SaveGame` property flag** on each variable/struct member you want persisted
  (expand every value in the struct and tick `SaveGame`). Members without the flag are never written to
  the save.

  > Source: **Okaetsu** - [original message](https://discord.com/channels/881638083169230928/1107095001248301128/1527304896833916928)

## PMK cook packs the whole content folder

Cooking in the [Palworld Modding Kit](/frameworks/palworld-modding-kit/) packs the entire content folder
instead of just the collection set on the `PrimaryAssetLabel`.

- **Fix:** clear and re-set (re-tick) the asset collection on the `PrimaryAssetLabel`, run **Refresh
  Redirectors**, and if it persists close and reopen the editor - Unreal's cached collection state
  drifts from what it shows you.

  > Source: **MCorgano** - [original message](https://discord.com/channels/881638083169230928/1199881629095694427/1526291725306564818)
