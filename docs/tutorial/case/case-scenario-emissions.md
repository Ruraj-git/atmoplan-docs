---
title: Scenario emissions
---

## Inspecting the emissions of a scenario

:::tip Available in each deployment
:::

Go to the case detail page, open a scenario and click on 'Emissions'. A list of all emissions for the scenario is shown at the left.

There are two types of emissions:

- Traffic emissions
- Point source emissions

The **traffic emissions** for a scenario consist of a list of roads with traffic counts for different vehicle type categories. The supported vehicle type categories depend on the deployment. In Slovakia and Hungary, the vehicle type categories are fixed: BUS, CAR, LDV, HDV.

Whether the traffic intensities are given as peak intensities (together with a scaling profile) or yearly totals, also depends on the deployment. In Slovakia and Hungary, the intensities are yearly totals.

The **point source emissions** for a scenario consists of a list of (industrial) point sources with corresponding emissions.

### Inspecting traffic emissions

Go to the case detail page, open a scenario and click on 'Emissions'. A list of all emissions for the scenario is shown at the left. Then click on a traffic emission. All roads are shown on the map as black line strings.

When clicking on a road, the properties of the road are shown on the right. The properties consist of the traffic intensities, speed limit, height and road type. The road type can be H (Highway), R (Rural) or U (Urban).

Click on Cancel before selecting another road on the map.

### Inspecting point source emissions

Go to the case detail page, open a scenario and click on 'Emissions'. A list of all emissions for the scenario is shown at the left. Then click on a point source emission. All point sources are shown on the map as red points.

When clicking on a point source, the properties of the point source are shown on the right. The properties consist of the name, emissions, NO/NOX ratio, height, flow rate, diameter and temperature of the point source.

Click on Cancel before selecting another point source on the map.

## Creating emissions for a scenario

:::caution Not yet available
:::

## Updating the emissions of a scenario

:::tip Available in Slovakia, Hungary
:::

First we describe how to update traffic emissions. After that, we look at the point source emissions.

:::caution
In some deployments (Slovakia, Hungary), it is not allowed to update emissions in the baseline scenario.
:::

:::caution
The emissions cannot be updated while the results are being calculated or when the calculation is (successfully) finished.
:::

### Updating traffic emissions

There are different options:

- Updating the properties of an existing road
- Creating a road by drawing on the map
- Uploading a file containing multiple roads
- Deleting a road

#### Updating the properties of an existing road

Go to the case detail page, open a scenario and click on 'Emissions'. A list of all emissions for the scenario is shown at the left. Then click on a traffic emission. All roads are shown on the map as black line strings.

When clicking on a road, the properties of the road are shown on the right. The properties consist of the traffic intensities, speed limit, height and road type. The road type can be H (Highway), R (Rural) or U (Urban).

The properties can be updated by editing the fields and clicking on Save. The properties follow some rules:

- The traffic counts should be positive or zero
- The total traffic count cannot be zero
- The speed limit should be an integer value between 1 and 130
- The height should be a decimal value between 0 and 150

#### Creating a road by drawing on the map

Go to the case detail page, open a scenario and click on 'Emissions'. A list of all emissions for the scenario is shown at the left. Then click on a traffic emission. All roads are shown on the map as black line strings.

Click on the icon in the top left corner of the map and draw a road on the map by clicking on the begin and end point of the road. Each road is represented by a line string. After drawing the road, the properties of the road appear at the right. Fill in the different properties and click on Save to create the new road. The properties follow some rules that are describe in the previous section.

#### Uploading a file containing multiple roads

Go to the case detail page, open a scenario and click on 'Emissions'. A list of all emissions for the scenario is shown at the left. Then click on a traffic emission. All roads are shown on the map as black line strings.

Click on 'Bulk upload' in the menu of the traffic emission. At the right, a panel is shown where the network file can be uploaded. At the top a template can be downloaded that can be used to define your own network file. The format of the network file is described in more detail in an appendix. The network file defines the geometrical location of the individual roads via lat/lon coordinates and contains the traffic counts for different categories. For each road, the road type, speed limit and height are given.

