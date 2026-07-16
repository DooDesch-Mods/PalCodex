---
title: Partner Skills
description: Add or edit the partner skills of existing Pals, and change their skill names and descriptions.
sidebar:
  order: 4
versionStatus: needs-review
sourceDate: "2026-03-10"
---

Partner skills (a Pal's signature active-team ability) are data too. You can graft parts of one Pal's
skill onto another, and change a partner skill's **name** and **description**. KREV wrote a focused guide
for exactly this, shared in the guides channel (linked in Credits) - and notably it dates from the
Palworld 1.0 era, so it's a good reference point for current work.

## What the guide covers

Using a worked example, it walks through:

- **Merging skill parts** - adding parts of the LORD FOX skill (from Wixen) into Katress Ignis's
  Botanical Atlas partner skill.
- **Renaming** the Botanical Atlas partner skill.
- **Re-describing** it - changing the skill's description text.

## How it fits

This builds on [DataTable modding](/data-modding/datatable-without-unreal/): partner skills, their
names and their descriptions live in the game's data, so the workflow is finding the right rows, editing
them, and packaging the result. Names and descriptions are text, which overlaps with
[translations](/translations/) - the same `TextData` concepts apply.

## Credits

- **Guide by KREV** - a step-by-step for adding/editing partner skills, names and descriptions on
  existing Pals, with a concrete worked example.

  > Source: **KREV** - [original message](https://discord.com/channels/881638083169230928/1481009774702104647/1481009774702104647)
- The guide document (Google Docs) is linked from that message.
