import { gql } from 'graphql-request'

export const PagePathQuery = gql`
	{
		entries(section: "pages", limit: 1000) {
			uri
			typeHandle
		}
	}
`

export const PagesContentBuilderEntryQuery = gql`
	query PagesContentBuilderEntryQuery($uri: [String], $seo: String) {
		entry(section: "pages", uri: $uri, type: "contentBuilder") {
			... on pages_contentBuilder_Entry {
				seo: seomatic(asArray: true, uri: $seo) {
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
        uid
        id
			}
		}
	}
`

export const PagesOverviewNewsEntryQuery = gql`
	query PagesOverviewNewsEntryQuery($uri: [String], $seo: String) {
		entry(section: "pages", uri: $uri, type: "overviewNews") {
			... on pages_overviewNews_Entry {
				seo: seomatic(asArray: true, uri: $seo) {
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
        uid
        id
			}
		}
	}
`

export const pageQueries = {
  contentBuilder: PagesContentBuilderEntryQuery,
  overviewNews: PagesOverviewNewsEntryQuery,
}
