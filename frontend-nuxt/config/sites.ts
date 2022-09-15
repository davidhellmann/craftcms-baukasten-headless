interface IConfigSites {
  [key: string]: {
    handle: string,
    siteId: number,
    language: string,
    urlParameter?: string,
    primary: boolean
  }
}

export const configSites:IConfigSites = {
  'en': {
    handle: 'default',
    siteId: 1,
    language: 'en',
    urlParameter: '',
    primary: true,
  },
  'de': {
    handle: 'defaultDe',
    siteId: 4,
    language: 'de',
    urlParameter: 'de',
    primary: false,
  },
  'fr': {
    handle: 'defaultFr',
    siteId: 5,
    language: 'fr',
    urlParameter: 'fr',
    primary: false,
  },
}
