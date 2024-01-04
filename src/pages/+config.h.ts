import vikeReact from "vike-react";

import type { Config } from "vike/types";

import Head from "../layouts/HeadDefault";
import Layout from "../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Layout,
  Head,
  // <title>
  title: "My Vike App",
  // <meta name="description">
  description: "Demo showcasing Vike",
  // <link rel="icon" href="${favicon}" />
  favicon: "/favicon.ico",
  extends: vikeReact,
} satisfies Config;
