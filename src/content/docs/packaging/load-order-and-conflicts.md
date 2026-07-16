---
title: Load Order & Conflicts
description: Why two Palworld mods collide when they touch the same file, and how load order decides which one wins.
sidebar:
  order: 2
versionStatus: needs-review
---

When two mods change the **same** game file, only one can win. Understanding load order tells you which,
and understanding conflicts tells you why some mods can't coexist as-is.

## Who wins

- The **`_P` suffix** marks a pak as a patch that overrides base content (see
  [Pak pipeline](/packaging/pak-pipeline/)).
- Among mods, load order generally follows the pak filename ordering, so a later-loading `_P` pak can
  override an earlier one. If you need one mod to win over another, its pak name has to sort later.

## Why conflicts happen

- **Two mods ship the same cooked asset.** If mod A and mod B both include the same `.uasset` (say the
  same DataTable), whichever loads last completely replaces the other's copy - the earlier mod's change
  is simply gone. This is the classic "these two mods don't work together" situation.
- **The fix is granularity.** A framework that *patches* rather than *replaces* avoids most of this:
  **[PalSchema](/frameworks/palschema/)** patches specific data rows, so two mods editing *different*
  rows of the same table can coexist where two full cooked-table mods would clobber each other.

## Practical advice

- Keep each mod's footprint as small as possible - only include the files you actually change.
- Prefer patch-style data mods (PalSchema) over shipping whole tables when you want compatibility.
- When two mods conflict, the options are: rename to force an order (one fully wins), merge them by
  hand, or reimplement one as a patch.
