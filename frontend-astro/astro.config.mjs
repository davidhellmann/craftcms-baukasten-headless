import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

// https://astro.build/config
// import tailwind from "@astrojs/tailwind";
import graphql from "@rollup/plugin-graphql";
import { loadEnv } from "vite";
import node from "@astrojs/node";
process.env = {
  ...process.env,
  ...loadEnv("production", process.cwd())
};

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE,
  integrations: [
    vue(),
    // tailwind({
    //   config: {
    //     applyBaseStyles: false
    //   }
    // })
  ],
  trailingSlash: "never",
  vite: {
    plugins: [graphql()],
  },
  build: {
    format: "file"
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});
