import {graphqlClient} from "../../../lib/graphql/client/graphql-client";
import {QueryEntryMetaDocument} from "../../../lib/graphql/gql/graphql";


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
        <title>{entry.title}</title>
      </>
    )
  }
}

export default Head
