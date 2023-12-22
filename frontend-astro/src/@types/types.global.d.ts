interface IPreviewTokens {
  token?: string;
  xCraftPreview?: string;
  xCraftLivePreview?: string;
}

type Config<T> = {
  [key: string]: Config<T> | T;
};
