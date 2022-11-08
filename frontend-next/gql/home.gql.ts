export const HomepageQuery = `
	query {
		entry(section: "home") {
			... on home_home_Entry {
				seo: seomatic(asArray: true) {
					... on SeomaticType {
						metaTitleContainer
						metaTagContainer
						metaSiteVarsContainer
						metaLinkContainer
						metaJsonLdContainer
					}
				}
				title
        entryCustomTitle
			}
		}
	}
`
