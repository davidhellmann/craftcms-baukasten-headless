import {graphqlClient} from "../../../lib/graphql/client/graphql-client";
import {queryNewsDetail} from "../../../lib/graphql/queries/news.detail.graphql";
import { notFound } from 'next/navigation';

export const revalidate = false
const getNewsDetail = async (slug: string) => {
  return await graphqlClient.request(queryNewsDetail, {
    slug
  })
}

const NewsDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { entry } = await getNewsDetail(params.slug)

  if (!entry) {
    notFound();
  }

  return (
    <>
      <h1>News Detailpage</h1>
      <h2>Title: {entry.title} | Slug: {entry.slug} | Id: {entry.id}</h2>
    </>
  )
}

export default NewsDetailPage
