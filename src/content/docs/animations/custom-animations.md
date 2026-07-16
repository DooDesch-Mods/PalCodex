---
title: Custom Animations
description: Add custom animations to a Palworld model - a new walk cycle, idle, or moving attachment - without breaking all the other animations.
sidebar:
  order: 1
versionStatus: needs-review
sourceDate: "2024-02-07"
---

Want to change a Pal's walk cycle, give it a different idle, or add a hat that flies back when it runs?
Custom animations were historically painful because adding bones to a modded skeleton tended to break
every other animation. Shifty solved the fiddly part with a tool and wrote up the workflow, shared in
the guides channel (linked in Credits).

## What you need

- **[UnrealModSkeletonFixer](https://github.com/ShiftyChesh/UnrealModSkeletonFixer)** - Shifty's tool
  that automates the skeleton/bone fix and the build/push into your mod directory (read its README for
  the in-depth details).
- **Python 3.4+** installed.
- A working mod folder from the [model-swap tutorial](/asset-modding/model-swaps/) - do that first.
- **[FModel](/tools-and-setup/fmodel/)** to export the original skeleton.

## The workflow

1. Download and unpack the tool into any directory.
2. Follow the [model-swap tutorial](/asset-modding/model-swaps/) up to the point where you have an
   initial mod folder structure (e.g. a `<YourMod>_P` folder).
3. Move that mod folder into the tool's **mods** folder (alongside the provided `ExampleMod_P`).
4. Edit the tool's `config.json`, setting:
   - `cook_content_folder` - the **Content** folder in your Unreal cook output.
   - `packer_path` - your **UnrealPak.exe** (the packing tool from the model-swap tutorial).
   - `mods_p_path` - the folder where mod `.pak` files go.
5. Run `ModBuilder.bat` - the tool builds and pushes the mod into the mod directory. **At this point the
   bones are not yet fixed for build mods.**
6. To fix the bones, export the **original skeleton** `.uasset` (+ `.uexp`) for the model you're
   animating, using FModel with **Export as Raw Data (.uasset)** - make sure it's the Skeleton file
   (e.g. `SK_PinkCat_Skeleton.uasset`). Feed it to the tool as its README describes.

The result is a model that carries your new animation without losing its existing ones.

## Credits

- **Custom-animation workflow and the UnrealModSkeletonFixer tool** created and shared by **Shifty**
  (ShiftyChesh), which makes adding animations/bones to modded Palworld skeletons practical.

  > Source: **Shifty** - [original message](https://discord.com/channels/881638083169230928/1204866389291180103/1204866389291180103)
- Tool: [UnrealModSkeletonFixer](https://github.com/ShiftyChesh/UnrealModSkeletonFixer) by Shifty.
