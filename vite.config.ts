import vue from '@vitejs/plugin-vue'
import path from 'path'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

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
