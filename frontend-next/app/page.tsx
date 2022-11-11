import {cmsClient} from "../lib/graphql/client/graphql-client";
import {QueryHomeDocument} from "../lib/graphql/gql/graphql";
import {notFound} from "next/navigation";

interface ISearchParams {
  [key: string]: string
}

export const revalidate = false
const getHome = async (searchParams: ISearchParams) => {
  const client = cmsClient(searchParams)
  return await client.request(QueryHomeDocument, {})
}

const HomePage = async ({searchParams}: { searchParams?: ISearchParams}) => {
  const { entry } = await getHome(searchParams ? searchParams : {})

  if (!entry) {
    return notFound()
  }

  return (
    <>
      <h1>{entry?.entryCustomTitle || entry?.title}</h1>
      <ul>
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


