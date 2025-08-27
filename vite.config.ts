import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import serverConfig from "./electron/config/server.config.ts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist-react",
  },
  server: {
    port: parseInt(serverConfig.dev.port),
    strictPort: true,
  },
});
