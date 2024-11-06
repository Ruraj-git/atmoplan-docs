---
title: Spracovanie dát v QGIS
sidebar_position: 6
---

## Príprava QGIS na prácu:
1.	Nainštalovať aplikáciu (	qgis.org/download)
2.	Kliknúť v hornej lište na Zásuvné moduly -> Správa zásuvných modulov -> Nenainštalované
3.	Vyhľadať modul QuickOSM (tento modul poskytne podkladové OSM mapy) a QuickMapServices (poslytuje veľké množstvo podkladových máp rôzneho typu a pôvodu)
4.	Zakliknúť moduly a nechať ich nainštalovať
5.	Moduly sap o inštalácii objavia v menu Web na hornej lište 
## Základné operácie v QGIS.
Tabuľka nižšie zobrazuje typy dát ktoré je možné stiahnuť z aplikácie ATMOPLAN. Okrem toho sa v stiahnutých dátach nachádzajú súbory so súradnicami modelovaného bodového zdroja (pointsource-nazov.txt) a bodov záujmu (poi.txt). V nasledujúcom texte si popíšeme, ako zobrazíme rastrový súbor .tif  a textové súbory so súradnicami zdroja a bodov záujmu.  

| Scenáre / znečisťujúce látky | Typ dát |	Formát |
| Všetky scenáre / všetky ZL |	Hodnoty koncentrácií v jednotlivých výpočtových bodoch (neinterpolované): priemerná ročná koncentrácia, počet prekročení krátkodobej limitnej hodnoty, medián, max. hodinová a max. denná koncentrácia, percentil prislúchajúci počtu prekročení krátkodobej limitnej hodnoty |	outputIndicatorsZL_all_3035_ifdm.csv |
| Všetky okrem základného / základné ZL | 	Hodnoty rozdielov koncentrácií medzi scenárom a základným scenárom v jednotlivých výpočtových bodoch (neinterpolované): priemerná ročná koncentrácia, počet prekročení krátkodobej limitnej hodnoty, medián, max. hodinová a max. denná koncentrácia, percentil prislúchajúci počtu prekročení krátkodobej limitnej hodnoty |	outputIndicatorsZL_all_3035_diff_ifdm.csv |
| Všetky okrem základného / základné ZL |	Percentuálne hodnoty rozdielov koncentrácií medzi scenárom a základným scenárom v jednotlivých výpočtových bodoch (neinterpolované): priemerná ročná koncentrácia, počet prekročení krátkodobej limitnej hodnoty, medián, max. hodinová a max. denná koncentrácia, percentil prislúchajúci počtu prekročení krátkodobej limitnej hodnoty |	outputIndicatorsZL_all_3035_rel_diff_ifdm.csv |
| Všetky scenáre / všetky ZL | Časový rad priemerných hodinových hodnôt v špeciálnych bodoch záujmu |	outputTimeSeriesHourlyZL_3035.csv |
| Všetky scenáre / všetky ZL | Časový rad priemerných denných hodnôt v špeciálnych bodoch záujmu |	outputTimeSeriesDailyZL_3035.csv |
| Všetky scenáre / všetky ZL | Interpolovaná mapa priemerných ročných koncentrácií | 	outputIndicatorsZL_MeanConcentration_3035.tif |
| Všetky okrem základného / základné ZL |	Interpolovaná mapa rozdielov priemerných ročných koncentrácií medzi scenárom a základným scenárom |	outputIndicatorsZL_MeanConcentration_3035_dif.tif |
| Všetky okrem základného / základné ZL |	Interpolovaná mapa percentuálnych rozdielov priemerných ročných koncentrácií medzi scenárom a základným scenárom |	outputIndicatorsZL_MeanConcentration_3035_rel_dif.tif |
| Všetky scenáre / všetky ZL |	Interpolovaná mapa mediánov koncentrácií |	outputIndicatorsZL_P50_hourly_3035.tif |
| Všetky scenáre / všetky ZL |	Interpolovaná mapa percentilov zodpovedajúcich počtu prekročení krátkodobej limitnej hodnoty |	outputIndicatorsPM10_P90.4_daily_3035.tif |

<i> Tab. 1 Zoznam a popis súborov v balíku .zip stiahnutom z aplikácie ATMOPLAN. Červenou farbou sú vyznačené parametre ktoré je potrebné spracovať pre posudok. (ZL – znečisťujúca látka: PM10, PM25, NO2, WILDCARD) </i>

