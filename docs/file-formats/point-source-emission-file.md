---
title: Point source emission files
---

:::tip Available in each deployment
Point source files can be uploaded in each deployment.
:::

[An example of a point source input file is shown below and can be downloaded here.](./files/pointsource.txt)

```
X   Y   Height_m    Diameter_m  Temperature_K   Flowrate_Nm3_s  NO2 PM10    PM25    NOBG    NO/NOX  Name
17.17   48.11   20  1   350 47.12   333.33  333.34  333.35  333.36  0.95    name1
17.18   48.12   21  2   351 47.13   333.34  333.35  333.36  333.37  0.96    name2
```

The files are plain text files using TABs as separators between the columns. Such files can easily be opened and edited in excel.|

The following columns are required (separated by TABs):

| Column         | Description                                                                                               | Format | Units |
| :------------- | :-------------------------------------------------------------------------------------------------------- | :----- | :---- |
| X              | Longitude of the point source (decimal degrees)                                                           | float  | °     |
| Y              | Latitude of the point source (decimal degrees)                                                            | float  | °     |
| Height_m       | Height of the stack                                                                                       | float  | m     |
| Diameter_m     | Diameter of the stack                                                                                     | float  | m     |
| Temperature_K  | Outflow temperature                                                                                       | float  | K     |
| Flowrate_Nm3_s | Outflow rate in Nm3/s, meaning as measured with standard temperature 0°C (273.15 K) and pressure of 1 atm | float  | Nm3/s |
| NOx            | Emission rate for NOx                                                                                     | float  | kg/h  |
| PM10           | Emission rate for PM10                                                                                    | float  | kg/h  |
| PM25           | Emission rate for PM25                                                                                    | float  | kg/h  |
| NOBG           | Emission rate for a pollutant that ... (TODO)                                                             | float  | kg/h  |
| NO/NOx         | Ratio of NO exhaust in the NOx emission                                                                   | float  | -     |
| Name           | The name of the point source                                                                              | string | -     |
