import {
  GetPreviewEntryDocument,
  GetPreviewEntryQuery,
  GetPreviewEntryQueryVariables,
} from "@/graphql/gql/graphql";
import { cmsClient } from "@/graphql/client/graphql-client";

const getEntryPreview = async (
  queryParameter: GetPreviewEntryQueryVariables,
  previewParams: IPreviewParams,
) => {
  const client = cmsClient(previewParams);
  return await client.request(GetPreviewEntryDocument, {
    ...queryParameter,
  });
};

export const getEntryPreviewData = async (
  entryId: number,
  siteId: number,
  token: string,
  xCraftPreview: string,
  xCraftLivePreview: string,
) => {
  const { entry } = (await getEntryPreview(
    {
      siteId: siteId ?? "",
      id: entryId ?? "",
    },
    {
      token: token ?? "",
      xCraftPreview: xCraftPreview ?? "",
      xCraftLivePreview: xCraftLivePreview ?? "",
    },
  )) as GetPreviewEntryQuery;

  return entry;
};
