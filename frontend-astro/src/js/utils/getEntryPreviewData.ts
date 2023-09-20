import {
  QueryEntryPreviewDocument,
  QueryEntryPreviewQuery,
  QueryEntryPreviewQueryVariables,
} from "@graphql/gql/graphql";
import { cmsClient } from "@graphql/client/graphql-client";

interface IPreviewParams {
  [key: string]: string;
}

const getEntryPreview = async (
  queryParameter: QueryEntryPreviewQueryVariables,
  previewParams: IPreviewParams
) => {
  const client = cmsClient(previewParams);
  return await client.request(QueryEntryPreviewDocument, {
    ...queryParameter,
  });
};

export const getEntryPreviewData = async (
  id: number,
  siteId: number,
  token: string,
  xCraftPreview: string,
  xCraftLivePreview: string
) => {
  const { entry } = (await getEntryPreview(
    {
      siteId: siteId ?? "",
      id: id ?? "",
    },
    {
      token: token ?? "",
      "x-craft-preview": xCraftPreview ?? "",
      "x-craft-live-preview": xCraftLivePreview ?? "",
    }
  )) as QueryEntryPreviewQuery;

  return entry;
};
