import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import graphql from "@rollup/plugin-graphql";
import cloudflare from "@astrojs/cloudflare";
import { loadEnv } from "vite";

// https://astro.build/config
export default defineConfig((mode) => {
  const { PUBLIC_SITE, PUBLIC_LIVE_PREVIEW } = loadEnv(mode, process.cwd(), "");
  return {
    integrations: [tailwind()],
    output: PUBLIC_LIVE_PREVIEW === "true" ? "server" : "static",
    adapter: PUBLIC_LIVE_PREVIEW === "true" ? cloudflare() : {},
    site: PUBLIC_SITE,
    vite: {
      plugins: [graphql()],
    },
  };
});
