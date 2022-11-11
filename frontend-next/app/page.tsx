import {cmsClient} from "../lib/graphql/client/graphql-client";
import {queryHome} from "../lib/graphql/queries/home.graphql";
import {notFound} from "next/navigation";

interface ISearchParams {
  [key: string]: string
}

export const revalidate = false
const getHome = async (searchParams: ISearchParams) => {
  const client = cmsClient(searchParams)
  return await client.request(queryHome, {})
}

const HomePage = async ({searchParams}: { searchParams: ISearchParams}) => {
  const { entry } = await getHome(searchParams)

  if (!entry) {
    return notFound()
  }

  return (
    <>

      <h1>{'entryCustomTitle' in entry && entry?.entryCustomTitle || entry?.title}</h1>
      <ul>
        <li>Id: {entry.id}</li>
        <li>Slug: {entry.slug}</li>
        <li>Title: {entry?.title}</li>
        <li>Custom Title: {'entryCustomTitle' in entry && entry?.entryCustomTitle}</li>
        <li>Short desc: {'entryShortDescription' in entry && entry?.entryShortDescription}</li>
      </ul>
    </>
  )
}

export default HomePage


