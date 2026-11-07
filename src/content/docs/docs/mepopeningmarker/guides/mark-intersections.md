---
title: Mark intersections
description: Detect where MEP elements cross walls, floors and structural framing, and place void openings automatically.
---

**Find & Mark Intersections** finds where the selected MEP elements cross walls, floors or structural framing, and places a void at each crossing.

## Supported elements

| MEP elements (you select these) | Hosts (found automatically) |
| --- | --- |
| Pipes | Walls |
| Ducts (round, rectangular and oval) | Floors |
| Duct accessories | Structural framing |
| Cable trays | |

Hosts can be in the active model or in any loaded Revit link.

Other categories in your selection, such as conduits, fittings or flex ducts, are ignored. If nothing supported is selected, the add-in shows **No elements selected — Select a cable tray, pipe or duct**.

## Place voids

1. Select one or more MEP elements.
2. On the **MEPOpeningMarker** tab, click **Find & Mark Intersections**.

The add-in checks each element against every wall, floor and structural framing element whose geometry it overlaps, and places a void at the centre of each overlap.

:::tip
To process the whole model at once, select one pipe, right-click it and choose **Select All Instances → In Entire Project**. Repeat for ducts and cable trays, holding **Ctrl** to add to the selection.
:::

## Void types

| Void | Placed where | Family |
| --- | --- | --- |
| Rectangular void | Walls and structural framing, when **Void type** is *Rectangular Void* | `Rectangular void` |
| Round void | Walls and structural framing, when **Void type** is *Round Void* | `Round void` |
| Vertical void | Floors, always | `Vertical void` |

Choose between rectangular and round in [Settings](/docs/mepopeningmarker/reference/settings/#void-type). Floors always get a vertical void, whatever the setting.

## How voids are sized and placed

**Cross-section.** The void is the MEP element's size plus the **Offset** on every side:

- Pipes and round ducts: diameter + 2 × offset.
- Rectangular and oval ducts, and cable trays: (width + 2 × offset) × (height + 2 × offset).
- Duct accessories: the accessory's diameter, or its width and height.
- A round void uses the larger of the two dimensions as its diameter.

**Depth.** The void goes through the full host thickness plus 20 mm (10 mm proud of each face). The thickness is read like this:

1. **Walls** — the wall type's thickness.
2. **Floors** — the floor's **Thickness** parameter.
3. **Structural framing and other hosts** — the first parameter found from the **IFC parameters for width** list in Settings. Use this for IFC-imported walls and beams.
4. If none of these gives a value, the **Default thickness** from Settings is used.

**Rotation.** Wall voids are rotated to follow the direction of the MEP element in plan.

**Height.** The bottom of each wall void, measured from the element's level, is rounded to the nearest **Step** (10 mm or 50 mm). This keeps opening heights on a clean grid.

## Data written to each void

Every void is hosted on the level of the MEP element (for floor voids, the level of the floor) and gets these parameters:

| Parameter | Value |
| --- | --- |
| Identification Number | A three-digit number, unique per level: `001`, `002`, `003`… Numbering continues from the highest number already on that level. |
| Discipline | From Settings |
| Location | From Settings |
| Revision | From Settings |
| Revision Date | From Settings, in the date format you chose |
| Status Openings | From Settings |

Use these to filter, tag or schedule openings, or to carry them into IFC exports.

## Linked models

Hosts are found in the active model and in every loaded Revit link, so you don't need to bind links first. Voids are always placed in the active model.

:::note
Links must be loaded to be checked. Unloaded links are skipped.
:::

## When an intersection fails

If an intersection can't be processed, for example because a duct accessory has no size parameters, it's skipped and the rest of the run carries on. When the run finishes, the **Operation Errors** window lists each failure with:

- **Installation Id** — the element ID of the MEP element.
- **Wall Id** — the element ID of the host.
- **Error Message** — what went wrong.

Click **Copy to Clipboard** to paste the list into an email or spreadsheet. In Revit, use **Manage → Select by ID** to find the elements.

## Running the command again

- **No duplicates.** If a void of the same type already sits at exactly the same position, a new one isn't placed. You can safely run the command again on a selection that's partly done.
- **New settings don't change existing voids.** To resize voids after changing Settings, delete them and run the command again.
- **One undo.** Each run is a single Revit transaction, so **Ctrl+Z** undoes all the voids from that run.

## Related

- [Combine voids](/docs/mepopeningmarker/guides/combine-voids/)
- [Settings reference](/docs/mepopeningmarker/reference/settings/)
- [Troubleshooting](/docs/mepopeningmarker/troubleshooting/)
