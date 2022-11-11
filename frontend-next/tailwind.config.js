/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

// Settings
const settingsGrid = require('./lib/tailwind/tailwind.settings.grid')
const settingsfluidType = require('./lib/tailwind/tailwind.settings.fluidType');

// Plugins
const pluginAddComponents = require('./lib/tailwind/tailwind.plugins.addComponents');
const pluginMultiTheme = require('./lib/tailwind/tailwind.plugins.multiTheme');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
      serif: ['var(--font-serif)', ...fontFamily.serif],
      mono: ['var(--font-mono)', ...fontFamily.mono]
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      nthover: { raw: '(hover: hover)' }
    },
    extend: {
      gridTemplateColumns: { ...settingsGrid.gridTemplateColumns },
      gridColumn: { ...settingsGrid.gridColumn },
      gridRowStart: { ...settingsGrid.gridRowStart },
      gridRowEnd: { ...settingsGrid.gridRowEnd },
      aspectRatio: {
        landscape: '3 / 2',
        portrait: '2 / 3',
      },
    },
    // Plugin Stuff
    debugScreens: {
      ignore: ['nthover'],
      position: ['bottom', 'right'],
    },
  },
  corePlugins: {
    container: false,
    fontSize: false, // disable cause we use the fluid type plugin
  },
  plugins: [
    require('tailwindcss-fluid-type')({
      ...settingsfluidType,
    }),
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/container-queries'),
    pluginMultiTheme,
    ({ addComponents }) => {
      addComponents(pluginAddComponents);
    },
  ],
}
