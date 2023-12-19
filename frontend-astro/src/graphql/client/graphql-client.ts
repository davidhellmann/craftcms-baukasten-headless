import { GraphQLClient } from "graphql-request";
import {
  CRAFT_CMS_GRAPHQL_URL,
  CRAFT_CMS_GRAPHQL_TOKEN,
} from "@/configs/constants";

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
      xCraftPreview: xCraftPreview,
      xCraftLivePreview: xCraftLivePreview,
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
