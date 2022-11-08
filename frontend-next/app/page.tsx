import { graphql} from "../gql";
import { graphqlClient } from "../lib/graphql-client";
import {HomepageQuery} from "../gql/home.gql";

export const revalidate = 3600;

const getHomepage = graphql(/* GraphQL */ HomepageQuery);

const Page = async () => {
  const data = await graphqlClient.request(getHomepage, {});
  console.log(data)

  return (
    <h1>Hold my beer</h1>
  )
}

export default Page
