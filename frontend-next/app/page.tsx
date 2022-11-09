import {graphql} from "../gql";
import {graphqlClient} from "../lib/graphql-client";
import {HomepageQuery} from "../gql/home.gql";

const Page = async (cache: number = 3600) => {
  const { entry } = await graphqlClient.request(HomepageQuery, {
    next: {
      revalidate: cache
    },
  })

  return (
    <>
      <h1>Home</h1>
      <h2>Title: {entry.title} | Slug: {entry.slug} | Id: {entry.id}</h2>
    </>
  )
}

export default Page

