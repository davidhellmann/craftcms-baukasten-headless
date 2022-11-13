import {cmsClient} from "../../../lib/graphql/client/graphql-client";
import {MetaEntryFragment, QueryEntriesAllDocument, QueryNewsDetailDocument} from "../../../lib/graphql/gql/graphql";
import { notFound } from 'next/navigation';
import TitleUpdater from "../../../components/Global/TitleUpdater";
import React from "react";
import {previewData} from "next/headers";

interface IPreviewParams {
  [key: string]: string
}

// export const revalidate = false
const getNewsDetail = async (slug: string, previewParams: IPreviewParams) => {
  const client = cmsClient(previewParams)
  return await client.request(QueryNewsDetailDocument, {
    slug
  })
}

const NewsDetailPage = async ({ params }: { params: { slug: string } }) => {
  const preview = previewData();
  const isPreviewMode = !!preview && preview.secret === process.env.CRAFT_CMS_PREVIEW_TOKEN;
  const { entry } = await getNewsDetail(params.slug, preview && isPreviewMode ? preview : {})

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

export const generateStaticParams = async () => {
  const client = cmsClient({})
  const {entries} = await client.request(QueryEntriesAllDocument, {
    section: ['news']
  })

  if (entries) {
    return entries.map((entry: MetaEntryFragment) => ({
      slug: [entry?.slug]
    }))
  }
}

