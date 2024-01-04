import { hattip } from "@hattip/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import ssr from "vike/plugin";

export default defineConfig({
  plugins: [
    hattip(),
    react({
      jsxRuntime: "automatic",
    }),
    ssr({
      prerender: true,
    }),
  ],
  resolve: {
    alias: {
      "~": "/src",
    },
  },
});
