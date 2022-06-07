import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    'nuxt-graphql-client',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
  ],
  tailwindcss: {
    viewer: false,
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    classPrefix: 'theme-',
    classSuffix: '',
    dataValue: 'theme',
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    // apiToken: process.env.GRAPHQL_TOKEN || '',
    // Keys within public, will be also exposed to the client-side
    public: {
      // apiBaseUrl: process.env.API_BASE_URL + '/api' || '',
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
      // apiToken: process.env.GRAPHQL_TOKEN || '',
      assetBaseUrl: process.env.ASSET_BASE_URL || 'http://localhost:3000',
      appName: process.env.npm_package_name || '',
      'graphql-client': {
        clients: {
          default: {
            host: process.env.API_BASE_URL + '/api' || '',
            token: process.env.GRAPHQL_TOKEN || '',
            retainToken: process.env.RETAIN_TOKEN === 'true' || false
          },
        }
      }
    }
  }
})
