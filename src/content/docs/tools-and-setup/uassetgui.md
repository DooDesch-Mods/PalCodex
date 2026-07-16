---
title: UAssetGUI
description: Open and edit Palworld's cooked .uasset files - including DataTables - without an Unreal Editor.
sidebar:
  order: 2
versionStatus: needs-review
---

**UAssetGUI** is a tool for opening and editing cooked Unreal `.uasset` files directly. For Palworld it
is the go-to way to edit **DataTables** (and some other assets) without installing Unreal Engine.

## What you need

- The tool itself (UAssetGUI).
- The correct **[mappings file (`.usmap`)](/tools-and-setup/mappings-usmap/)** for your Palworld build -
  UAssetGUI uses it to interpret the cooked data. Wrong mappings = misread asset.
- The cooked `.uasset` (+ its `.uexp`), exported from [FModel](/tools-and-setup/fmodel/) or unpacked
  with [repak](/tools-and-setup/repak-and-retoc/).

## What you use it for

- **Editing DataTable rows** - change values, or clone a row to add a new entry. This is the heart of
  [DataTable modding without Unreal](/data-modding/datatable-without-unreal/),
  [recipes](/data-modding/editing-recipes/) and [partner skills](/data-modding/partner-skills/).
- **Inspecting** an asset's structure to understand how it's laid out.

## Tips

- **Clone existing rows** rather than hand-authoring new ones, so all fields and types are present.
- **Keep types intact** when editing values - cooked data is strictly typed.
- **Save the pair** and keep `.uasset`/`.uexp` together when packing (see
  [cooked uasset basics](/asset-modding/uasset-basics/)).
