---
title: Generic EU-wide data
---

:::caution Not yet available
:::

Three EU-wide generic datasets are available in the application. An overview is provided in the following table.

| Type                                   | Source                                                                 | Year |
| :------------------------------------- | :--------------------------------------------------------------------- | :--- |
| Meteorological data                    | ERA5 reanalysis dataset of ECMWF                                       | 2015 |
| Background concentration               | CAMS reanalysis of ECMWF                                               | 2015 |
| Traffic flows                          | Compiled by VITO based on COPERT, OpenTransportMaps and OpenStreetMaps | 2014 |
| Fleet information and emission factors | Compiled by VITO based on COPERT                                       | 2014 |

## Meteorological data

Meteorological input stems from the ERA5 reanalysis dataset of the Copernicus Climate Change Service Information, maintained by ECMWF (European Centre for Medium-Range Weather Forecasts). This dataset provides hourly reanalysis data for a range of meteorological parameters for the entire globe at a 0.3-degree resolution. Within the ATMO-Plan application we use the two-meter temperature and the 10m (vectorial) wind speed (for the local scale modelling) and the incoming short-wave radiation (to compute the NO-concentrations based on the chemical equilibrium). More information can be found at https://confluence.ecmwf.int//display/CKB/ERA5+data+documentation#ERA5datadocumentation-References.

## Background concentrations

Background concentrations stem from the CAMS (Copernicus Atmosphere Monitoring Service) archive. This dataset contains hourly reanalysis data for four pollutants: NO2, PM10, PM2.5 and O3. Since the ATMO-Plan application not only requires hourly ozone and nitrogen dioxide concentrations, but also nitrogen oxide concentrations to correctly assess the chemical equilibrium in the background concentration, a dedicated chemical equilibrium computation has been added to the processing.

In the troposphere, nitrogen oxides react with ozone, according to the reaction

$$
NO + O_{3} \rightarrow NO_{2} + O_{2}
$$

Under typical tropospheric boundary layer conditions, this reaction takes place within a couple of seconds after the emission, and either leads to the nearly complete conversion of all the O3 to form nitrogen dioxide, or nearly all of the NO to NO2 with an excess of unreacted O3. During daylight, most of the formed nitrogen dioxide absorbs solar ultraviolet radiation and by photolysis forms again NO and O, which subsequently reacts with O2 forming ozone again:

$$
NO_{2} + hv \rightarrow NO + O
\\
O + O_{2} + M \rightarrow O_{3} + M
$$

The reactions described above occur over the timescales of minutes. It can therefore be assumed that the background concentrations of NO2, NO and O3 are in chemical equilibrium. The steady state is characterized by the equation:

$$
\frac{[NO][O_{3}]}{NO_{2}} = \frac{j_{NO_{2}}}{k_{NO}}
$$

where [X] denotes the molar concentration of pollutant X and 𝑗𝑁𝑂2 and 𝑘𝑁𝑂 are the rate coefficients of respectively the first and second (photolysis) reaction described above. The former coefficient depends on the temperature, while the latter is influenced by the solar irradiation (more specifically, the incoming short-wave radiation flux). We use the method by Berkowicz to determine both coefficients (Berkowicz 2000; Berkowicz et al. 2008), and additionally assume that no is present at night-time.

Based on the meteorological input (solar radiation and temperature) and the concentrations of NO2 and O3 in the CAMS data, we use the formula above to construct NO-concentration time series for the cities under consideration.

## Fleet information and emissions factors

