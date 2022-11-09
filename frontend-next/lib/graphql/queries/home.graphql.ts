import { graphql } from '../gql';

export const queryHome = graphql(`
  query Home {
    entry(section: "home") {
      title
      id
      slug
    }
  }
`);

