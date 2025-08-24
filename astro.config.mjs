import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-domain.com', // Cambia por tu dominio
  base: '/',
  output: 'static',
  devToolbar: {
    enabled: false
  },
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true,
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      }
    }
  }
});
