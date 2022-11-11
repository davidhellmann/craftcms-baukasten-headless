import {graphqlClient} from "../../../lib/graphql/client/graphql-client";
import {QueryEntryMetaDocument} from "../../../lib/graphql/gql/graphql";

const getEntryMeta = async (uri: string) => {
  return await graphqlClient.request(QueryEntryMetaDocument, {
    uri
  })
}

const Head = async ({ params }: { params: { uri: string[] } }) => {
  const { entry } = await getEntryMeta(params.uri ? params.uri.join('/') : '__home__')

  if (entry) {
    return (
      <>
        <title>{entry.title}</title>
      </>
    )
  }
}

export default Head
