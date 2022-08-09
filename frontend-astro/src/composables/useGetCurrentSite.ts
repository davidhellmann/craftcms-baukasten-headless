interface IGetCurrentSite {
  uri: string;
}

export const useGetCurrentSite = (params: IGetCurrentSite) => {
  let handle = "default";
  let language = "en";
  let { uri } = params;

  // Check for EN Page
  if (params.uri.startsWith("de/")) {
    handle = "defaultDe";
    language = "de";
    uri = params.uri.slice(3);
  }

  return {
    handle,
    language,
    uri,
  };
};
