---
title: Chemický model 
---

V modeli IFDM je implementovaný jednoduchý modul chémie ozónu. Tento modul umožňuje výpočet koncentrácie pre NOx, NO2 a NO. 
Chemická rovnováha medzi prvkami je reprezentovaná jedinou rovnovážnou rovnicou s dvomi reakciami:
(IFDM-ozónová chémia je založená na Hertel and Berkowicz (1989) and Berkowicz et al. (1997) )

NO + O3 →  NO2+ O2

NO2 + O2 + hv → NO + O* + O2  → NO + O3

pričom reakcia má rovnovážnu konštantu J a druhá prebieha veľmi rýchlo. Výsledkom je, že obe tieto rovnice možno zhrnúť nasledovne:

NO + O3  ↔  NO2 + O2

Rovnovážna konštanta, rjk sa dá napísať ako:

rjk =  ( [NO] [O3]) / ( [NO2] )

v tomto prípade sa koncentrácia kyslíku vo vzduchu považuje za konštantnú.

Aby bolo možné určiť výsledné koncentrácie f na základe počiatočných koncentrácií [NO]i, [NO2]i, [O3]i je potrebné napísať dve rovnice:

[NOx]i ≡ [NO2]i + [NO]i =  [NO2]f +[NO]f  ≡ [NOx]f
a
[Ox]i ≡  [NO2]i + [O3]i = [NO2]f + [O3]f  ≡ [Ox]f

reprezentujúce zachovanie hmotnosti pre NOx a pre Ox.

Pomocou niekoľkých ďalších výpočtov je možné odvodiť nasledujúcu rovnicu:

$[NO2]f^2$ - ( rjk + [Ox]i + [NOx]i) * [NO2]f + ( [Ox]i + [NOx]i ) = 0

Odkiaľ je možné určiť koncentrácie [NO]f, [NO2]f a [O3]f . Konštanta rjk závisí od teploty a UV žiarenia resp. výšky/polohy slnka.
