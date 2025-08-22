import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://terms.proyectosakuraia.com',
  base: '/',
  output: 'static',
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
