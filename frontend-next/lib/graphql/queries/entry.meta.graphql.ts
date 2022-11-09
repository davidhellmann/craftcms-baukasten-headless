import { graphql } from '../gql';

export const queryEntryMeta = graphql(`
	query Page($uri: [String]!) {
		entry(uri: $uri) {
      title
      id
      slug
      uri
		}
	}
`);
