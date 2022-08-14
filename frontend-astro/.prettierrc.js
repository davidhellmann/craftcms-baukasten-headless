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
  ],
  plugins: [
    './node_modules/prettier-plugin-tailwindcss',
  ],
  tailwindConfig: './tailwind.config.js',
  svelteSortOrder : "options-styles-scripts-markup",
  svelteStrictMode: true,
  svelteBracketNewLine: false,
  svelteAllowShorthand: false,
  svelteIndentScriptAndStyle: false
};
