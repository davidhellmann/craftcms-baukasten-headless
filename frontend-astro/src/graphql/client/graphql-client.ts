import { GraphQLClient } from "graphql-request";
import {
  CRAFT_CMS_GRAPHQL_URL,
  CRAFT_CMS_GRAPHQL_TOKEN,
} from "@configs/constants";

interface IPreviewParams {
  token?: string;
  "x-craft-preview"?: string;
  "x-craft-live-preview"?: string;
  [k: string]: any;
}

interface IHeaders {
  Authorization: string;
  [key: string]: string;
}

export const cmsClient = (previewParams: IPreviewParams = {}) => {
  const headers: IHeaders = {
    Authorization: `Bearer ${CRAFT_CMS_GRAPHQL_TOKEN}`,
  };

  let API_URL = CRAFT_CMS_GRAPHQL_URL;

  if (previewParams && previewParams?.token) {
    const {
      token,
      "x-craft-preview": xCraftPreview,
      "x-craft-live-preview": xCraftLivePreview,
    } = previewParams;

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

export const graphqlClient = new GraphQLClient(CRAFT_CMS_GRAPHQL_URL, {
  headers: {
    Authorization: `Bearer ${CRAFT_CMS_GRAPHQL_TOKEN}`,
  },
});
