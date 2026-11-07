---
title: Combine voids
description: Merge two overlapping or adjacent voids into a single rectangular opening.
---

**Combine Voids** merges two overlapping or adjacent voids into one opening. Use it where pipes, ducts or cable trays run close together through the same wall and their individual voids overlap or sit too close to build.

## Combine two voids

1. Select two voids placed by MEP Opening Marker. They can be rectangular or round.
2. On the **MEPOpeningMarker** tab, click **Combine Voids**.

MEP Opening Marker places one new void that encloses both, then deletes the two originals.

If fewer than two rectangular or round voids are selected, the add-in shows **No voids selected — Select two round or rectangular voids**.

## What the combined void looks like

- It's always a **rectangular void**, even if you combined two round voids.
- It covers the full extent of both original voids.
- It's placed on the level of the first selected void.
- Its **Discipline**, **Location**, **Revision**, **Revision Date** and **Status Openings** come from the current [Settings](/docs/mepopeningmarker/reference/settings/), not from the original voids.

## Limits

- **Two at a time.** Only two voids are combined per run. If you select more, the first two are used. To merge three or more, combine two, then combine the result with the next one.
- **Wall voids only.** Vertical (floor) voids can't be combined.
- **Same host.** Only combine voids in the same wall. Voids in different walls should stay separate.

## Tips

- Run **Find & Mark Intersections** first, check the result in 3D, then combine only the voids that need it.
- If you combine the wrong voids, press **Ctrl+Z** to bring the originals back.
- Check Settings before combining, so the new void gets the right discipline and revision data.

## Related

- [Mark intersections](/docs/mepopeningmarker/guides/mark-intersections/)
- [Troubleshooting](/docs/mepopeningmarker/troubleshooting/)
