import { graphql } from '../gql';

export const queryEntriesAll = graphql(`
	query getAllEntries($section: [String]!) {
    entries(section: $section) {
      title
      id
      slug
      uri
    }
  }
`);
