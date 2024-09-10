import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host:'0.0.0.0',
    // host: true, // 외부 IP에서의 접속을 허용
    // host: process.env.HOST || "localhost",
    // port: process.env.PORT || 3000,
    port: 3000,
  },
});
