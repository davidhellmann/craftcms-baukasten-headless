import { GraphQLClient } from "graphql-request";
import {CRAFT_CMS_GRAPHQL_URL, CRAFT_CMS_GRAPHQL_TOKEN} from "../../constants";

export const graphqlClient = new GraphQLClient(
  CRAFT_CMS_GRAPHQL_URL,
  {
    headers: {
      'Authentication': `Bearer: ${CRAFT_CMS_GRAPHQL_TOKEN}`
    },
  }
);
