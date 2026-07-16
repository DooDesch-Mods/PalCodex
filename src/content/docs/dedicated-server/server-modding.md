---
title: Server Modding
description: The rules for getting mods working on a Palworld dedicated server - client/server parity, UE4SS, and hosting constraints.
sidebar:
  order: 1
versionStatus: legacy-ea
sourceDate: "2024-02-08"
---

Getting mods working on a Palworld **dedicated server** trips people up because the rules aren't
obvious. deyen wrote down the ones they figured out the hard way, shared in the guides channel (linked
in Credits). The principles below still hold; treat the specific version numbers as dated and confirm
against your current build.

## The hard-won rules

1. **Client/server parity.** For clients to see mods working, clients and the server should generally
   run the **same mods**. Even mods described as "server-side only" are safest installed on the client
   too.
2. **UE4SS needs Windows (or Wine).** To run [UE4SS](/frameworks/ue4ss/) the server must be Windows-based
   or running under Wine.
3. **UE4SS on both ends.** Install UE4SS on **both** client and server.
4. **Injector.** Modern UE4SS (v3.0+ at the time of writing) does not require a separate `injector.exe`
   to inject into Palworld.

## Hosting constraints to watch

- **Some hosts block `.dll`/`.exe` uploads.** deyen rented from a host that didn't allow uploading the
  UE4SS `.dll`s and had to ask support to add them. If your host blocks binaries, you may need to
  contact them to get UE4SS's files onto the server.
- **The host must be Windows/Wine** for the UE4SS route (see rule 2).

:::caution[Version-sensitive]
This guide is from the early-access era. UE4SS versions, injection behavior and the official server mod
path have evolved since. Verify the current UE4SS build for your Palworld version and check the official
server mod documentation before relying on the specifics. See
[Compatibility & updates](/troubleshooting/compatibility-and-updates/).
:::

For server **administration** (giving items, managing players, anti-cheat), see
[PalDefender](/frameworks/paldefender/).

## Credits

- **Modded dedicated server rules** shared by **deyen**, distilled from figuring out why server mods
  weren't working.

  > Source: **deyen** - [original message](https://discord.com/channels/881638083169230928/1205298990438944798/1205298990438944798)
