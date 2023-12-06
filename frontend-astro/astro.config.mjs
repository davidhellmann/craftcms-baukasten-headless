// https://astro.build/config
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import graphql from "@rollup/plugin-graphql";
import node from "@astrojs/node";
import react from "@astrojs/react";

process.env = {
  ...process.env,
  ...loadEnv("production", process.cwd()),
};

export default defineConfig({
  site: process.env.PUBLIC_SITE,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  trailingSlash: "never",
  vite: {
    plugins: [graphql()],
  },
  build: {
    format: "file",
  },
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
});
