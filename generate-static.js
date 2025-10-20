// generate-static.js
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const express = require('express');
const { exec } = require('child_process');

// Spustíme dev server pomocí vite
const startServer = () => {
  return new Promise((resolve) => {
    const server = exec('npx vite preview --port 3000', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
    });

    // Dáme serveru čas na spuštění
    setTimeout(() => {
      resolve(server);
    }, 2000);
  });
};

// Cesty, které chceme generovat
const paths = ['/', '/not-found']; 

async function generateStatic() {
  console.log('Spouštím server...');
  const server = await startServer();

  console.log('Spouštím Puppeteer...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const pagePath of paths) {
      console.log(`Generuji stránku: ${pagePath}`);
      
      const page = await browser.newPage();
      const url = `http://localhost:3000${pagePath}`;
      
      await page.goto(url, { waitUntil: 'networkidle0' });
      const html = await page.content();
      
      // Vytvořím složku podle cesty
      const outputPath = path.join(
        __dirname,
        'dist',
        pagePath === '/' ? 'index.html' : `${pagePath.slice(1)}.html`
      );
      
      const outputDir = path.dirname(outputPath);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      // Uložím HTML
      fs.writeFileSync(outputPath, html);
      console.log(`Uloženo do: ${outputPath}`);
      
      await page.close();
    }
  } catch (error) {
    console.error('Chyba při generování:', error);
  } finally {
    await browser.close();
    server.kill();
    console.log('Generování dokončeno!');
  }
}

generateStatic();