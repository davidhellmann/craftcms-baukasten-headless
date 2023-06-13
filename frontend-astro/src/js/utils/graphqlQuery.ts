interface IGraphqlQuery {
  query: string;
  routeQuery: {
    secret?: string;
    token?: string;
    'x-craft-preview'?: string;
    'x-craft-live-preview'?: string;
  };
  variables?: {
    [key: string]: string | string[] | number;
  };
}

interface ICustomHeaders {
  [key: string]: string | string[];
}

export const graphqlQuery = (params: IGraphqlQuery) => {
  const { PUBLIC_API_TOKEN, PUBLIC_API_URL } = import.meta.env;

  const {
    secret,
    token,
    'x-craft-preview': xCraftPreview,
    'x-craft-live-preview': xCraftLivePreview,
  } = params?.routeQuery;

  const apiUrl = secret && token ? `${PUBLIC_API_URL}?token=${token}` : PUBLIC_API_URL;
  const customHeaders: ICustomHeaders = {};

  // If Live Preview
  if (secret && xCraftLivePreview) {
    customHeaders['x-craft-live-preview'] = xCraftLivePreview;
  }

  // If Preview
  if (secret && xCraftPreview) {
    customHeaders['x-craft-preview'] = xCraftPreview;
  }

  return fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({
      query: params.query,
      variables: params.variables || null,
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: PUBLIC_API_TOKEN,
      ...customHeaders,
    },
  }).then((response) => response.json());
};
