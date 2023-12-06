/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "query QueryEntriesBySection($site: [String]!, $section: [String]!) {\n  entries(site: $site, section: $section) {\n    ...entryMeta\n  }\n}":
    types.QueryEntriesBySectionDocument,
  "query QueryEntryPreview($siteId: [QueryArgument]!, $id: [QueryArgument]!) {\n  entry(siteId: $siteId, id: $id) {\n    ...entryMeta\n  }\n}":
    types.QueryEntryPreviewDocument,
  'fragment entryDates on EntryInterface {\n  dateShort: postDate @formatDateTime(format: "short")\n  dateMedium: postDate @formatDateTime(format: "medium")\n  dateLong: postDate @formatDateTime(format: "long")\n  dateTimezone: postDate @formatDateTime(format: "T")\n}':
    types.EntryDatesFragmentDoc,
  "fragment entryMeta on EntryInterface {\n  id\n  title\n  slug\n  uri\n  url\n  canonicalId\n  language\n  sectionHandle\n  typeHandle\n  siteHandle\n  siteId\n}":
    types.EntryMetaFragmentDoc,
  "query QueryEntrySEO($siteId: Int!, $uri: String!) {\n  seomatic(siteId: $siteId, uri: $uri, asArray: true) {\n    metaTagContainer\n    metaLinkContainer\n    metaTitleContainer\n    metaScriptContainer\n    metaJsonLdContainer\n    metaSiteVarsContainer\n  }\n}":
    types.QueryEntrySeoDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query QueryEntriesBySection($site: [String]!, $section: [String]!) {\n  entries(site: $site, section: $section) {\n    ...entryMeta\n  }\n}",
): (typeof documents)["query QueryEntriesBySection($site: [String]!, $section: [String]!) {\n  entries(site: $site, section: $section) {\n    ...entryMeta\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query QueryEntryPreview($siteId: [QueryArgument]!, $id: [QueryArgument]!) {\n  entry(siteId: $siteId, id: $id) {\n    ...entryMeta\n  }\n}",
): (typeof documents)["query QueryEntryPreview($siteId: [QueryArgument]!, $id: [QueryArgument]!) {\n  entry(siteId: $siteId, id: $id) {\n    ...entryMeta\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment entryDates on EntryInterface {\n  dateShort: postDate @formatDateTime(format: "short")\n  dateMedium: postDate @formatDateTime(format: "medium")\n  dateLong: postDate @formatDateTime(format: "long")\n  dateTimezone: postDate @formatDateTime(format: "T")\n}',
): (typeof documents)['fragment entryDates on EntryInterface {\n  dateShort: postDate @formatDateTime(format: "short")\n  dateMedium: postDate @formatDateTime(format: "medium")\n  dateLong: postDate @formatDateTime(format: "long")\n  dateTimezone: postDate @formatDateTime(format: "T")\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment entryMeta on EntryInterface {\n  id\n  title\n  slug\n  uri\n  url\n  canonicalId\n  language\n  sectionHandle\n  typeHandle\n  siteHandle\n  siteId\n}",
): (typeof documents)["fragment entryMeta on EntryInterface {\n  id\n  title\n  slug\n  uri\n  url\n  canonicalId\n  language\n  sectionHandle\n  typeHandle\n  siteHandle\n  siteId\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query QueryEntrySEO($siteId: Int!, $uri: String!) {\n  seomatic(siteId: $siteId, uri: $uri, asArray: true) {\n    metaTagContainer\n    metaLinkContainer\n    metaTitleContainer\n    metaScriptContainer\n    metaJsonLdContainer\n    metaSiteVarsContainer\n  }\n}",
): (typeof documents)["query QueryEntrySEO($siteId: Int!, $uri: String!) {\n  seomatic(siteId: $siteId, uri: $uri, asArray: true) {\n    metaTagContainer\n    metaLinkContainer\n    metaTitleContainer\n    metaScriptContainer\n    metaJsonLdContainer\n    metaSiteVarsContainer\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
