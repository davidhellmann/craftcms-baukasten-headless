import {graphqlClient} from "../lib/graphql/client/graphql-client";
import {QueryEntryMetaDocument} from "../lib/graphql/gql/graphql";
import {Seomatic} from "../components/Global/Seomatic";
import React from "react";

const getEntryMeta = async (queryParameter: { section: string[] }) => {
  return await graphqlClient.request(QueryEntryMetaDocument, {
    ...queryParameter
  })
}

const Head = async () => {
  const {entry} = await getEntryMeta({section: ['home']})

  if (entry) {
    return (
      <>
        <Seomatic seo={entry.seomatic} />
      </>
    )
  }
}

export default Head
