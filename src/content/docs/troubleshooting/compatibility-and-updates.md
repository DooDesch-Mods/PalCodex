---
title: Compatibility & Updates
description: What breaks when Palworld updates, and the checklist to get your modding setup working again.
sidebar:
  order: 3
versionStatus: needs-review
---

A Palworld patch can quietly break your tools and mods. The root cause is almost always the same: your
build-specific pieces no longer match the new game build.

## What a game update can break

- **Mappings (`.usmap`).** The most common casualty - your tools misread assets until you get a
  [mappings file](/tools-and-setup/mappings-usmap/) for the new build.
- **UE4SS.** [UE4SS](/frameworks/ue4ss/) is rebuilt per game version; an old build can fail to load or
  crash. Wait for a build made for the new version.
- **Frameworks that load into the game** (anything depending on UE4SS) - re-check they're updated for
  the new build before relying on them.
- **Asset and DataTable paths / names.** These can be renamed or restructured; a path from an old guide
  may no longer exist.

## The post-update checklist

1. **Don't assume your old files still work.** Treat the setup as suspect until verified.
2. **Update mappings** to one generated for the new build (or generate your own).
3. **Update UE4SS** and any loaded frameworks to their new-build versions.
4. **Re-extract from your own install** rather than reusing old exports - names and paths may have moved.
5. **Re-test each mod** and fix what broke.

## Why PalCodex marks page versions

Because this drift is constant, every page here carries a version badge (verified-1.0, needs-review, or
legacy early-access). When you read a dated guide, keep the *approach* but re-verify the *specifics*
against your current build. See
[Palworld 1.0 vs early access](/getting-started/modding-1-0-vs-early-access/).
