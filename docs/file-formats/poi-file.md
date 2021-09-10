---
title: POI file
---

:::tip Available in each deployment
POI files can be uploaded in each deployment.
:::

[An example of a POI file is shown below and can be downloaded here.](./poi.txt)

```
X   Y   Name
18.758  49.221  name1
18.759  49.222  name2
```

The files are plain text files using TABs as separators between the columns. Such files can easily be opened and edited in excel.

The following columns are required (separated by TABs):

| Column | Description                            | Format | Units |
| ------ | -------------------------------------- | ------ | ----- |
| X      | Longitude of the POI (decimal degrees) | float  | °     |
| Y      | Latitude of the POI (decimal degrees)  | float  | °     |
| Name   | The name of the POI                    | string | -     |
