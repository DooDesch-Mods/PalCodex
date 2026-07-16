---
title: Lua Modding in Palworld
description: Getting a UE4SS Lua mod loading in Palworld, the mod folder layout, and the basics of hooking and calling game functions.
sidebar:
  order: 1
versionStatus: needs-review
sourceDate: "2024-02-08"
---

Lua scripting is how you change Palworld's *behavior* at runtime without cooking assets. It runs on
**[UE4SS](/frameworks/ue4ss/)** (RE-UE4SS): you write Lua that hooks the game's `UFunction`s, reads and
writes live objects, registers commands, and reacts to events.

This page orients you; the maintained, in-depth tutorial series lives on the official modding wiki
(linked in Credits).

## What you need

- A **UE4SS build for your Palworld version** (UE4SS is rebuilt per game build - an old one may fail to
  load). See [UE4SS](/frameworks/ue4ss/).
- A text editor. Lua mods are plain `.lua` files - no compiler, no Unreal Engine.
- Basic Lua familiarity (variables, functions, tables). The tutorials below assume it.

## The mod layout

A UE4SS Lua mod is a folder under UE4SS's `Mods` directory with a `scripts/main.lua` entry point, and
the mod is switched on in UE4SS's mod list. The exact `Mods` path and enable mechanism depend on how
UE4SS is installed for your setup - confirm both against your install before debugging "my mod isn't
loading".

## The core ideas

- **Hook a game function** to run your code when the game does something (`RegisterHook` on a
  `UFunction`), then read or modify the parameters / objects involved.
- **Find objects at runtime** (helpers to locate the first/all instances of a class) so you can operate
  on the player, world, or a Pal.
- **Call game functions** to make things happen.
- **Log** liberally to UE4SS's console/log while developing - it is your main feedback loop.

## Gotchas worth knowing up front

- **Version sensitivity.** Both UE4SS and the exact class/function names your script references can
  change between game builds. Re-verify names against your build rather than trusting a dated snippet.
- **Multiplayer / server context matters.** Whether your code runs on host, client, or a dedicated
  server changes what is safe to do; design with that in mind from the start.
- **Callback lifetime is a real trap.** Long-lived callbacks and delayed calls can be garbage-collected
  or fire at the wrong time; prefer patterns the community has found stable.

:::note[Deeper Lua stability lessons]
Runtime Lua modding of UE games has sharp edges (callback GC, RPC type traps, role-gating). If you go
deep, budget time to learn them - they are typically discovered the expensive way.
:::

## Credits

- **Follow-along Lua tutorial** created and shared by **null** (im.null) - written to give the Lua side
  of Palworld modding a starting point, and later folded into the official wiki.

  > Source: **null** - [original message](https://discord.com/channels/881638083169230928/1205132849926377552/1205132849926377552)
- **Canonical tutorials:** the [Lua Modding](https://pwmodding.wiki/docs/category/lua-modding) category
  on the official Palworld Modding Wiki, kept current for the game.
- **General UE4SS Lua reference:** see [UE4SS](/frameworks/ue4ss/).
