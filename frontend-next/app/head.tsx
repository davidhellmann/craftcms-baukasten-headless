import {graphqlClient} from "../lib/graphql/client/graphql-client";
import {QueryEntryMetaDocument} from "../lib/graphql/gql/graphql";


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
        <title>{entry.title}</title>
      </>
    )
  }
}

export default Head
