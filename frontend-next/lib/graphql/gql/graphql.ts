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

export type AssetFocalpointFragment = { hasFocalPoint: boolean, focalPoint: Array<number> };

export type AssetImagerAutoFragment = { base64: string, srcsetLegacy: string, srcset: string };

export type AssetMetaFragment = { id: string, url: string, title: string, alt: string, height: number, width: number, extension: string };

type BlockCode_BuilderContent_BlockCode_BlockType_Fragment = { snippetName: string, snippetLanguage: string, snippetCollapsed: boolean, snippet: string, id: string, typeHandle: string };

type BlockCode_Up70AitFfgsNpdFfYHfZd_0eUFtss09Stfq_0Leedu_Fragment = {};

export type BlockCodeFragment = BlockCode_BuilderContent_BlockCode_BlockType_Fragment | BlockCode_Up70AitFfgsNpdFfYHfZd_0eUFtss09Stfq_0Leedu_Fragment;

type BlockDivider_Lq1idn94kALvXWbGyHQiGe38Gbf402AQrsFbNm4XiBw_Fragment = {};

type BlockDivider_BuilderContent_BlockDivider_BlockType_Fragment = { dividerVariant: string };

export type BlockDividerFragment = BlockDivider_Lq1idn94kALvXWbGyHQiGe38Gbf402AQrsFbNm4XiBw_Fragment | BlockDivider_BuilderContent_BlockDivider_BlockType_Fragment;

type BlockImage_UTKTiIanONptBiEgKtJTzYrdvBxAzi4zipGadTsMlY_Fragment = {};

type BlockImage_BuilderContent_BlockImage_BlockType_Fragment = { imageTransform: string, showImageCaption: boolean, imageWidth: string, image: Array<{ id: string, url: string, title: string, alt: string, height: number, width: number, extension: string, hasFocalPoint: boolean, focalPoint: Array<number>, base64: string, srcsetLegacy: string, srcset: string }> };

export type BlockImageFragment = BlockImage_UTKTiIanONptBiEgKtJTzYrdvBxAzi4zipGadTsMlY_Fragment | BlockImage_BuilderContent_BlockImage_BlockType_Fragment;

type BlockImageGallery_QEd0ghQbz4hsFDqsotP2lKgyPaMbNmNkOpmDa4xI_Fragment = {};

type BlockImageGallery_BuilderContent_BlockImageGallery_BlockType_Fragment = { images: Array<{ id: string, url: string, title: string, alt: string, height: number, width: number, extension: string, hasFocalPoint: boolean, focalPoint: Array<number>, base64: string, srcsetLegacy: string, srcset: string }> };

export type BlockImageGalleryFragment = BlockImageGallery_QEd0ghQbz4hsFDqsotP2lKgyPaMbNmNkOpmDa4xI_Fragment | BlockImageGallery_BuilderContent_BlockImageGallery_BlockType_Fragment;

type BlockImageGrid_LXvsLUoSgostPvpzjdDyGaCsc4ugdUJy4TDc2FoOui_Fragment = {};

type BlockImageGrid_BuilderContent_BlockImageGrid_BlockType_Fragment = { imageColumns: string, imageTransform: string, showImageCaption: boolean, images: Array<{ id: string, url: string, title: string, alt: string, height: number, width: number, extension: string, hasFocalPoint: boolean, focalPoint: Array<number>, base64: string, srcsetLegacy: string, srcset: string }> };

export type BlockImageGridFragment = BlockImageGrid_LXvsLUoSgostPvpzjdDyGaCsc4ugdUJy4TDc2FoOui_Fragment | BlockImageGrid_BuilderContent_BlockImageGrid_BlockType_Fragment;

type BlockImageGridCalculated_VcU2OzDFa5lYqqry4VVpGFnXLsoeVopK1nRpMt3NQg_Fragment = {};

type BlockImageGridCalculated_BuilderContent_BlockImageGridCalculated_BlockType_Fragment = { images: Array<{ id: string, url: string, title: string, alt: string, height: number, width: number, extension: string, hasFocalPoint: boolean, focalPoint: Array<number>, base64: string, srcsetLegacy: string, srcset: string }> };

