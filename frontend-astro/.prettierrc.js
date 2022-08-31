module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 100,
  useTabs: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 240,
      },
    },
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  plugins: ['./node_modules/prettier-plugin-tailwindcss', './node_modules/prettier-plugin-astro'],
  tailwindConfig: './tailwind.config.js',
  astroAllowShorthand: false,
  svelteSortOrder: 'options-styles-scripts-markup',
  svelteStrictMode: true,
  svelteBracketNewLine: false,
  svelteAllowShorthand: false,
  svelteIndentScriptAndStyle: false,
}
