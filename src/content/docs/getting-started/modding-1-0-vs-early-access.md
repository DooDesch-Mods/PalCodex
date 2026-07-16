---
title: Palworld 1.0 vs early access
description: Why a lot of older Palworld modding guides need a second look, and how PalCodex marks what still applies to 1.0.
sidebar:
  order: 1
---

Palworld launched into Steam early access in January 2024 and reached its **1.0 release** in 2026. A
huge amount of community modding knowledge - including many of the guides curated here - was written
during the early-access period. Most of the *concepts* still hold, but specific details drift over
time: tool versions, mappings, file layouts, and exact class or property names can all change between
game builds.

## How PalCodex marks content

Every page carries one of three version-status states, shown as a banner at the top of the page when
relevant:

| Status | Banner | What it means |
| --- | --- | --- |
| **Verified (1.0)** | none | A human checked the page against Palworld 1.0 and it applies as written. |
| **Needs review** | orange | Curated from a community source but not yet re-verified against 1.0. Treat steps and versions with care. |
| **Legacy (early access)** | red | Dates from the early-access era and may be outdated for 1.0. Useful for background and concepts; verify before relying on specifics. |

When you read a legacy or needs-review page, assume the *approach* is sound but double-check the
concrete details (tool versions, paths, mappings) against your current install.

## What tends to change between builds

- **Mappings (`.usmap`)** are build-specific. A mappings file from an early-access build will not
  correctly describe 1.0 assets. Always use a mappings file generated for your game build - see
  [Mappings (.usmap)](/tools-and-setup/mappings-usmap/).
- **UE4SS** is rebuilt per game version. Use a UE4SS build made for Palworld 1.0; an old build can
  fail to load or crash. See [UE4SS](/frameworks/ue4ss/).
- **Container format.** Guides may reference different packing tools; confirm which format your build
  uses before packing. See [Packaging & Pak Pipeline](/packaging/).
- **DataTable and asset paths** can be renamed or restructured between builds; re-extract from your
  own game files rather than trusting an old path verbatim.

## The safe habit

Re-extract from *your* game install, verify class/property/table names against the current build, and
treat any dated guide as a map rather than a step-by-step you follow blindly. That is exactly why each
page here records where and when its knowledge came from.
