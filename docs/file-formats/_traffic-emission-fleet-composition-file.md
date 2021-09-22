---
title: Traffic emission fleet composition file
---

:::caution Not yet available
Uploading a custom fleet composition file is not yet available. At this moment, only pre-calculated cases can be created in which the fleet is determined when drawing the case and cannot be edited.
:::

[An example of a traffic fleet composition file can be found here.](./files/traffic-emission-fleet-composition.txt)

The fleet files are plain text files using TAB's as a separator between the columns. Such files can easily be opened and edited in excel.

In the tool it is possible to download a template of the fleet file in the emissions section. This template is specific for the region of interest and therefore only the last 2 columns in the file (population and mileage) require editing.

The fleet file contains the following columns:

| Column     | Description                                                                                  | Format | Units |
| :--------- | :------------------------------------------------------------------------------------------- | :----- | :---- |
| Scenario   | The name for the fleet (optional)                                                            | string | n/a   |
| Year       | The year for which the fleet is applicable (optional)                                        | int    | n/a   |
| Category   | Vehicle category name, e.g. Passenger Cars, Buses, Mopeds, Motorcycles, Heavy Duty Trucks, … | string | n/a   |
| Segment    | Cylinder class / tonne class of the engine (corresponding to COPERT IV segment)              | string | n/a   |
| Fuel       | Fuel type                                                                                    | string | n/a   |
| Euro       | EURO class                                                                                   | string | n/a   |
| Population | The total vehicle count for the vehicle type                                                 | float  | n/a   |
| Mileage    | The average total yearly mileage (in km) for an individual vehicle of this particular type   | float  | km    |

Please note that:

- The total vehicle km driven by each vehicle type is given by the product of the population and the mileage.
- When applying the vehicle fleet to the traffic counts on the road network, only the relative distribution of the vehicle kilometers over the vehicle categories is used, even though the total vehicle count (in absolute numbers) is given per type in the fleet composition file.