export type BlockImageGridCalculatedFragment = BlockImageGridCalculated_VcU2OzDFa5lYqqry4VVpGFnXLsoeVopK1nRpMt3NQg_Fragment | BlockImageGridCalculated_BuilderContent_BlockImageGridCalculated_BlockType_Fragment;

type BlockImageSlider_MHemJbLdXu3jdqam6Me9Eqnwg5MevzMElYHu2uClbu_Fragment = {};

type BlockImageSlider_BuilderContent_BlockImageSlider_BlockType_Fragment = { imageTransform: string, images: Array<{ id: string, url: string, title: string, alt: string, height: number, width: number, extension: string, hasFocalPoint: boolean, focalPoint: Array<number>, base64: string, srcsetLegacy: string, srcset: string }> };

export type BlockImageSliderFragment = BlockImageSlider_MHemJbLdXu3jdqam6Me9Eqnwg5MevzMElYHu2uClbu_Fragment | BlockImageSlider_BuilderContent_BlockImageSlider_BlockType_Fragment;

type BlockQuote_Z7UvF04z4agwLhcNbF8blPe9DbW0sPIc26Vgt6jpJe_Fragment = {};

type BlockQuote_BuilderContent_BlockQuote_BlockType_Fragment = { quote: string, source: string, sourceSubline: string, sourceUrl: string };

export type BlockQuoteFragment = BlockQuote_Z7UvF04z4agwLhcNbF8blPe9DbW0sPIc26Vgt6jpJe_Fragment | BlockQuote_BuilderContent_BlockQuote_BlockType_Fragment;

type BlockSection_Bez6a390Zzkav_8Anmw9JhSgGUobGbKLKHyEzbu04_Fragment = {};

type BlockSection_BuilderContent_BlockSection_BlockType_Fragment = { sectionBackgroundColor: string, sectionPaddingVertical: string, spaceBetweenBlocks: string };

export type BlockSectionFragment = BlockSection_Bez6a390Zzkav_8Anmw9JhSgGUobGbKLKHyEzbu04_Fragment | BlockSection_BuilderContent_BlockSection_BlockType_Fragment;

type BlockSpacer_ZFbYWp2yU4ztyPwh4gE9oWcchh83VjarHp54AnC_9pI_Fragment = {};

type BlockSpacer_BuilderContent_BlockSpacer_BlockType_Fragment = { spacerVariant: string };

export type BlockSpacerFragment = BlockSpacer_ZFbYWp2yU4ztyPwh4gE9oWcchh83VjarHp54AnC_9pI_Fragment | BlockSpacer_BuilderContent_BlockSpacer_BlockType_Fragment;

type BlockText_2T7CJxEqvWdPr2PtXi9NHBhd4FyfFmNdorQjj640_Fragment = {};

type BlockText_BuilderContent_BlockText_BlockType_Fragment = { text: string };

export type BlockTextFragment = BlockText_2T7CJxEqvWdPr2PtXi9NHBhd4FyfFmNdorQjj640_Fragment | BlockText_BuilderContent_BlockText_BlockType_Fragment;

type BlockTextFloatingImage_QarYyILp1R7b1m6XzStIGlQ1dtCcCnDtUh5UmvAmdo_Fragment = {};

type BlockTextFloatingImage_BuilderContent_BlockTextFloatingImage_BlockType_Fragment = { text: string, imageTransform: string, showImageCaption: boolean, imagePosition: boolean, image: Array<{ id: string, url: string, title: string, alt: string, height: number, width: number, extension: string, hasFocalPoint: boolean, focalPoint: Array<number>, base64: string, srcsetLegacy: string, srcset: string }> };

export type BlockTextFloatingImageFragment = BlockTextFloatingImage_QarYyILp1R7b1m6XzStIGlQ1dtCcCnDtUh5UmvAmdo_Fragment | BlockTextFloatingImage_BuilderContent_BlockTextFloatingImage_BlockType_Fragment;

type BlockVideoYoutube_373yyQtktKx0WjyJkTff2eaFhx2y6F5N2J4B05fLk4A_Fragment = {};

type BlockVideoYoutube_BuilderContent_BlockVideoYoutube_BlockType_Fragment = { autoplay: boolean, loop: boolean, videoWidth: string, videoId: string };

export type BlockVideoYoutubeFragment = BlockVideoYoutube_373yyQtktKx0WjyJkTff2eaFhx2y6F5N2J4B05fLk4A_Fragment | BlockVideoYoutube_BuilderContent_BlockVideoYoutube_BlockType_Fragment;

