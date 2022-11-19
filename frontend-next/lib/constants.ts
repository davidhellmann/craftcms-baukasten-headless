export const CRAFT_CMS_GRAPHQL_URL: string = process.env.CRAFT_CMS_GRAPHQL_URL as string;
export const CRAFT_CMS_GRAPHQL_TOKEN: string = process.env.CRAFT_CMS_GRAPHQL_TOKEN as string;

export interface IConfigSites {
  handle: string,
  siteId: number,
  language: string,
  urlParameter?: string,
  urlParameterTrailingSlash?: string,
  primary: boolean
}

export const configSites:IConfigSites[] = [
  {
    handle: 'default',
    siteId: 1,
    language: 'en',
    urlParameter: '',
    urlParameterTrailingSlash: '',
    primary: true,
  },
  {
    handle: 'defaultDe',
    siteId: 4,
    language: 'de',
    urlParameter: 'de',
    urlParameterTrailingSlash: 'de/',
    primary: false,
  },
  {
    handle: 'defaultFr',
    siteId: 5,
    language: 'fr',
    urlParameter: 'fr',
    urlParameterTrailingSlash: 'fr/',
    primary: false,
  }
]

