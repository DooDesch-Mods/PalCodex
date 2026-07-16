---
title: Audio Replacement
description: Replace Palworld's sounds and music by editing the audio assets and repacking them.
sidebar:
  order: 1
versionStatus: needs-review
sourceDate: "2024-02-04"
---

Audio modding replaces the game's sounds - Pal cries, UI sounds, music - by exporting the audio,
editing it, and packing it back in. The reference walkthrough is Smoovers' video tutorial, shared in the
guides channel (linked in Credits).

## Tools involved

- **[FModel](/tools-and-setup/fmodel/)** - to find and export the audio assets.
- **[Audacity](https://www.audacityteam.org/)** (or any audio editor) - to edit or create the
  replacement sound.
- **Wwise** - Palworld's audio middleware; audio is packaged through Wwise soundbanks, so the workflow
  involves getting your replacement into the right form.
- **A mappings file** and a packing tool to build the final `_P` mod `.pak` - see
  [Mappings](/tools-and-setup/mappings-usmap/) and [Packaging & Pak Pipeline](/packaging/).

## The shape of the workflow

1. Find and export the target audio with FModel.
2. Prepare your replacement audio (matching format/length expectations).
3. Get it back into the game's audio asset form and pack it into a mod `.pak`.
4. Test in game.

## Credits

- **Audio replacement video tutorial** shared by **Sleepyhead08**; the video "How to Mod Palworld -
  Audio" is by **Smoovers** on YouTube.

  > Source: **Sleepyhead08** - [original message](https://discord.com/channels/881638083169230928/1203847208148013066/1203847208148013066)
- Video: [How to Mod Palworld - Audio](https://www.youtube.com/watch?v=0foZzES18B0) by Smoovers.
