import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use environment variable if set, otherwise default to repo name or '/'
  base: process.env.VITE_BASE || (process.env.NODE_ENV === 'production' ? '/scratchWebsite_build/' : '/'),
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
