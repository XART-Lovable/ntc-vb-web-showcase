#!/usr/bin/env node

/**
 * Jednoduchý skript pro testování statického buildu
 */

import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cesta k adresáři s buildem
const distPath = path.join(__dirname, 'dist');

// Kontrola, zda existuje adresář s buildem
if (!fs.existsSync(distPath)) {
  console.error('Adresář "dist" neexistuje. Nejprve spusťte "npm run build:ssg".');
  process.exit(1);
}

// Mapování MIME typů
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf'
};

// Vytvoření serveru
const server = http.createServer((req, res) => {
  console.log(`Požadavek: ${req.url}`);

  // Převedení URL na cestu k souboru
  let filePath = path.join(distPath, req.url || '');

  // Pokud URL končí lomítkem, přidáme index.html
  if (filePath.endsWith('/') || filePath === distPath) {
    filePath = path.join(filePath, 'index.html');
  }

  // Pokud soubor neexistuje, zkusíme index.html pro SPA routing
  try {
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }
  } catch (e) {
    // Soubor neexistuje, použijeme index.html
    filePath = path.join(distPath, 'index.html');
  }

  // Získání přípony souboru
  const extname = path.extname(filePath);
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  // Čtení souboru
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // Chyba při čtení souboru
      res.writeHead(500);
      res.end(`Chyba serveru: ${err.code}`);
    } else {
      // Vše v pořádku
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server běží na adrese http://localhost:${PORT}`);
  console.log('Pro ukončení stiskněte Ctrl+C');
});