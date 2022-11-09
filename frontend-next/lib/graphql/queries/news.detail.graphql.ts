import { graphql } from '../gql';

export const queryNewsDetail = graphql(`
	query NewsDetailPage($slug: [String]!) {
		entry(section: "news", slug: $slug) {
      title
      id
      slug
      uri
		}
	}
`);
