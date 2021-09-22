---
title: Background concentration file
---

:::caution Not yet available
Uploading a custom background concentration file is not yet available. At this moment, only predefined background can be used.
:::

[This is an example of a background concentration data file.](./files/background-concentration.txt)

The ATMO-Plan application works with hourly data. The background concentration files are plain text files using `<tab>` as separators between the columns. Such files can easily be opened and edited in excel. A full year of data is required.

Below we show a table explaining the fields in the data file. Note that all pollutants must be present in the data file.

| Column       | Description                                                                                                 | Format | Units |
| :----------- | :---------------------------------------------------------------------------------------------------------- | :----- | :---- |
| year         | The year (4 digits)                                                                                         | int    |       |
| month        | The month (January = 1, December = 12)                                                                      | Int    |       |
| day          | The day of the month (value between 1 and 31)                                                               | int    |       |
| hour         | The hour of the day (value between 0 and 23). The hour is in local time, consistent with the meteo dataset. | int    |       |
| O3 (ug/m3)   | Background concentration for O3                                                                             | float  | µg/m3 |
| NOX (ug/m3)  | Background concentration for NOX total (expressed as NO2 equivalents)                                       | float  | µg/m3 |
| NO2 (ug/m3)  | Background concentration for NO2                                                                            | float  | µg/m3 |
| PM25 (ug/m3) | Background concentration for PM2.5                                                                          | float  | µg/m3 |
| PM10 (ug/m3) | Background concentration for PM10                                                                           | float  | µg/m3 |
