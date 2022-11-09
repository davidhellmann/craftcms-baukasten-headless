import {graphqlClient} from "../lib/graphql/client/graphql-client";
import {queryEntryMeta} from "../lib/graphql/queries/entry.meta.graphql";

const getEntryMeta = async (uri: string) => {
  return await graphqlClient.request(queryEntryMeta, {
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
