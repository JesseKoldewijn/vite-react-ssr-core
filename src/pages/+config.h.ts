import vikeReact from "vike-react";

import type { Config } from "vike/types";

import Head from "~/layouts/HeadDefault";
import Layout from "~/layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head,
  Layout,
  // <title>
  title: "Vite RSC Core",
  // <meta name="description">
  description: "A Vite RSC Core project to jumpstart your next React project.",
  // <link rel="icon" href="${favicon}" />
  favicon: "/favicon.ico",
  extends: vikeReact,
} satisfies Config;
