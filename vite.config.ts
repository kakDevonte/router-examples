import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

console.log('app variant:', process.env.APP);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    TanStackRouterVite({
      routesDirectory: `src/apps/tanstack-router/routes`,
      generatedRouteTree: `./src/apps/tanstack-router/routeTree.gen.ts`
    })
  ],
  define: {
    'import.meta.env.VITE_APP': JSON.stringify(process.env.APP)
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:31299'
    }
  }
});
