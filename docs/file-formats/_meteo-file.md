---
title: Súbor s meteorológiou
---

:::caution Upozornenie
Nahranie súboru s meteorológiou nie je v aktuálnej verzií dostupné. Iba predvolené dáta môžu byť použité.
:::

[Príklad súboru s meteorológiou ](./files/meteo.txt)

Aplikácia ATMO-Plan pracuje s hodinovými údajmi. Súbory sú obyčajné textové súbory používajúce tabulátory ako oddeľovače medzi stĺpcami. Takéto súbory sa dajú ľahko otvárať a upravovať v programe Excel. Vyžaduje sa celý rok údajov.

Nižšie uvádzame tabuľku vysvetľujúcu polia v súbore meteo. Súradnice zemepisnej šírky a dĺžky sú potrebné na odhad slnečného žiarenia.

| Column                  | Description                                                                                                                                                                                     | Format | Units |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----- | :---- |
| year                    | Rok (4 čísla)                                                                                                                                                                                    | int    |       |
| month                   | Mesiac (Január = 1, December = 12)                                                                                                                                                              | Int    |       |
| day                     | Deň v mesiaci ( 1 až 31)                                                                                                                                                                        | int    |       |
| hour                    | Hodina dňa ( 0 až 23). Hodina je udaná v miestnom čase konzistentná s pozaďovými koncentráciami.                                                                                                | int    |       |
| wind_speed (m/s)        | Rýchlosť vetra                                                                                                                                                                                  | float  | m/s   |
| wind_direction (degree) | Smer vetra (0° = Sever, 90° = Východ, 180° = Juh, 270° = Západ)                                                                                                                                  | int    | °     |
| temperature (C)         | Teplota vzduch v 2 m                                                                                                                                                                            | float  | °C    |
| height (m)              | Výška meteorologických pozorovaní                                                                                                                                                                | float  | m     |
| lat                     | Zemepisná šírka meteorologických pozorovaní                                                                                                                                                      | float  | °     |
| lon                     | Zemepisná dĺžka meteorologických pozorovaní                                                                                                                                                      | float  | °     |
| time_zone (h)           |Posun časového pásma w.r.t. UTC (0 = UTC, +1 = o hodinu neskôr (na východ)).                                                                                                                      | int    | hour  |
