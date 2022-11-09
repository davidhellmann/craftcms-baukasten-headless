import { graphql } from '../gql';

export const queryPage = graphql(`
	query Page($uri: [String]!) {
		entry(uri: $uri) {
      title
      id
      slug
      uri
		}
	}
`);
