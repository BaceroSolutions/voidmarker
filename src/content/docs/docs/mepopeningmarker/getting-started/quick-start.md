---
title: Quick start
description: Place your first void openings with MEP Opening Marker in a few minutes.
---

This walkthrough takes you from a model to placed voids. It assumes MEP Opening Marker is [installed](/docs/mepopeningmarker/getting-started/installation/).

## 1. Check the settings

Click **Settings** on the **MEPOpeningMarker** tab and review the values. For a first run, check at least:

- **Void type** — Rectangular Void or Round Void, used for openings in walls and structural framing.
- **Offset (mm)** — the clearance added on every side of the MEP element.
- **Discipline** — written to every void. The default is `Electrical`, so change it if you're placing plumbing or HVAC openings.

Click **Save**.

:::caution
Settings are kept only until you close Revit. Check them again each time you start a new Revit session.
:::

See the [Settings reference](/docs/mepopeningmarker/reference/settings/) for every option.

## 2. Select MEP elements

In any view, select the pipes, ducts, duct accessories or cable trays you want to check. You can select a single run, a whole system, or every MEP element in the model. Anything else in the selection is ignored.

You don't need to select walls or floors. MEP Opening Marker finds them itself, in the active model and in loaded links.

## 3. Run Find & Mark Intersections

Click **Find & Mark Intersections**. The add-in checks each selected element and places a void wherever it crosses a wall, floor or structural framing element.

If some intersections can't be processed, an **Operation Errors** window lists them. The rest of the voids are still placed.

## 4. Review the result

Look over the placed voids in a 3D view. If two voids overlap, merge them with [Combine voids](/docs/mepopeningmarker/guides/combine-voids/).

To undo the whole run, press **Ctrl+Z** once.

## Next steps

- [Mark intersections](/docs/mepopeningmarker/guides/mark-intersections/) — the full guide, including sizing, void types and linked models.
- [Combine voids](/docs/mepopeningmarker/guides/combine-voids/) — merge overlapping openings.
