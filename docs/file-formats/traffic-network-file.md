---
title: Súbor cestnej siete
---

:::tip Available in each deployment
Network files can be uploaded in each deployment.
:::

[Príklad súboru cestnej siete je uvedený nižšie a môžete si ho stiahnuť tu.](./files/network.txt)

```
ID	Lon1	Lat1	Lon2	Lat2	BUS	CAR	HDV	LDV	roadType	speed (km/h)	height (m)
1	20.32368	49.04619	20.34719	49.06852	17263.0	6000000.0	5000000.0	4000000.0	H	100	0.0
```

Súbory dopravnej siete sú obyčajné textové súbory používajúce tabulátory ako oddeľovače medzi stĺpcami. Takéto súbory sa dajú ľahko otvárať a upravovať napr. v programe MS Excel alebo v textovom editore. 

Súbor cestnej siete obsahuje tieto stĺpce:

| Stĺpec    | Popis                                                                                                                                                                                                                                                                                                                                                                                | Formát | Jednotky |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ----- |
| ID        | Jednoznačný identifikátor pre segment cesty                                                                                                                                                                                                                                                                                                                                      | celé číslo    | n/a   |
| Lon1      |Zemepisná dĺžka (WGS84) počiatočného bodu segmentu                                                                                                                                                                                                                                                                                                                                                | desatinné číslo  | n/a   |
| Lat1      | Zemepisná šírka (WGS84) počiatočného bodu segmentu                                                                                                                                                                                                                                                                                                                                                | desatinné číslo  | n/a   |
| Lon2      | Zemepisná dĺžka (WGS84) koncového bodu segmentu                                                                                                                                                                                                                                                                                                                                                   | desatinné číslo  | n/a   |
| Lat2      | Zemepisná šírka (WGS84) koncového bodu segmentu                                                                                                                                                                                                                                                                                                                                                     | desatinné číslo  | n/a   |
| <Cat1\>   | Intenzita dopravy (počet prebehov za rok) pre vozidlo kategórie  'cat1' na tomto segmente cesty                                                                                                                                                                                                                                                                                                                              | desatinné číslo  | n/a   |
| <Cat2\>   | Intenzita dopravy (počet prebehov za rok) pre vozidlo kategórie 'cat2' na tomto segmente cesty                                                                                                                                                                                                                                                                                                                             | desatinné číslo  | n/a   |
| ...       | ...                                                                                                                                                                                                                                                                                                                                                                                        | ...    | ...   |
| Typ cesty | U (mestská - Urban ), R (regionálna (medzimestská) - Rural), H (diaľnica - Highway). Označenia typu cesty. Slúži jednak na výber jazdných podmienok v emisnom  modeli FASTRACE, okrem toho sa v rozptylovom modeli IFDM sa na základe tohoto parametra určí denný časový profil (vývoj počtu prebehov počas dňa).
  | text   | n/a   |
| Speed     | Priemerná rýchlosť premávky na danom cestnom segmente (medzi 1 a 130)                                                                                                                                                                                                                                                                                                                              | desatinné číslo | km/h  |
| Height    | Výška nad terénom (medzi 0 a 150, obvykle 0 m)                                                                                                                                                                                                                                                                                                                                     | desatinné číslo  | m     |


Dôležité poznámky:

- Súbor siete očakáva jednotlivé priame úsečky definované súradnicami zemepisnej šírky a dĺžky ich koncových bodov. Poznamenajme, že pre výpočet v FASTRACE je dôležitá iba dĺžka segmentu; položky lat/lon sa jednoducho skopírujú do výstupného súboru.
- Po súradniciach segmentu cesty je možné zadať **ľubovoľný počet typov vozidiel v sieti**. Názvy stĺpcov zodpovedajú typom vozidiel dostupným z dopravného modelu alebo zo sčítania dopravy. Tie nemusia byť nevyhnutne rovnaké ako kategórie vozidiel v súbore zloženia flotily. Používateľ dostane možnosť zadefinovať mapovanie medzi kategóriami vozidiel flotily a typmi vozidiel v cestnej sieti.


