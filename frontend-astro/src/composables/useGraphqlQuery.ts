interface IGraphqlQuery {
  query: string;
  routeQuery?: {
    [key: string]: string | string[] | number;
  };
  variables?: {
    [key: string]: string | string[] | number;
  };
}

interface ICustomHeaders {
  [key: string]: string | string[];
}

export const useGraphqlQuery = (params: IGraphqlQuery) => {
  const { PUBLIC_API_URL, PUBLIC_API_TOKEN } = import.meta.env;

  
  const {
    preview,
    token,
    "x-craft-preview": xCraftPreview,
    "x-craft-live-preview": xCraftLivePreview,
  } = params.routeQuery;

  const apiUrl =
    preview && token
      ? `${PUBLIC_API_URL}?token=${token}`
      : PUBLIC_API_URL;
  const customHeaders: ICustomHeaders = {};

  // If Live Preview
  if (preview && xCraftLivePreview) {
    customHeaders["x-craft-live-preview"] = xCraftLivePreview;
  }

  // If Preview
  if (preview && xCraftPreview) {
    customHeaders["x-craft-preview"] = xCraftPreview;
  }

  return fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({
      query: params.query,
      variables: params.variables || null,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: PUBLIC_API_TOKEN,
      ...customHeaders,
    },
  }).then((response) => response.json());
};
