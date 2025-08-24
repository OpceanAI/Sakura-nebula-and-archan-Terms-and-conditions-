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
    server: {
      host: '0.0.0.0',
      port: 5000,
      hmr: {
        port: 5000
      },
      allowedHosts: [
        '03a0cbf8-3db9-4ded-a196-b40761b3cbf3-00-1ytazqyc0zhvn.janeway.replit.dev',
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
