import { GraphQLClient } from "graphql-request";
import {CRAFT_CMS_GRAPHQL_URL, CRAFT_CMS_GRAPHQL_TOKEN} from "../../constants";

interface ISearchParams {
  token?: string,
  'x-craft-preview'?: string,
  'x-craft-live-preview'?: string,
  [k: string]: any
}

interface IHeaders {
  authorization: string
  [key: string]: string
}

export const cmsClient = (searchParams: ISearchParams) => {
  const {
    token,
    'x-craft-preview': xCraftPreview,
    'x-craft-live-preview': xCraftLivePreview
  } = searchParams

  const headers: IHeaders = {
    authorization: `Bearer: ${CRAFT_CMS_GRAPHQL_TOKEN}`,
  }

  if (xCraftPreview) {
    headers["x-craft-preview"] = xCraftPreview;
  }

  if (xCraftLivePreview) {
    headers["x-craft-live-preview"] = xCraftLivePreview;
  }

  const API_URL = token
    ? `${CRAFT_CMS_GRAPHQL_URL}?token=${token}`
    : CRAFT_CMS_GRAPHQL_URL

  return new GraphQLClient(
    API_URL,
    {
      headers
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
