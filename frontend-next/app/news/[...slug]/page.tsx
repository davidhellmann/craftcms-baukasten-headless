import {cmsClient} from "../../../lib/graphql/client/graphql-client";
import {EntryMetaFragment, QueryEntriesAllDocument, QueryNewsDetailDocument} from "../../../lib/graphql/gql/graphql";
import {notFound} from 'next/navigation';
import React from "react";
import {PageTransition} from "../../../components/FramerMotion/PageTransition";
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

const NewsDetailPage = async ({params}: { params: { slug: string } }) => {
  // const preview = previewData();
  // const isPreviewMode = !!preview && preview.secret === process.env.CRAFT_CMS_PREVIEW_TOKEN;
  // const { entry } = await getNewsDetail(params.slug, preview && isPreviewMode ? preview : {})
  const {entry} = await getNewsDetail(params.slug, {})

  if (!entry) {
    notFound();
  }

  return (
    <>
      <PageTransition className="">
        <h1 className={'font-serif text-7xl'}>{entry?.entryCustomTitle || entry?.title}</h1>
        <ul>
          <li>Template: News</li>
          <li>Id: {entry.id}</li>
          <li>Slug: {entry.slug}</li>
          <li>Title: {entry?.title}</li>
          <li>Custom Title: {entry?.entryCustomTitle}</li>
          <li>Short desc: {entry?.entryShortDescription}</li>
        </ul>
      </PageTransition>
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
    return entries.map((entry: EntryMetaFragment) => ({
      slug: [entry?.slug]
    }))
  }
}

