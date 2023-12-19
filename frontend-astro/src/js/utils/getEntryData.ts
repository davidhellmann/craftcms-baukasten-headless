import {
  GetAllEntriesDocument,
  type GetAllEntriesQuery,
  type GetAllEntriesQueryVariables,
} from "@/graphql/gql/graphql";
import { cmsClient } from "@/graphql/client/graphql-client";
import { CONFIG_SITES } from "@/configs/sites";
import { getCurrentSiteData } from "@/utils/getCurrentSiteData";

const getAllEntriesBySection = async (
  queryParameter: GetAllEntriesQueryVariables,
  previewParams: IPreviewParams,
) => {
  const client = cmsClient(previewParams);
  return await client.request(GetAllEntriesDocument, {
    ...queryParameter,
  });
};

export const getEntryData = async (
  SITE_HANDLE: string,
  SECTIONS: string[] | null = null,
) => {
  const SITE = CONFIG_SITES.find((site) => site.handle === SITE_HANDLE);

  if (!SITE) return;

  const { entries } = (await getAllEntriesBySection(
    {
      site: SITE?.handle ?? "",
      section: SECTIONS ?? SITE?.sections ?? [],
    },
    {},
  )) as GetAllEntriesQuery;

  return entries.map(
    ({ uri, id, url, siteHandle, siteId, sectionHandle, typeHandle }) => {
      // This was for one page catching all routes
      // const locale = getCurrentSiteData(
      //   {
      //     handle: siteHandle,
      //   }
      // )?.urlParameterTrailingSlash ?? "";
      const locale = "";
      const finalUri = `${locale}${uri === "__home__" ? "index" : uri ?? ""}`;

      return {
        params: {
          uri: finalUri,
        },
        props: {
          entryId: id,
          siteId,
          siteHandle,
          sectionHandle,
          typeHandle,
          url,
          lang: getCurrentSiteData({ handle: siteHandle })?.language ?? "en",
        },
      };
    },
  );
};
