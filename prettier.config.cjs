/** @type {import("prettier").Config} */
const config = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  // Import sorting
  importOrder: [
    "^vite/(.*)$",
    "^@vite/(.*)$",
    "^vike/(.*)$",
    "^@vike/(.*)$",
    "^react/(.*)$",
    "^@react/(.*)$",
    "^@/(.css)$",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  // Tailwind
  tailwindAttributes: ["className"],
  tailwindFunctions: ["clsx", "cn", "twMerge"],
  tailwindConfig: "./tailwind.config.ts",
};

module.exports = config;
