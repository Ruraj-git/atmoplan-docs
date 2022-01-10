---
title: Emisný súbor bodového zdroja
---



[Príklad vstupného súboru bodového zdroja je uvedený nižšie. Môžete si ho stiahnuť tu.](./files/pointsource.txt)

```
Lon   Lat   Height_m    Diameter_m  Temperature_K   Flowrate_Nm3_s  NOX_kg_h PM10_kg_h    PM25_kg_h    WILDCARD_kg_h    NO/NOX  Name
20.31417	49.05141	20	1	350	47.12	338.447488584	0	0	1	0.95	name1
20.29632	49.06246	5	1	350	47.12	151.590185822	9.88591419319	8.42163908455	1	0.95	name2
```
Ide o  obyčajné textové súbory používajúce tabulátory ako oddeľovače medzi stĺpcami. Takéto súbory sa dajú ľahko otvárať a upravovať napr. v programe MS Excel alebo v textovom editore.

Nasledujúce stĺpce sú povinné:

| Stĺpec         | Popis                                                                                              | Formát | Jednotky |
| :------------- | :-------------------------------------------------------------------------------------------------------- | :----- | :---- |
| Lon            | Zemepisná dĺžka bodového zdroja (desatinné stupne)                                                    | desatinné číslo | °     |
| Lat            |Zemepisná šírka bodového zdroja (desatinné stupne)                                                          | desatinné číslo  | °     |
| Height_m       | Výška komína                                                                                     | desatinné číslo  | m     |
| Diameter_m     | Priemer komína                                                                                    | desatinné číslo | m     |
| Temperature_K  | Výstupná teplota                                                                                       | desatinné číslo | K     |
| Flowrate_Nm3_s | Výstupný tok (v Nm3/s), pri teplote 0°C (273.15 K) a pri atmosferickom tlaku 101,325kPa  (1 atm) | desatinné číslo  | Nm3/s |
| NOX_kg_h       | Emisný tok NOx                                                                                     | desatinné číslo  | kg/h  |
| PM10_kg_h      | Emisný tok  PM10                                                                                    | desatinné číslo  | kg/h  |
| PM25_kg_h      | Emisný tok PM25                                                                                    | desatinné číslo  | kg/h  |
| WILDCARD_kg_h  | Emisný tok pre WILDCARD (inertný plyn, voliteľná znečisťujúca látka, ktorá nevstupuje do chemiských reakcií v atmosfére a je plynného skupensktva, alebo sa po fyzikálnej stránke správa ako plyn                                                            | desatinné číslo  | kg/h  |
| NO/NOx         | Podiel NO v NOx                                                                   | desatinné číslo  | -     |
| Name           | Názov bodového zdroja                                                                            | text | -     |
