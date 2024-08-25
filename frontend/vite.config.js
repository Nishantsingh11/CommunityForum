import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',  // Set the base path to relative
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Example alias
    },
  },
  build: {
    outDir: 'dist', // Output directory
  },
});