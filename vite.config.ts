import { hattip } from "@hattip/vite";
import react from "@vitejs/plugin-react";
import path from "path";
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
      "~": path.resolve(__dirname, "src"),
    },
  },
});
