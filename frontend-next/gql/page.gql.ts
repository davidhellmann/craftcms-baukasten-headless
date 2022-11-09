export const PageQuery = `
	query Page($uri: [String]!) {
		entry(uri: $uri) {
      title
      id
      slug
      uri
		}
	}
`
