---
title: Point source emission file
---

:::tip Available in each deployment
Point source files can be uploaded in each deployment.
:::

[An example of a point source input file is shown below and can be downloaded here.](./files/pointsource.txt)

```
Lon   Lat   Height_m    Diameter_m  Temperature_K   Flowrate_Nm3_s  NOX_kg_h PM10_kg_h    PM25_kg_h    WILDCARD_kg_h    NO/NOX  Name
20.31417	49.05141	20	1	350	47.12	338.447488584	0	0	1	0.95	name1
20.29632	49.06246	5	1	350	47.12	151.590185822	9.88591419319	8.42163908455	1	0.95	name2
```

The files are plain text files using TABs as separators between the columns. Such files can easily be opened and edited in excel.|

The following columns are required (separated by TABs):

| Column         | Description                                                                                               | Format | Units |
| :------------- | :-------------------------------------------------------------------------------------------------------- | :----- | :---- |
| Lon            | Longitude of the point source (decimal degrees)                                                           | float  | °     |
| Lat            | Latitude of the point source (decimal degrees)                                                            | float  | °     |
| Height_m       | Height of the stack                                                                                       | float  | m     |
| Diameter_m     | Diameter of the stack                                                                                     | float  | m     |
| Temperature_K  | Outflow temperature                                                                                       | float  | K     |
| Flowrate_Nm3_s | Outflow rate in Nm3/s, meaning as measured with standard temperature 0°C (273.15 K) and pressure of 1 atm | float  | Nm3/s |
| NOX_kg_h       | Emission rate for NOx                                                                                     | float  | kg/h  |
| PM10_kg_h      | Emission rate for PM10                                                                                    | float  | kg/h  |
| PM25_kg_h      | Emission rate for PM25                                                                                    | float  | kg/h  |
| NOBG_kg_h      | Emission rate for a pollutant that ... (TODO)                                                             | float  | kg/h  |
| NO/NOx         | Ratio of NO exhaust in the NOx emission                                                                   | float  | -     |
| Name           | The name of the point source                                                                              | string | -     |