type BlockMeta_BuilderContent_BlockCode_BlockType_Fragment = { id: string, typeHandle: string };

type BlockMeta_Up70AitFfgsNpdFfYHfZd_0eUFtss09Stfq_0Leedu_Fragment = {};

export type BlockMetaFragment = BlockMeta_BuilderContent_BlockCode_BlockType_Fragment | BlockMeta_Up70AitFfgsNpdFfYHfZd_0eUFtss09Stfq_0Leedu_Fragment;

type BuilderContent_ErrorPages_Error_Entry_Home_Home_Entry_Pages_OverviewNews_Entry_Fragment = {};

type BuilderContent_News_ContentBuilder_Entry_Pages_ContentBuilder_Entry_Fragment = { builderContent: Array<{ snippetName: string, snippetLanguage: string, snippetCollapsed: boolean, snippet: string, id: string, typeHandle: string } | { dividerVariant: string } | { images: Array<{ id: string, url: string, title: string, alt: string, height: number, width: number, extension: string, hasFocalPoint: boolean, focalPoint: Array<number>, base64: string, srcsetLegacy: string, srcset: string }> } | { imageColumns: string, imageTransform: string, showImageCaption: boolean, images: Array<{ id: string, url: string, title: string, alt: string, height: number, width: number, extension: string, hasFocalPoint: boolean, focalPoint: Array<number>, base64: string, srcsetLegacy: string, srcset: string }> } | { imageTransform: string, images: Array<{ id: string, url: string, title: string, alt: string, height: number, width: number, extension: string, hasFocalPoint: boolean, focalPoint: Array<number>, base64: string, srcsetLegacy: string, srcset: string }> } | { imageTransform: string, showImageCaption: boolean, imageWidth: string, image: Array<{ id: string, url: string, title: string, alt: string, height: number, width: number, extension: string, hasFocalPoint: boolean, focalPoint: Array<number>, base64: string, srcsetLegacy: string, srcset: string }> } | { quote: string, source: string, sourceSubline: string, sourceUrl: string } | { sectionBackgroundColor: string, sectionPaddingVertical: string, spaceBetweenBlocks: string } | { spacerVariant: string } | { text: string, imageTransform: string, showImageCaption: boolean, imagePosition: boolean, image: Array<{ id: string, url: string, title: string, alt: string, height: number, width: number, extension: string, hasFocalPoint: boolean, focalPoint: Array<number>, base64: string, srcsetLegacy: string, srcset: string }> } | { text: string } | { autoplay: boolean, loop: boolean, videoWidth: string, videoId: string }> };

export type BuilderContentFragment = BuilderContent_ErrorPages_Error_Entry_Home_Home_Entry_Pages_OverviewNews_Entry_Fragment | BuilderContent_News_ContentBuilder_Entry_Pages_ContentBuilder_Entry_Fragment;

export type EntryDatesFragment = { dateShort: any, dateTime: any, dateDayNumeric: any, dateDayNumericWithoutZeros: any, dateDayText: any, dateDayTextFull: any, dateMonthNumeric: any, dateMonthNumericWithoutZeros: any, dateMonthText: any, dateMonthTextFull: any, dateYearNumeric: any, dateYearNumericFull: any, dateAmPm: any, dateHourNumeric: any, dateMinuteNumeric: any, dateSecondNumeric: any, dateTimezone: any };

export type EntryMetaFragment = { id: string, title: string, slug: string, uri: string, url: string };

export type JsonLdFragment = { metaJsonLdContainer: string };

export type SeomaticFragment = { metaTitleContainer: string, metaTagContainer: string, metaLinkContainer: string };

export type QueryEntriesAllQueryVariables = Exact<{
  site?: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  section: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  formatTimezone?: InputMaybe<Scalars['String']>;
  formatLocale?: InputMaybe<Scalars['String']>;
}>;


export type QueryEntriesAllQuery = { entries: Array<{ id: string, title: string, slug: string, uri: string, url: string, dateShort: any, dateTime: any, dateDayNumeric: any, dateDayNumericWithoutZeros: any, dateDayText: any, dateDayTextFull: any, dateMonthNumeric: any, dateMonthNumericWithoutZeros: any, dateMonthText: any, dateMonthTextFull: any, dateYearNumeric: any, dateYearNumericFull: any, dateAmPm: any, dateHourNumeric: any, dateMinuteNumeric: any, dateSecondNumeric: any, dateTimezone: any }> };

