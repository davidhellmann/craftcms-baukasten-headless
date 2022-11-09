import {graphqlClient} from "../../../lib/graphql-client";
import {NewsDetailPage} from "../../../gql/news.detail.gql";

const getNewsDetailPage = async (slug: string, cache: number = 3600) => {
  return await graphqlClient.request(NewsDetailPage, {
    slug,
    next: {
      revalidate: cache
    },
  })
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { entry } = await getNewsDetailPage(params.slug)

  if (!entry) {
    return <h1>404</h1>;
  }

  return (
    <>
      <h1>News Detailpage</h1>
      <h2>Title: {entry.title} | Slug: {entry.slug} | Id: {entry.id}</h2>
    </>
  )
}

export default Page
