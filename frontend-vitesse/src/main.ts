import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import axios from 'axios'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  },
)

export async function includedRoutes(paths: any, routes: any) {
  const { data: { data: { entries } } } = await axios({
    url: `${import.meta.env.VITE_API_BASE_URL}/api` || '',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GRAPHQL_TOKEN}`,
    },
    method: 'post',
    data: {
      query: `
          {
            entries(section: ["pages", "news"], site: ["default"]) {
              id
              slug
              uri
              url
              sectionHandle
              typeHandle
            }
          }
          `,
    },
  })

  const pages = entries
    .filter((item: any) => item.sectionHandle === 'pages')
    .map((item: any) => `${item.uri}`)

  const staticRoutes = routes.map((item: any) => `${item.path}`)
  console.log(pages)
  console.log(staticRoutes)

  return [
    // ...staticPaths,
    ...staticRoutes,
    ...pages,
  ]
}
