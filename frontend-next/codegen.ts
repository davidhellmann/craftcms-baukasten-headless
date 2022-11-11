import { CodegenConfig } from "@graphql-codegen/cli"
import { CRAFT_CMS_GRAPHQL_URL, CRAFT_CMS_GRAPHQL_TOKEN} from "./lib/constants";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [CRAFT_CMS_GRAPHQL_URL]: {
        headers: {
          Authentication: `Bearer: ${CRAFT_CMS_GRAPHQL_TOKEN}`
        },
      },
    },
  ],
  documents: [
    "./lib/graphql/queries/**/*.ts",
  ],
  generates: {
    "./lib/graphql/gql/": {
      preset: "client",
      plugins: [],
      config: {
        withHooks: true,
        maybeValue: "T",
        avoidOptionals: {
          field: true,
          inputValue: true,
          object: true,
          defaultValue: true
        }
      }
    }
  }
}

export default config
