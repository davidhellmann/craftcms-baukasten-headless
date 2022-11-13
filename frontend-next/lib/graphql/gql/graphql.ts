import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  QueryArgument: any;
};

export type AssetCriteriaInput = {
  /** Narrows the query results to only elements that have been archived. */
  archived: InputMaybe<Scalars['Boolean']>;
  assetCaption: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the assets’ files’ last-modified dates. */
  dateModified: InputMaybe<Scalars['String']>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the assets’ filenames. */
  filename: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the folders the assets belong to, per the folders’ IDs. */
  folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on whether the assets have alternative text. */
  hasAlt: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the assets’ image heights. */
  height: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars['Boolean']>;
  /** Broadens the query results to include assets from any of the subfolders of the folder specified by `folderId`. */
  includeSubfolders: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the assets’ file kinds. */
  kind: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars['String']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
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
  search: InputMaybe<Scalars['String']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the assets’ file sizes (in bytes). */
  size: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the user the assets were uploaded by, per the user’s ID. */
  uploader: InputMaybe<Scalars['QueryArgument']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ handles. */
  volume: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs. */
  volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the assets’ image widths. */
  width: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** A list of transform handles to preload. */
  withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryCriteriaInput = {
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only elements that have been archived. */
  archived: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf: InputMaybe<Scalars['Int']>;
  /** Whether to only return categories that the user has permission to edit. */
  editable: InputMaybe<Scalars['Boolean']>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the category groups the categories belong to per the group’s handles. */
  group: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the category groups the categories belong to, per the groups’ IDs. */
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level: InputMaybe<Scalars['Int']>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf: InputMaybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars['String']>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore: InputMaybe<Scalars['Int']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf: InputMaybe<Scalars['Int']>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
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
  search: InputMaybe<Scalars['String']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which structure data should be joined into the query. */
  structureId: InputMaybe<Scalars['Int']>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure: InputMaybe<Scalars['Boolean']>;
};

export type EntryCriteriaInput = {
  /** Narrows the query results to only entries that were posted on or after a certain date. */
  after: InputMaybe<Scalars['String']>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only elements that have been archived. */
  archived: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the user group the entries’ authors belong to. */
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the user group the entries’ authors belong to, per the groups’ IDs. */
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the entries’ authors. */
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to only entries that were posted before a certain date. */
  before: InputMaybe<Scalars['String']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf: InputMaybe<Scalars['Int']>;
  /** The drafts’ creator ID */
  draftCreator: InputMaybe<Scalars['Int']>;
  /** The ID of the draft to return (from the `drafts` table) */
  draftId: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only drafts of a given element.  Set to `false` to fetch unpublished drafts. */
  draftOf: InputMaybe<Scalars['QueryArgument']>;
  /** Whether draft elements should be returned. */
  drafts: InputMaybe<Scalars['Boolean']>;
  /** Whether to only return entries that the user has permission to edit. */
  editable: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the entries’ expiry dates. */
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level: InputMaybe<Scalars['Int']>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf: InputMaybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars['String']>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore: InputMaybe<Scalars['Int']>;
  /** Narrows the query results based on the entries’ post dates. */
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf: InputMaybe<Scalars['Int']>;
  /** Whether provisional drafts should be returned. */
  provisionalDrafts: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
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
  revisionCreator: InputMaybe<Scalars['Int']>;
  /** The ID of the revision to return (from the `revisions` table) */
  revisionId: InputMaybe<Scalars['Int']>;
  /** The source element ID that revisions should be returned for */
  revisionOf: InputMaybe<Scalars['QueryArgument']>;
  /** Whether revision elements should be returned. */
  revisions: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results to only elements that match a search query. */
  search: InputMaybe<Scalars['String']>;
  /** Narrows the query results based on the section handles the entries belong to. */
  section: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the sections the entries belong to, per the sections’ IDs. */
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which structure data should be joined into the query. */
  structureId: InputMaybe<Scalars['Int']>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the entries’ entry type handles. */
  type: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the entries’ entry types, per the types’ IDs. */
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure: InputMaybe<Scalars['Boolean']>;
};

/** Optional - The SEOmatic environment that should be used */
export enum SeomaticEnvironment {
  /** Live production environment, with indexing enabled */
  Live = 'live',
  /** Local Development environment, with debugging enabled and indexing disabled */
  Local = 'local',
  /** Staging environment, with indexing disabled */
  Staging = 'staging'
}

export enum SeomaticFrontendTemplate {
  /** The ads.txt file */
  Ads = 'ads',
  /** The humans.txt file */
  Humans = 'humans',
  /** The robots.txt file */
  Robots = 'robots',
  /** The security.txt file */
  Security = 'security'
}

export type TagCriteriaInput = {
  /** Narrows the query results to only elements that have been archived. */
  archived: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the tag groups the tags belong to per the group’s handles. */
  group: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the tag groups the tags belong to, per the groups’ IDs. */
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars['Boolean']>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars['String']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
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
  search: InputMaybe<Scalars['String']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UserCriteriaInput = {
  /** Narrows the query results to only elements that have been archived. */
  archived: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on whether the users have uploaded any assets. */
  assetUploaders: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on whether the users are listed as the author of any entries. */
  authors: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the users’ email addresses. */
  email: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the users’ first names. */
  firstName: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the users’ full names. */
  fullName: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the user group the users belong to. */
  group: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the user group the users belong to, per the groups’ IDs. */
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to only users that have (or don’t have) a user photo. */
  hasPhoto: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the users’ last names. */
  lastName: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars['String']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
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
  search: InputMaybe<Scalars['String']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the users’ usernames. */
  username: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryEntriesAllQueryVariables = Exact<{
  section: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
}>;


export type QueryEntriesAllQuery = { entries: Array<{ id: string, slug: string, uri: string, title: string }> };

export type QueryEntryMetaQueryVariables = Exact<{
  uri: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  section: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
}>;


export type QueryEntryMetaQuery = { entry: { id: string, slug: string, uri: string, title: string } };

export type HomeEntryFragment = { entryCustomTitle: string, entryShortDescription: string };

export type QueryHomeQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryHomeQuery = { entry: { id: string, slug: string, uri: string, title: string } | { id: string, slug: string, uri: string, title: string, entryCustomTitle: string, entryShortDescription: string } };

export type MetaEntryFragment = { id: string, slug: string, uri: string, title: string };

export type NewsContentBuilderEntryFragment = { entryCustomTitle: string, entryShortDescription: string };

export type QueryNewsDetailQueryVariables = Exact<{
  section?: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  slug: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
}>;


export type QueryNewsDetailQuery = { entry: { id: string, slug: string, uri: string, title: string } | { id: string, slug: string, uri: string, title: string, entryCustomTitle: string, entryShortDescription: string } };

export type PageContentBuilderEntryFragment = { entryCustomTitle: string, entryShortDescription: string };

export type QueryPageQueryVariables = Exact<{
  section?: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  uri: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
}>;


export type QueryPageQuery = { entry: { id: string, slug: string, uri: string, title: string } | { id: string, slug: string, uri: string, title: string, entryCustomTitle: string, entryShortDescription: string } };

export const HomeEntryFragmentDoc = gql`
    fragment HomeEntry on home_home_Entry {
  entryCustomTitle
  entryShortDescription
}
    `;
export const MetaEntryFragmentDoc = gql`
    fragment metaEntry on EntryInterface {
  id
  slug
  uri
  title
}
    `;
export const NewsContentBuilderEntryFragmentDoc = gql`
    fragment NewsContentBuilderEntry on news_contentBuilder_Entry {
  entryCustomTitle
  entryShortDescription
}
    `;
export const PageContentBuilderEntryFragmentDoc = gql`
    fragment PageContentBuilderEntry on pages_contentBuilder_Entry {
  entryCustomTitle
  entryShortDescription
}
    `;
export const QueryEntriesAllDocument = gql`
    query QueryEntriesAll($section: [String]!) {
  entries(section: $section) {
    ...metaEntry
  }
}
    ${MetaEntryFragmentDoc}`;
export const QueryEntryMetaDocument = gql`
    query QueryEntryMeta($uri: [String], $slug: [String], $section: [String]!) {
  entry(uri: $uri, slug: $slug, section: $section) {
    ...metaEntry
  }
}
    ${MetaEntryFragmentDoc}`;
export const QueryHomeDocument = gql`
    query QueryHome {
  entry(section: ["home"]) {
    ...metaEntry
    ...HomeEntry
  }
}
    ${MetaEntryFragmentDoc}
${HomeEntryFragmentDoc}`;
export const QueryNewsDetailDocument = gql`
    query QueryNewsDetail($section: [String]! = ["news"], $slug: [String]!) {
  entry(section: $section, slug: $slug) {
    ...metaEntry
    ...NewsContentBuilderEntry
  }
}
    ${MetaEntryFragmentDoc}
${NewsContentBuilderEntryFragmentDoc}`;
export const QueryPageDocument = gql`
    query QueryPage($section: [String]! = ["pages"], $uri: [String]!) {
  entry(section: $section, uri: $uri) {
    ...metaEntry
    ...PageContentBuilderEntry
  }
}
    ${MetaEntryFragmentDoc}
${PageContentBuilderEntryFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    QueryEntriesAll(variables: QueryEntriesAllQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<QueryEntriesAllQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<QueryEntriesAllQuery>(QueryEntriesAllDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'QueryEntriesAll', 'query');
    },
    QueryEntryMeta(variables: QueryEntryMetaQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<QueryEntryMetaQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<QueryEntryMetaQuery>(QueryEntryMetaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'QueryEntryMeta', 'query');
    },
    QueryHome(variables?: QueryHomeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<QueryHomeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<QueryHomeQuery>(QueryHomeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'QueryHome', 'query');
    },
    QueryNewsDetail(variables: QueryNewsDetailQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<QueryNewsDetailQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<QueryNewsDetailQuery>(QueryNewsDetailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'QueryNewsDetail', 'query');
    },
    QueryPage(variables: QueryPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<QueryPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<QueryPageQuery>(QueryPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'QueryPage', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;