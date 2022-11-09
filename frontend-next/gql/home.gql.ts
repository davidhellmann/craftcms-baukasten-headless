export const HomepageQuery = `
	query {
		entry(section: "home") {
			... on home_home_Entry {
				title
        id
        slug
			}
		}
	}
`
