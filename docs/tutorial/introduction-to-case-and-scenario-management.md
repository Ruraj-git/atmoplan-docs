---
title: Úvod do spravovania prípadov a scenárov
sidebar_position: 1.5
slug: spravovanie prípadov a scenárov 
---

:::tip Dostupné v každej verzii
:::

Na úvod si vysvetlíme pojmy projekt a scenár. Keďže sa jedná o kľúčové koncepty v aplikácii ATMO-Plan, na chvíľu sa pri nich zastavíme. **ATMO-Plan projekt** je hierarchicky najvyšší objekt v plánovacom nástroji. Zvyčajne zodpovedá konkrétnej štúdii alebo projektu, ktorý chce užívateľ modelovať. Projekt pozostáva z viacerých scenárov, vrátane scenára označeného ako základný scenár. Táto štruktúra zodpovedá spôsobu, akým sa zvyčajne vykonávajú štúdie vplyvu na kvalitu ovzdušia: vyberie sa referenčný alebo základný stav, s ktorým sa porovnávajú rôzne stratégie alebo prognózy.


:::caution Zapamätajte si, pretože takáto štruktúra má množstvo dôsledkov:

- V tomto nástroji je použitý IFDM Gaussovský disperzný model, ktorý je založený na princípe zdroja a receptorov. Za tým účelom je definovaná výpočtová mriežka na vyhodnotenie príspevkov každého zdroja.Táto výpočtová mriežka je spoločná pre všetky scenáre v rámci projektu. Generuje sa na úrovni projektu pomocou informácií o umiestnení zdrojov pre všetky rôzne scenáre projektu. Spoločná zobrazovacia mriežka zabraňuje niektorým interpolačným artefaktom pri vytváraní máp rozdielov medzi základným a iným scenárom.
- Skutočnosť, že mriežka je spoločná pre všetky scenáre, znamená, že akonáhle je projekt vypočítaný, nie je možné k nemu pridať žiadne ďalšie scenáre, pretože by to ovplyvnilo výpočet mriežky. Užívateľ by  mal preto najprv nahrať a pripraviť všetky scenáre v rámci projektu a až potom spustiť výpočet.
:::