export type QueryEntryMetaQueryVariables = Exact<{
  site?: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  section: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  formatTimezone?: InputMaybe<Scalars['String']>;
  formatLocale?: InputMaybe<Scalars['String']>;
}>;


export type QueryEntryMetaQuery = { entry: { id: string, title: string, slug: string, uri: string, url: string, dateShort: any, dateTime: any, dateDayNumeric: any, dateDayNumericWithoutZeros: any, dateDayText: any, dateDayTextFull: any, dateMonthNumeric: any, dateMonthNumericWithoutZeros: any, dateMonthText: any, dateMonthTextFull: any, dateYearNumeric: any, dateYearNumericFull: any, dateAmPm: any, dateHourNumeric: any, dateMinuteNumeric: any, dateSecondNumeric: any, dateTimezone: any, seomatic: { metaTitleContainer: string, metaTagContainer: string, metaLinkContainer: string }, jsonLd: { metaJsonLdContainer: string } } };

export type HomeEntryFragment = { entryCustomTitle: string, entryShortDescription: string };

export type QueryHomeQueryVariables = Exact<{
  site?: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  section?: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  formatTimezone?: InputMaybe<Scalars['String']>;
  formatLocale?: InputMaybe<Scalars['String']>;
}>;


export type QueryHomeQuery = { entry: { id: string, title: string, slug: string, uri: string, url: string, dateShort: any, dateTime: any, dateDayNumeric: any, dateDayNumericWithoutZeros: any, dateDayText: any, dateDayTextFull: any, dateMonthNumeric: any, dateMonthNumericWithoutZeros: any, dateMonthText: any, dateMonthTextFull: any, dateYearNumeric: any, dateYearNumericFull: any, dateAmPm: any, dateHourNumeric: any, dateMinuteNumeric: any, dateSecondNumeric: any, dateTimezone: any, jsonLd: { metaJsonLdContainer: string } } | { id: string, title: string, slug: string, uri: string, url: string, entryCustomTitle: string, entryShortDescription: string, dateShort: any, dateTime: any, dateDayNumeric: any, dateDayNumericWithoutZeros: any, dateDayText: any, dateDayTextFull: any, dateMonthNumeric: any, dateMonthNumericWithoutZeros: any, dateMonthText: any, dateMonthTextFull: any, dateYearNumeric: any, dateYearNumericFull: any, dateAmPm: any, dateHourNumeric: any, dateMinuteNumeric: any, dateSecondNumeric: any, dateTimezone: any, jsonLd: { metaJsonLdContainer: string } } };

export type QueryNavigationQueryVariables = Exact<{
  site?: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  navHandle?: Scalars['String'];
  level?: InputMaybe<Scalars['Int']>;
}>;


export type QueryNavigationQuery = { navigation: Array<{ id: string, url: string, classes: string, title: string, newWindow: string, urlSuffix: string, customAttributes: Array<{ attribute: string, value: string }> }> };

export type NewsContentBuilderEntryFragment = { entryCustomTitle: string, entryShortDescription: string };

export type QueryNewsDetailQueryVariables = Exact<{
  site?: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  section?: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  slug: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  formatTimezone?: InputMaybe<Scalars['String']>;
  formatLocale?: InputMaybe<Scalars['String']>;
}>;


export type QueryNewsDetailQuery = { entry: { id: string, title: string, slug: string, uri: string, url: string, dateShort: any, dateTime: any, dateDayNumeric: any, dateDayNumericWithoutZeros: any, dateDayText: any, dateDayTextFull: any, dateMonthNumeric: any, dateMonthNumericWithoutZeros: any, dateMonthText: any, dateMonthTextFull: any, dateYearNumeric: any, dateYearNumericFull: any, dateAmPm: any, dateHourNumeric: any, dateMinuteNumeric: any, dateSecondNumeric: any, dateTimezone: any, jsonLd: { metaJsonLdContainer: string } } | { id: string, title: string, slug: string, uri: string, url: string, entryCustomTitle: string, entryShortDescription: string, dateShort: any, dateTime: any, dateDayNumeric: any, dateDayNumericWithoutZeros: any, dateDayText: any, dateDayTextFull: any, dateMonthNumeric: any, dateMonthNumericWithoutZeros: any, dateMonthText: any, dateMonthTextFull: any, dateYearNumeric: any, dateYearNumericFull: any, dateAmPm: any, dateHourNumeric: any, dateMinuteNumeric: any, dateSecondNumeric: any, dateTimezone: any, jsonLd: { metaJsonLdContainer: string } } };

