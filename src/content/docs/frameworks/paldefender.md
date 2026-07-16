---
title: PalDefender
description: Server-side administration and anti-cheat for Palworld dedicated servers, with in-game commands and a local REST API.
sidebar:
  order: 5
versionStatus: needs-review
---

**PalDefender** (formerly PalGuard) is a server-side toolkit for Palworld **dedicated servers**. It adds
administration commands and anti-cheat, and exposes a local REST API, so server owners can manage
players and the world without editing save data by hand.

## What it's for

- **Admin commands** - give items, spawn or give Pals, grant experience, manage players, and more from
  in-game chat commands.
- **Anti-cheat** - server-side protections against common exploits.
- **A local REST API** - drive the same capabilities programmatically from tools running on the server
  host.

## Where it fits

PalDefender is a **server operator's** tool, not a component you ship inside a client mod. It lives on
the dedicated server. If you're building a mod, you generally won't depend on PalDefender; if you're
running a server, it's one of the main ways to administer it. See
[Dedicated server modding](/dedicated-server/server-modding/) for the surrounding rules.

:::note[Alternatives]
For a lighter, pure UE4SS-Lua admin approach some server owners use community "admin commands" mods
instead. Pick based on whether you want a full toolkit with anti-cheat (PalDefender) or a minimal
command set.
:::

## References

- PalDefender is developed by the Ultimeit project
  ([github.com/Ultimeit/PalDefender](https://github.com/Ultimeit/PalDefender)); its documentation covers
  installation and the full command/API surface. Confirm compatibility with your server build before
  installing.
