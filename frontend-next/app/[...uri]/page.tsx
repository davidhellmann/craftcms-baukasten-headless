import {graphqlClient} from "../../lib/graphql/client/graphql-client";
import {queryPage} from "../../lib/graphql/queries/page.graphql";
import {queryEntriesAll} from "../../lib/graphql/queries/entries.all.graphql";
import {notFound} from "next/navigation";

export const revalidate = 3600
const getPage = async (uri: string) => {
  return await graphqlClient.request(queryPage, {
    uri,
  })
}

const PagesPage = async ({ params }: { params: { uri: string[] } }) => {
  const { entry } = await getPage(params.uri.join('/'))

  if (!entry) {
    return notFound()
  }

  return (
    <>
      <h1>Page</h1>
      <h2>Title: {entry.title} | Slug: {entry.slug} | Id: {entry.id}</h2>
    </>
  )
}

export default PagesPage

export const generateStaticParams = async () => {
  const {entries} = await graphqlClient.request(queryEntriesAll, {
    section: ['pages']
  })

  if (entries) {
    return entries.map((entry) => ({
      uri: entry?.uri?.split('/')
    }))
  }
}
