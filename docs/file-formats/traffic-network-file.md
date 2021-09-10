---
title: Traffic network file
---

:::tip Available in each deployment
Network files can be uploaded in each deployment.
:::

[An example of a traffic network file can be found here.](./network.txt)

The files are plain text files using TABs as separators between the columns. Such files can easily be opened and edited in excel.

The following columns are required:

| Column    | Description                                                                                                                                                                                                                                                                                                                                                                                | Format | Units |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ----- | --- | --- | --- |
| ID        | A unique ID for the road segment                                                                                                                                                                                                                                                                                                                                                           | int    | n/a   |
| X1        | Longitude (WGS84) of segment starting point                                                                                                                                                                                                                                                                                                                                                | float  | n/a   |
| Y1        | Latitude (WGS84) of segment starting point                                                                                                                                                                                                                                                                                                                                                 | float  | n/a   |
| X2        | Longitude (WGS84) of segment end point                                                                                                                                                                                                                                                                                                                                                     | float  | n/a   |
| Y2        | Latitude (WGS84) of segment end point                                                                                                                                                                                                                                                                                                                                                      | float  | n/a   |
| <Cat1\>   | Traffic intensity for vehicle category 'cat1' on this segment                                                                                                                                                                                                                                                                                                                              | float  | n/a   |
| <Cat2\>   | Traffic intensity for vehicle category 'cat2' on this segment                                                                                                                                                                                                                                                                                                                              | float  | n/a   |
| ...       |                                                                                                                                                                                                                                                                                                                                                                                            | ...    |       | ... |     | ... |
| Road type | U (Urban), R (Rural), H (Highway). Indicates the road type. This is used on the one hand to select the driving conditions in the FASTRACE emission calculation module and determines to what extent the engines are warm. In the IFDM dispersion module, this parameter selects certain time factors to scale the annual average daily traffic counts to an hourly profile and road width. | char   | n/a   |
| Speed     | Average traffic speed on the road segment, between 1 and 130                                                                                                                                                                                                                                                                                                                               | float  | km/h  |
| Height    | Height of the emission source, between 0 m and 150 m                                                                                                                                                                                                                                                                                                                                       | float  | m     |

Important notes:

- The network file expects individual straight line segments defined by the lat/lon coordinates of their end points. Note that for the calculation in FASTRACE only the length of the segment is relevant; the lat/lon entries are simply copied to the output file.
- After the road segment coordinates, **any number of network vehicle types** can be given. The column names correspond to the vehicle types available from a traffic model or traffic counts. These do not necessarily have to be the same as the vehicle categories in the fleet composition file. The user will be given the opportunity to define the mapping between the fleet categories and the network vehicle types.
- The **traffic intensities** can **either be annual averaged daily traffic counts** (i.e. the total annual traffic counts / 365), **peak intensities or total annual traffic counts. This depends on the deployment** and on the nature of the available traffic data for the region.
- In Slovakia and Hungary, the intensities are yearly totals.
