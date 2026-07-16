---
title: Unreal Shimloader
description: The loader shim that lets Palworld's UE mods be installed and managed through mod managers like Thunderstore's.
sidebar:
  order: 3
versionStatus: needs-review
---

**Unreal Shimloader** is a loader shim for Unreal Engine games. Its job is to make UE mods installable
and manageable through **mod managers** - most notably the Thunderstore ecosystem - by giving them a
predictable place to load mods from and shimming that into the game.

## Why it exists

Unreal games don't have a built-in mod-manager story the way some other modded games do. Shimloader
bridges that gap: a mod manager can install Shimloader plus a stack of mods, and Shimloader makes the
game pick them up. For players this means one-click install and update instead of manual file drops.

## Where you meet it

- **As a Thunderstore dependency.** If you distribute a Palworld mod on Thunderstore, you typically
  declare Unreal Shimloader as a dependency so the mod manager installs it alongside your mod.
- **As a player**, it's part of what a mod manager sets up for you when you install a Palworld mod
  through it.

## When to use it

Use Unreal Shimloader when your concern is **distribution and installation** - getting your mod into
players' hands through a mod manager - rather than what the mod does. It sits alongside, not instead of,
the tools that actually build your mod ([UE4SS](/frameworks/ue4ss/), [PalSchema](/frameworks/palschema/),
the [asset pipeline](/packaging/)).

## References

- Distribution channels and mod-manager setup vary; check the current Thunderstore listing and the
  loader's own documentation for your build, since loader details and versions move over time.
