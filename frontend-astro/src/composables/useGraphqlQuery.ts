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
  console.log(import.meta.env.API_URL)
  const {
    preview,
    token,
    "x-craft-preview": xCraftPreview,
    "x-craft-live-preview": xCraftLivePreview,
  } = params.routeQuery;

  const apiUrl =
    preview && token
      ? `https://headless.baukasten.io/api?token=${token}`
      : `https://headless.baukasten.io/api`;
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
      Authorization: `Bearer KOTwKkTfXNRzI_u2gQPBO7OfyxXoCihi`,
      ...customHeaders,
    },
  }).then((response) => response.json());
};
