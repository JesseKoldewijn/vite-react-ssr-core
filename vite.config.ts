import { hattip } from "@hattip/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import vercel from "vite-plugin-vercel";

import ssr from "vike/plugin";

export default defineConfig({
  plugins: [
    hattip(),
    react(),
    ssr({
      prerender: true,
    }),
    vercel(),
  ],
  resolve: {
    alias: {
      "~": "/src",
    },
  },
});
