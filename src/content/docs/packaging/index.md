---
title: Packaging & Pak Pipeline
description: Turning your edits into a working Palworld mod - packing, unpacking, the _P suffix, load order and conflicts.
sidebar:
  order: 0
---

Once you've edited assets or data, you package them into a mod container the game loads. This section
covers the pack/unpack workflow and the rules that decide which mod wins when two touch the same file.

## In this section

- **[Pak pipeline](/packaging/pak-pipeline/)** - packing and unpacking, cooking, and the `_P` suffix
  that controls load order.
- **[Load order & conflicts](/packaging/load-order-and-conflicts/)** - why two mods collide and how to
  reason about which one applies.

The packing tools live in [Tools & Setup](/tools-and-setup/repak-and-retoc/). If you're distributing to
players through a mod manager, also see [Unreal Shimloader](/frameworks/unreal-shimloader/).
