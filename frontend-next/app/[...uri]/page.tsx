import {graphqlClient} from "../../lib/graphql-client";
import {PageQuery} from "../../gql/page.gql";

const getPageByUri = async (uri: string, cache: number = 3600) => {
  return await graphqlClient.request(PageQuery, {
    uri,
    next: {
      revalidate: cache
    },
  })
}

const Page = async ({ params }: { params: { uri: string[] } }) => {
  const { entry } = await getPageByUri(params.uri.join('/'))

  if (!entry) {
    return <h1>404</h1>;
  }

  return (
    <>
      <h1>Pages</h1>
      <h2>Title: {entry.title} | Slug: {entry.slug} | Id: {entry.id}</h2>
    </>
  )
}

export default Page
