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
      },
      allowedHosts: [
        'fa8bdace-e6cf-44ab-aaab-ede353e18031-00-1xv94n36ykr1k.spock.replit.dev',
        '.replit.dev',
        'localhost'
      ]
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
