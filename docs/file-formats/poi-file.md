---
title: POI file
---

:::tip Available in each deployment
POI files can be uploaded in each deployment.
:::

[An example of a POI file is shown below and can be downloaded here.](./files/poi.txt)

```
Lon   Lat   Name
20.30	49.06	POI5
20.27	49.05	POI6
```

The files are plain text files using TABs as separators between the columns. Such files can easily be opened and edited in excel.

The following columns are required (separated by TABs):

| Column | Description                            | Format | Units |
| ------ | -------------------------------------- | ------ | ----- |
| Lon    | Longitude of the POI (decimal degrees) | float  | °     |
| Lat    | Latitude of the POI (decimal degrees)  | float  | °     |
| Name   | The name of the POI                    | string | -     |
