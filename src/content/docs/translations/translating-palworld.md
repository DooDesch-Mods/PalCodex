---
title: Translating Palworld
description: Translate Palworld into another language by editing its TextData DataTables and packaging an L10n mod.
sidebar:
  order: 1
versionStatus: needs-review
sourceDate: "2024-02-05"
---

Palworld stores its text in **DataTables** (`TextData`), not the `.locres` files other Unreal games use.
A translation mod edits those text rows and ships them as a localization (`L10n`) pak. Norsky wrote the
workflow, shared in the guides channel (linked in Credits).

## The workflow

You need the [Palworld Modding Kit](/frameworks/palworld-modding-kit/) for this approach.

1. Launch your Palworld Modding Kit `.uproject`.
2. Drop the language files folder (from the language pack) into the modding kit's **Content** folder.
3. **Translate the `TextData` rows** in Unreal.
4. **Cook content.**
5. In the cooked output, rename your language folder to **`L10n`**.
6. Create the mod `.pak` - see [Packaging & Pak Pipeline](/packaging/).
7. Install it into `PalworldGameDirectory\Pal\Content\Paks`.

:::note[DataTables, not locres]
Because the text lives in DataTables, translation overlaps with [data modding](/data-modding/). If you'd
rather patch strings from JSON than cook a DataTable, look at whether
[PalSchema](/frameworks/palschema/) fits your case.
:::

## Credits

- **Translation workflow shared by Norsky**, explaining that Palworld uses `TextData` DataTables for
  language files and walking through translating, cooking and packaging an `L10n` mod.

  > Source: **Norsky** - [original message](https://discord.com/channels/881638083169230928/1204095438022512723/1204095438022512723)
