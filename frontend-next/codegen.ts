import { CodegenConfig } from "@graphql-codegen/cli"
import { CRAFT_CMS_GRAPHQL_URL, CRAFT_CMS_GRAPHQL_TOKEN} from "./lib/constants";

const config: CodegenConfig = {
  schema: [
    {
      [CRAFT_CMS_GRAPHQL_URL]: {
        headers: {
          'Authentication': `Bearer: ${CRAFT_CMS_GRAPHQL_TOKEN}`
        },
      },
    },
  ],
  documents: [
    "gql/**/*.ts",
    "app/**/*.tsx",
    "app/**/*.ts"
  ],
  ignoreNoDocuments: true,
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [
      ],
    },
  },
}

export default config
