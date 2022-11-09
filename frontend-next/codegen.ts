import { CodegenConfig } from "@graphql-codegen/cli"
import { CRAFT_CMS_GRAPHQL_URL, CRAFT_CMS_GRAPHQL_TOKEN} from "./lib/constants";

const config: CodegenConfig = {
  "overwrite": true,
  "hooks": {
    "afterOneFileWrite": ["prettier --write"]
  },
  schema: [
    {
      [CRAFT_CMS_GRAPHQL_URL]: {
        headers: {
          'Authentication': `Bearer: ${CRAFT_CMS_GRAPHQL_TOKEN}`
        },
      },
    },
  ],
  ignoreNoDocuments: true,
  documents: [
    "./lib/graphql/queries/**/*.ts",
  ],
  generates: {
    "./lib/graphql/gql/": {
      preset: "client",
      plugins: [
      ],
    },
  },
}

export default config
