import { GraphQLClient } from "graphql-request";
import { GraphQLClientRequestHeaders } from "graphql-request/build/cjs/types";
import gql from "graphql-tag";
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  QueryArgument: { input: any; output: any };
};

export type AssetCriteriaInput = {
  /** Narrows the query results to only elements that have been archived. */
  archived: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the assets’ files’ last-modified dates. */
  dateModified: InputMaybe<Scalars["String"]["input"]>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the assets’ filenames. */
  filename: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the folders the assets belong to, per the folders’ IDs. */
  folderId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on whether the assets have alternative text. */
  hasAlt: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the assets’ image heights. */
  height: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Broadens the query results to include assets from any of the subfolders of the folder specified by `folderId`. */
  includeSubfolders: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the assets’ file kinds. */
  kind: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars["String"]["input"]>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search: InputMaybe<Scalars["String"]["input"]>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results based on the assets’ file sizes (in bytes). */
  size: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  textCaption: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  textSource: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  textSourceUrl: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  textTitleOverwrite: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the user the assets were uploaded by, per the user’s ID. */
  uploader: InputMaybe<Scalars["QueryArgument"]["input"]>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ handles. */
  volume: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs. */
  volumeId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on the assets’ image widths. */
  width: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** A list of transform handles to preload. */
  withTransforms: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CategoryCriteriaInput = {
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only elements that have been archived. */
  archived: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf: InputMaybe<Scalars["Int"]["input"]>;
  /** Whether to only return categories that the user has permission to edit. */
  editable: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the category groups the categories belong to per the group’s handles. */
  group: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the category groups the categories belong to, per the groups’ IDs. */
  groupId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars["String"]["input"]>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore: InputMaybe<Scalars["Int"]["input"]>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search: InputMaybe<Scalars["String"]["input"]>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines which structure data should be joined into the query. */
  structureId: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type EntryCriteriaInput = {
  /** Narrows the query results to only entries that were posted on or after a certain date. */
  after: InputMaybe<Scalars["String"]["input"]>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only elements that have been archived. */
  archived: InputMaybe<Scalars["Boolean"]["input"]>;
  assetEntryImage: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results based on the user group the entries’ authors belong to. */
  authorGroup: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the user group the entries’ authors belong to, per the groups’ IDs. */
  authorGroupId: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results based on the entries’ authors. */
  authorId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results to only entries that were posted before a certain date. */
  before: InputMaybe<Scalars["String"]["input"]>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf: InputMaybe<Scalars["Int"]["input"]>;
  /** The drafts’ creator ID */
  draftCreator: InputMaybe<Scalars["Int"]["input"]>;
  /** The ID of the draft to return (from the `drafts` table) */
  draftId: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only drafts of a given element.  Set to `false` to fetch unpublished drafts. */
  draftOf: InputMaybe<Scalars["QueryArgument"]["input"]>;
  /** Whether draft elements should be returned. */
  drafts: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether to only return entries that the user has permission to edit. */
  editable: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the entries’ expiry dates. */
  expiryDate: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars["String"]["input"]>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results based on the entries’ post dates. */
  postDate: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf: InputMaybe<Scalars["Int"]["input"]>;
  /** Whether provisional drafts should be returned. */
  provisionalDrafts: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** The revisions’ creator ID */
  revisionCreator: InputMaybe<Scalars["Int"]["input"]>;
  /** The ID of the revision to return (from the `revisions` table) */
  revisionId: InputMaybe<Scalars["Int"]["input"]>;
  /** The source element ID that revisions should be returned for */
  revisionOf: InputMaybe<Scalars["QueryArgument"]["input"]>;
  /** Whether revision elements should be returned. */
  revisions: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results to only elements that match a search query. */
  search: InputMaybe<Scalars["String"]["input"]>;
  /** Narrows the query results based on the section handles the entries belong to. */
  section: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the sections the entries belong to, per the sections’ IDs. */
  sectionId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  seoSEOmatic: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines which structure data should be joined into the query. */
  structureId: InputMaybe<Scalars["Int"]["input"]>;
  textDescription: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  textTitleOverwrite: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the entries’ entry type handles. */
  type: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the entries’ entry types, per the types’ IDs. */
  typeId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Optional - The SEOmatic environment that should be used */
export enum SeomaticEnvironment {
  /** Live production environment, with indexing enabled */
  Live = "live",
  /** Local Development environment, with debugging enabled and indexing disabled */
  Local = "local",
  /** Staging environment, with indexing disabled */
  Staging = "staging",
}

export enum SeomaticFrontendTemplate {
  /** The ads.txt file */
  Ads = "ads",
  /** The humans.txt file */
  Humans = "humans",
  /** The robots.txt file */
  Robots = "robots",
  /** The security.txt file */
  Security = "security",
}

export type TagCriteriaInput = {
  /** Narrows the query results to only elements that have been archived. */
  archived: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the tag groups the tags belong to per the group’s handles. */
  group: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the tag groups the tags belong to, per the groups’ IDs. */
  groupId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars["String"]["input"]>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search: InputMaybe<Scalars["String"]["input"]>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UserCriteriaInput = {
  /** Narrows the query results to only elements that have been archived. */
  archived: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on whether the users have uploaded any assets. */
  assetUploaders: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on whether the users are listed as the author of any entries. */
  authors: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the users’ email addresses. */
  email: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the users’ first names. */
  firstName: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the users’ full names. */
  fullName: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the user group the users belong to. */
  group: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on the user group the users belong to, per the groups’ IDs. */
  groupId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results to only users that have (or don’t have) a user photo. */
  hasPhoto: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the users’ last names. */
  lastName: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars["String"]["input"]>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search: InputMaybe<Scalars["String"]["input"]>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the users’ usernames. */
  username: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type GetAssetsByFilenameQueryVariables = Exact<{
  filename:
    | Array<InputMaybe<Scalars["String"]["input"]>>
    | InputMaybe<Scalars["String"]["input"]>;
  site:
    | Array<InputMaybe<Scalars["String"]["input"]>>
    | InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetAssetsByFilenameQuery = {
  assets: Array<
    | {
        id: string;
        url: string;
        width: number;
        height: number;
        title: string;
        alt: string;
        filename: string;
        focalPoint: Array<number>;
        base64BlurHash: string;
        srcsetLegacy: string;
        srcset: string;
      }
    | {
        id: string;
        url: string;
        width: number;
        height: number;
        title: string;
        alt: string;
        filename: string;
        focalPoint: Array<number>;
        textTitleOverwrite: string;
        textCaption: string;
        textSource: string;
        textSourceUrl: string;
        base64BlurHash: string;
        srcsetLegacy: string;
        srcset: string;
      }
    | {
        id: string;
        url: string;
        width: number;
        height: number;
        title: string;
        alt: string;
        filename: string;
        focalPoint: Array<number>;
        base64BlurHash: string;
        srcsetLegacy: string;
        srcset: string;
      }
    | {
        id: string;
        url: string;
        width: number;
        height: number;
        title: string;
        alt: string;
        filename: string;
        focalPoint: Array<number>;
        base64BlurHash: string;
        srcsetLegacy: string;
        srcset: string;
      }
  >;
};

export type GetAllEntriesQueryVariables = Exact<{
  site:
    | Array<InputMaybe<Scalars["String"]["input"]>>
    | InputMaybe<Scalars["String"]["input"]>;
  section:
    | Array<InputMaybe<Scalars["String"]["input"]>>
    | InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetAllEntriesQuery = {
  entries: Array<
    | {
        id: string;
        uid: string;
        title: string;
        slug: string;
        uri: string;
        url: string;
        canonicalId: number;
        language: string;
        sectionHandle: string;
        typeHandle: string;
        siteHandle: string;
        siteId: number;
      }
    | {
        id: string;
        uid: string;
        title: string;
        slug: string;
        uri: string;
        url: string;
        canonicalId: number;
        language: string;
        sectionHandle: string;
        typeHandle: string;
        siteHandle: string;
        siteId: number;
      }
    | {
        id: string;
        uid: string;
        title: string;
        slug: string;
        uri: string;
        url: string;
        canonicalId: number;
        language: string;
        sectionHandle: string;
        typeHandle: string;
        siteHandle: string;
        siteId: number;
      }
    | {
        id: string;
        uid: string;
        title: string;
        slug: string;
        uri: string;
        url: string;
        canonicalId: number;
        language: string;
        sectionHandle: string;
        typeHandle: string;
        siteHandle: string;
        siteId: number;
      }
    | {
        id: string;
        uid: string;
        title: string;
        slug: string;
        uri: string;
        url: string;
        canonicalId: number;
        language: string;
        sectionHandle: string;
        typeHandle: string;
        siteHandle: string;
        siteId: number;
      }
  >;
};

export type GetHomeEntryQueryVariables = Exact<{
  site:
    | Array<InputMaybe<Scalars["String"]["input"]>>
    | InputMaybe<Scalars["String"]["input"]>;
  section:
    | Array<InputMaybe<Scalars["String"]["input"]>>
    | InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<
    | Array<InputMaybe<Scalars["String"]["input"]>>
    | InputMaybe<Scalars["String"]["input"]>
  >;
  id: InputMaybe<
    | Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
    | InputMaybe<Scalars["QueryArgument"]["input"]>
  >;
}>;

export type GetHomeEntryQuery = {
  entry:
    | {
        id: string;
        uid: string;
        title: string;
        slug: string;
        uri: string;
        url: string;
        canonicalId: number;
        language: string;
        sectionHandle: string;
        typeHandle: string;
        siteHandle: string;
        siteId: number;
        postDateShort: any;
        postDateMedium: any;
        postDateLong: any;
        expireDateShort: any;
        expireDateMedium: any;
        expireDateLong: any;
        postUpdateDateShort: any;
        postUpdateDateMedium: any;
        postUpdateDateLong: any;
        timezone: any;
      }
    | {
        id: string;
        uid: string;
        title: string;
        slug: string;
        uri: string;
        url: string;
        canonicalId: number;
        language: string;
        sectionHandle: string;
        typeHandle: string;
        siteHandle: string;
        siteId: number;
        textTitleOverwrite: string;
        textDescription: string;
        postDateShort: any;
        postDateMedium: any;
        postDateLong: any;
        expireDateShort: any;
        expireDateMedium: any;
        expireDateLong: any;
        postUpdateDateShort: any;
        postUpdateDateMedium: any;
        postUpdateDateLong: any;
        timezone: any;
        assetEntryImage: Array<
          | {
              id: string;
              url: string;
              width: number;
              height: number;
              title: string;
              alt: string;
              filename: string;
              focalPoint: Array<number>;
              base64BlurHash: string;
              srcsetLegacy: string;
              srcset: string;
            }
          | {
              id: string;
              url: string;
              width: number;
              height: number;
              title: string;
              alt: string;
              filename: string;
              focalPoint: Array<number>;
              textTitleOverwrite: string;
              textCaption: string;
              textSource: string;
              textSourceUrl: string;
              base64BlurHash: string;
              srcsetLegacy: string;
              srcset: string;
            }
          | {
              id: string;
              url: string;
              width: number;
              height: number;
              title: string;
              alt: string;
              filename: string;
              focalPoint: Array<number>;
              base64BlurHash: string;
              srcsetLegacy: string;
              srcset: string;
            }
          | {
              id: string;
              url: string;
              width: number;
              height: number;
              title: string;
              alt: string;
              filename: string;
              focalPoint: Array<number>;
              base64BlurHash: string;
              srcsetLegacy: string;
              srcset: string;
            }
        >;
      }
    | {
        id: string;
        uid: string;
        title: string;
        slug: string;
        uri: string;
        url: string;
        canonicalId: number;
        language: string;
        sectionHandle: string;
        typeHandle: string;
        siteHandle: string;
        siteId: number;
        postDateShort: any;
        postDateMedium: any;
        postDateLong: any;
        expireDateShort: any;
        expireDateMedium: any;
        expireDateLong: any;
        postUpdateDateShort: any;
        postUpdateDateMedium: any;
        postUpdateDateLong: any;
        timezone: any;
      }
    | {
        id: string;
        uid: string;
        title: string;
        slug: string;
        uri: string;
        url: string;
        canonicalId: number;
        language: string;
        sectionHandle: string;
        typeHandle: string;
        siteHandle: string;
        siteId: number;
        postDateShort: any;
        postDateMedium: any;
        postDateLong: any;
        expireDateShort: any;
        expireDateMedium: any;
        expireDateLong: any;
        postUpdateDateShort: any;
        postUpdateDateMedium: any;
        postUpdateDateLong: any;
        timezone: any;
      }
    | {
        id: string;
        uid: string;
        title: string;
        slug: string;
        uri: string;
        url: string;
        canonicalId: number;
        language: string;
        sectionHandle: string;
        typeHandle: string;
        siteHandle: string;
        siteId: number;
        postDateShort: any;
        postDateMedium: any;
        postDateLong: any;
        expireDateShort: any;
        expireDateMedium: any;
        expireDateLong: any;
        postUpdateDateShort: any;
        postUpdateDateMedium: any;
        postUpdateDateLong: any;
        timezone: any;
      };
};

export type GetPreviewEntryQueryVariables = Exact<{
  siteId:
    | Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
    | InputMaybe<Scalars["QueryArgument"]["input"]>;
  id:
    | Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
    | InputMaybe<Scalars["QueryArgument"]["input"]>;
}>;

export type GetPreviewEntryQuery = {
  entry:
    | {
        id: string;
        uid: string;
        title: string;
        slug: string;
        uri: string;
        url: string;
        canonicalId: number;
        language: string;
        sectionHandle: string;
        typeHandle: string;
        siteHandle: string;
        siteId: number;
      }
    | {
        id: string;
        uid: string;
        title: string;
        slug: string;
        uri: string;
        url: string;
        canonicalId: number;
        language: string;
        sectionHandle: string;
        typeHandle: string;
        siteHandle: string;
        siteId: number;
      }
    | {
        id: string;
        uid: string;
        title: string;
        slug: string;
        uri: string;
        url: string;
        canonicalId: number;
        language: string;
        sectionHandle: string;
        typeHandle: string;
        siteHandle: string;
        siteId: number;
      }
    | {
        id: string;
        uid: string;
        title: string;
        slug: string;
        uri: string;
        url: string;
        canonicalId: number;
        language: string;
        sectionHandle: string;
        typeHandle: string;
        siteHandle: string;
        siteId: number;
      }
    | {
        id: string;
        uid: string;
        title: string;
        slug: string;
        uri: string;
        url: string;
        canonicalId: number;
        language: string;
        sectionHandle: string;
        typeHandle: string;
        siteHandle: string;
        siteId: number;
      };
};

type Asset_Data_Files_Asset_Fragment = {
  id: string;
  url: string;
  width: number;
  height: number;
  title: string;
  alt: string;
  filename: string;
  focalPoint: Array<number>;
};

type Asset_Data_Images_Asset_Fragment = {
  id: string;
  url: string;
  width: number;
  height: number;
  title: string;
  alt: string;
  filename: string;
  focalPoint: Array<number>;
};

type Asset_Data_TemplateImages_Asset_Fragment = {
  id: string;
  url: string;
  width: number;
  height: number;
  title: string;
  alt: string;
  filename: string;
  focalPoint: Array<number>;
};

type Asset_Data_Users_Asset_Fragment = {
  id: string;
  url: string;
  width: number;
  height: number;
  title: string;
  alt: string;
  filename: string;
  focalPoint: Array<number>;
};

export type Asset_DataFragment =
  | Asset_Data_Files_Asset_Fragment
  | Asset_Data_Images_Asset_Fragment
  | Asset_Data_TemplateImages_Asset_Fragment
  | Asset_Data_Users_Asset_Fragment;

type Asset_Transforms_Files_Asset_Fragment = {
  base64BlurHash: string;
  srcsetLegacy: string;
  srcset: string;
};

type Asset_Transforms_Images_Asset_Fragment = {
  base64BlurHash: string;
  srcsetLegacy: string;
  srcset: string;
};

type Asset_Transforms_TemplateImages_Asset_Fragment = {
  base64BlurHash: string;
  srcsetLegacy: string;
  srcset: string;
};

type Asset_Transforms_Users_Asset_Fragment = {
  base64BlurHash: string;
  srcsetLegacy: string;
  srcset: string;
};

export type Asset_TransformsFragment =
  | Asset_Transforms_Files_Asset_Fragment
  | Asset_Transforms_Images_Asset_Fragment
  | Asset_Transforms_TemplateImages_Asset_Fragment
  | Asset_Transforms_Users_Asset_Fragment;

type Asset_Custom_Fields_Files_Asset_Fragment = {};

type Asset_Custom_Fields_Images_Asset_Fragment = {
  textTitleOverwrite: string;
  textCaption: string;
  textSource: string;
  textSourceUrl: string;
};

type Asset_Custom_Fields_TemplateImages_Asset_Fragment = {};

type Asset_Custom_Fields_Users_Asset_Fragment = {};

export type Asset_Custom_FieldsFragment =
  | Asset_Custom_Fields_Files_Asset_Fragment
  | Asset_Custom_Fields_Images_Asset_Fragment
  | Asset_Custom_Fields_TemplateImages_Asset_Fragment
  | Asset_Custom_Fields_Users_Asset_Fragment;

type Entry_Data_ErrorPages_Error_Entry_Fragment = {
  id: string;
  uid: string;
  title: string;
  slug: string;
  uri: string;
  url: string;
  canonicalId: number;
  language: string;
  sectionHandle: string;
  typeHandle: string;
  siteHandle: string;
  siteId: number;
};

type Entry_Data_Home_Home_Entry_Fragment = {
  id: string;
  uid: string;
  title: string;
  slug: string;
  uri: string;
  url: string;
  canonicalId: number;
  language: string;
  sectionHandle: string;
  typeHandle: string;
  siteHandle: string;
  siteId: number;
};

type Entry_Data_News_NewsDefault_Entry_Fragment = {
  id: string;
  uid: string;
  title: string;
  slug: string;
  uri: string;
  url: string;
  canonicalId: number;
  language: string;
  sectionHandle: string;
  typeHandle: string;
  siteHandle: string;
  siteId: number;
};

type Entry_Data_Pages_PageContentBuilder_Entry_Fragment = {
  id: string;
  uid: string;
  title: string;
  slug: string;
  uri: string;
  url: string;
  canonicalId: number;
  language: string;
  sectionHandle: string;
  typeHandle: string;
  siteHandle: string;
  siteId: number;
};

type Entry_Data_Pages_PageNews_Entry_Fragment = {
  id: string;
  uid: string;
  title: string;
  slug: string;
  uri: string;
  url: string;
  canonicalId: number;
  language: string;
  sectionHandle: string;
  typeHandle: string;
  siteHandle: string;
  siteId: number;
};

export type Entry_DataFragment =
  | Entry_Data_ErrorPages_Error_Entry_Fragment
  | Entry_Data_Home_Home_Entry_Fragment
  | Entry_Data_News_NewsDefault_Entry_Fragment
  | Entry_Data_Pages_PageContentBuilder_Entry_Fragment
  | Entry_Data_Pages_PageNews_Entry_Fragment;

type Entry_Dates_Posted_ErrorPages_Error_Entry_Fragment = {
  postDateShort: any;
  postDateMedium: any;
  postDateLong: any;
};

type Entry_Dates_Posted_Home_Home_Entry_Fragment = {
  postDateShort: any;
  postDateMedium: any;
  postDateLong: any;
};

type Entry_Dates_Posted_News_NewsDefault_Entry_Fragment = {
  postDateShort: any;
  postDateMedium: any;
  postDateLong: any;
};

type Entry_Dates_Posted_Pages_PageContentBuilder_Entry_Fragment = {
  postDateShort: any;
  postDateMedium: any;
  postDateLong: any;
};

type Entry_Dates_Posted_Pages_PageNews_Entry_Fragment = {
  postDateShort: any;
  postDateMedium: any;
  postDateLong: any;
};

export type Entry_Dates_PostedFragment =
  | Entry_Dates_Posted_ErrorPages_Error_Entry_Fragment
  | Entry_Dates_Posted_Home_Home_Entry_Fragment
  | Entry_Dates_Posted_News_NewsDefault_Entry_Fragment
  | Entry_Dates_Posted_Pages_PageContentBuilder_Entry_Fragment
  | Entry_Dates_Posted_Pages_PageNews_Entry_Fragment;

type Entry_Dates_Expired_ErrorPages_Error_Entry_Fragment = {
  expireDateShort: any;
  expireDateMedium: any;
  expireDateLong: any;
};

type Entry_Dates_Expired_Home_Home_Entry_Fragment = {
  expireDateShort: any;
  expireDateMedium: any;
  expireDateLong: any;
};

type Entry_Dates_Expired_News_NewsDefault_Entry_Fragment = {
  expireDateShort: any;
  expireDateMedium: any;
  expireDateLong: any;
};

type Entry_Dates_Expired_Pages_PageContentBuilder_Entry_Fragment = {
  expireDateShort: any;
  expireDateMedium: any;
  expireDateLong: any;
};

type Entry_Dates_Expired_Pages_PageNews_Entry_Fragment = {
  expireDateShort: any;
  expireDateMedium: any;
  expireDateLong: any;
};

export type Entry_Dates_ExpiredFragment =
  | Entry_Dates_Expired_ErrorPages_Error_Entry_Fragment
  | Entry_Dates_Expired_Home_Home_Entry_Fragment
  | Entry_Dates_Expired_News_NewsDefault_Entry_Fragment
  | Entry_Dates_Expired_Pages_PageContentBuilder_Entry_Fragment
  | Entry_Dates_Expired_Pages_PageNews_Entry_Fragment;

type Entry_Dates_Updated_ErrorPages_Error_Entry_Fragment = {
  postUpdateDateShort: any;
  postUpdateDateMedium: any;
  postUpdateDateLong: any;
};

type Entry_Dates_Updated_Home_Home_Entry_Fragment = {
  postUpdateDateShort: any;
  postUpdateDateMedium: any;
  postUpdateDateLong: any;
};

type Entry_Dates_Updated_News_NewsDefault_Entry_Fragment = {
  postUpdateDateShort: any;
  postUpdateDateMedium: any;
  postUpdateDateLong: any;
};

type Entry_Dates_Updated_Pages_PageContentBuilder_Entry_Fragment = {
  postUpdateDateShort: any;
  postUpdateDateMedium: any;
  postUpdateDateLong: any;
};

type Entry_Dates_Updated_Pages_PageNews_Entry_Fragment = {
  postUpdateDateShort: any;
  postUpdateDateMedium: any;
  postUpdateDateLong: any;
};

export type Entry_Dates_UpdatedFragment =
  | Entry_Dates_Updated_ErrorPages_Error_Entry_Fragment
  | Entry_Dates_Updated_Home_Home_Entry_Fragment
  | Entry_Dates_Updated_News_NewsDefault_Entry_Fragment
  | Entry_Dates_Updated_Pages_PageContentBuilder_Entry_Fragment
  | Entry_Dates_Updated_Pages_PageNews_Entry_Fragment;

type Entry_Dates_Timezone_ErrorPages_Error_Entry_Fragment = { timezone: any };

type Entry_Dates_Timezone_Home_Home_Entry_Fragment = { timezone: any };

type Entry_Dates_Timezone_News_NewsDefault_Entry_Fragment = { timezone: any };

type Entry_Dates_Timezone_Pages_PageContentBuilder_Entry_Fragment = {
  timezone: any;
};

type Entry_Dates_Timezone_Pages_PageNews_Entry_Fragment = { timezone: any };

export type Entry_Dates_TimezoneFragment =
  | Entry_Dates_Timezone_ErrorPages_Error_Entry_Fragment
  | Entry_Dates_Timezone_Home_Home_Entry_Fragment
  | Entry_Dates_Timezone_News_NewsDefault_Entry_Fragment
  | Entry_Dates_Timezone_Pages_PageContentBuilder_Entry_Fragment
  | Entry_Dates_Timezone_Pages_PageNews_Entry_Fragment;

export type EntryType_Home_HomeFragment = {
  textTitleOverwrite: string;
  textDescription: string;
  assetEntryImage: Array<
    | {
        id: string;
        url: string;
        width: number;
        height: number;
        title: string;
        alt: string;
        filename: string;
        focalPoint: Array<number>;
        base64BlurHash: string;
        srcsetLegacy: string;
        srcset: string;
      }
    | {
        id: string;
        url: string;
        width: number;
        height: number;
        title: string;
        alt: string;
        filename: string;
        focalPoint: Array<number>;
        textTitleOverwrite: string;
        textCaption: string;
        textSource: string;
        textSourceUrl: string;
        base64BlurHash: string;
        srcsetLegacy: string;
        srcset: string;
      }
    | {
        id: string;
        url: string;
        width: number;
        height: number;
        title: string;
        alt: string;
        filename: string;
        focalPoint: Array<number>;
        base64BlurHash: string;
        srcsetLegacy: string;
        srcset: string;
      }
    | {
        id: string;
        url: string;
        width: number;
        height: number;
        title: string;
        alt: string;
        filename: string;
        focalPoint: Array<number>;
        base64BlurHash: string;
        srcsetLegacy: string;
        srcset: string;
      }
  >;
};

export type GetSeomaticQueryVariables = Exact<{
  siteId: Scalars["Int"]["input"];
  uri: Scalars["String"]["input"];
}>;

export type GetSeomaticQuery = {
  seomatic: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

export const Entry_DataFragmentDoc = gql`
  fragment entry_data on EntryInterface {
    id
    uid
    title
    slug
    uri
    url
    canonicalId
    language
    sectionHandle
    typeHandle
    siteHandle
    siteId
  }
`;
export const Entry_Dates_PostedFragmentDoc = gql`
  fragment entry_dates_posted on EntryInterface {
    postDateShort: postDate @formatDateTime(format: "short")
    postDateMedium: postDate @formatDateTime(format: "medium")
    postDateLong: postDate @formatDateTime(format: "long")
  }
`;
export const Entry_Dates_ExpiredFragmentDoc = gql`
  fragment entry_dates_expired on EntryInterface {
    expireDateShort: expiryDate @formatDateTime(format: "short")
    expireDateMedium: expiryDate @formatDateTime(format: "medium")
    expireDateLong: expiryDate @formatDateTime(format: "long")
  }
`;
export const Entry_Dates_UpdatedFragmentDoc = gql`
  fragment entry_dates_updated on EntryInterface {
    postUpdateDateShort: dateUpdated @formatDateTime(format: "short")
    postUpdateDateMedium: dateUpdated @formatDateTime(format: "medium")
    postUpdateDateLong: dateUpdated @formatDateTime(format: "long")
  }
`;
export const Entry_Dates_TimezoneFragmentDoc = gql`
  fragment entry_dates_timezone on EntryInterface {
    timezone: postDate @formatDateTime(format: "T")
  }
`;
export const Asset_DataFragmentDoc = gql`
  fragment asset_data on AssetInterface {
    id
    url
    width
    height
    title
    alt
    filename
    focalPoint
  }
`;
export const Asset_TransformsFragmentDoc = gql`
  fragment asset_transforms on AssetInterface {
    base64BlurHash: url @assetToBlurHash
    srcsetLegacy: url @imagerSrcset(handle: "auto")
    srcset: url @imagerSrcset(handle: "autoWebp")
  }
`;
export const Asset_Custom_FieldsFragmentDoc = gql`
  fragment asset_custom_fields on AssetInterface {
    ... on images_Asset {
      textTitleOverwrite
      textCaption
      textSource
      textSourceUrl
    }
  }
`;
export const EntryType_Home_HomeFragmentDoc = gql`
  fragment entryType_home_home on home_home_Entry {
    textTitleOverwrite
    textDescription
    assetEntryImage {
      ...asset_data
      ...asset_transforms
      ...asset_custom_fields
    }
  }
`;
export const GetAssetsByFilenameDocument = gql`
  query GetAssetsByFilename($filename: [String]!, $site: [String]!) {
    assets(filename: $filename, site: $site) {
      ...asset_data
      ...asset_transforms
      ...asset_custom_fields
    }
  }
  ${Asset_DataFragmentDoc}
  ${Asset_TransformsFragmentDoc}
  ${Asset_Custom_FieldsFragmentDoc}
`;
export const GetAllEntriesDocument = gql`
  query GetAllEntries($site: [String]!, $section: [String]!) {
    entries(site: $site, section: $section) {
      ...entry_data
    }
  }
  ${Entry_DataFragmentDoc}
`;
export const GetHomeEntryDocument = gql`
  query GetHomeEntry(
    $site: [String]!
    $section: [String]!
    $type: [String] = ["*"]
    $id: [QueryArgument]
  ) {
    entry(site: $site, section: $section, type: $type, id: $id) {
      ...entry_data
      ...entry_dates_posted
      ...entry_dates_expired
      ...entry_dates_updated
      ...entry_dates_timezone
      ...entryType_home_home
    }
  }
  ${Entry_DataFragmentDoc}
  ${Entry_Dates_PostedFragmentDoc}
  ${Entry_Dates_ExpiredFragmentDoc}
  ${Entry_Dates_UpdatedFragmentDoc}
  ${Entry_Dates_TimezoneFragmentDoc}
  ${EntryType_Home_HomeFragmentDoc}
  ${Asset_DataFragmentDoc}
  ${Asset_TransformsFragmentDoc}
  ${Asset_Custom_FieldsFragmentDoc}
`;
export const GetPreviewEntryDocument = gql`
  query GetPreviewEntry($siteId: [QueryArgument]!, $id: [QueryArgument]!) {
    entry(siteId: $siteId, id: $id) {
      ...entry_data
    }
  }
  ${Entry_DataFragmentDoc}
`;
export const GetSeomaticDocument = gql`
  query GetSeomatic($siteId: Int!, $uri: String!) {
    seomatic(siteId: $siteId, uri: $uri, asArray: true) {
      metaTagContainer
      metaLinkContainer
      metaTitleContainer
      metaScriptContainer
      metaJsonLdContainer
      metaSiteVarsContainer
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    GetAssetsByFilename(
      variables: GetAssetsByFilenameQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetAssetsByFilenameQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAssetsByFilenameQuery>(
            GetAssetsByFilenameDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "GetAssetsByFilename",
        "query",
      );
    },
    GetAllEntries(
      variables: GetAllEntriesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetAllEntriesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAllEntriesQuery>(GetAllEntriesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetAllEntries",
        "query",
      );
    },
    GetHomeEntry(
      variables: GetHomeEntryQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetHomeEntryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetHomeEntryQuery>(GetHomeEntryDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetHomeEntry",
        "query",
      );
    },
    GetPreviewEntry(
      variables: GetPreviewEntryQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetPreviewEntryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetPreviewEntryQuery>(
            GetPreviewEntryDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "GetPreviewEntry",
        "query",
      );
    },
    GetSeomatic(
      variables: GetSeomaticQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetSeomaticQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetSeomaticQuery>(GetSeomaticDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetSeomatic",
        "query",
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
