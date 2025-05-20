import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import serverConfig from './electron/constants/serverConfig'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist-react',
  },
  server: {
    port: parseInt(serverConfig.dev.port),
    strictPort: true,
  }
})
