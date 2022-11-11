import {cmsClient} from "../../../lib/graphql/client/graphql-client";
import {QueryNewsDetailDocument} from "../../../lib/graphql/gql/graphql";
import { notFound } from 'next/navigation';
import TitleUpdater from "../../../components/Global/TitleUpdater";
import React from "react";

interface ISearchParams {
  [key: string]: string
}

// export const revalidate = false
const getNewsDetail = async (slug: string, searchParams: ISearchParams) => {
  const client = cmsClient(searchParams)
  return await client.request(QueryNewsDetailDocument, {
    slug
  })
}

const NewsDetailPage = async ({ params, searchParams }: { params: { slug: string }, searchParams: ISearchParams }) => {
  const { entry } = await getNewsDetail(params.slug, searchParams)

  if (!entry) {
    notFound();
  }

  return (
    <>
      <TitleUpdater title={entry.title} />
      <h1 className={'font-serif text-7xl'}>{entry?.entryCustomTitle || entry?.title}</h1>
      <ul>
        <li>Template: News</li>
        <li>Id: {entry.id}</li>
        <li>Slug: {entry.slug}</li>
        <li>Title: {entry?.title}</li>
        <li>Custom Title: {entry?.entryCustomTitle}</li>
        <li>Short desc: {entry?.entryShortDescription}</li>
      </ul>
    </>
  )
}

export default NewsDetailPage
