import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: 'static-html-generation',
      closeBundle: () => {
        try {
          // Zkopírujeme .htaccess soubor do dist adresáře
          if (fs.existsSync('public/.htaccess')) {
            fs.copyFileSync('public/.htaccess', 'dist/.htaccess');
            console.log('.htaccess úspěšně zkopírován do dist adresáře');
          }
        } catch (err) {
          console.warn('Chyba při kopírování .htaccess:', err);
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Optimalizace pro statickou generaci
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    target: 'es2018', // Kompatibilita s react-snap Puppeteer
    // Optimalizace pro statické hosty
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react', 
            'react-dom', 
            'react-router-dom'
          ],
        },
      },
    },
  }
}));