export type PageContentBuilderEntryFragment = { entryCustomTitle: string, entryShortDescription: string };

export type QueryPageQueryVariables = Exact<{
  site?: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  section?: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  uri: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  formatTimezone?: InputMaybe<Scalars['String']>;
  formatLocale?: InputMaybe<Scalars['String']>;
}>;


export type QueryPageQuery = { entry: { id: string, title: string, slug: string, uri: string, url: string, dateShort: any, dateTime: any, dateDayNumeric: any, dateDayNumericWithoutZeros: any, dateDayText: any, dateDayTextFull: any, dateMonthNumeric: any, dateMonthNumericWithoutZeros: any, dateMonthText: any, dateMonthTextFull: any, dateYearNumeric: any, dateYearNumericFull: any, dateAmPm: any, dateHourNumeric: any, dateMinuteNumeric: any, dateSecondNumeric: any, dateTimezone: any, jsonLd: { metaJsonLdContainer: string } } | { id: string, title: string, slug: string, uri: string, url: string, entryCustomTitle: string, entryShortDescription: string, dateShort: any, dateTime: any, dateDayNumeric: any, dateDayNumericWithoutZeros: any, dateDayText: any, dateDayTextFull: any, dateMonthNumeric: any, dateMonthNumericWithoutZeros: any, dateMonthText: any, dateMonthTextFull: any, dateYearNumeric: any, dateYearNumericFull: any, dateAmPm: any, dateHourNumeric: any, dateMinuteNumeric: any, dateSecondNumeric: any, dateTimezone: any, jsonLd: { metaJsonLdContainer: string } } };

export type QueryTranslationsQueryVariables = Exact<{
  language?: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  category?: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
}>;


export type QueryTranslationsQuery = { translations: Array<{ key: string, message: string, language: string }> };

export const BlockMetaFragmentDoc = gql`
    fragment BlockMeta on MatrixBlockInterface {
  ... on builderContent_blockCode_BlockType {
    id
    typeHandle
  }
}
    `;
export const BlockSectionFragmentDoc = gql`
    fragment BlockSection on MatrixBlockInterface {
  ... on builderContent_blockSection_BlockType {
    ...BlockMeta
    sectionBackgroundColor
    sectionPaddingVertical
    spaceBetweenBlocks
  }
}
    ${BlockMetaFragmentDoc}`;
export const BlockCodeFragmentDoc = gql`
    fragment BlockCode on MatrixBlockInterface {
  ... on builderContent_blockCode_BlockType {
    ...BlockMeta
    snippetName
    snippetLanguage
    snippetCollapsed
    snippet
  }
}
    ${BlockMetaFragmentDoc}`;
export const BlockSpacerFragmentDoc = gql`
    fragment BlockSpacer on MatrixBlockInterface {
  ... on builderContent_blockSpacer_BlockType {
    ...BlockMeta
    spacerVariant
  }
}
    ${BlockMetaFragmentDoc}`;
export const BlockDividerFragmentDoc = gql`
    fragment BlockDivider on MatrixBlockInterface {
  ... on builderContent_blockDivider_BlockType {
    ...BlockMeta
    dividerVariant
  }
}
    ${BlockMetaFragmentDoc}`;
export const BlockVideoYoutubeFragmentDoc = gql`
    fragment BlockVideoYoutube on MatrixBlockInterface {
  ... on builderContent_blockVideoYoutube_BlockType {
    ...BlockMeta
    autoplay
    loop
    videoWidth
    videoId
  }
}
    ${BlockMetaFragmentDoc}`;
export const AssetMetaFragmentDoc = gql`
    fragment AssetMeta on AssetInterface {
  id
  url
  title
  alt
  height
  width
  extension
}
    `;
