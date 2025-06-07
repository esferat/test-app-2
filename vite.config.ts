import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import path from 'path';
import svgr from '@svgr/rollup';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      eslint: {
        useFlatConfig: true,
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
      typescript: true,
    }),
    svgr({
      include: '**/*.svg',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@components': `${path.resolve(__dirname, './src/components/')}`,
      '@public': `${path.resolve(__dirname, './public/')}`,
      '@pages': path.resolve(__dirname, './src/pages'),
      '@types': `${path.resolve(__dirname, './src/@types')}`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        silenceDeprecations: ['import'],
      },
    },
  },
  build: {
    sourcemap: true,
  },
});
