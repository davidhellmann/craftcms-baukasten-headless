/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */
/** @type {import('tailwindcss').Config} */


const questionMark = require('tailwindcss-question-mark');
const forms = require('@tailwindcss/forms')({
  strategy: 'class',
});
const debugScreens = require('tailwindcss-debug-screens');

// Settings
const settingsGrid = require('./assets/tailwind/tailwind.settings.grid');
const settingsColors = require('./assets/tailwind/tailwind.settings.colors');
const settingsFontFamily = require('./assets/tailwind/tailwind.settings.fontFamily');
const settingsfluidType = require('./assets/tailwind/tailwind.settings.fluidType');
const settingsScreens = require('./assets/tailwind/tailwind.settings.screens');
const settingsAspectRatio = require('./assets/tailwind/tailwind.settings.aspectRatio');

// Plugins
const pluginAddComponents = require('./assets/tailwind/tailwind.plugins.addComponents');

module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
  ],
  safelist: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: settingsFontFamily,
    colors: settingsColors,
    screens: settingsScreens,
    extend: {
      gridTemplateColumns: {...settingsGrid.gridTemplateColumns},
      gridColumn: {...settingsGrid.gridColumn},
      gridRowStart: {...settingsGrid.gridRowStart},
      gridRowEnd: {...settingsGrid.gridRowEnd},
      aspectRatio: {...settingsAspectRatio},
    },
    // Plugin Stuff
    debugScreens: {
      ignore: ['nthover'],
      position: ['bottom', 'right'],
    },
  },
  variants: {},
  corePlugins: {
    container: false,
    fontSize: false, // disable cause we use the fluid type plugin
  },
  plugins: [
    debugScreens,
    questionMark,
    require('tailwindcss-fluid-type')({
      ...settingsfluidType,
    }),
    forms,
    ({addComponents}) => {
      addComponents(pluginAddComponents);
    },
  ],
};
