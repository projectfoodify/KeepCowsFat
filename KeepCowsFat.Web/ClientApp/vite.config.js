import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/ProjectFoodify/",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [path.resolve(__dirname, "src")],
        additionalData: '@import "_main.scss";',
      },
    },
  },
  server: {
    port: 8784,
    strictPort: true,
    proxy: {
      "/api": {
        target: "http://localhost:5230",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
    optimizeDeps: {
      include: ["@emailjs/browser"],
    },
  },
});
