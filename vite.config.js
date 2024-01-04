import { fileURLToPath, URL } from 'node:url'
import glob from 'glob'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import injectHTML from 'vite-plugin-html-inject'
import FullReload from 'vite-plugin-full-reload'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  plugins: [vue(), injectHTML(), FullReload(['./src/**/**.html'])],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html')
    },
    outDir: '../dist'
  }
})
