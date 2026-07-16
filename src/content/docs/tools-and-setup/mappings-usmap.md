---
title: Mappings (.usmap)
description: What the Palworld mappings file is, why it is tied to the game build, and where the community keeps the current one.
sidebar:
  order: 4
versionStatus: needs-review
sourceDate: "2024-02-05"
---

A **mappings file** (`.usmap`) tells tools like [FModel](/tools-and-setup/fmodel/) and
[UAssetGUI](/tools-and-setup/uassetgui/) how Palworld's cooked assets are structured. Without a mappings
file set, you cannot open or extract most models, textures or data.

## The one thing to remember

**Mappings change with the game version.** A `.usmap` generated for one Palworld build will not
correctly describe another build's assets. Whenever the game updates, you may need a fresh mappings file
before your tools work correctly again.

- Set the `.usmap` in your tool's settings (in FModel: Settings → local mapping file).
- The community maintains a current mappings file and updates it as the game changes.
- If assets suddenly won't open or fields look wrong after a game patch, an out-of-date mappings file is
  the first thing to check. See
  [Compatibility & updates](/troubleshooting/compatibility-and-updates/).

:::note[Generating your own]
Mappings are produced by a USMAP dumper run against the game. If you can't get a current community file,
generating one for your exact build is the reliable fallback - it guarantees the mappings match the
assets you're editing.
:::

## Credits

- **Mappings guidance and the maintained mappings file shared by Norsky**, who keeps a current
  `Mappings.usmap` available for the community and notes that it changes with each game version.

  > Source: **Norsky** - [original message](https://discord.com/channels/881638083169230928/1203928824656437299/1203928824656437299)
