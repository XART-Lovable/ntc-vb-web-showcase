---
applyTo: '**'
---
Tohle je aplikace která je vygenerována v nástroji Lovable. Jedná se o React one page web - CSR.
Já bych ale z ní potřeboval vybuildovat SSG - statický web.

Už jsem to dříve dělal ale nedokážu zreplikovat co přesně. Ale můžu ti poskytnout informace, protože tam byly nějaké problémy tak ať se to neřeščí znovu.
Ale udělej jinak analýzu a doporuč jak to vygenerovat aby to celé fungovalo.
Chci to pak vystavit na svůj vlastní hosting, kde nebude php, npm atd.

Varianty co se zekoušely:
1. react snap
2. vite ssg
3. pupeteer


Základní problémy

1. Architekturní neshoda
	- Problém: Vite Plugin SSG vyžaduje specifickou strukturu projektu a routing přístup.
	- Konflikt: Vaše aplikace používá standardní React Router, který pracuje jinak než router ve vite-plugin-ssr.
2. Nutnost refaktoringu komponent
	- Problém: Vite Plugin SSG vyžaduje exportování specifických funkcí jako onBeforeRender pro načítání dat.
	- Konflikt: Vaše komponenty používají standardní React hooks a neobsahují tyto specifické exporty.
3. Vstupní bod aplikace
	- Problém: Vite Plugin SSG má vlastní konvence pro vstupní body (_default.page.jsx, renderer/_default.page.client.jsx).
	- Konflikt: Vaše aplikace používá standardní main.jsx/index.jsx jako vstupní bod.

Technické překážky

1. Data fetching - Vite Plugin SSG vyžaduje speciální způsob načítání dat, který není kompatibilní s vaším současným přístupem.
2. Routování - Museli byste kompletně přepsat všechny routovací mechanismy.
3. Hydratace - Způsob hydratace aplikace je fundamentálně odlišný mezi vaší implementací a požadavky Vite Plugin SSG.

Závěr ohledně Vite Plugin SSG

Implementace Vite Plugin SSG by vyžadovala zásadní přepracování aplikace, což je v rozporu s vaším požadavkem zachovat stávající kód. Toto řešení není vhodné bez významných změn v architektuře vaší aplikace.





Analýza použití react-snap pro vaši codebase

Po detailním prozkoumání vaší codebase jsem vyhodnotil potenciální kompatibilitu s nástrojem react-snap.


Potenciální problémy s react-snap ve vaší codebase


1. Hydratace a vstupní bod aplikace

Problém: Váš vstupní bod (pravděpodobně main.jsx nebo index.jsx) používá standardní React metodu ReactDOM.createRoot().render() místo kombinace ReactDOM.hydrate(), kterou react-snap potřebuje.

Řešení: Bude nutné upravit vstupní bod:



2. Dynamické načítání dat

Problém: Pokud vaše komponenty načítají data dynamicky pomocí hooks jako useEffect nebo useState, react-snap nebude schopen zachytit tento obsah při renderování.

Dopad: Stránky budou předrendereovány bez dynamických dat, což může vést k blikání obsahu nebo nesprávnému SEO.


3. Interaktivní prvky závislé na client-side funkčnosti

Problém: Komponenty, které očekávají browser-specific API (např. localStorage, window rozměry) mohou způsobit chyby během pre-renderingu.

Dopad: Takové komponenty by mohly způsobit, že react-snap selže nebo vytvoří nesprávný výstup.


4. Odkazy na dynamické cesty

Problém: React-snap crawluje vaši aplikaci následováním odkazů. Pokud máte dynamické cesty (např. /product/:id), které nejsou přímo odkazované z HTML, nebudou zahrnuty.

Dopad: Některé stránky zůstanou nepředrendereované.

S přihlédnutím k vaší codebase:

1. React-snap bude částečně funkční, ale s omezeními
2. Budete muset upravit vstupní bod aplikace pro hydrataci
3. Dynamický obsah nebude předrenderován správně
4. Můžete narazit na problémy s komponentami, které očekávají browser API
Mé doporučení:

Pokud je SEO kritické, nejjednodušším řešením je spíše zůstat u CSR řešení a zaměřit se na optimalizaci metadat v index.html a implementovat server-side redirects.