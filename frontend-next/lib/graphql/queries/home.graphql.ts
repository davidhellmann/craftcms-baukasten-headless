import { graphql } from '../gql';

export const queryHome = graphql(`
  query Home($section: [String] = ["home"]) {
    entry(section: $section) {
      id
      title
      siteId
      slug
      ... on home_home_Entry {
        entryCustomTitle
        entryShortDescription
      }
    }
  }
`);

