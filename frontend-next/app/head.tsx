import {graphqlClient} from "../lib/graphql/client/graphql-client";
import {QueryEntryMetaDocument} from "../lib/graphql/gql/graphql";
import React from "react";


const getEntryMeta = async (queryParameter: { section: string[] }) => {
  return await graphqlClient.request(QueryEntryMetaDocument, {
    ...queryParameter
  })
}

const Head = async () => {
  const { entry } = await getEntryMeta({ section: ['home']})

  if (entry) {
    return (
      <>
        <meta
          property="og:image"
          content={`http://localhost:3000/api/og?title=${entry.title} ${entry.title}`}
        />
        <title>{entry.title}</title>
      </>
    )
  }
}

export default Head
