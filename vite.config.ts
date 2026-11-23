import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import schedule from './src/blog/schedule.json';

export default defineConfig(({isSsrBuild}) => {
  const buildAt = process.env.EDITORIAL_BUILD_AT ?? new Date().toISOString();
  if (!Number.isFinite(Date.parse(buildAt))) throw new Error('Invalid EDITORIAL_BUILD_AT');

  return {
    plugins: [react(), tailwindcss()],
    define: {
      'import.meta.env.VITE_METODO22_RELEASED': Date.parse(buildAt) >= Date.parse(schedule.metodo22.publishAt),
    },
    build: {copyPublicDir: !isSsrBuild},
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