Upload your network file by dragging and dropping the file in the upload component. Alternatively, you can click on the upload component; this opens a file explorer, which allows you to choose a file on your file system. The name of the chosen file is shown below the upload component. Click on 'upload' to start importing the file.

![Login](./images/login.png)

When importing files, their content is parsed, validated and put into a back-end database. For larger files, this may take some time. While the import is busy, a message is shown on the page.

![Login](./images/login.png)

When the file was valid, the new roads are added to the map.

![Login](./images/login.png)

When the file is invalid, the user is notified with a brief message of where the import went wrong. You can then correct your file and upload it again, as described above.

![Login](./images/login.png)

#### Deleting a road

Go to the case detail page, open a scenario and click on 'Emissions'. A list of all emissions for the scenario is shown at the left. Then click on a traffic emission. All roads are shown on the map as black line strings.

When clicking on a road, the properties of the road are shown on the right. Click on the Delete button to delete the selected road. A confirmation dialog is shown containing an ok and cancel button.

### Updating point source emissions

There are different options:

- Updating the properties of an existing point source
- Creating a point source by drawing on the map
- Uploading a file containing multiple point sources
- Deleting a point source

#### Updating the properties of an existing point source

Go to the case detail page, open a scenario and click on 'Emissions'. A list of all emissions for the scenario is shown at the left. Then click on a point source emission. All point sources are shown on the map as red squares.

When clicking on a point source, the properties of the point source are shown on the right. The properties consist of the name, emissions, NO/NOX ratio, height, flow rate, diameter and temperature.

The properties can be updated by editing the fields and clicking on Save. The properties follow some rules:

- The emissions should be positive or zero
- The NO/NOX ratio should be a decimal value between 0 and 1
- The height should be a decimal value greater than or equal to 0
- The flow rate should be a decimal value greater than or equal to 0
- The diameter should be a decimal value greater than or equal to 0
- The temperature should be a decimal value greater than or equal to 273.15

#### Creating a point source by drawing on the map

Go to the case detail page, open a scenario and click on 'Emissions'. A list of all emissions for the scenario is shown at the left. Then click on a point source emission. All point sources are shown on the map as red squares.

Click on the icon in the top left corner of the map and click on the map to draw your point source. After drawing the point source, the properties of the point source appear at the right. Fill in the different properties and click on Save to create the new point source. The properties follow some rules that are describe in the previous section.

## Uploading a file containing multiple point sources

Go to the case detail page, open a scenario and click on 'Emissions'. A list of all emissions for the scenario is shown at the left. Then click on a point source emission. All point sources are shown on the map as red squares.

Click on 'Bulk upload' in the menu of the point source emission. At the right, a panel is shown where the point source file can be uploaded. At the top a template can be downloaded that can be used to define your own point source file. The format of the point source file is described in more detail in an appendix. The point source file defines the geometrical location of the individual point sources via lat/lon coordinates and contains the emissions for different pollutants. For each point source, the name, NO/NOX ratio, height, flow rate, diameter and temperature are given.

Upload your point source file by dragging and dropping the file in the upload component. Alternatively, you can click on the upload component; this opens a file explorer, which allows you to choose a file on your file system. The name of the chosen file is shown below the upload component. Click on 'upload' to start importing the file.

![Login](./images/login.png)

When importing files, their content is parsed, validated and put into a back-end database. For larger files, this may take some time. While the import is busy, a message is shown on the page.

![Login](./images/login.png)

When the file was valid, the new point sources are added to the map.

![Login](./images/login.png)

When the file is invalid, the user is notified with a brief message of where the import went wrong. You can then correct your file and upload it again, as described above.

![Login](./images/login.png)

#### Deleting a point source

Go to the case detail page, open a scenario and click on 'Emissions'. A list of all emissions for the scenario is shown at the left. Then click on a point source emission. All point sources are shown on the map as red squares.

When clicking on a point source, the properties of the point source are shown on the right. Click on the Delete button to delete the selected point source. A confirmation dialog is shown containing an ok and cancel button.