export const AssetImagerAutoFragmentDoc = gql`
    fragment AssetImagerAuto on AssetInterface {
  base64: url @imagerTransform(width: 20, format: "gif", return: "dataUri")
  srcsetLegacy: url @imagerSrcset(handle: "auto")
  srcset: url @imagerSrcset(handle: "autoWebp")
}
    `;
export const AssetFocalpointFragmentDoc = gql`
    fragment AssetFocalpoint on AssetInterface {
  hasFocalPoint
  focalPoint
}
    `;
export const BlockImageSliderFragmentDoc = gql`
    fragment BlockImageSlider on MatrixBlockInterface {
  ... on builderContent_blockImageSlider_BlockType {
    ...BlockMeta
    imageTransform
    images {
      ...AssetMeta
      ...AssetImagerAuto
      ...AssetFocalpoint
    }
  }
}
    ${BlockMetaFragmentDoc}
${AssetMetaFragmentDoc}
${AssetImagerAutoFragmentDoc}
${AssetFocalpointFragmentDoc}`;
export const BlockImageGalleryFragmentDoc = gql`
    fragment BlockImageGallery on MatrixBlockInterface {
  ... on builderContent_blockImageGallery_BlockType {
    ...BlockMeta
    images {
      ...AssetMeta
      ...AssetImagerAuto
      ...AssetFocalpoint
    }
  }
}
    ${BlockMetaFragmentDoc}
${AssetMetaFragmentDoc}
${AssetImagerAutoFragmentDoc}
${AssetFocalpointFragmentDoc}`;
export const BlockImageGridCalculatedFragmentDoc = gql`
    fragment BlockImageGridCalculated on MatrixBlockInterface {
  ... on builderContent_blockImageGridCalculated_BlockType {
    ...BlockMeta
    images {
      ...AssetMeta
      ...AssetImagerAuto
      ...AssetFocalpoint
    }
  }
}
    ${BlockMetaFragmentDoc}
${AssetMetaFragmentDoc}
${AssetImagerAutoFragmentDoc}
${AssetFocalpointFragmentDoc}`;
export const BlockImageGridFragmentDoc = gql`
    fragment BlockImageGrid on MatrixBlockInterface {
  ... on builderContent_blockImageGrid_BlockType {
    ...BlockMeta
    imageColumns
    imageTransform
    showImageCaption
    imageTransform
    images {
      ...AssetMeta
      ...AssetImagerAuto
      ...AssetFocalpoint
    }
  }
}
    ${BlockMetaFragmentDoc}
${AssetMetaFragmentDoc}
${AssetImagerAutoFragmentDoc}
${AssetFocalpointFragmentDoc}`;
export const BlockImageFragmentDoc = gql`
    fragment BlockImage on MatrixBlockInterface {
  ... on builderContent_blockImage_BlockType {
    ...BlockMeta
    imageTransform
    showImageCaption
    imageWidth
    image {
      ...AssetMeta
      ...AssetImagerAuto
      ...AssetFocalpoint
    }
  }
}
    ${BlockMetaFragmentDoc}
${AssetMetaFragmentDoc}
${AssetImagerAutoFragmentDoc}
${AssetFocalpointFragmentDoc}`;
export const BlockQuoteFragmentDoc = gql`
    fragment BlockQuote on MatrixBlockInterface {
  ... on builderContent_blockQuote_BlockType {
    ...BlockMeta
    quote
    source
    sourceSubline
    sourceUrl
  }
}
    ${BlockMetaFragmentDoc}`;
export const BlockTextFloatingImageFragmentDoc = gql`
    fragment BlockTextFloatingImage on MatrixBlockInterface {
  ... on builderContent_blockTextFloatingImage_BlockType {
    ...BlockMeta
    text
    imageTransform
    showImageCaption
    imagePosition
    image {
      ...AssetMeta
      ...AssetImagerAuto
      ...AssetFocalpoint
    }
  }
}
    ${BlockMetaFragmentDoc}
${AssetMetaFragmentDoc}
${AssetImagerAutoFragmentDoc}
${AssetFocalpointFragmentDoc}`;
export const BlockTextFragmentDoc = gql`
    fragment BlockText on MatrixBlockInterface {
  ... on builderContent_blockText_BlockType {
    ...BlockMeta
    text
  }
}
    ${BlockMetaFragmentDoc}`;