Fleet information stems from the EU28 fleet data collected by Emisia through the [COPERT](http://www.emisia.com/utilities/copert/) program. The COPERT methodology is part of the [EMEP/EEA air pollution emission inventory guidebook](https://www.eea.europa.eu/publications/emep-eea-guidebook-2016/part-b-sectoral-guidance-chapters/1-energy/1-a-combustion/1-a-3-b-i/view) for the calculation of air pollutant emissions and is consistent with the 2006 IPCC Guidelines for calculating greenhouse gas (GHG) emissions.

The data sets include among other things:

- **Population**: the number of vehicles, allocated to each of the 257 detailed vehicle categories currently available in COPERT 5.
- **Vehicle kilometres**: the annual average number of vehicles times the kilometres driven per vehicle category
- **Share per road type**: the average share of vehicle kilometres per vehicle category and road type

The fleet data is used as input for the road transport emission calculator FASTRACE.

Next to detailed fleet information, FASTRACE - the tool for calculating geographically dispersed road transport emissions – requires country specific and road & speed dependent emission factors per vehicle type and pollutant. For this purpose, nationwide emission calculations are performed with the COPERT 5 software, using the EU 28 fleet data as input, as COPERT implements complex emission functions to calculate nationwide emissions considering meteorological parameters and speed. Emission factors can then be derived from COPERT output and applied within FASTRACE.

Country specific meteorological parameters (minimum and maximum monthly temperatures and monthly average relative humidity) derived from ECMWF ERA-5 data for 2015 are used. The COPERT software tool utilizes these data to estimate cold start emissions and the surplus due to the use of mobile air conditioning. Consequently, the resulting emissions and the emission factors are country specific.

To include speed dependency in the emission factors, each COPERT calculation is repeated for a number of fixed speeds, in order to create a look-up table for FASTRACE. This look-up table contains emission factors per vehicle type, road type, pollutant and speed. Within FASTRACE, interpolation between speeds occurs when the final emissions are generated for a specific road segment with given type and traffic speed.

## Traffic flows

A pan-European dataset with traffic intensity on all roads per vehicle category (personal cars, light and heavy-duty trucks and buses) is not readily available. Therefore, VITO has developed the EU Traffic Data Mapper which provides estimates for the number of vehicles on all the European roads based on vehicle kilometer data per country (COPERT), a roadmap (OTM), and proxy data based on population data (JRC) and road typology (OSM). We first describe the underlying datasets and then provide details on the methodology to combine them.

### Input datasets

#### Emisia' s COPERT database

The total country-wide mileage (vehicle kilometers) stems from the COPERT database already introduced in the previous section.

#### Open Transport Map (OTM) and OpenStreetMap (OSM)

[Open Transport Map](http://opentransportmap.info/) can serve as a road transportation map for Europe containing traffic volume estimates. OTM has been developed by the University of West Bohemia (Czech Republic) within the EU-funded projects OpenTransportNet, SDI4Apps and FOODIE. The underlying road network is based on the open source map [OpenStreetMap](http://www.openstreetmap.org/) (OSM).

We do not directly rely on the traffic volumes produced in the OTM project. This data is still preliminary, and a more detailed analysis revealed some major issues with the traffic volumes. We do, however, use the road network composed and the capacity for each road segment. Besides the OTM data, we also rely on the basic OSM input when dealing with the road types. Because the road types considered in OTM do not make a distinction between the main road and side roads at highway junctions and exits, the OSM classification is used to identify the so-called motorway links and trunk_links.

#### JRC Global Human Settlement Layer

The JRC [Global Human Settlement Layer](https://ghsl.jrc.ec.europa.eu/datasets.php) (GHSL) contains several products based on processing of LandSat images. The settlement layer and population product have been used for this project.

The population dataset is a blend of satellite retrievals describing locations of human settlement and census data. The GHSL provides various datasets with different resolutions, the most detailed being 250 m x 250 m gridded data. We start from a dataset at a resolution of 1km, and smooth the data over 50km, to obtain a mean regional population density.

The settlement dataset contains an assessment of the REGIO-OECD degree of urbanization. Starting from the population dataset and the raw LandSat images, "high density clusters" (HDC), "low density cluster" (LDC), and rural areas have been identified. HDC has been defined as contiguous with a density of at least 1,500 inhabitant/km2 or a density of built-up greater than 50%, and a minimum of 50,000 inhabitants per cluster. LDS are contiguous grid cells with a density of at least 300 inhabitants per km2, and a minimal population of 5000 inhabitants. Rural areas are then defined as cells outside the urban area.

## ETDM Methodology

The European Traffic Data Mapper (ETDM) methodology proceeds in several steps. The most important ones are outlined below.

### Road selection and simplification

- The OTM dataset is recombined with the original OSM data in order to remove all the roads of type 'links' (including motorway_links, trunk_links and primary_links). This step assures that highway junctions and motorway exits are treated correctly: when left in, it was noticed that large amount of these 'links' will lead to an overestimation of the traffic emissions in the neighborhood of these locations, yielding unrealistic traffic disaggregation patterns.
- Further, to reduce the size of the dataset, the roads are simplified with a tolerance of approximately 50 m. Especially for curvy roads (e.g. in hilly and mountainous areas) the number of line segments is significantly reduced by this operation, while the influence on the final concentrations in urban areas is limited.

### Road types

Three road types are observed in the COPERT dataset : Highway (H), Urban (U) and Rural (R). Based on a combination of the OTM-data and the JRC Human Settlement Layer, all roads are classified according to one of these categories.

To start with, all roads of the type 'mainRoad' in the OTM data are labelled as highway. These include trunk and motorway types of the OSM classification. All other roads are either classified as urban or rural based on the JRC Settlement Layer, with urban being defined as a combination of 'urban clusters' (low density clusters) and 'urban centres' (high density clusters), and rural referring to the other locations.

### Traffic speed

The speeds for the roads are based on the OTM data, which, in its turn, is based on the OSM data. "No data" gaps are filled according to the speeds contained in COPERT, using the default COPERT passenger car speed per country for each road type.

### Total vehicle kilometers (vkm) per country

The total vehicle kilometers are provided by the COPERT input. The data is provided per country, per vehicle category (including the vehicle type, fuel type and EURO-class) and per road type. It is important here to note that this information is only available at **national level**, so there is no EU-wide detailed fleet compositions available for cities.

In addition, it should be noted that the level of geographic disaggregation of the vehicle km driven in COPERT (in terms of "Highway", "Urban" and "Rural") does not fully correspond with how roads would be labelled in the GIS dataset with road segments. Within COPERT, this categorization refers in a way more to the typical driving conditions rather than representing a real geographical allocation. It was attempted to allocate the urban and rural vehicle km separately, however by doing so, it was noticed through exploratory tests we have performed over Belgium, that this would lead to important under/overestimations of certain roads. We therefore decided to sum the urban and rural vehicle kilometer and disaggregate them jointly, introducing the urban vs. rural difference in traffic load via a proxy based on population density (see below) rather than via explicit geographic allocation to the line segments in 2 categories (urban & rural).

### Geographic disaggregation of national total vehicle kilometers

The national total vehicle kilometers in each country is spread over all the roads in the country according to a proxy based on OTM-input, population data and the length of the road segments. After consultation with the development team of SHERPA-City, we decided to adopt an approach inspired by the methodology used in this tool. For each road segment, we calculate the following weight:

$$
w = l * log(pop_{50km}) * C
$$

where $C$ is the capacity of the road according to the OTM dataset attribute, $l$ is the length of the road (in) and $pop_{50km}$ is the population in a 50 x 50 km square around the location of the road. The presence of the capacity and the length of the road is evident, while the population is used as a proxy for local displacements, which are much higher in urban areas than in rural areas. The logarithm is applied to reduce the effect of the population, as otherwise in large countries (e.g. Spain) the difference between urban (Madrid) and rural (Extremadura) areas becomes too large and unrealistic patterns would emerge in the concentration maps.

The total highway and urban + rural vehicle kilometers (see above) per country is subsequently spread over the roads according to the weights defined above. For each road, the vehicle kilometers on the road is defined as the country total vehicle kilometers for the road type multiplied with the ratio of the weight of the road to the weight summed over the roads of the same class. The vehicle kilometers for each road is then divided by the length of the road to obtain the daily mean number of vehicles for each road segment.

When all of these steps are taken, the ETDM tool is able to generate a database with EU-wide traffic intensities at each road segment considered. These are subsequently fed to the FASTRACE emission model to generate the actual traffic emissions in kg/km/h for each road segment.
