---
title: Súbor s pozaďovými koncentráciami
---

:::caution Upozornenie 
Nahranie vlastného súboru s pozaďovými koncentráciami zatiaľ nie je k dispozícii. V tejto chvíli je možné použiť iba preddefinované pozadie.
:::

[Príklad súboru s pozaďovými koncentráciami](./files/background-concentration.txt)

Aplikácia ATMO-Plan pracuje s hodinovými údajmi. Súbory s pozaďovými koncentráciami sú obyčajné textové súbory, ktoré ako oddeľovače medzi stĺpcami používajú `<tab>`. Takéto súbory sa dajú ľahko otvárať a upravovať v programe Excel. Vyžaduje sa celý rok údajov.

Nižšie uvádzame tabuľku vysvetľujúcu polia v dátovom súbore. Upozorňujeme, že v súbore s údajmi musia byť prítomné všetky znečisťujúce látky.


| Column       | Description                                                                                                 | Format | Units |
| :----------- | :---------------------------------------------------------------------------------------------------------- | :----- | :---- |
| year         | Rok           (4 čísla )                                                                                    | int    |       |
| month        | Mesiac        (Január = 1, December = 12)                                                                   | Int    |       |
| day          | Deň v mesiaci (hodnota medzi 1 and 31)                                                                      | int    |       |
| hour         | Hodina dňa ( 0 až 23). Hodina je v miestnom čase, konzistentná s meteo dátami                               | int    |       |
| O3 (ug/m3)   | Pozaďové koncentrácie pre    O3                                                                             | float  | µg/m3 |
| NOX (ug/m3)  | Pozaďové koncentrácie pre    NOX total (ako ekvivalent NO2 )                                                | float  | µg/m3 |
| NO2 (ug/m3)  | Pozaďové koncentrácie pre    NO2                                                                            | float  | µg/m3 |
| PM25 (ug/m3) | Pozaďové koncentrácie pre    PM2.5                                                                          | float  | µg/m3 |
| PM10 (ug/m3) | Pozaďové koncentrácie pre    PM10                                                                           | float  | µg/m3 |
