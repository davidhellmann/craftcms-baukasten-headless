import type { APIRoute } from "astro";
import { CONFIG_SITES } from "@/configs/sites";
import {
  GetStaticMessagesDocument,
  GetStaticMessagesQuery,
  GetStaticMessagesQueryVariables,
} from "@/graphql/gql/graphql";

import { getGqlData } from "@/graphql/client/graphql-client";

// @ts-expect-error // Astro problem?
export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang;
  if (!lang) {
    return {
      status: 400,
    };
  }

  const { currentLanguage } =
    (await getGqlData<GetStaticMessagesQueryVariables>(
      GetStaticMessagesDocument,
      {
        language: lang,
      },
    )) as GetStaticMessagesQuery;

  return new Response(
    JSON.stringify({
      currentLanguage,
    }),
  );
};

export function getStaticPaths() {
  return CONFIG_SITES.map((site) => {
    return {
      params: { lang: site.language },
    };
  });
}
