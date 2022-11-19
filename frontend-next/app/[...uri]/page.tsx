import {cmsClient} from "../../lib/graphql/client/graphql-client";
import {
  QueryEntriesAllDocument,
  QueryPageDocument,
  EntryMetaFragment
} from "../../lib/graphql/gql/graphql";
import {notFound} from "next/navigation";
import React from "react";
import {PageTransition} from "../../components/FramerMotion/PageTransition";
import {previewData} from "next/headers";

interface IPreviewParams {
  [key: string]: string
}

// export const revalidate = 3600
const getPage = async (uri: string, previewParams: IPreviewParams) => {
  const client = cmsClient(previewParams)
  return await client.request(QueryPageDocument, {
    uri,
  })
}

const PagesPage = async ({params}: { params: { uri: string[] } }) => {
  // const preview = previewData();
  // const isPreviewMode = !!preview && preview.secret === process.env.CRAFT_CMS_PREVIEW_TOKEN;
  // const { entry } = await getPage(params.uri.join('/'), preview && isPreviewMode ? preview : {})
  const {entry} = await getPage(params.uri.join('/'), {})

  if (!entry) {
    return notFound()
  }

  return (
    <>
      <PageTransition className="">
        <h1 className={'font-serif text-7xl'}>{entry?.entryCustomTitle || entry?.title}</h1>
        <ul>
          <li>Template: Page</li>
          <li>Id: {entry.id}</li>
          <li>Slug: {entry.slug}</li>
          <li>Title: {entry?.title}</li>
          <li>Custom Title: {entry?.entryCustomTitle}</li>
          <li>Short desc: {entry?.entryShortDescription}</li>x
        </ul>
      </PageTransition>
    </>
  )
}

export default PagesPage

export const generateStaticParams = async () => {
  const client = cmsClient({})
  const {entries} = await client.request(QueryEntriesAllDocument, {
    section: ['pages']
  })

  if (entries) {
    return entries.map((entry: EntryMetaFragment) => ({
      uri: entry?.uri?.split('/')
    }))
  }
}
