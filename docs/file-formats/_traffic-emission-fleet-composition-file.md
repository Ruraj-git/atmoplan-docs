---
title: Súbor zloženia vozového parku pre výpočet emisií z dopravy
---

:::caution Upozornenie
Nahranie súboru zloženia vlastného vozového parku zatiaľ nie je k dispozícii. V tejto chvíli je možné vytvárať projekty, v ktorých je vozový park určený úžívateľom.
:::

[Príklad súboru s vozovým parkom.](./files/traffic-emission-fleet-composition.txt)

Súbory vozového parku sú obyčajné textové súbory, ktoré používajú tabulátor ako oddeľovač medzi stĺpcami. Takéto súbory sa dajú ľahko otvárať a upravovať v programe Excel.

V nástroji je možné stiahnuť šablónu súboru vozového parku v sekcii emisie. Táto šablóna je špecifická pre oblasť záujmu, a preto je potrebné upraviť iba posledné 2 stĺpce v súbore (počet vozidiel a počet najazdených kilometrov).


Súbor vozového parku obsahuje nasledujúce stĺpce: 

| Column     | Description                                                                                  | Format | Units |
| :--------- | :------------------------------------------------------------------------------------------- | :----- | :---- |
| Scenario   | Názov vozového parku  (voliteľné)                                                            | string | n/a   |
| Year       | Rok pre ktoý je platný vozový park (voliteľné)                                               | int    | n/a   |
| Category   | Názvy kategórií vozidiel. Osobné automobily, ťažké nákladné vozidlá...                       | string | n/a   |
| Segment    | Trieda valca / tonová trieda motora (podľa COPERT IV kategórií)                              | string | n/a   |
| Fuel       | Typ paliva                                                                                   | string | n/a   |
| Euro       | Trieda/názov EURO normy                                                                      | string | n/a   |
| Population | Celkový počet vozidiel pre daný typ vozidla                                                  | float  | n/a   |
| Mileage    | Priemerný celkový ročný počet najazdených kilometrov (v km) pre jednotlivé typy vozidiel     | float  | km    |

Vezmite prosím na vedomie, že:

- Celkový vozokm najazdený každým typom vozidla je daný súčinom počtu vozidiel a najazdených kilometrov.
- Pri aplikovaní vozového parku na počet vozidiel v cestnej sieti sa používa iba relatívne rozdelenie najazdených kilometrov podľa kategórií vozidiel, aj keď celkový počet vozidiel (v absolútnych číslach) je uvedený podľa typu v súbore zloženia vozového parku. .

