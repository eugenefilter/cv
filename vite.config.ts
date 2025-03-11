import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cv/',
  server: {
    host: true // или '0.0.0.0'
  }
})
