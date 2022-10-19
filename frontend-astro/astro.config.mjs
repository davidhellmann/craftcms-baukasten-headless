import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import graphql from '@rollup/plugin-graphql';
// import cloudflare from '@astrojs/cloudflare';
import { loadEnv } from 'vite';

process.env = { ...process.env, ...loadEnv('production', process.cwd()) };

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        path: './tailwind.config.js',
        applyBaseStyles: false,
      },
    }),
    svelte(),
  ],
  site: process.env.PUBLIC_SITE,
  vite: {
    plugins: [graphql()],
  },
  build: {
    format: 'file',
  },
  output: 'static',
});

// export default defineConfig((mode) => {
//   const { PUBLIC_SITE, PUBLIC_LIVE_PREVIEW } = loadEnv(mode, process.cwd(), '');
//   const settings = {
//     integrations: [
//       tailwind({
//         config: {
//           path: './tailwind.config.js',
//           applyBaseStyles: false,
//         },
//       }),
//       svelte(),
//     ],
//     site: PUBLIC_SITE,
//     vite: {
//       plugins: [graphql()],
//     },
//     build: {
//       format: 'file',
//     },
//   };

//   // If Live Preview true do SSR
//   if (PUBLIC_LIVE_PREVIEW === 'true') {
//     settings['adapter'] = cloudflare();
//     settings['output'] = 'server';
//   } else {
//     settings['output'] = 'static';
//   }

//   return settings;
// });
