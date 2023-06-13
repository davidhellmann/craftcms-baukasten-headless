export interface IConfigSites {
  handle: string;
  siteId: number;
  language: string;
  urlParameter?: string;
  urlParameterTrailingSlash?: string;
  primary: boolean;
  baseUrl: string;
  sections: string[];
}

const SITES: IConfigSites[] = [
  {
    handle: "marketing_en",
    siteId: 4,
    language: "en",
    urlParameter: "",
    urlParameterTrailingSlash: "",
    primary: true,
    baseUrl: "https://www.dynatrace.com",
    sections: ["dtmPage"],
  },
  {
    handle: "marketing_de",
    siteId: 7,
    language: "de",
    urlParameter: "de",
    urlParameterTrailingSlash: "de/",
    primary: false,
    baseUrl: "https://www.dynatrace.com",
    sections: ["dtmPage"],
  },
  {
    handle: "marketing_es",
    siteId: 2,
    language: "es-ES",
    urlParameter: "es",
    urlParameterTrailingSlash: "es/",
    primary: false,
    baseUrl: "https://www.dynatrace.com",
    sections: ["dtmPage"],
  },
  {
    handle: "marketing_it",
    siteId: 1,
    language: "it",
    urlParameter: "it",
    urlParameterTrailingSlash: "it/",
    primary: false,
    baseUrl: "https://www.dynatrace.com",
    sections: ["dtmPage"],
  },
  {
    handle: "marketing_fr",
    siteId: 5,
    language: "fr",
    urlParameter: "fr",
    urlParameterTrailingSlash: "fr/",
    primary: false,
    baseUrl: "https://www.dynatrace.com",
    sections: ["dtmPage"],
  },
  {
    handle: "marketing_ja",
    siteId: 3,
    language: "ja",
    urlParameter: "ja",
    urlParameterTrailingSlash: "ja/",
    primary: false,
    baseUrl: "https://www.dynatrace.com",
    sections: ["dtmPage"],
  },
  {
    handle: "marketing_ko",
    siteId: 8,
    language: "ko",
    urlParameter: "ko",
    urlParameterTrailingSlash: "ko/",
    primary: false,
    baseUrl: "https://www.dynatrace.com",
    sections: ["dtmPage"],
  },
  {
    handle: "marketing_zh",
    siteId: 6,
    language: "zh-Hans-CN",
    urlParameter: "cn",
    urlParameterTrailingSlash: "cn/",
    primary: false,
    baseUrl: "https://www.dynatrace.cn",
    sections: ["dtmPage"],
  },
  {
    handle: "marketing_ar",
    siteId: 10,
    language: "ar",
    urlParameter: "ar",
    urlParameterTrailingSlash: "ar/",
    primary: false,
    baseUrl: "https://www.dynatrace.com",
    sections: ["dtmPage"],
  },
  {
    handle: "marketing_pt_br",
    siteId: 12,
    language: "pt-BR",
    urlParameter: "pt-br",
    urlParameterTrailingSlash: "pt-br/",
    primary: false,
    baseUrl: "https://www.dynatrace.com",
    sections: ["dtmPage"],
  },
  {
    handle: "marketing_es_la",
    siteId: 45,
    language: "es-419",
    urlParameter: "es-la",
    urlParameterTrailingSlash: "es-la/",
    primary: false,
    baseUrl: "https://www.dynatrace.com",
    sections: ["dtmPage"],
  },
  {
    handle: "events_perform",
    siteId: 46,
    language: "en",
    urlParameter: "perform",
    urlParameterTrailingSlash: "perform/",
    primary: false,
    baseUrl: "https://www.dynatrace.com",
    sections: ["dteHome", "dtePages"],
  },
  {
    handle: "events_amplify",
    siteId: 47,
    language: "en",
    urlParameter: "amplify",
    urlParameterTrailingSlash: "amplify/",
    primary: false,
    baseUrl: "https://www.dynatrace.com",
    sections: ["dteHomeAmplify", "dtePages"],
  },
  {
    handle: "events_innovate",
    siteId: 48,
    language: "en",
    urlParameter: "innovate",
    urlParameterTrailingSlash: "innovate/",
    primary: false,
    baseUrl: "https://www.dynatrace.com",
    sections: ["dteHomeInnovate", "dtePages"],
  },
  {
    handle: "events_innovate_pt_br",
    siteId: 48,
    language: "pt-BR",
    urlParameter: "pt-br/innovate",
    urlParameterTrailingSlash: "pt-br/innovate/",
    primary: false,
    baseUrl: "https://www.dynatrace.com",
    sections: ["dteHomeInnovate", "dtePages"],
  },
];

export const CONFIG_SITES: IConfigSites[] = SITES;

// let SITES_TO_BUILD: string[] = [];
//
// if (import.meta.env.SITES_TO_BUILD) {
//   SITES_TO_BUILD = JSON.parse(import.meta.env.SITES_TO_BUILD);
// }
//
// export const CONFIG_SITES: IConfigSites[] = SITES.filter((site) => {
//   if (Array.isArray(SITES_TO_BUILD) && SITES_TO_BUILD.length > 0) {
//     return SITES_TO_BUILD.includes(site.handle);
//   } else {
//     return SITES;
//   }
// });
