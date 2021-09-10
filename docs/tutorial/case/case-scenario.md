---
title: Scenario
---

## Inspecting a scenario

:::tip Available in each deployment
:::

Go to the case detail page. At the left, a list of all scenarios is shown. This list always contains at least one scenario, which is the baseline scenario of the case. This scenario is created automatically when the case was created. The baseline scenario is always shown as first scenario.

Click on a scenario name or on the arrow to the right of the name to open the menu for that scenario. The menu contains links to the general settings, emissions, background concentrations, meteo and Low Emission Zones of the scenario.

## Inspecting the general settings of a scenario

:::tip Available in each deployment
:::

Go to the case detail page, open a scenario and click on 'General'. The name of the scenario can be inspected here.

![Login](./images/login.png)

## Updating the general settings of a scenario

:::tip Available in each deployment
:::

Go to the case detail page, open a scenario and click on 'General'. The name of the scenario can be edited here.

:::caution
The general settings cannot be updated while the results are being calculated or when the calculation is (successfully) finished. The general settings are read-only then.
:::

## Duplicating a scenario

:::tip Available in Slovakia, Hungary
:::

:::caution
A scenario cannot be duplicated while the results are being calculated or when the calculation is (successfully) finished. The duplicate button is disabled then.
:::

Duplicating a scenario can be used to rapidly define a new scenario based on an existing scenario.

Go to the case detail page. A scenario can be duplicated hovering over the scenario name in the list at the left and clicking on the duplicate button. A pop-up appears asking the user to provide a name for the new scenario. The scenario names in a case should be unique, so an error message is shown when a name is provided that already exists.

After clicking on Save, the new scenario is added to the list of scenarios at the left.

![Login](./images/login.png)

Duplicating a scenario takes some time. During the duplication, an icon is shown to the right of the copied scenario and a message appears when hovering over the icon.

![Login](./images/login.png)

When copying a scenario, the following data is created:

- The name of the new scenario is provided by the user.
- The new scenario is a non-baseline scenario.
- The roads are copied (if available).
- The fleet file is copied (if available).
- The vehicle mappings are copied (if available).
- The same background is selected (if available).
- The same meteo is selected (if available).
- The tunnel file is copied (if available).
- The point sources are copied (if available).
- The LEZs are copied (if available).

## Deleting a scenario

:::tip Available in Slovakia, Hungary
:::

:::caution
Deleting a baseline scenario is not allowed. The delete button is hidden for baseline scenarios.
:::

:::caution
A scenario cannot be deleted while the results are being calculated, when file imports are busy or when the calculation is (successfully) finished. The delete button is disabled then.
:::

Go to the case detail page. A scenario can be removed by hovering over a scenario in the list at the left, and then clicking on the delete icon. A confirmation dialog is shown containing an ok and cancel button.

![Login](./images/login.png)

![Login](./images/login.png)
