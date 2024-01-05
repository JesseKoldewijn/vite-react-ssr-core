import { hattip } from "@hattip/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { type UserConfig, defineConfig } from "vite";

import ssr from "vike/plugin";

const config = {
  plugins: [
    hattip(),
    react(),
    ssr({
      prerender: true,
    }),
  ],

  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
} satisfies UserConfig;

export default defineConfig(config);
