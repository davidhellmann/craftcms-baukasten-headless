export type TSectionWithUrls = "home" | "news" | "pages";

export interface IConfigSites {
  handle: string;
  siteId: number;
  language: string;
  urlParameter?: string;
  urlParameterTrailingSlash?: string;
  primary: boolean;
  baseUrl: string;
  sections: TSectionWithUrls[];
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
  },
];

export const CONFIG_SITES: IConfigSites[] = SITES;
