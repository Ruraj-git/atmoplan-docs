---
title: Úvod
sidebar_position: 1
slug: /
---

## ATMOSYS 

ATMOSYS je softvérový systém, ktorý obsahuje nástroje a aplikácie určené pre posudzovanie kvality ovzdušia, ktoré sú navrhnuté tak, aby poskytovali informácie vhodné pre uplatňovanie v praxi. Umožňujú detailné posudzovanie a predpovedanie kvality ovzdušia a je ich možné použiť pri príprave plánov na zlepšenie kvality ovzdušia a ich vyhodnotení. Jadro systému Atmosys tvoria súčasné vedecké modely, ktoré sú dobre zvalidované a poskytujú osvedčené výsledky. 

![Example banner](./images/introduction-ATMOSYS.png)

## Aplikácia ATMO-Plan

Jedna z kľúčových aplikácií v rámci systému ATMOSYS je ATMO-Plan -- aplikácia na posudzovanie kvality ovzdušia na mestskej škále. Je to užívateľsky priateľná webová  
aplikácia, ktorá umožňuje spúšťať a porovnávať rôzne scenáre navrhované v plánoch kvality ovzdušia. Pôvodne bola vyvinutá pre posudzovanie dopadu rôznych zmien v mestskej doprave na kvalitu ovzdušia, napr. nové obchvaty, okruhy, dopravné tunely a nízko emisné zóny. Zahŕňala však aj možnosť pridať (priemyselné) bodové zdroje, a tak simulovať opatrenia zamerané na zníženie týchto emisií. Neskôr sa aplikácia ATMO-plan rozšírila o možnosť hodnotenia opatrení zameraných na emisie z domácností.  

Aplikáciu ATMO-Plan prevádzkuje SHMÚ a pre slovenských užívateľov je dostupná na stránke [](https://atmoplan.shmu.sk). Ako bude opísané v Kapitole 2, každý registrovaný užívaťeľ obdrží svoje prihlasovacie údaje. Táto verzia obsahuje základný scenár s definovanou meteorológiou a emisiami (bodovými, dopravnými a lokálnymi kúreniskami) pre rok 2019 na území Slovenska. Taktiež pozaďové koncentrácie z modelu RIO pre rok 2019 sú zahrnuté. Užívateľ spustí tento základný scenár najprv a potom si môže vytvoriť ľubovolné množstvo scenárov s použitím vlastných emisných vstupov, pričom meteorologické parametre a pozaďové koncentrácie ostávajú rovnaké. Tieto scenáre sa potom porovnávajú so základným scenárom.  

## Hlavné využitie

Aplikácia je typicky , na dizajnovanie nízko emisných zón a  is typically used to support the implementation of air quality actions plans in line with the European air quality ambient directive, designing LEZ's and to evaluate the impact of local clean air action plans. It can also be used as a standard tool to harmonize all air quality assessment impact processes across a region (e.g. environmental permit processes and Environmental Impact Assessments (EIA)).

## Key Uses

The application is typically used to support the implementation of air quality actions plans in line with the European air quality ambient directive, designing LEZ's and to evaluate the impact of local clean air action plans. It can also be used as a standard tool to harmonize all air quality assessment impact processes across a region (e.g. environmental permit processes and Environmental Impact Assessments (EIA)).

## The underlying models

### The FASTRACE traffic emissions model

[FASTRACE](https://vito.be/en/product/fastrace-traffic-emission-model) is a traffic emission model developed by VITO. It is based on COPERT, the software used worldwide to calculate emissions from road transport (developed by emisia commissioned by the European Environment Agency (EEA)). COPERT does not provide a geographical breakdown of the calculated emissions. However high resolution air quality models require spatially disaggregated emissions. Consequently, FASTRACE was built as a COPERT based model, providing spatial allocation of emissions at street level. Below, the basic concepts of FASTRACE are described.

#### Computational kernel

FASTRACE calculates emissions from road transport for all types of vehicles in a fleet (fleet emissions) or for all road segments in a network (network emissions), starting from mobility data and a fleet and based on COPERT emission factors. Emissions are then calculated as
emissions (E) = vehicle kilometers (vkm) \* emission factor (EF)

#### Mobility data, fleet, and network

To calculate emissions, FASTRACE requires mobility data. These can be delivered in different formats: in fleet format and/or network format:

- A fleet consists of the number of vehicles per vehicle type, along with the annual mileage per vehicle type;
- A network describes the number of passing vehicles per road segment and the associated speed.

FASTRACE processes these files to vehicle kilometers (vkm) per vehicle type and road segment, which is the main input for the calculation of emissions.

#### Mapping the vehicle types in the network & fleet files

Vehicle types, road types, pollutants, ... usually differ depending on the data-source. The vehicle types from COPERT are usually not identical to the types of vehicles within the fleet file, or to the aggregation level available within the network. The same applies to types of roads. In COPERT there are three types of roads: 'Highway', 'Urban' and 'Rural' whereas in a network file, the road types are in general known in much greater detail. In order to correctly implement the above computation, FASTRACE provides various mappings. In the application the functionality is provided to allow the user to map the vehicle types in both files. This is shown in section 3.8.2.1. If classifications (road types, vehicle types, …) do not mutually match with each other and/or the COPERT types, mappings will be defined based on (expert) assumptions.

#### Emission Factors

Emission factors (EF) are determined based on the COPERT software. However, whereas COPERT implements complex EF functions, FASTRACE uses a look-up table containing EFs per vehicle type, road type, pollutant and speed. Interpolation of EFs from the look-up table occurs within the FASTRACE model. Configuration of the look-up table is based on a number of (full-blown) region specific COPERT runs and expert opinions. The basic EF are derived from the COPERT output. These basic EFs are supplemented as some vehicle types, in particular types that are to be expected in the near future (and thus are necessary to include in the model with respect to scenario analysis) are not yet included in COPERT. For these vehicle types, EFs are inserted into the look-up table based on expert opinion, literature and specific studies.

### The IFDM dispersion model

The [IFDM](https://vito.be/en/product/ifdm-high-resolution-air-quality-modelling) model calculates the dispersion of pollutants in the atmosphere depending on windspeed/direction & atmospheric stability. IFDM is a bi-Gaussian dispersion model using the Bultynck-Malet dispersion parameters (Bultynck & Malet, 1972) . The figure below illustrates the elements in a Gaussian dispersion model.

A Gaussian model is a simplified analytic solution to the full advection diffusion equations using meteo dependent parameterisations for the steady state plume spreading in the atmosphere. IFDM works with a source-receptor grid in which the concentration contributions from all sources are computed for each receptor grid point.

![IDFM model visual explanation](./images/ifdm-explanation.png)

The IFDM model has been well validated for use in urban environments with several atmospheric environment papers published (W. Lefebvre, Cosemans, & Kegels, 2013; W. Lefebvre, Van Poppel, Maiheu, Janssen, & Dons, 2013; Wouter Lefebvre et al., 2011; Wouter Lefebvre & Vranckx, 2013).
