import {graphqlClient} from "../../lib/graphql/client/graphql-client";
import {QueryEntryMetaDocument} from "../../lib/graphql/gql/graphql";

const getEntryMeta = async (queryParameter: { section: string[], uri: string }) => {
  return await graphqlClient.request(QueryEntryMetaDocument, {
    ...queryParameter
  })
}

const Head = async ({ params }: { params: { uri: string[] } }) => {
  const { entry } = await getEntryMeta({
    uri: params.uri.join('/'),
    section: ['pages']
  })

  if (entry) {
    return (
      <>
        <title>{entry.title}</title>
      </>
    )
  }
}

export default Head
