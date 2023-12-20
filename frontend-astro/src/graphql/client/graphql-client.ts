import { GraphQLClient } from "graphql-request";
import {
  CRAFT_CMS_GRAPHQL_TOKEN,
  CRAFT_CMS_GRAPHQL_URL,
} from "@/configs/constants";
import { DocumentNode } from "graphql";

interface IHeaders {
  Authorization: string;
  [key: string]: string;
}

export const cmsClient = (tokens: IPreviewTokens = {}) => {
  const headers: IHeaders = {
    Authorization: `Bearer ${CRAFT_CMS_GRAPHQL_TOKEN}`,
  };

  let API_URL = CRAFT_CMS_GRAPHQL_URL;

  if (tokens && tokens?.token) {
    const {
      token,
      xCraftPreview: xCraftPreview,
      xCraftLivePreview: xCraftLivePreview,
    } = tokens;

    if (xCraftPreview) {
      headers["x-craft-preview"] = xCraftPreview;
    }

    if (xCraftLivePreview) {
      headers["x-craft-live-preview"] = xCraftLivePreview;
    }

    API_URL = token ? `${CRAFT_CMS_GRAPHQL_URL}?token=${token}` : API_URL;
  }

  return new GraphQLClient(API_URL, {
    headers,
  });
};

export const getGqlData = async <T>(
  query: DocumentNode,
  variables: T,
  tokens?: IPreviewTokens,
) => {
  const client = cmsClient(tokens ?? {});

  try {
    return await client.request(query, variables ?? {});
  } catch (error) {
    console.error("Fehler bei der GraphQL-Anfrage:", error);
    throw error;
  }
};
