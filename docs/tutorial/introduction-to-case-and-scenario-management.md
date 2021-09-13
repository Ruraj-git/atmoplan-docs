---
title: Introduction to case and scenario management
sidebar_position: 1.5
slug: case-and-scenario-management
---

:::tip Available in each deployment
:::

Let's start with explaining the concept of cases and scenarios. These concepts are central to the ATMO-Plan application and deserve a little attention. An **ATMO-Plan case** is the top-level entity for the planning tool. This typically corresponds to a particular study or project the user wants to conduct. A case consists of a list of different scenarios, including one scenario tagged as the baseline. This structure is chosen as it corresponds to the way in which air quality impact studies are usually conducted: a reference or baseline is chosen against which different policy options or prognoses are compared.

:::caution Keep this in mind as this structure has a number of consequences:

- The underlying IFDM Gaussian dispersion model used in the tool is source-receptor based. Hence a calculation grid is defined to evaluate the contributions of each source. This calculation grid is common for all the scenarios within the case. It is generated at case level, using information about the location of the sources for all the different scenarios in the case. A common visualization grid avoids some interpolation artefacts when producing difference maps between the scenarios and the baseline.
- The fact that the grid is common means that once a case is calculated, no extra scenarios can be added to it, as this would impact the grid calculation. The user should therefore upload and prepare all scenarios within a case first and then start the calculation.
  :::
