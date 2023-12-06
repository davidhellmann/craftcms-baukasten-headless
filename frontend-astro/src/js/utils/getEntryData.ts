import {
  QueryEntriesBySectionDocument,
  type QueryEntriesBySectionQuery,
  type QueryEntriesBySectionQueryVariables,
} from "@/graphql/gql/graphql";
import {cmsClient} from "@/graphql/client/graphql-client";
import {CONFIG_SITES} from "@/configs/sites";
import {getCurrentSiteData} from "@/utils/getCurrentSiteData";

interface IPreviewParams {
  [key: string]: string;
}

const getAllEntriesBySection = async (
  queryParameter: QueryEntriesBySectionQueryVariables,
  previewParams: IPreviewParams,
) => {
  const client = cmsClient(previewParams);
  return await client.request(QueryEntriesBySectionDocument, {
    ...queryParameter,
  });
};

export const getEntryData = async (SITE_HANDLE: string, SECTIONS: string[] | null = null) => {
  const SITE = CONFIG_SITES.find((site) => site.handle === SITE_HANDLE);

  if (!SITE) return

  const {entries} = (await getAllEntriesBySection(
    {
      site: SITE?.handle ?? "",
      section: SECTIONS ?? SITE?.sections ?? [],
    },
    {},
  )) as QueryEntriesBySectionQuery;

  return entries.map(
    ({
       uri,
       id,
       url,
       title,
       siteHandle,
       siteId,
       sectionHandle,
       typeHandle,
     }) => {
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
          title,
          id,
          siteId,
          siteHandle,
          sectionHandle,
          typeHandle,
          url,
          lang: getCurrentSiteData({handle: siteHandle})?.language ?? "en",
        },
      };
    },
  );
};
