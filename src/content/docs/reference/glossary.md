---
title: Glossary
description: Plain-language definitions of the Palworld modding terms used across this handbook.
sidebar:
  order: 1
---

Quick definitions for the terms you'll meet across PalCodex.

- **`.pak`** - an Unreal package archive. Palworld mods are usually distributed as `.pak` files dropped
  into the game's mod folder. See [Pak pipeline](/packaging/pak-pipeline/).
- **`_P` suffix** - the naming convention (`MyMod_P.pak`) that marks a pak as a patch which overrides
  base game content and loads with priority.
- **IoStore (`.utoc` / `.ucas`)** - Unreal's newer container format (also called Zen). Handled with
  [retoc](/tools-and-setup/repak-and-retoc/); most Palworld mod work uses legacy `.pak` instead.
- **Cooked asset** - an editor asset processed into the game's runtime format. You mod the cooked form,
  not editor source. See [cooked uasset basics](/asset-modding/uasset-basics/).
- **`.uasset` / `.uexp`** - the paired files that make up a cooked asset: header/structure (`.uasset`)
  and bulk data (`.uexp`). Always keep them together.
- **DataTable** - a table of typed rows holding game values (stats, recipes, items, text). The heart of
  [data modding](/data-modding/).
- **`.usmap` (mappings)** - a type-mapping file tools need to read cooked assets; **build-specific**.
  See [Mappings](/tools-and-setup/mappings-usmap/).
- **`TextData` / `L10n`** - Palworld stores localized text in `TextData` DataTables; translation mods
  ship as an `L10n` pak. See [Translations](/translations/).
- **LogicMod** - a Blueprint-based mod built in the [Palworld Modding Kit](/frameworks/palworld-modding-kit/)
  and cooked into a pak.
- **UE4SS** - the [scripting runtime](/frameworks/ue4ss/) that enables Lua/C++ mods.
- **PalSchema** - a [data-patching framework](/frameworks/palschema/) that applies JSON changes to game
  data.
- **Wwise** - Palworld's audio middleware; relevant to [audio modding](/audio/) and the Palworld
  Modding Kit setup.
- **Cook** - the process (in Unreal) of turning editor assets into the runtime/cooked form you then
  pack.
