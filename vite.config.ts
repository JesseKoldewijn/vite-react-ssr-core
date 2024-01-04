import { hattip } from "@hattip/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vercel from "vite-plugin-vercel";

import ssr from "vike/plugin";

export default defineConfig({
  plugins: [
    hattip(),
    react({
      jsxRuntime: "classic",
    }),
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
