---
title: UE4SS
description: RE-UE4SS - the Lua and C++ scripting runtime that powers Palworld script mods, with an object dumper and console.
sidebar:
  order: 1
versionStatus: needs-review
---

**UE4SS** (RE-UE4SS - "Unreal Engine 4/5 Scripting System") is the runtime that loads into Palworld and
lets you script the game. It is the backbone of **[Lua scripting](/lua-scripting/)** mods and also
supports C++ mods, ships an object dumper, and provides an in-game console/log.

## What it gives you

- **A Lua scripting API** - hook `UFunction`s (`RegisterHook`), find live objects
  (`FindFirstOf`/`FindAllOf`), read and write properties, spawn actors, and call game functions at
  runtime.
- **Object dumps** - generate a dump of the game's classes, functions and properties so you know the
  exact names to hook and call. Indispensable when writing a mod.
- **A console and logging** - your main feedback loop while developing.

## Using it with Palworld

- **Use the Palworld-specific build, not upstream/dev UE4SS.** UE4SS is rebuilt per game build, and for
  Palworld you want **Okaetsu's `experimental-palworld` RE-UE4SS release** paired with PalSchema.
  Grabbing the generic dev/upstream build on 1.0 causes a Steam-ID mismatch bug (forced
  character-creation screen, mods never load) - see
  [Compatibility & updates](/troubleshooting/compatibility-and-updates/).
- **Fix the usmap/Lua-types crash.** Generating a `.usmap` or Lua types from the console can crash on
  UE 5.1 unless the correct `MemberVariableLayout.ini` is next to the UE4SS dll - see
  [Common errors](/troubleshooting/common-errors/) and [Useful links](/reference/useful-links/).
- **Lua mods declare UE4SS as a dependency.** A player needs UE4SS installed for your Lua mod to run.
- **Don't double-load it.** Installing UE4SS two ways in the same game install (for example a
  Workshop copy plus a manual copy) causes a double-load crash. Pick one.

:::caution[Runtime scripting has sharp edges]
Callback lifetime (garbage collection), RPC parameter types, and whether code runs on host vs client vs
dedicated server are all real traps in UE4SS Lua. Budget time to learn them - see
[Lua modding in Palworld](/lua-scripting/lua-modding-in-palworld/).
:::

## When to use it

Reach for UE4SS when you want *behavior* - custom logic, hooks, commands, reacting to events. If you
only need to change values, a [data mod](/data-modding/) is simpler; for new Blueprint content, use the
[Palworld Modding Kit](/frameworks/palworld-modding-kit/).

## Credits & references

- **UE4SS / RE-UE4SS** is developed by the RE-UE4SS project
  ([github.com/UE4SS-RE/RE-UE4SS](https://github.com/UE4SS-RE/RE-UE4SS)).
- Palworld-specific Lua tutorials and the general Lua workflow are credited on
  [Lua modding in Palworld](/lua-scripting/lua-modding-in-palworld/).
