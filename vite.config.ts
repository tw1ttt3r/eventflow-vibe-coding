import angular from '@analogjs/vite-plugin-angular';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  root: fileURLToPath(new URL('./src', import.meta.url)),
  plugins: [angular()],
  build: {
    outDir: fileURLToPath(new URL('./dist', import.meta.url)),
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/app/core', import.meta.url)),
      '@shared': fileURLToPath(new URL('./src/app/shared', import.meta.url)),
      '@env': fileURLToPath(new URL('./src/environments', import.meta.url))
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: [fileURLToPath(new URL('./src/test-setup.ts', import.meta.url))],
    globals: true,
    coverage: { provider: 'v8', reporter: ['text', 'lcov'], thresholds: { lines: 80, functions: 80, branches: 80, statements: 80 } }
  }
});
