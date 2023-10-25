import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/CV-Resume/' : '/',
  plugins: [vue()],
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
