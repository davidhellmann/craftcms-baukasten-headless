import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import graphql from "@rollup/plugin-graphql";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [graphql()],
  },
});
