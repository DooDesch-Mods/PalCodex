---
title: FAQ
description: The Palworld modding questions asked most often in the help channels, with short answers.
sidebar:
  order: 1
versionStatus: needs-review
---

Short answers to the questions that come up again and again. Follow the links for the full picture.

## Do I need Unreal Engine to mod Palworld?

Not always. You can edit [DataTables](/data-modding/datatable-without-unreal/) and
[textures](/asset-modding/texture-swaps/) with file tools only. You need the
[Palworld Modding Kit](/frameworks/palworld-modding-kit/) (Unreal) for model swaps, animations,
translations and Blueprint logic mods.

## Do I need UE4SS?

Only for **script** mods. [UE4SS](/frameworks/ue4ss/) is the runtime for Lua/C++ mods. Data, texture and
asset mods don't need it.

## Which framework should I use?

Start from your goal and read the [framework decision guide](/frameworks/). Values → PalSchema or a
DataTable edit; behavior → UE4SS Lua; Blueprint content → Palworld Modding Kit.

## Why isn't my mod loading?

The usual suspects: missing the [`_P` suffix](/packaging/pak-pipeline/), the pak in the wrong folder,
a mod-vs-game [build mismatch](/troubleshooting/compatibility-and-updates/), or (for script mods) UE4SS
not installed or the wrong version. See [Common errors](/troubleshooting/common-errors/).

## My assets won't open / look wrong in FModel or UAssetGUI.

Almost always the [mappings file](/tools-and-setup/mappings-usmap/) doesn't match your game build. Get a
current `.usmap`.

## Does the mod need to be on the server, the client, or both?

For dedicated servers, generally **both** - see [Server modding](/dedicated-server/server-modding/).

## I subscribed to a Steam Workshop mod but nothing happens.

Palworld doesn't load mods by default. In the main menu open **Options → Mod Management**, tick the mod
(plus any dependencies) and **Save**; you may also need to flip **Enable Mods** to ON. The game restarts
and loads the enabled mods.

> Source: a community member - [original message](https://discord.com/channels/881638083169230928/1204916830653775895/1451932900399382531)

## FModel seems to have no option to load a local mappings file.

It does - the option lives in FModel's **Settings**, under the game's mappings/directory configuration.
Set the local mappings file path there and point it at your `Mappings.usmap`. See
[Mappings](/tools-and-setup/mappings-usmap/).

> Source: **Dude** - [original message](https://discord.com/channels/881638083169230928/1107095001248301128/1525154522895224843)

## Which DataTable holds a Pal's skills / stats / icons?

See [Key DataTables](/data-modding/key-datatables/) - a community-sourced map of where partner skills,
base stats, recipes and icons live.

## A guide I found doesn't match the current game.

Many guides date from early access. Check the page's version badge and read
[Palworld 1.0 vs early access](/getting-started/modding-1-0-vs-early-access/).
