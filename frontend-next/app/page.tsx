import React from "react";
import {cmsClient} from "../lib/graphql/client/graphql-client";
import {MetaEntryFragment, QueryEntriesAllDocument, QueryHomeDocument} from "../lib/graphql/gql/graphql";
import {notFound} from "next/navigation";
import TitleUpdater from "../components/Global/TitleUpdater";
import { previewData } from 'next/headers';

interface IPreviewParams {
  [key: string]: string
}

// export const revalidate = false
const getHome = async (previewParams: IPreviewParams) => {
  const client = cmsClient(previewParams)
  return await client.request(QueryHomeDocument, {})
}

const HomePage = async () => {
  const preview = previewData();
  const isPreviewMode = !!preview && preview.secret === process.env.CRAFT_CMS_PREVIEW_TOKEN;
  const { entry } = await getHome(preview && isPreviewMode ? preview : {})

  if (!entry) {
    return notFound()
  }

  return (
    <>
      {isPreviewMode && <div className={'fixed inline-flex items-center w-auto bottom-4 left-1/2 -translate-x-1/2 bg-primary-100 rounded-lg p-4 text-primary-500 text-center font-bold'}>Preview mode <a href="/api/preview/clear">Exit preview</a></div>}
      <TitleUpdater title={entry.title} />
      <h1 className={'font-serif text-7xl'}>{entry?.entryCustomTitle || entry?.title}</h1>
      <ul>
        <li>Template: Home</li>
        <li>Id: {entry.id}</li>
        <li>Slug: {entry.slug}</li>
        <li>Title: {entry?.title}</li>
        <li>Custom Title: {entry?.entryCustomTitle}</li>
        <li>Short desc: {entry?.entryShortDescription}</li>
      </ul>
    </>
  )
}

export default HomePage
