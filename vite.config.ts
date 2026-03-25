import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import serverConfig from "./electron/config/server.config.ts";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist-react",
  },

  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: parseInt(serverConfig.dev.port),
    strictPort: true,
  },
});
