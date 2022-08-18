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
  1: {
    handle: 'default',
    siteId: 1,
    language: 'en',
    primary: true,
  },
  4: {
    handle: 'defaultDe',
    siteId: 4,
    language: 'de',
    urlParameter: 'de',
    primary: false,
  },
  5: {
    handle: 'defaultFr',
    siteId: 5,
    language: 'fr',
    urlParameter: 'fr',
    primary: false,
  },
}
