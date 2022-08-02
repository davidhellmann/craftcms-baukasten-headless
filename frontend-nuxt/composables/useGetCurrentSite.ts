interface IGetCurrentSite {
  path: string,
}

export const useGetCurrentSite = (params: IGetCurrentSite) => {
  let currentSite = "default"

  // Check for EN Page
  if (params.path.startsWith('/en/')) {
    currentSite = 'defaultEn'
  }

  return currentSite
}
