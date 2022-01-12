---
title: Súbor s pozaďovými koncentráciami
---

:::caution Upozornenie 
Nahranie vlastného súboru s pozaďovými koncentráciami zatiaľ nie je k dispozícii. V tejto chvíli je možné použiť iba preddefinované pozadie.
:::

[This is an example of a background concentration data file.](./files/background-concentration.txt)

Aplikácia ATMO-Plan pracuje s hodinovými údajmi. Súbory s pozaďovými koncentráciami sú obyčajné textové súbory, ktoré ako oddeľovače medzi stĺpcami používajú `<tab>`. Takéto súbory sa dajú ľahko otvárať a upravovať v programe Excel. Vyžaduje sa celý rok údajov.

Nižšie uvádzame tabuľku vysvetľujúcu polia v dátovom súbore. Upozorňujeme, že v súbore s údajmi musia byť prítomné všetky znečisťujúce látky.


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
