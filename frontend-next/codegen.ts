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
    "./lib/graphql/queries/**/*.graphql",
  ],
  generates: {
    "./lib/graphql/gql/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request"
      ],
      config: {
        skipTypename: true,
        onlyOperationTypes: true,
        maybeValue: "T",
        avoidOptionals: {
          field: true,
          inputValue: true,
          object: true,
          defaultValue: true
        },
        mergeFragmentTypes: true
      }
    }
  }
}

export default config