export const BuilderContentFragmentDoc = gql`
    fragment BuilderContent on EntryInterface {
  ... on pages_contentBuilder_Entry {
    builderContent {
      ...BlockSection
      ...BlockCode
      ...BlockSpacer
      ...BlockDivider
      ...BlockVideoYoutube
      ...BlockImageSlider
      ...BlockImageGallery
      ...BlockImageGridCalculated
      ...BlockImageGrid
      ...BlockImage
      ...BlockQuote
      ...BlockTextFloatingImage
      ...BlockText
    }
  }
  ... on news_contentBuilder_Entry {
    builderContent {
      ...BlockSection
      ...BlockCode
      ...BlockSpacer
      ...BlockDivider
      ...BlockVideoYoutube
      ...BlockImageSlider
      ...BlockImageGallery
      ...BlockImageGridCalculated
      ...BlockImageGrid
      ...BlockImage
      ...BlockQuote
      ...BlockTextFloatingImage
      ...BlockText
    }
  }
}
    ${BlockSectionFragmentDoc}
${BlockCodeFragmentDoc}
${BlockSpacerFragmentDoc}
${BlockDividerFragmentDoc}
${BlockVideoYoutubeFragmentDoc}
${BlockImageSliderFragmentDoc}
${BlockImageGalleryFragmentDoc}
${BlockImageGridCalculatedFragmentDoc}
${BlockImageGridFragmentDoc}
${BlockImageFragmentDoc}
${BlockQuoteFragmentDoc}
${BlockTextFloatingImageFragmentDoc}
${BlockTextFragmentDoc}`;
export const EntryDatesFragmentDoc = gql`
    fragment EntryDates on EntryInterface {
  dateShort: postDate @formatDateTime(timezone: $formatTimezone, format: "short", locale: $formatLocale)
  dateTime: postDate @formatDateTime(timezone: $formatTimezone, format: "H:m:s", locale: $formatLocale)
  dateDayNumeric: postDate @formatDateTime(timezone: $formatTimezone, format: "d", locale: $formatLocale)
  dateDayNumericWithoutZeros: postDate @formatDateTime(timezone: $formatTimezone, format: "j", locale: $formatLocale)
  dateDayText: postDate @formatDateTime(timezone: $formatTimezone, format: "D", locale: $formatLocale)
  dateDayTextFull: postDate @formatDateTime(timezone: $formatTimezone, format: "l", locale: $formatLocale)
  dateMonthNumeric: postDate @formatDateTime(timezone: $formatTimezone, format: "m", locale: $formatLocale)
  dateMonthNumericWithoutZeros: postDate @formatDateTime(timezone: $formatTimezone, format: "j", locale: $formatLocale)
  dateMonthText: postDate @formatDateTime(timezone: $formatTimezone, format: "M", locale: $formatLocale)
  dateMonthTextFull: postDate @formatDateTime(timezone: $formatTimezone, format: "F", locale: $formatLocale)
  dateYearNumeric: postDate @formatDateTime(timezone: $formatTimezone, format: "y", locale: $formatLocale)
  dateYearNumericFull: postDate @formatDateTime(timezone: $formatTimezone, format: "Y", locale: $formatLocale)
  dateAmPm: postDate @formatDateTime(timezone: $formatTimezone, format: "a", locale: $formatLocale)
  dateHourNumeric: postDate @formatDateTime(timezone: $formatTimezone, format: "H", locale: $formatLocale)
  dateMinuteNumeric: postDate @formatDateTime(timezone: $formatTimezone, format: "i", locale: $formatLocale)
  dateSecondNumeric: postDate @formatDateTime(timezone: $formatTimezone, format: "s", locale: $formatLocale)
  dateTimezone: postDate @formatDateTime(timezone: $formatTimezone, format: "T", locale: $formatLocale)
}
    `;
export const EntryMetaFragmentDoc = gql`
    fragment EntryMeta on EntryInterface {
  id
  title
  slug
  uri
  url
}
    `;
export const JsonLdFragmentDoc = gql`
    fragment JsonLd on SeomaticInterface {
  metaJsonLdContainer
}
    `;
export const SeomaticFragmentDoc = gql`
    fragment Seomatic on SeomaticInterface {
  metaTitleContainer
  metaTagContainer
  metaLinkContainer
}
    `;
