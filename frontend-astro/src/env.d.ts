/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string;
  readonly PUBLIC_API_TOKEN: string;
  readonly PUBLIC_SITE: string;
  readonly PUBLIC_LIVE_PREVIEW: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}