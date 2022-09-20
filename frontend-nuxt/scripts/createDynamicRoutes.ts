import axios from 'axios'
import { configSites } from '../config/sites';

export const dynamicRoutes = async () => {
  const finalRoutes: string[] = []
  const {data: {data: {entries}}} = await axios({
    url: `${process.env.API_BASE_URL}/api` || '',
    headers: {
      Authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
    },
    method: 'post',
    data: {
      query: `
          {
            entries(section: ["home", "pages", "news"], site: ["default", "defaultDe", "defaultFr"]) {
              uri
              siteId
            }
          }
          `,
    },
  })

  entries.forEach((entry) => {
    let { siteId, uri } = entry

    const matchingSite = configSites.find(x => x.siteId === siteId);
    const locale = matchingSite.urlParameter.length > 0 ? `/${matchingSite.urlParameter}/` : '/';

    finalRoutes.push(`${locale}${uri.replace('__home__', '')}`)
  })

  return finalRoutes
}
