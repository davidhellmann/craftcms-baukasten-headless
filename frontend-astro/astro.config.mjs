import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import graphql from "@rollup/plugin-graphql";
import cloudflare from "@astrojs/cloudflare";
import { loadEnv } from "vite";

// https://astro.build/config
export default defineConfig((mode) => {
  const { SITE } = loadEnv(mode, process.cwd(), "");
  console.log(SITE);
  return {
    integrations: [tailwind()],
    output: "server",
    adapter: cloudflare(),
    site: SITE,
    vite: {
      plugins: [graphql()],
    },
  };
});
