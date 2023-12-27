/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */
/** @type {import('tailwindcss').Config} */

// plugins
import containerQuerries from "@tailwindcss/container-queries";
import themeIt from "tailwindcss-theme-it";
import fluidType from "tailwindcss-fluid-type";
import components from "./src/configs/tailwind/tailwind.plugins.addComponents.mjs";
import animate from "tailwindcss-animate"

// Settings
import settingsGrid from "./src/configs/tailwind/tailwind.settings.grid.mjs";
import settingsfluidType from "./src/configs/tailwind/tailwind.settings.fluidType.mjs";
import settingsThemeIt from "./src/configs/tailwind/tailwind.settings.themeIt.mjs";

export default {
  content: [
    "./src/pages/*.{astro,tsx,jsx,vue,svelte}",
    "./src/layouts/*.{astro,tsx,jsx,vue,svelte}",
    "./src/views/**/*.{astro,tsx,jsx,vue,svelte}",
    "./src/components/**/*.{astro,tsx,jsx,vue,svelte}",
  ],
  safelist: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Lato", "Helvetica", "Arial", "sans-serif"],
      serif: ["Merriweather", "Georgia", "Times New Roman", "Times", "serif"],
      mono: ['"JetBrains Mono"', '"Courier New"', "Courier", "monospace"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      nthover: { raw: "(hover: hover)" },
    },
    extend: {
      gridTemplateColumns: { ...settingsGrid.gridTemplateColumns },
      gridColumn: { ...settingsGrid.gridColumn },
      gridRowStart: { ...settingsGrid.gridRowStart },
      gridRowEnd: { ...settingsGrid.gridRowEnd },
      aspectRatio: {
        landscape: "3 / 2",
        portrait: "2 / 3",
      },
      transitionTimingFunction: {
        "out-back": "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
      },
    },
    // Plugin Stuff
    debugScreens: {
      ignore: ["nthover"],
      position: ["bottom", "right"],
    },
  },
  variants: {},
  corePlugins: {
    container: false,
    fontSize: false, // disable because we use the fluid type plugin
  },
  plugins: [
    containerQuerries,
    animate,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    themeIt(settingsThemeIt),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    fluidType({
      ...settingsfluidType,
    }),
    ({ addComponents }) => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      addComponents(components);
    },
  ],
};
