interface IConfigSites {
  [key: string]: {
    handle: string,
    siteId: number,
    language: string,
    urlParameter?: string,
    urlParameterTrailingSlash?: string,
    primary: boolean
  }
}

export const configSites:IConfigSites = {
  'en': {
    handle: 'default',
    siteId: 1,
    language: 'en',
    urlParameter: '',
    urlParameterTrailingSlash: '',
    primary: true,
  },
  'de': {
    handle: 'defaultDe',
    siteId: 4,
    language: 'de',
    urlParameter: 'de',
    urlParameterTrailingSlash: 'de/',
    primary: false,
  },
  'fr': {
    handle: 'defaultFr',
    siteId: 5,
    language: 'fr',
    urlParameter: 'fr',
    urlParameterTrailingSlash: 'fr/',
    primary: false,
  },
}
