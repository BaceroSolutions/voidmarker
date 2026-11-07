---
title: Troubleshooting and FAQ
description: Fixes for common problems and answers to frequently asked questions about MEP Opening Marker.
---

## Troubleshooting

### The MEPOpeningMarker tab doesn't appear

- Check that you're running a supported Revit version (2023–2027).
- Close Revit fully, run the installer again, then restart Revit.
- If Revit asks whether to load the add-in at startup, choose **Always Load**.

### Access Denied

The message *You do not have the required entitlement or access to use this feature* means your licence couldn't be confirmed.

- Make sure you're signed in to Revit with the Autodesk account you used on the App Store.
- Check your internet connection, then restart Revit. The licence is checked at startup.
- If your 30-day trial has ended, buy a licence from the [Autodesk App Store](https://apps.autodesk.com/RVT/en/Detail/Index?id=7436713805070157386&appLang=en&os=Win64&mode=preview).

### "No elements selected"

**Find & Mark Intersections** only works on pipes, ducts, duct accessories and cable trays. Select at least one of these before clicking the button. Conduits, fittings and flex ducts aren't supported.

### No voids were placed

- Check that the MEP elements really pass through a wall, floor or structural framing element. Elements that only touch a face or run alongside a wall aren't intersections.
- If the hosts are in a linked model, make sure the link is **loaded**.
- If a void of the same type already exists at that exact spot, a new one isn't placed.

### The Operation Errors window appears

Some intersections couldn't be processed. The window lists the MEP element (**Installation Id**), the host (**Wall Id**) and the reason. All other voids were still placed.

The most common cause is a duct accessory without a **Diameter**, or **Width** and **Height**, parameter. Use **Manage → Select by ID** to find the element, then fix its size or place that void by hand. Click **Copy to Clipboard** to send the list to support.

### Voids are the wrong size

- Check **Offset** in [Settings](/docs/mepopeningmarker/reference/settings/). It's added to every side, so the opening grows by twice the offset.
- If the void depth doesn't match the host, the add-in may have used the **Default thickness**. For structural framing or IFC elements, add the right parameter name to **IFC parameters for width**.
- Settings only apply to new voids. Delete the existing voids and run the command again.

### My settings were reset

Settings are kept only for the current Revit session. Set them again after restarting Revit.

### Voids have the wrong discipline

The default **Discipline** is `Electrical`. Change it in Settings before marking each discipline's openings. To fix voids already placed, edit their **Discipline** parameter, or delete them and run the command again.

### "No voids selected" when combining

**Combine Voids** needs at least two rectangular or round voids in the selection. Vertical (floor) voids can't be combined.

## FAQ

### Do I need to bind linked models?

No. Every loaded link is checked directly. Voids are placed in the active model.

### Which MEP elements are supported?

Pipes, ducts (round, rectangular and oval), duct accessories and cable trays.

### Which hosts are supported?

Walls, floors and structural framing, in the active model or in loaded links.

### How are voids numbered?

Each void gets a three-digit **Identification Number**, unique per level (`001`, `002`…). New voids continue from the highest number already on that level.

### Can I undo a run?

Yes. Each run is a single Revit transaction, so one **Ctrl+Z** undoes it.

### Can I use my own void families?

The add-in looks for families named `Rectangular void`, `Round void` and `Vertical void`, and loads its own if they're not in the project. If you replace them, keep the same family and type names and the **Width**, **Height**, **Length** and **Identification Number** parameters.

### Is there a free trial?

Yes, 30 days with every feature. See [Installation](/docs/mepopeningmarker/getting-started/installation/#free-trial-and-licensing).

## Contact support

If your problem isn't listed here, or you'd like to request a feature, email Bacero Solutions at [contact@bacerosolutions.com](mailto:contact@bacerosolutions.com).

To help us fix it quickly, include:

- Your Revit version
- What you selected and which command you ran
- The contents of the **Operation Errors** window (use **Copy to Clipboard**), or a screenshot of any error message
