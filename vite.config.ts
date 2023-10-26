import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/CV-Resume/' : '/',
  plugins: [vue(), UnoCSS()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
    extensions: ['.js', '.ts', '.vue'],
  },
})
