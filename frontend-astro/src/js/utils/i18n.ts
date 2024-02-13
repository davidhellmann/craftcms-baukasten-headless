export type MessageType = {
  key: string;
  language: string;
  message: string | null;
};

export const getTranslations = async (
  lang: string = "en",
  url: string = "",
) => {
  const response = await fetch(`${url}/api/translations/${lang}.json`);
  const data = await response.json();
  return data?.currentLanguage ?? [];
};

export const t = (key: string, translations: MessageType[]) => {
  return translations.find((t: MessageType) => t.key === key)?.message ?? key;
};
