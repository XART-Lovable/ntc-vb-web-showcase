# NKT - Statický web (SSG)

## O projektu

Tento projekt je webová prezentace společnosti NKT, převedená na staticky generovaný web (SSG).

**Původní URL**: https://lovable.dev/projects/0efb2394-2d4f-4b2a-bdd2-1463e1dc8ee8

## Vývoj a editace kódu

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/0efb2394-2d4f-4b2a-bdd2-1463e1dc8ee8) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Použité technologie

Projekt je postavený na následujících technologiích:

- React + React Router
- TypeScript
- Vite (buildovací nástroj)
- shadcn-ui (komponenty)
- Tailwind CSS (styling)
- Static Site Generation (SSG)

## Statický build a nasazení

### Vytvoření statického buildu

Pro vytvoření statické verze webu použijte:

```bash
npm run build:ssg
```

Výsledné soubory budou v adresáři `dist/`.

### Testování statického buildu

Pro lokální otestování statického buildu:

```bash
npm run serve:static
```

### Nasazení na produkci

Pro nasazení stačí zkopírovat obsah adresáře `dist/` na hosting.

## Poznámky k SSG implementaci

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

### Browser API a statická generace

Pro kód, který používá browser API (window, document, localStorage, atd.), používejte helpery z `src/lib/browser-utils.ts`:

```tsx
import { isBrowser, safeWindow } from '@/lib/browser-utils';

// Kontrola, zda kód běží v prohlížeči
if (isBrowser) {
  // Zde můžete bezpečně používat browser API
}

// Nebo použití helper funkce pro bezpečné volání browser API
const storedValue = safeWindow(() => window.localStorage.getItem('myKey'), null);
```

### Konfigurace serveru

#### Apache

Pro Apache je součástí buildu soubor `.htaccess`, který zajišťuje správné směrování požadavků.

#### Nginx

Pro Nginx je třeba nastavit konfiguraci:

```nginx
server {
    listen 80;
    server_name domena.cz;
    root /cesta/k/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### SEO optimalizace

Pro zlepšení SEO je vhodné aktualizovat:
- Metadata v souboru `index.html`
- Přidat strukturovaná data pro Google ve formátu JSON-LD
