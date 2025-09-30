import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using custom domain => assets should resolve from root
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
