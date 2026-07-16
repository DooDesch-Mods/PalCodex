---
title: Texture Swaps
description: Retexture Palworld assets without Blender or Unreal Engine.
sidebar:
  order: 3
versionStatus: needs-review
sourceDate: "2024-02-06"
---

You do not need Blender or Unreal Engine to change a texture. If you only want to recolour or repaint an
existing asset, you can export the texture, edit the image, and repack it - a much lighter path than a
full [model swap](/asset-modding/model-swaps/).

Critikal wrote a beginner-friendly guide (and a video) for exactly this, shared in the guides channel
and linked in Credits.

## The shape of the workflow

1. **Find and export the texture** with [FModel](/tools-and-setup/fmodel/) - locate the asset and
   export its texture.
2. **Edit the image** in any image editor (recolour, repaint, replace).
3. **Bring it back in** as the game's texture asset and **pack it** into a `_P` mod `.pak` - see
   [Packaging & Pak Pipeline](/packaging/).
4. **Test in game.**

Understanding the [texture naming conventions](/asset-modding/uasset-basics/) helps you pick the right
file (base colour vs normal vs mask maps behave differently).

## Credits

- **Beginner texture-swap guide and video** shared by **Critikal**, written from the perspective of a
  brand-new modder to help others who are equally lost when starting out.

  > Source: **Critikal** - [original message](https://discord.com/channels/881638083169230928/1204513261526192128/1204513261526192128)
- Written guide: [Texture swap without Blender or Unreal Engine (Nexus)](https://www.nexusmods.com/palworld/mods/445).
  Video: [Texture Swap Tutorial](https://www.youtube.com/watch?v=ilY-xzeI-wQ).
