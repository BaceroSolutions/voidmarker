---
title: MEP Opening Marker
description: Overview of MEP Opening Marker, the Revit add-in that detects MEP intersections and places void openings automatically.
---

MEP Opening Marker is an Autodesk Revit add-in that finds where MEP elements pass through walls, floors and structural framing, and places a void opening at each crossing. It checks the active model and every loaded Revit link, so you don't have to bind links first.

## What it does

- **Finds intersections.** Selected pipes, ducts, duct accessories and cable trays are checked against walls, floors and structural framing.
- **Places voids.** A void family is placed at each intersection, sized to the MEP element plus your clearance, rotated to follow the element, and numbered per level.
- **Fills in project data.** Every void gets the discipline, location, revision, revision date and status you set.
- **Combines voids.** Two overlapping or adjacent voids can be merged into one rectangular opening.
- **Reports problems.** Intersections that can't be processed are listed in an error report instead of stopping the whole run.

## The ribbon

After installation, Revit shows a **MEPOpeningMarker** tab with a **Commands** panel:

| Button | What it does | Guide |
| --- | --- | --- |
| **Find & Mark Intersections** | Checks the selected MEP elements and places a void at every intersection found. | [Mark intersections](/docs/mepopeningmarker/guides/mark-intersections/) |
| **Combine Voids** | Merges two selected voids into one and deletes the originals. | [Combine voids](/docs/mepopeningmarker/guides/combine-voids/) |
| **Settings** | Sets the void type, clearance, step, project data and host thickness rules. | [Settings reference](/docs/mepopeningmarker/reference/settings/) |
| **About** | Opens the MEP Opening Marker website. | |
| **Privacy Policy** | Opens the privacy policy. | |

## Where to start

1. [Install the add-in](/docs/mepopeningmarker/getting-started/installation/) and start the free trial.
2. Follow the [Quick start](/docs/mepopeningmarker/getting-started/quick-start/) to place your first voids.
3. Read the [Settings reference](/docs/mepopeningmarker/reference/settings/) to match your project's standards.
