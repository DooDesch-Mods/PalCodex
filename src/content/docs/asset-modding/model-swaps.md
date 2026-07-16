---
title: Model Swaps
description: Replace one Palworld model with another using the Unreal Engine cook-and-pack workflow.
sidebar:
  order: 2
versionStatus: needs-review
sourceDate: "2024-02-04"
---

A **model swap** replaces one Pal, character or object model with another. The established community
workflow uses Unreal Engine (via the [Palworld Modding Kit](/frameworks/palworld-modding-kit/)) to set
up a mod folder, cook the content, and pack it into a mod `.pak`.

The canonical walkthrough is Smoovers' video tutorial, shared in the guides channel (linked in
Credits). It is the reference other guides build on - the
[custom animation guide](/animations/custom-animations/), for example, assumes you have followed the
model-swap tutorial first to get a working mod folder structure.

## The shape of the workflow

1. Set up the [Palworld Modding Kit](/frameworks/palworld-modding-kit/) so you can cook content.
2. Get the correct [mappings file](/tools-and-setup/mappings-usmap/) and the packing tool.
3. Prepare your replacement model against the target's skeleton in the modding kit.
4. Cook the content, then pack the cooked output into a `_P` mod `.pak` -
   see [Packaging & Pak Pipeline](/packaging/).
5. Drop the `.pak` into the game's mod folder and test.

:::note[Skeletons and bones]
Swapping onto an existing skeleton is the least fragile approach. If you need new bones or physics, see
[Kawaii physics](/asset-modding/kawaii-physics/); if you need new animations without breaking the
existing ones, see [Custom animations](/animations/custom-animations/).
:::

## Credits

- **Model-swap video tutorial** shared by **Sleepyhead08**; the video "How To Mod Palworld - Model
  Swaps" is by **Smoovers** on YouTube and is the reference many later guides build on.

  > Source: **Sleepyhead08** - [original message](https://discord.com/channels/881638083169230928/1203847132931686451/1203847132931686451)
- Video: [How To Mod Palworld - Model Swaps](https://www.youtube.com/watch?v=NESKhITrbgI) by Smoovers.
