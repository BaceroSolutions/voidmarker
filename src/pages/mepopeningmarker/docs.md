# MEP Opening Marker Documentation

Welcome to the help page for the MEP Opening Marker tool. This guide will show you how to automatically generate builders' work openings at intersections.

## Basic Workflow

1. **Select Elements:** Highlight the mechanical, electrical, or plumbing elements (pipes, ducts, cable trays) you want to route.
2. **Select Structure:** Highlight the intersecting structural elements (walls, floors).
3. **Execute:** Click the `Run Tool` button in the ribbon.

## Find and Mark Intersections
Analyzes your current selection of MEP elements (such as pipes, ducts, or cable trays) against intersecting walls and floors. The tool automatically identifies and flags every clash location, streamlining the coordination process for builder's work openings.

## Combine Voids
Combines two overlapping or adjacent void elements into one. After selecting the voids and running the command, a new void is generated to encompass both volumes, and the original, separate void instances are automatically removed from the project to clean up the model.

## Settings
Opens the MEP Opening Marker Settings menu. Use this to establish global parameters for generated openings, including clearance offsets, void shape types, discipline tracking, rounding increments (step), default host thicknesses, and custom IFC parameter mapping for accurate data export.

## System Requirements
* Autodesk Revit 2023 - 2026

## Support
If you encounter any issues or have feature requests, please contact Bacero Solutions at contact@bacerosolutions.com.
