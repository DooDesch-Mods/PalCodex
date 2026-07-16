---
title: Kawaii Physics
description: Add Kawaii Physics jiggle and collision to Palworld player model swaps by using compatible skeletons with custom bones.
sidebar:
  order: 4
versionStatus: needs-review
sourceDate: "2024-02-21"
---

**Kawaii Physics** adds secondary motion (jiggle) and collision to bones - hair that sways, accessories
that bounce. Getting it onto a **player model swap** with *custom added bones* takes a specific setup:
you build your model onto UE's compatible skeletons so the physics can drive your new bones without
breaking animations. Reaper documented the full process (and keeps it updated) in a GitHub guide linked
in Credits.

## Scope and critical notes

- **Works for hair and head swaps with custom bones.** It does **not** work for adding physics to
  outfit swaps with custom bones (you'll T-pose). The practical approach is to do hair and head
  together and assign which "kawaii" parts are hair vs head.
- **Default bones on an outfit don't need this.** If you're adding physics to *default* bones on an
  outfit, you can skip the compatible-skeleton step and go straight to the Kawaii setup.
- It is **not a replacement** for the [skeleton reorder/animation tool](/animations/custom-animations/) -
  it complements it, letting you add physics to swaps without breaking animations.

## Tools needed

FModel, Blender, Unreal Engine 5.1, the **Kawaii Physics plugin (1.10)**, and UnrealPak. The workflow is
close to a normal [model swap](/asset-modding/model-swaps/) with key differences in the Blender export
and the Unreal Engine work - the guide details those steps.

## Credits

- **Kawaii Physics for player model swaps guide** by **Reaper** (ReapersVigilance), kept updated with
  discoveries from the discussion thread.

  > Source: **Reaper** - [original message](https://discord.com/channels/881638083169230928/1209687924325744712/1209687924325744712)
- Guide:
  [KawaiiPhysicsPlayer.md](https://github.com/ReapersVigilance/Palworld_Modding_Guides/blob/main/KawaiiPhysicsPlayer.md)
  in Reaper's Palworld_Modding_Guides repository.
