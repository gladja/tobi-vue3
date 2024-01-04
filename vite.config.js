import { fileURLToPath, URL } from 'node:url'
import glob from 'glob'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
