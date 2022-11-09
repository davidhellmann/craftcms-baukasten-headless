export const NewsDetailPage = `
	query NewsDetailPage($slug: [String]!) {
		entry(section: "news", slug: $slug) {
      title
      id
      slug
      uri
		}
	}
`
