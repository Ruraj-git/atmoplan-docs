---
title: Background concentration overview
---

:::tip Available in each deployment
:::

When clicking on the menu item 'Background concentrations' in the main page, an overview of all available background concentrations is shown.

Each background concentration has the following properties:

- Name: the name of the background concentration
- Type:
  - Predefined RIO data: when the background concentration is provided by the system and is spatially explicit (TODO)
  - Predefined CAMS data: when the background concentration is provided by the system and is not spatially explicit (TODO)
  - Custom data: when the background concentration is defined by the user. These backgrounds are not spatially explicit.(TODO)
- LinkedCases: the number of cases that are using the background concentration. A background concentration that is used in at least one case cannot be deleted.
- Status: This property can have three different values:
  - No file: No file has been uploaded yet.
  - Finished: The file has been uploaded and imported successfully.
  - Failed: The file has been uploaded, but contains validation errors. When clicking on the status, an error message is shown.
- Created: The creation date

:::caution A couple of important notes regarding background concentrations:
The internal IFDM model applies an emission double counting correction when using pre-defined spatially explicit background information. This is currently not the case with the non-spatially explicit data (provided at deployment or defined by the user).
A full year of hourly data is required for both the background and meteo data.
:::

:::caution
In Slovakia and Hungary, the list of background concentrations contains only one value. This background concentration is used in all cases.
:::
