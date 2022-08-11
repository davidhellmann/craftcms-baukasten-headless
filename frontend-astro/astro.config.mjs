import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import graphql from "@rollup/plugin-graphql";
import cloudflare from "@astrojs/cloudflare";
import { loadEnv } from "vite";

// https://astro.build/config
export default defineConfig((mode) => {
  const { PUBLIC_SITE } = loadEnv(mode, process.cwd(), "");
  return {
    integrations: [tailwind()],
    output: "server",
    // output: "static",
    adapter: cloudflare(),
    site: PUBLIC_SITE,
    vite: {
      plugins: [graphql()],
    },
  };
});
