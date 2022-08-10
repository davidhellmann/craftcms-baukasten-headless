import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import graphql from "@rollup/plugin-graphql";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: cloudflare(),
  site: import.meta.env.SITE,
  vite: {
    plugins: [graphql()],
  },
});