## Import .tif súboru a jeho zobrazenie na mape
1.	Otvoríme si nový projekt v QGISe. 
2.	Klikneme na Správca zdrojov dát.
3.	Vľavo Klikneme na Raster. Vyberieme adresár so súbormi projektu. Zvolíme outputIndicatorsPM10_MeanConcentration_3035_diff_ifdm.tif. (Ide o súbor obsahujúci príspevok bodového zdroja). Klikneme Pridať a následne Zatvoriť. V objavenom okne potvrdíme transformáciu. 
4.	Máme zobrazenú importovanú vrstvu v šedej škále. My ale chceme škálu farebnú, s podkladovou mapou a priesvitnú, aby mapu bolo vidno. 
5.	Dvakrát klikneme na názov vrstvy vľavo v zozname. Dostaneme sa do okna vlastností vrstvy. 
•	Zvolíme najprv záložku Symbológia: Typ vykresľovania: Jedno pásmo – pseudofarby. Objaví sa farebná škála. Kliknutím na šípku môžeme vybrať inú škálu, a môžeme aj zmeniť poradie farieb na opačné. Zvolíme napr. Reds. 
•	Zvolíme záložku Priehľadnosť, a na slideri zvolíme požadované percento nepriehľadnosti (cca 70%)
•	Potvrdíme všetky výbery OK, okno Vlastnosti vrstvy sa zruší.
6.	Nastavíme podkladovú mapu: Na hornej lište Zvolíme Web – QuickMapServices – OSM – OSM Standard. 

## Import súradníc zdroja z textového súboru a jeho zobrazenie aj s názvom
1.	Klikneme znovu na Správca zdrojov dát
2.	Klikneme na typ zdroja dát: Text s oddeľovačmi. Zvolíme z adresára atmoplan výstupov súbor pointsource-nazovscenara.txt. Tento súbor obsahuje počnúc piatym riadkom tabuľku so súradnicami a parametrami zdroja. 
•	Zvolíme Formát súboru: Vlastné oddeľovače – Tab
•	Zvolíme Počet riadkov záhlavia k vypusteniu
•	V definícii geometrie zvolíme  Súradnice bodu X pole: X a Y pole: Y. SRS geometriu zvolíme EPSG:3035
•	Zvolíme Pridať a Zatvoriť
3.	Zobrazil sa nám bod zdroja. Dvojklikom na vrstvu zobrazíme jej vlastnosti. 
•	V Symbológii môžeme zmeniť symbol, jeho veľkosť a farbu. 
•	V Popiskoch môžeme zvoliť Jednotlivé popisky, Hodnota: Name. Potvrdením sa nám zobrazí na mape názov zdroja. 

## Import bodov záujmu z textového súboru a ich zobrazenie
Hoci existuje súbor poi.txt obsahujúci súradnice a názvy bodov záujmu, na import do QGIS je vhodnejší hociktorý .csv súbor obsahujúci časové rady. Tento súbor obsahuje na začiatku tabuľku so súradnicami zdrojov. 
1.	Otvoríme správcu zdrojov dát
2.	Klikneme na typ zdroja dát: Text s oddeľovačmi. Zvolíme z adresára atmoplan výstupov hociktorý súbor TimeSeries v hociktorom scenári
•	Zvolíme Formát: CSV, Počet riadkov záhlavia: 0, X pole: X, Y pole: Y, geometria EPSG:3035
•	Zvolíme Pridať a Zatvoriť
3.	Zobrazili sa nám body záujmu. Podobne ako v predchádzajúcom prípade importu zdroja, pridáme popisky.

## Export obrázka
V aplikácii máme zobrazenú mapu podobne ako nižšie na obrázku. Môžeme ešte vložiť mriežku pomocou  Zobraziť – Dekorácie – Mierka. 
Na výtváranie profesionálnych obrázkov obsahujúcich mierku, škálu a ďalšie mapové prvky slúži Správca rozloženia. Na jednoduchý export obrázka postupujeme nasledovne:  
Myšou si mapu vhodne zväčšime a výsledok môžeme jednoducho exportovať vo formáte .png alebo .jpg: 
Klikneme na Projekt – Import/Export – Exportovať mapu ako obrázok. Zvolíme vhodné rozlíšenie a uložíme. 
Farebnú škálu buď skopírujeme zo zoznamu vrstiev vľavo, alebo ju vytvoríme v Správcovi rozloženia a vyexportujeme ako obrázok. 
Správca rozloženia je pomerne zložitý nástroj, v prípade, keď prestane fungovať intuícia, je vhodné použiť manuál QGIS https://docs.qgis.org/3.34/en/docs/user_manual/index.html
Možno sa zíde aj Láskavý úvod do tvorby máp, dostupný v češtine (k staršej verzii QGIS). https://docs.qgis.org/2.18/cs/docs/gentle_gis_introduction/index.html 




