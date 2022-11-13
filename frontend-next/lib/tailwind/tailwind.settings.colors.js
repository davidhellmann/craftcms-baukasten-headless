/*
 * Tailwind Color Settings
 * IMPORTANT: Custom colors MUST BE defined as HEX Value!!!
 * IMPORTANT: You should define the same colors for each theme based on the default theme
 * otherwise theming works not as expected, except for colors like "inherit", "current", and "transparent".
 *
 */

const colors = require('tailwindcss/colors');
const useMapDefaultColorPalette = require('./helpers/useMapDefaultColorPalette');

module.exports = [
  {
    name: 'default',
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      'keyboard-focus': '#ff98de',
      // eslint-disable-next-line react-hooks/rules-of-hooks
      ...useMapDefaultColorPalette({ palette: colors.zinc, name: 'gray' }),
      // eslint-disable-next-line react-hooks/rules-of-hooks
      ...useMapDefaultColorPalette({ palette: colors.emerald, name: 'primary' }),
      // eslint-disable-next-line react-hooks/rules-of-hooks
      ...useMapDefaultColorPalette({ palette: colors.amber, name: 'secondary' }),
    },
  },
  // {
  //   name: 'monochrome',
  //   colors: {
  //     ...useMapDefaultColorPalette({ palette: colors.zinc, name: 'primary' }),
  //     ...useMapDefaultColorPalette({ palette: colors.neutral, name: 'secondary' }),
  //   },
  // },
];
