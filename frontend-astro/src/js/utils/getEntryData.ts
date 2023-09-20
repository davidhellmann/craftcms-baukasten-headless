import { parseSEO } from "@utils/parseSEO";
import {
  QueryEntriesBySectionDocument,
  QueryEntriesBySectionQuery,
  QueryEntriesBySectionQueryVariables,
} from "@graphql/gql/graphql";
import { cmsClient } from "@graphql/client/graphql-client";
import { CONFIG_SITES } from "@configs/sites";
import { getCurrentSiteData } from "@utils/getCurrentSiteData";

interface IPreviewParams {
  [key: string]: string;
}

const getAllEntriesBySection = async (
  queryParameter: QueryEntriesBySectionQueryVariables,
  previewParams: IPreviewParams
) => {
  const client = cmsClient(previewParams);
  return await client.request(QueryEntriesBySectionDocument, {
    ...queryParameter,
  });
};

export const getEntryData = async (SITE_HANDLE: string) => {
  const SITE = CONFIG_SITES.find((site) => site.handle === SITE_HANDLE);

  const { entries } = (await getAllEntriesBySection(
    {
      site: SITE?.handle ?? [],
      section: SITE?.sections ?? [],
      language: SITE?.language ?? 'en',
    },
    {}
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
      seo,
    }) => {
      // const locale =
      //   getCurrentSiteData({
      //     handle: siteHandle,
      //   })?.urlParameterTrailingSlash ?? "";
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
          lang: getCurrentSiteData({ handle: siteHandle })?.language ?? "en",
          seo: parseSEO(seo),
        },
      };
    }
  );
};
