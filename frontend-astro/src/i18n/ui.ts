import { CONFIG_SITES, IConfigSites } from "@configs/sites";

// import translations
import { TRANSLATIONS as EN } from "@i18n/languages/en/translations";
import { TRANSLATIONS as DE } from "@i18n/languages/de/translations";

export const defaultSite = "default_en" as const;

export const ui = {
  default_en: EN,
  default_de: DE,
} as const;
