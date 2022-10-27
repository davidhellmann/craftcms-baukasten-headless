interface IGraphqlQuery {
  apiUrl: string,
  apiToken: string,
  query: string,
  responseParameter: string,
  routeQuery?: {
    [key: string]: string | string[]
  },
  variables?: {
    [key: string]: string | string[] | number
  }
}

interface ICustomHeaders {
  [key: string]: string | string[]
}

interface ITransform {
  data: {
    [key: string]: any
  }
}


export const useGraphqlQuery = (params: IGraphqlQuery) => {
  const {
    preview,
    token,
    'x-craft-preview': xCraftPreview,
    'x-craft-live-preview': xCraftLivePreview
  } = params.routeQuery


  const apiUrl = preview && token ? `${params.apiUrl}?token=${token}` : params.apiUrl
  const customHeaders: ICustomHeaders = {}

  // If Live Preview
  if (preview && xCraftLivePreview) {
    customHeaders['x-craft-live-preview'] = xCraftLivePreview
  }

  // If Preview
  if (preview && xCraftPreview) {
    customHeaders['x-craft-preview'] = xCraftPreview
  }

  // Custom transformer
  const transformData = (response): ITransform => {
    return response.data[params.responseParameter]
  }

  return useFetch(apiUrl, {
    method: 'POST',
    body: {
      query: params.query,
      variables: params.variables || null
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${params.apiToken}`,
      ...customHeaders,
    },
    transform: response => transformData(response)
  })
}

