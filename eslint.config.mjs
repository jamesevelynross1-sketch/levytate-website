import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      ".vercel/**",
      "node_modules/**",
      "next-env.d.ts",
      "*.tsbuildinfo",
      "package-lock.json",
      "coverage/**",
      "public/levytate-interactive-2026.html",
      "public/levytate-mission-v2.html",
      "public/mission-v2/**",
      "public/mission-v3/**",
      "scripts/build-levytate-home.mjs",
      "scripts/build-levytate-pages.mjs",
      "scripts/levytate-buyer-content.mjs",
      "tests/**/*.cjs",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