export const HomeEntryFragmentDoc = gql`
    fragment HomeEntry on home_home_Entry {
  entryCustomTitle
  entryShortDescription
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
    query QueryEntriesAll($site: [String]! = "default", $section: [String]!, $formatTimezone: String = "Europe/Berlin", $formatLocale: String = "de") {
  entries(site: $site, section: $section) {
    ...EntryMeta
    ...EntryDates
  }
}
    ${EntryMetaFragmentDoc}
${EntryDatesFragmentDoc}`;
export const QueryEntryMetaDocument = gql`
    query QueryEntryMeta($site: [String]! = "default", $uri: [String], $slug: [String], $section: [String]!, $formatTimezone: String = "Europe/Berlin", $formatLocale: String = "de") {
  entry(site: $site, uri: $uri, slug: $slug, section: $section) {
    ...EntryMeta
    ...EntryDates
    seomatic(asArray: true) {
      ...Seomatic
    }
    jsonLd: seomatic(asArray: true) {
      ...JsonLd
    }
  }
}
    ${EntryMetaFragmentDoc}
${EntryDatesFragmentDoc}
${SeomaticFragmentDoc}
${JsonLdFragmentDoc}`;
export const QueryHomeDocument = gql`
    query QueryHome($site: [String]! = "default", $section: [String]! = ["home"], $formatTimezone: String = "Europe/Berlin", $formatLocale: String = "de") {
  entry(site: $site, section: $section) {
    ...EntryMeta
    ...EntryDates
    ...HomeEntry
    jsonLd: seomatic(asArray: true) {
      ...JsonLd
    }
  }
}
    ${EntryMetaFragmentDoc}
${EntryDatesFragmentDoc}
${HomeEntryFragmentDoc}
${JsonLdFragmentDoc}`;
export const QueryNavigationDocument = gql`
    query QueryNavigation($site: [String]! = "default", $navHandle: String! = "navigationMain", $level: Int = 1) {
  navigation: navigationNodes(site: $site, navHandle: $navHandle, level: $level) {
    id
    url
    classes
    title
    customAttributes {
      attribute
      value
    }
    newWindow
    urlSuffix
  }
}
    `;
export const QueryNewsDetailDocument = gql`
    query QueryNewsDetail($site: [String]! = "default", $section: [String]! = ["news"], $slug: [String]!, $formatTimezone: String = "Europe/Berlin", $formatLocale: String = "de") {
  entry(site: $site, section: $section, slug: $slug) {
    ...EntryMeta
    ...EntryDates
    ...NewsContentBuilderEntry
    jsonLd: seomatic(asArray: true) {
      ...JsonLd
    }
  }
}
    ${EntryMetaFragmentDoc}
${EntryDatesFragmentDoc}
${NewsContentBuilderEntryFragmentDoc}
${JsonLdFragmentDoc}`;
export const QueryPageDocument = gql`
    query QueryPage($site: [String]! = "default", $section: [String]! = ["pages"], $uri: [String]!, $formatTimezone: String = "Europe/Berlin", $formatLocale: String = "de") {
  entry(site: $site, section: $section, uri: $uri) {
    ...EntryMeta
    ...EntryDates
    ...PageContentBuilderEntry
    jsonLd: seomatic(asArray: true) {
      ...JsonLd
    }
  }
}
    ${EntryMetaFragmentDoc}
${EntryDatesFragmentDoc}
${PageContentBuilderEntryFragmentDoc}
${JsonLdFragmentDoc}`;
export const QueryTranslationsDocument = gql`
    query QueryTranslations($language: [String]! = "en", $category: [String]! = ["site"]) {
  translations: staticMessages(language: $language, category: $category) {
    key
    message
    language
  }
}
    `;

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
    QueryNavigation(variables?: QueryNavigationQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<QueryNavigationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<QueryNavigationQuery>(QueryNavigationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'QueryNavigation', 'query');
    },
    QueryNewsDetail(variables: QueryNewsDetailQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<QueryNewsDetailQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<QueryNewsDetailQuery>(QueryNewsDetailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'QueryNewsDetail', 'query');
    },
    QueryPage(variables: QueryPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<QueryPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<QueryPageQuery>(QueryPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'QueryPage', 'query');
    },
    QueryTranslations(variables?: QueryTranslationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<QueryTranslationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<QueryTranslationsQuery>(QueryTranslationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'QueryTranslations', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;