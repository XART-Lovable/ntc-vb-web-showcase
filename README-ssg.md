# NKT - Statický web

Tento projekt je statický web vytvořený pomocí React a react-snap.

## Vývoj

Pro spuštění vývojového serveru:

```bash
npm run dev
```

## Build

Pro vytvoření statické verze webu:

```bash
npm run build:ssg
```

Tento příkaz provede standardní Vite build a následně použije react-snap pro předrenderování všech stránek do statických HTML souborů.

## Testování buildu

Pro otestování statického buildu můžete použít:

```bash
npm run serve:static
```

Výsledné soubory se nachází v adresáři `dist/`.

## Deploy

Pro nasazení webu stačí zkopírovat obsah adresáře `dist/` na váš hosting.

### Pokyny pro různé typy hostingů:

#### Apache

Vytvořte soubor `.htaccess` v kořenovém adresáři s následujícím obsahem:

```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

#### Nginx

```
location / {
  try_files $uri $uri/ /index.html;
}
```

## Řešení problémů

### Problémy s dynamickým obsahem

Pokud některé části webu vyžadují JavaScript pro správné zobrazení (např. dynamické načítání dat), mohou se po prvotním načtení stránky "bliknout" nebo změnit. To je očekávané chování při hydrataci staticky předrenderovaného obsahu.

### Browser API

Pro komponenty, které používají browser API (window, document, localStorage, atd.), používejte pomůcky z `src/lib/browser-utils.ts`:

```tsx
import { isBrowser, safeWindow } from '@/lib/browser-utils';

// Kontrola, zda kód běží v prohlížeči
if (isBrowser) {
  // Zde můžete bezpečně používat browser API
}

// Nebo použití helper funkce pro bezpečné volání browser API
const storedValue = safeWindow(() => window.localStorage.getItem('myKey'), null);
```