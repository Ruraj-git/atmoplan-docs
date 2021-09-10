---
title: Meteo file
---

:::caution Not yet available
Uploading a custom meteo file is not yet available. At this moment, only pre-calculated meteo can be used.
:::

[This is an example of a meteo data file. ](./meteo.txt)

The ATMO-Plan application works with hourly data. The files are plain text files using TABs as separators between the columns. Such files can easily be opened and edited in excel. A full year of data is required.

Below we show a table explaining the fields in the meteo file. The Lat/Lon coordinates are needed to estimate the solar radiation.

| Column                  | Description                                                                                                                                                                                     | Format | Units |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----- | :---- |
| year                    | The year (4 digits)                                                                                                                                                                             | int    |       |
| month                   | The month (January = 1, December = 12)                                                                                                                                                          | Int    |       |
| day                     | The day of the month (value between 1 and 31)                                                                                                                                                   | int    |       |
| hour                    | The hour of the day (value between 0 and 23). The hour is in local time, consistent with the background dataset.                                                                                | int    |       |
| wind_speed (m/s)        | Wind speed                                                                                                                                                                                      | float  | m/s   |
| wind_direction (degree) | Wind direction (0° = North, 90° = East, 180° = South, 270° = West)                                                                                                                              | int    | °     |
| temperature (C)         | Ambient 2m air temperature                                                                                                                                                                      | float  | °C    |
| height (m)              | Measurement height of the meteo measurement                                                                                                                                                     | float  | m     |
| lat                     | Latitude of the meteo measurement                                                                                                                                                               | float  | °     |
| lon                     | Longitude of the meteo measurement                                                                                                                                                              | float  | °     |
| time_zone (h)           | Timezone offset w.r.t. UTC (0 = UTC, +1 = one hour later (to the east)). E.g. Belgium is +1 in winter and +2 in summer. If hour of measurement is given in UTC, the time zone offset becomes 0. | int    | hour  |
