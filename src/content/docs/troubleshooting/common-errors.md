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
