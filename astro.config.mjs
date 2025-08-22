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
    server: {
      host: '0.0.0.0',
      port: 5000,
      hmr: {
        port: 5000
      }
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      }
    }
  }
});
