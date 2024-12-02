import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "src": path.resolve(__dirname, './src'),
      "layouts": path.resolve(__dirname, './src/layouts'),
      "pages": path.resolve(__dirname, './src/pages'),
      "server": path.resolve(__dirname, './server'),
      "utils": path.resolve(__dirname, './utils'),
      "components": path.resolve(__dirname, './components'),
      "styles": path.resolve(__dirname, './src/assets/styles'),
      "routes": path.resolve(__dirname, './src/routes'),
    }
  }
})
