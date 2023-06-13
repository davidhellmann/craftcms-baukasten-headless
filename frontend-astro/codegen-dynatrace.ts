import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
  overwrite: true,
  schema: [
    {
      [`${process.env.CRAFT_CMS_GRAPHQL_URL}`]: {
        headers: {
          Authorization: `Bearer ${process.env.CRAFT_CMS_GRAPHQL_TOKEN}`,
        },
      },
    },
  ],
  documents: [
    "./src/graphql/queries/**/*.ts",
    "./src/graphql/queries/**/*.graphql",
  ],
  generates: {
    "./src/graphql/gql/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        withHooks: true,
        skipTypename: true,
        onlyOperationTypes: true,
        maybeValue: "T",
        avoidOptionals: {
          field: true,
          inputValue: true,
          object: true,
          defaultValue: true,
        },
      },
    },
  },
};

export default config;
