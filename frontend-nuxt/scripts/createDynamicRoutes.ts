import axios from 'axios'

export const dynamicRoutes = async () => {
  const {data: {data: {entries}}} = await axios({
    url: `${process.env.API_BASE_URL}/api` || '',
    headers: {
      Authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
    },
    method: 'post',
    data: {
      query: `
          {
            entries(section: ["*"], site: ["default"]) {
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

  console.log(entries)

  // TODO: if you need more different mappings
  // const routesForPages = entries.map((entry) => {
  //   return {
  //     route: entry.slug,
  //     payload: page
  //   }
  // })
  //
  // return routesForPages

  return ['blog']

  // return entries.map((entry) => {
  //   return entry.uri
  // })
}


// const { data: { data: { entries } } } = await axios({
//   url: `${import.meta.env.VITE_API_BASE_URL}/api` || '',
//   headers: {
//     Authorization: `Bearer ${import.meta.env.VITE_GRAPHQL_TOKEN}`,
//   },
//   method: 'post',
//   data: {
//     query: `
//           {
//             entries(section: ["pages", "news"], site: ["default"]) {
//               id
//               slug
//               uri
//               url
//               sectionHandle
//               typeHandle
//             }
//           }
//           `,
//   },
// })
//
// const pages = entries
//   .filter((item: any) => item.sectionHandle === 'pages')
//   .map((item: any) => `${item.uri}`)
//
// const staticRoutes = routes.map((item: any) => `${item.path}`)
// console.log(pages)
// console.log(staticRoutes)
//
// return [
//   // ...staticPaths,
//   ...staticRoutes,
//   ...pages,
// ]
