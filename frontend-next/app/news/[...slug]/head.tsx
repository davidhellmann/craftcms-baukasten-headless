import {graphqlClient} from "../../../lib/graphql/client/graphql-client";
import {QueryEntryMetaDocument} from "../../../lib/graphql/gql/graphql";
import React from "react";


const getEntryMeta = async (queryParameter: { section: string[], slug: string }) => {
  return await graphqlClient.request(QueryEntryMetaDocument, {
    ...queryParameter
  })
}

const Head = async ({ params }: { params: { slug: string } }) => {
  const { entry } = await getEntryMeta({
    slug: params.slug,
    section: ['news']
  })

  if (entry) {
    return (
      <>
        <meta
          property="og:image"
          content={`https://nextjs.baukasten.dev/api/og?title=${entry.title}`}
        />
        <title>{entry.title}</title>
      </>
    )
  }
}

export default Head
