---
title: Často kladené otázky 
sidebar_position: 4
---

**Aký je kontaktný email pre ATMOPLAN?** <br/>
atmolpan@shmu.sk

**Koľko trvá výpočet projektu?** <br/>
Pre bežné domény (veľkosť obce) je dĺžka výpočtu jednotky až desiatky minút. Počet scenárov násobne predlžuje výpočtový čas.

**Po spustení výpočtu mi neprišiel žiaden email.** <br/>
Hneď napíšte na atmoplan@shmu.sk

**Posledný email obsahuje Status: Start IFDM a po ňom neprišiel žiaden ďalší.** <br/>
Je možné, že je aplikácia vyťažená ostatnými používateľmi (veľa malých výpočtov alebo náročnejšie výpočty). Výpočet nového projektu bol zaradený do poradovníka. 
Tento stav by sa mal vyriešiť za niekoľko hodín.
Pokiaľ ani potom nedorazil email napíšte na atmoplan@shmu.sk

**Výpočet projektu zlyhal alebo je v stave výpočet beží.** <br/>
Pokiaľ nenastala konfiguračná chyba, ktorú treba opraviť a projekt ide opäť spustiť, tak ho treba spustiť znova.
Pokiaľ nie je možné projekt spustiť napíšte na atmoplan@shmu.sk a uveďte číslo projektu (to nájdete vo web linku po otvorení projektu napr. https://atmoplan.shmu.sk/cases/1130)
Projekt môžeme resetovať alebo vymazať.

**V akej výške sú počítané koncentrácie znečisťujúcich látok?** <br/>
2 metre nad povrchom.

**Akú výpočtovú projekciu používa ATMOPLAN?** <br/>
LAEA Europe - EPSG:3035
Pre praktickosť sú vstupy a aj výpočtová doména zadávané v lat, lon a preto sa výpočtová doména mierni líši od zadanej.

**Pri akých podmienkach treba určovať prietok vzduchu?** <br/>
ATMOPLAN pracuje s prietokom (v Nm3/s), pri teplote 0°C (273.15 K) a pri atmosférickom tlaku 101,325kPa (1 atm).
Pri výpočte treba zohľadniť teplotu spalín:  V [Nm3/s]  = V [m3/s]  T[273,15K] / T[teplota spalín K] ; <br/>
V - prietok v metroch kubických za sekundu, T - teplota v kelvinoch <br/>
Zadania často uvádzajú hodnoty rýchlosti spalín. Tie treba prepočítať na prietok cez V = v  Pi  d  d / 4  <br/>
V - prietok, d - priemer komína v metroch, v - výstupná rýchlosť spalín v metroch za sekundu , Pi - 3,14...
