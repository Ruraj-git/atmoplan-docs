---
title: Lokálne kúreniská
sidebar_position: 6
---

## Opatrenia pre lokálne kúreniská

Nástroj ATMO-Plan umožňuje definovanie opatrení pre zóny s lokálnymi kúreniskami. 

Prejdite na stránku s podrobnosťami projektu, otvorte scenár a kliknite na „Obmedzenia pre lokálne kúreniská“. Zoznam všetkých vytvorených zón pre scenár je zobrazený vľavo.

![lk overview](./images/lk_overview_sk.png)

Kliknutím na názov zóny sa na mape vykreslí modrý polygón znázorňujúci ohraničenie.

Na lište vpravo sa zobrazený názov zóny.

## Vytvorenie zóny s opatreniami pre lokálne kúreniská

:::caution Upozornenie
V základnom scenári nie je povolené vytvárať zóny s opatreniami pre lokálne kúreniská.
:::

:::caution Upozornenie
Zónu nemožno vytvoriť počas výpočtu alebo po (úspešnom) dokončení výpočtu. 
:::

Po kliknutí na „Pridať zónu s opatreniami“ môže užívateľ nakresliť polygón zóny na mapu. Kliknite na mapu a nakreslite rohy polygónu. Priblíženie/oddialenie dosiahnete pomocou ikon v pravom dolnom rohu mapy alebo pomocou kolieska myši. Polygón uzatvoríte kliknutím na prvý roh. Umiestnenie polygónu je možné zmeniť kliknutím na „Prekresliť“ alebo „Editovať“ napravo. Po kliknutí na „Prekresliť“ nakreslený polygón zmizne a môžete začať kresliť. Keď kliknete na „Editovať“, môžete zmeniť tvar polygónu presúvaním rohov pomocou myši.

Vpravo je možné zadať názov zóny. Po kliknutí na „Uložiť“ sa zóna pridá do zoznamu zón vľavo.

Na dokončenie definície zóny je potrebné definovať opatrenia pre zónu. Toto sa vykonáva v konfiguračnom nástroji, ktorý sa otvorí po kliknutí na „Správa opatrení pre zóny“. 

![zone restrictions](./images/lk_opatrenia_sk.png)

Nástroj v hornej časti umožňuje nastavení globálnych opatrení pre celú zónu - Opatrenia (celá zóna), pričom 100 % predstavuje zónu bez opatrení. 
Toto nastavanie redukuje všetky emisie vzťahuje sa napríklad na zateplenie domov v celej oblasti, kde dôjde k celkovej redukcií potrebného vykurovania a teda aj produkovaných emisií.
Nástroj obsahuje aj nastavenie špecifických opatrení pre vybrané kategórie. 

Nástroj umožňuje aj filtrovanie podľa kategórií kliknutím na obrátenú pyramídu vedľa kategórie.

![zone filter](./images/lk_filter_sk.png)

Po dokončení konfigurácie zóny kliknúť na „Uložiť“.

K lepšej orientácii, ako nastavovať špecifické opatrenia sa využíva excel súbor s názvom emisie_prepocet_export.xlsm 
(<a href="https://www.shmu.sk/File/oko/riadenie_kvality_ovzdusia/atmoplan/emisie_prepocet_export.zip">link na stiahnutie</a> - v prípade nefunkčnosti linku môžete o súbor požiadať mailom na ovzdusie@shmu.sk). 
Tento súbor obsahuje modifikovateľnú záložku Obmedzenia pre kúreniská a uzamknutý prehľad použitých výpočtov a emisných faktorov v záložke Emisné faktory. Užívateľ si môže nastaviť požadovanú zmenu zariadenia a paliva zadaním percent do príslušnej bunky. Riadky reprezentujú typ zariadenia a paliva, ktoré chce užívateľ zmeniť a stĺpec reprezentuje cieľ zmeny. ( Napr. Zmena Automatických kotlov využívajúce pelety (riadok 10) na bezemisné zariadenie - solárne panely (stĺpec 5) sa robí zadaním percentuálnej zmeny na bunke ich prieniku. Maximálna povolená zmena je 100 % a tá je indikovaná ako súčet v stĺpci kontrola. Po nastavení všetkých požadovaných hodnôt sa stlačením tlačidla EXPORT vygeneruje .csv súbor, ktorý slúži ako vstup pre ATMOPLAN. Excel pri tom vyzve užívateľa pre zadanie cieľového priečinka a indikáciu kraja, pre ktorý sa zmena plánuje. (Emisné faktory sa pre jednotlivé kraje mierne líšia). Nahrávanie .csv sa robí cez položku NAHRAŤ SÚBOR v rozhraní ATMOPLAN v časti Obmedzenia pre lokálne kúreniská. 

![](./images/lk_excel.png)

## Aktualizácia zóny s opatreniami

:::caution Upozornenie
V základnom scenári nie je povolené vytvárať/aktualizovať zóny s opatreniami.
:::

:::caution Upozornenie
Zónu nie je možné aktualizovať počas výpočtu alebo po (úspešnom) dokončení výpočtu. Vlastnosti zóny sa vtedy môžu len zobraziť.
:::

Prejdite na stránku s podrobnosťami projektu, otvorte scenár a kliknite na „Opatrenia pre lokálne kúreniská“. Zoznam všetkých zón pre scenár je zobrazený vľavo. 
Názov zóny je možné aktualizovať vpravo a opatrenia pre zónu možno aktualizovať podľa postupu vysvetlenom v predchádzajúcej časti.

## Odstránenie zóny s opatreniami


:::caution Upozornenie
Zónu s opatreniami nie je možné odstrániť počas výpočtu alebo po (úspešnom) dokončení výpočtu. Tlačidlo „Odstrániť“ je vtedy skryté.
:::

Prejdite na stránku s podrobnosťami projektu, otvorte scenár a kliknite na „Opatrenia pre lokálne kúreniská“. Zoznam všetkých zón pre scenár je zobrazený vľavo. 
Zónu je možné odstrániť umiestnením kurzora myši na zónu v zozname vľavo a kliknutím na ikonu vymazania. Po kliknutí sa zobrazí sa dialógové okno s potvrdením, ktoré obsahuje tlačidlá „OK“ a „Zrušiť“.

![lk delete](./images/lk_odstranit_sk.png)


