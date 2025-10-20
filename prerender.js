// prerender.js - Server-side rendering pro statickou generaci
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, 'dist');

// Simulace browser prostředí pro React
function setupBrowserEnvironment() {
  const dom = new JSDOM('<!DOCTYPE html><html><body><div id="root"></div></body></html>', {
    url: 'http://localhost/',
    pretendToBeVisual: true,
    resources: 'usable'
  });

  global.window = dom.window;
  global.document = dom.window.document;
  global.navigator = dom.window.navigator;
  global.HTMLElement = dom.window.HTMLElement;
  global.HTMLAnchorElement = dom.window.HTMLAnchorElement;
  global.HTMLButtonElement = dom.window.HTMLButtonElement;
  global.HTMLInputElement = dom.window.HTMLInputElement;
  global.Event = dom.window.Event;
  global.MouseEvent = dom.window.MouseEvent;
  global.KeyboardEvent = dom.window.KeyboardEvent;
}

async function prerender() {
  console.log('🔧 Spouštím SSR předrenderování...');

  try {
    // Zkontrolujeme, zda existuje dist adresář
    if (!fs.existsSync(distPath)) {
      console.error('❌ Adresář dist neexistuje. Nejprve spusťte vite build.');
      process.exit(1);
    }

    // Načteme původní index.html
    const indexPath = path.join(distPath, 'index.html');
    const originalHtml = fs.readFileSync(indexPath, 'utf8');

    // Nastavíme browser prostředí
    setupBrowserEnvironment();

    try {
      // Dynamický import React komponenty
      const { default: React } = await import('react');
      const { renderToString } = await import('react-dom/server');
      
      // Import naší App komponenty
      const { default: App } = await import('./src/App.tsx');

      // Renderování React aplikace na server
      const appHtml = renderToString(React.createElement(App));

      // Vložení renderované aplikace do HTML
      const prerenderedHtml = originalHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // Uložíme předrenderovaný HTML
      fs.writeFileSync(indexPath, prerenderedHtml);

      console.log('✅ SSR předrenderování dokončeno!');
      console.log('📄 Vygenerován soubor index.html s plným obsahem aplikace');

    } catch (ssrError) {
      console.warn('⚠️  SSR selhalo, použiji fallback řešení:', ssrError.message);
      
      // Fallback - jednoduché předrenderování
      const fallbackHtml = originalHtml.replace(
        '<div id="root"></div>',
        `<div id="root">
          <div style="font-family: Inter, system-ui, sans-serif; padding: 20px; text-align: center;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h1 style="color: #1a1a1a; margin-bottom: 1rem;">NTC s.r.o.</h1>
              <p style="color: #666; margin-bottom: 2rem;">Skladová a nákladní vozidla MAN | Servis vozidel</p>
              <p style="color: #888;">Načítání obsahu...</p>
            </div>
          </div>
        </div>`
      );

      fs.writeFileSync(indexPath, fallbackHtml);
      console.log('✅ Fallback předrenderování dokončeno!');
    }

    // Vytvoříme 404.html
    const notFoundPath = path.join(distPath, '404.html');
    const notFoundHtml = originalHtml.replace(
      /<div id="root">.*?<\/div>/s,
      `<div id="root">
        <div style="font-family: Inter, system-ui, sans-serif; padding: 20px; text-align: center; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
          <div>
            <h1 style="color: #1a1a1a; font-size: 4rem; margin-bottom: 1rem;">404</h1>
            <p style="color: #666; margin-bottom: 2rem; font-size: 1.25rem;">Stránka nebyla nalezena</p>
            <a href="/" style="color: #2563eb; text-decoration: underline;">Zpět na hlavní stránku</a>
          </div>
        </div>
      </div>`
    );
    fs.writeFileSync(notFoundPath, notFoundHtml);

  } catch (error) {
    console.error('❌ Chyba při předrenderování:', error);
    process.exit(1);
  }
}

prerender();