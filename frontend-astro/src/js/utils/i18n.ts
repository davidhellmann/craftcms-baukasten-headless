export type MessageType = {
  key: string;
  language: string;
  message: string | null;
};

export const getTranslations = async (lang: string = "en") => {
  const response = await fetch(
    `http://localhost:4321/api/translations/${lang}.json`,
  );
  const data = await response.json();
  return data?.currentLanguage ?? [];
};

export const t = (key: string, translations: MessageType[]) => {
  return translations.find((t: MessageType) => t.key === key)?.message ?? key;
};
