import { GraphQLClient } from "graphql-request";
import {CRAFT_CMS_GRAPHQL_URL, CRAFT_CMS_GRAPHQL_TOKEN} from "../../constants";

interface ISearchParams {
  token?: string,
  'x-craft-preview'?: string,
  'x-craft-live-preview'?: string,
}

interface ICustomHeader {
  [key: string]: string
}

export const cmsClient = (searchParams: ISearchParams) => {
  const {
    token,
    'x-craft-preview': xCraftPreview,
    'x-craft-live-preview': xCraftLivePreview
  } = searchParams

  const CUSTOM_HEADERS: ICustomHeader = {}

  if (xCraftPreview) {
    CUSTOM_HEADERS["x-craft-preview"] = xCraftPreview;
  }

  if (xCraftLivePreview) {
    CUSTOM_HEADERS["x-craft-live-preview"] = xCraftLivePreview;
  }

  const API_URL = token
    ? `${CRAFT_CMS_GRAPHQL_URL}?token=${token}`
    : CRAFT_CMS_GRAPHQL_URL

  return new GraphQLClient(
    API_URL,
    {
      headers: {
        'Authentication': `Bearer: ${CRAFT_CMS_GRAPHQL_TOKEN}`,
        ...CUSTOM_HEADERS
      },
    }
  );
}

export const graphqlClient = new GraphQLClient(
  CRAFT_CMS_GRAPHQL_URL,
  {
    headers: {
      'Authentication': `Bearer: ${CRAFT_CMS_GRAPHQL_TOKEN}`
    },
  }
);
