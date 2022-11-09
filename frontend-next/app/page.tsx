import {graphqlClient} from "../lib/graphql/client/graphql-client";
import {queryHome} from "../lib/graphql/queries/home.graphql";
import {notFound} from "next/navigation";

export const revalidate = false
const getHome = async () => {
  return await graphqlClient.request(queryHome, {
    // @ts-ignore
    next: {
      revalidate: 3600
    },
  })
}

const HomePage = async () => {
  const { entry } = await getHome()

  if (!entry) {
    return notFound()
  }

  return (
    <>
      <h1>Home</h1>
      <h2>Title: {entry.title} | Slug: {entry.slug} | Id: {entry.id}</h2>
    </>
  )
}

export default HomePage


