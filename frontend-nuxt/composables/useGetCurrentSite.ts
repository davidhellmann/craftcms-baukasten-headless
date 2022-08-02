interface IGetCurrentSite {
  path: string,
}

export const useGetCurrentSite = (params: IGetCurrentSite) => {
  let handle = "default"
  let language = "en"

  // Check for EN Page
  if (params.path.startsWith('/de/')) {
    handle = 'defaultDe'
    language = 'de'
  }

  return {
    handle,
    language
  }
}
