import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh'

export default defineConfig({
  plugins: [react()],
  base: '/CrumbyPie/', // Must match your GitHub repository name exactly
})
