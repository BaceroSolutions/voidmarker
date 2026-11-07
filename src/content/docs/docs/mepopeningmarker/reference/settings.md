---
title: Settings
description: Every option in the MEP Opening Marker Settings window.
---

Click **Settings** on the **MEPOpeningMarker** tab to open the **MEP Opening Marker Settings** window. Change the values, then click **Save**. **Cancel** closes the window without saving.

These settings apply to every void placed by [Mark intersections](/docs/mepopeningmarker/guides/mark-intersections/) and [Combine voids](/docs/mepopeningmarker/guides/combine-voids/).

:::caution
Settings are kept only for the current Revit session. When you close and reopen Revit, they go back to the defaults below.
:::

Changing the settings doesn't update voids that are already placed. Delete them and run the command again to apply new values.

## Overview

| Setting | Default | What it controls |
| --- | --- | --- |
| [Void type](#void-type) | Rectangular Void | Shape of voids in walls and structural framing |
| [Offset (mm)](#offset) | 10 | Clearance on every side of the MEP element |
| [Step (mm)](#step) | 10 | Rounding of the void's height above its level |
| [Discipline](#discipline) | Electrical | Text written to each void |
| [Location](#location) | wall | Text written to each void |
| [Revision Date](#revision-date) | Today, `dd/MM/yyyy` | Date written to each void |
| [Revision](#revision) | 1 | Text written to each void |
| [Status Openings](#status-openings) | default status opening | Text written to each void |
| [IFC parameters for width](#ifc-parameters-for-width) | `Qto_WallBaseQuantities.Width`<br/>`BaseQuantities.Width` | Where to read the thickness of framing and IFC hosts |
| [Default thickness (cm)](#default-thickness) | 20 | Fallback host thickness |

## Sizing

### Void type

The shape of voids placed in walls and structural framing:

- **Rectangular Void** — a rectangular opening. Suits ducts and cable trays.
- **Round Void** — a circular opening, using the larger of the element's width and height as the diameter. Suits pipes and round ducts, and core drilling.

Voids in floors are always vertical voids. See [Void types](/docs/mepopeningmarker/guides/mark-intersections/#void-types).

### Offset

The clearance, in millimetres, added to **every side** of the MEP element. A 100 mm pipe with a 10 mm offset gets a 120 mm opening.

Set it to what your structural engineer or project standard asks for, such as space for insulation, fire-stopping or installation tolerance.

### Step

Either **10 mm** or **50 mm**. The bottom of each wall void, measured from its level, is rounded to the nearest multiple of this value, so openings line up on a clean height grid.

## Project data

These values are written to parameters of the same name on every void placed or combined. Use them to filter, tag and schedule openings, and to carry them into IFC exports.

### Discipline

The MEP discipline, for example `HVAC`, `Electrical` or `Plumbing`. Written to the **Discipline** parameter.

:::tip
The default is `Electrical`. Change it before marking plumbing or HVAC openings, and change it again when you switch disciplines.
:::

### Location

The zone, area or room the openings belong to. Written to the **Location** parameter.

### Revision Date

Pick the date with the date picker, then choose a format from the list below it. Written to the **Revision Date** parameter. The available formats, shown for 7 November 2026:

| Format | Example |
| --- | --- |
| `dd/MM/yyyy` | 07/11/2026 |
| `dd.MM.yyyy` | 07.11.2026 |
| `yyyy-MM-dd` | 2026-11-07 |
| `MMM dd, yyyy` | Nov 07, 2026 |
| `MMMM dd, yyyy` | November 07, 2026 |
| `ddd, MMM d, yyyy` | Sat, Nov 7, 2026 |
| `MMM yyyy` | Nov 2026 |
| `MMMM yyyy` | November 2026 |

### Revision

The revision number or phase, for example `1`, `P02` or `C1`. Written to the **Revision** parameter.

### Status Openings

The workflow status, for example `New`, `Pending` or `Approved`. Written to the **Status Openings** parameter.

## Host thickness

The void depth is the host thickness plus 20 mm. Walls and floors report their own thickness. These two settings cover hosts that don't.

### IFC parameters for width

A list of parameter names, one per line, used to read the thickness of structural framing and IFC-imported elements. They're tried in order, and the first one found on the element is used.

Add the parameter names your IFC files use. For example, if beams from the structural model carry their width in `Pset_BeamCommon.Width`, add that line.

### Default thickness

The thickness, in centimetres, used when a host's thickness can't be read: a floor without a **Thickness** value, or a framing element with none of the IFC parameters. Set it to the most common wall or slab thickness in your project.

## Related

- [Mark intersections](/docs/mepopeningmarker/guides/mark-intersections/)
- [Combine voids](/docs/mepopeningmarker/guides/combine-voids/)
