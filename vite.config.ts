import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Two entries: the tower, and each write-up page under /writing/<slug>/.
// Paths are relative to the project root, so this needs no @types/node.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        emty: 'writing/emty/index.html',
      },
    },
  },
});
