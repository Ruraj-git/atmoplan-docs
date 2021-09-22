---
title: LEZ
sidebar_position: 5
---

## Inspecting the low emission zones of a scenario

:::tip Available in Slovakia, Hungary
:::

The ATMO-Plan tool allows the definition of Low Emission Zones (LEZ). An LEZ is an area where the most polluting vehicles are prohibited from travelling.

Go to the case detail page, open a scenario and click on 'Low emission zones'. A list of all LEZs for the scenario is shown at the left.

![LEZ overview](./images/lez_overview.png)

Then click on an LEZ. The location of the LEZ is shown on the map as a blue polygon.

![LEZ detail](./images/lez_detail.png)

At the right, the name of the LEZ is shown.

When clicking on 'Manage vehicle restrictions', a list of all vehicle types is shown. For each vehicle type, the last column shows whether it is allowed in the LEZ or not:

- when the slider is green, the vehicle type is allowed in the LEZ
- when the slider is red, the vehicle type is not allowed in the LEZ
- when the slider is grey, the vehicle type is not present in the scenario fleet

![LEZ vehicle restrictions](./images/lez_vehicle_restrictions.png)

Each column in the table can be sorted by clicking on the arrows in the column header. By clicking again, the column is sorted in the opposite order. When a column is sorted, the arrow is shown in dark grey, otherwise it is hidden.

Each column can be sorted by clicking on the funnel in the column header. When a column is filtered, the funnel is shown in orange, otherwise it is shown in grey.

## Creating a low emission zone

:::tip Available in Slovakia, Hungary
:::

:::caution
In some deployments (Slovakia, Hungary), it is not allowed to create an LEZ in the baseline scenario.
:::

:::caution
A low emission zone cannot be created while the results are being calculated or when the calculation is (successfully) finished. The scenario should also have a valid fleet before an LEZ can be created. The add button is hidden then.
:::

Go to the case detail page, open a scenario and click on 'Low emission zones'. A list of all LEZs for the scenario is shown at the left. Click on 'Add low emission zone' to create a new LEZ.

Low emission zones can only be defined after a fleet is defined for the scenario. If not, 'Add low emission zone' will be disabled.

After clicking on 'Add low emission zone', the user can draw the LEZ on the map. This is done by clicking on the map and drawing the corners of a polygon. You can zoom in/out using the icons at the bottom right of the map, or by using the mouse wheel. Close the polygon by clicking on the first corner. The location can be changed by clicking on 'Redraw' or 'Edit' at the right. When clicking on 'Redraw', the drawn polygon disappears and you can restart drawing. When you click on 'Edit', you can change the polygon by dragging the corners.

![LEZ: name and polygon](./images/lez_name_polygon.png)

On the right, the name for the LEZ can be specified. When clicking on 'Save', the LEZ is added to the list of low emission zones at the left.

![Login](./images/lez_detail.png)

To finish the definition of the LEZ a fleet should be defined for the LEZ. This fleet expresses which vehicle types are allowed in the zone and which vehicle types are banned. This is done in the LEZ configuration tool, which is opened when clicking on 'Manage vehicle restrictions'.

The LEZ configuration tool can be used to perform a quick screening of the effect of the introduction of an LEZ on the concentrations. The tool can be used to ban vehicle types (e.g. per EURO 5) in the selected zone, but it does not change the total number of vehicles of a category (bus, car, HDV…) in the fleet nor the traffic counts. When banning a vehicle category, the banned vehicles will instead be distributed to the remaining categories of the same type, keeping the traffic volumes in all streets constant. For example, when banning all cars of pre-EURO 5 categories, the pre-EURO5 cars will be replaced by EURO5 and EURO6, with the ratio between them equal to the ratio in the non-LEZ fleet.

The simple configuration tool shows a table containing all vehicle types in the scenario fleet. For each vehicle type, the vehicle type category, emission category and fuel type are shown.

![LEZ: vehicle restrictions](./images/lez_vehicle_restrictions.png)

:::caution
It is important to note that the vehicle categories which may occur in a fleet composition file are predefined for each deployment and dependent on the selected region. A user can only work with the existing vehicle types. No new vehicle types can be added after deployment and the user or the deployment responsible should contact VITO should this be required.
:::

When first opening the configuration tool, the last column reflects which vehicle types are present in the scenario fleet (green slider) and which are not (grey slider). The user can ban vehicle types from the LEZ by switching a slider from green to red.

The user can also ban groups of vehicle types by using the column filters and then clicking on the slider in the header of the last column. In the following figures, the table is filtered and only contains vehicle types whose fuel category is different from 'Euro 6'. By clicking on the slider in the header of the last column, all these vehicle types are banned at once.

![LEZ: filter vehicle types](./images/lez_filter.png)

![LEZ: ban multiple vehicle types](./images/lez_ban_all.png)

When the necessary vehicle types are banned, the user should click on Save. At that moment, the fleet for the LEZ is computed and saved and the newly created LEZ is complete.

:::caution
There are some restrictions when banning vehicle types from the LEZ. When banning a vehicle type, it is important to note that the total number of vehicles in your fleet will not change. The banned vehicles will instead be distributed to the remaining vehicle types of the same category. For example, when banning cars of the Euro 1 category, the number of Euro 1 cars will be spread over all other vehicle types. This also means that you cannot ban all fleet vehicle types corresponding to a network vehicle type. At least one must be left; otherwise an error message will appear.
:::

## Updating a low emission zone

:::tip Available in Slovakia, Hungary
:::

:::caution
In some deployments (Slovakia, Hungary), it is not allowed to create/update an LEZ in the baseline scenario.
:::
:::caution
A low emission zone cannot be updated while the results are being calculated or when the calculation is (successfully) finished. The scenario should also have a valid fleet before an LEZ can be created. The LEZ properties are read-only then.
:::

Go to the case detail page, open a scenario and click on 'Low emission zones'. A list of all LEZs for the scenario is shown at the left. Then click on an LEZ. The name of the LEZ can be updated on the right and the vehicle restrictions can be updated as explained in a previous section.

## Deleting a low emission zone

:::tip Available in Slovakia, Hungary
:::

:::caution
In some deployments (Slovakia, Hungary), it is not allowed to create/delete an LEZ in the baseline scenario.
:::
:::caution
A low emission zone cannot be deleted while the results are being calculated or when the calculation is (successfully) finished. The delete button is hidden then.
:::

Go to the case detail page, open a scenario and click on 'Low emission zones'. A list of all LEZs for the scenario is shown at the left. LEZs can be removed by hovering over an LEZ in the list at the left, and then clicking on the delete icon. A confirmation dialog is shown containing an ok and cancel button.

![Delete LEZ](./images/lez_delete.png)
