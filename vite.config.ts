import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [svelte(), tailwindcss()],
  root: '.', // project root
  build: {
    rollupOptions: {
      input: {
        popup: path.resolve(__dirname, 'popup.html')
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: '.'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});