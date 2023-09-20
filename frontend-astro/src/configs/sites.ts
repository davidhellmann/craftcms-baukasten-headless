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
    handle: "default",
    siteId: 1,
    language: "en",
    urlParameter: "",
    urlParameterTrailingSlash: "",
    primary: true,
    baseUrl: "https://astro.baukasten.io",
    sections: ["home", "news", "pages"],
  },
  {
    handle: "defaultDe",
    siteId: 4,
    language: "de",
    urlParameter: "de",
    urlParameterTrailingSlash: "de/",
    primary: false,
    baseUrl: "https://astro.baukasten.io",
    sections: ["home", "news", "pages"],
  }
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
