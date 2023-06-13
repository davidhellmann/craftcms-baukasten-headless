import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Number: any;
  QueryArgument: any;
};

export type AssetCriteriaInput = {
  /** Narrows the query results to only elements that have been archived. */
  archived: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the assets’ files’ last-modified dates. */
  dateModified: InputMaybe<Scalars["String"]>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  dtmImageAltText: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmOptimizedImageAuto: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmRelations: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on the assets’ filenames. */
  filename: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the folders the assets belong to, per the folders’ IDs. */
  folderId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on whether the assets have alternative text. */
  hasAlt: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the assets’ image heights. */
  height: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars["Boolean"]>;
  /** Broadens the query results to include assets from any of the subfolders of the folder specified by `folderId`. */
  includeSubfolders: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the assets’ file kinds. */
  kind: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars["Int"]>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars["Int"]>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars["String"]>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
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
  search: InputMaybe<Scalars["String"]>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on the assets’ file sizes (in bytes). */
  size: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the user the assets were uploaded by, per the user’s ID. */
  uploader: InputMaybe<Scalars["QueryArgument"]>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ handles. */
  volume: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs. */
  volumeId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on the assets’ image widths. */
  width: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** A list of transform handles to preload. */
  withTransforms: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type CategoryCriteriaInput = {
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist: InputMaybe<Scalars["Int"]>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf: InputMaybe<Scalars["Int"]>;
  /** Narrows the query results to only elements that have been archived. */
  archived: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist: InputMaybe<Scalars["Int"]>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf: InputMaybe<Scalars["Int"]>;
  /** Whether to only return categories that the user has permission to edit. */
  editable: InputMaybe<Scalars["Boolean"]>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the category groups the categories belong to per the group’s handles. */
  group: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the category groups the categories belong to, per the groups’ IDs. */
  groupId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level: InputMaybe<Scalars["Int"]>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars["Int"]>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf: InputMaybe<Scalars["Int"]>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars["Int"]>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars["String"]>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter: InputMaybe<Scalars["Int"]>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore: InputMaybe<Scalars["Int"]>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf: InputMaybe<Scalars["Int"]>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
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
  search: InputMaybe<Scalars["String"]>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Determines which structure data should be joined into the query. */
  structureId: InputMaybe<Scalars["Int"]>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure: InputMaybe<Scalars["Boolean"]>;
};

export type EntryCriteriaInput = {
  /** Narrows the query results to only entries that were posted on or after a certain date. */
  after: InputMaybe<Scalars["String"]>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist: InputMaybe<Scalars["Int"]>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf: InputMaybe<Scalars["Int"]>;
  /** Narrows the query results to only elements that have been archived. */
  archived: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the user group the entries’ authors belong to. */
  authorGroup: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the user group the entries’ authors belong to, per the groups’ IDs. */
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on the entries’ authors. */
  authorId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results to only entries that were posted before a certain date. */
  before: InputMaybe<Scalars["String"]>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist: InputMaybe<Scalars["Int"]>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf: InputMaybe<Scalars["Int"]>;
  /** The drafts’ creator ID */
  draftCreator: InputMaybe<Scalars["Int"]>;
  /** The ID of the draft to return (from the `drafts` table) */
  draftId: InputMaybe<Scalars["Int"]>;
  /** Narrows the query results to only drafts of a given element.  Set to `false` to fetch unpublished drafts. */
  draftOf: InputMaybe<Scalars["QueryArgument"]>;
  /** Whether draft elements should be returned. */
  drafts: InputMaybe<Scalars["Boolean"]>;
  dteAvatar: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteBio: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteCategory: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteColor: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteCompany: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteDescription: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteDescription2: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteDescription3: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteEventDate: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteEventLocation: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteEventSeriesMulti: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteFirstName: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteHeroImage: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteIndustries: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteJobTitle: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteJobTitles: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteLastName: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteLayout: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteLevel: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteLocation: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteLogo: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteRegion: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteRegistrationOpen: InputMaybe<Scalars["Boolean"]>;
  dteSpeakers: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteText: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteText2: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteText3: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteTopics: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteTrack: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteUrl: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteVideo: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dteVidyardVideoUuid: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmBannerBackgroundColor: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmBannerContent: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmBannerImage: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmBannerTarget: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmComCompNavOptionLetterSpacing: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmContentBuilderButtonTarget: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmContentBuilderButtonTitle: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmContentBuilderButtonVariant: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmCustomerCompanyLogo: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmCustomerCompanyName: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmCustomerPersonCompany: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmCustomerPersonName: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmCustomerPersonPhoto: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmCustomerPersonTitle: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmCustomerQuoteBackgroundImage: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmCustomerQuoteButton: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmCustomerQuoteCompany: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmCustomerQuoteContent: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmCustomerQuotePerson: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmCustomerRelatedStoryCompany: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmCustomerRelatedStoryCopy: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmCustomerRelatedStoryImage: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmCustomerRelatedStoryTarget: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmDescription: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmEventCity: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmEventCountry: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmEventDescription: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmEventEndDate: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmEventName: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmEventStartDate: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmEventTarget: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmLocationAddressCountry: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmLocationAddressExtraInfo: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmLocationAddressLocality: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmLocationAddressRegion: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmLocationEmail: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmLocationHeadline: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmLocationName: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmLocationPostalCode: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmLocationStreetAddress: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmLocationSubheadline: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmLocationTelephone: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmLocationWebsite: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmLocationWorldRegion: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmMetaSeoSettings: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmRelatedContentCopy: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmRelatedContentEyebrow: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmRelatedContentEyebrowColor: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmRelatedContentHasPriority: InputMaybe<Scalars["Boolean"]>;
  dtmRelatedContentImage: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmRelatedContentLogo: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmRelatedContentSupportedTechnologies: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmRelatedContentTarget: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmRelations: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  dtmSignUpBackgroundImage: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmSolutionPartnerLevel: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmSolutionPartnerLogo: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmSolutionPartnerName: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmSolutionPartnerRegion: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmSolutionPartnerTarget: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmSupportedTechnologyDescription: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmSupportedTechnologyHubInternalId: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmSupportedTechnologyLogo: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmSupportedTechnologyLogoUrl: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmSupportedTechnologyName: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmSupportedTechnologyTarget: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]>>
  >;
  dtmTitle: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Whether to only return entries that the user has permission to edit. */
  editable: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the entries’ expiry dates. */
  expiryDate: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars["Boolean"]>;
  isPostPerformExperience: InputMaybe<Scalars["Boolean"]>;
  lcAbbreviation: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  lcContinent: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  lcCountry: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  lcPartnerDescription: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  lcPartnerHeading: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  lcPartnerLocation: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  lcPartnerLogo: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  lcPartnerPromoCode: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  lcRegion: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level: InputMaybe<Scalars["Int"]>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars["Int"]>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf: InputMaybe<Scalars["Int"]>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars["Int"]>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars["String"]>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter: InputMaybe<Scalars["Int"]>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore: InputMaybe<Scalars["Int"]>;
  /** Narrows the query results based on the entries’ post dates. */
  postDate: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf: InputMaybe<Scalars["Int"]>;
  /** Whether provisional drafts should be returned. */
  provisionalDrafts: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
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
  revisionCreator: InputMaybe<Scalars["Int"]>;
  /** The ID of the revision to return (from the `revisions` table) */
  revisionId: InputMaybe<Scalars["Int"]>;
  /** The source element ID that revisions should be returned for */
  revisionOf: InputMaybe<Scalars["QueryArgument"]>;
  /** Whether revision elements should be returned. */
  revisions: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results to only elements that match a search query. */
  search: InputMaybe<Scalars["String"]>;
  /** Narrows the query results based on the section handles the entries belong to. */
  section: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the sections the entries belong to, per the sections’ IDs. */
  sectionId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Determines which structure data should be joined into the query. */
  structureId: InputMaybe<Scalars["Int"]>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the entries’ entry type handles. */
  type: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the entries’ entry types, per the types’ IDs. */
  typeId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure: InputMaybe<Scalars["Boolean"]>;
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
  archived: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the tag groups the tags belong to per the group’s handles. */
  group: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the tag groups the tags belong to, per the groups’ IDs. */
  groupId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars["Boolean"]>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars["Int"]>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars["Int"]>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars["String"]>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
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
  search: InputMaybe<Scalars["String"]>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UserCriteriaInput = {
  /** Narrows the query results to only elements that have been archived. */
  archived: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on whether the users have uploaded any assets. */
  assetUploaders: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on whether the users are listed as the author of any entries. */
  authors: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the users’ email addresses. */
  email: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the users’ first names. */
  firstName: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the users’ full names. */
  fullName: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the user group the users belong to. */
  group: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on the user group the users belong to, per the groups’ IDs. */
  groupId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results to only users that have (or don’t have) a user photo. */
  hasPhoto: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the users’ last names. */
  lastName: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars["Int"]>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars["Int"]>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars["String"]>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
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
  search: InputMaybe<Scalars["String"]>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars["Boolean"]>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Narrows the query results based on the users’ usernames. */
  username: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryDtePagesDtePageAmplifyQueryVariables = Exact<{
  siteId:
    | Array<InputMaybe<Scalars["QueryArgument"]>>
    | InputMaybe<Scalars["QueryArgument"]>;
  id:
    | Array<InputMaybe<Scalars["QueryArgument"]>>
    | InputMaybe<Scalars["QueryArgument"]>;
}>;

export type QueryDtePagesDtePageAmplifyQuery = {
  entry:
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
        dteLinkGroup: Array<{
          cta: {
            ariaLabel: string;
            customText: string;
            target: string;
            text: string;
            type: string;
            url: string;
          };
        }>;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      }
    | {
        id: string;
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
        dateShort: any;
        dateMedium: any;
        dateLong: any;
        dateTimezone: any;
      };
};

export type DteLinkGroupFragment = {
  cta: {
    ariaLabel: string;
    customText: string;
    target: string;
    text: string;
    type: string;
    url: string;
  };
};

export type QueryEntriesBySectionQueryVariables = Exact<{
  site: Array<InputMaybe<Scalars["String"]>> | InputMaybe<Scalars["String"]>;
  section: Array<InputMaybe<Scalars["String"]>> | InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
}>;

export type QueryEntriesBySectionQuery = {
  entries: Array<
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
  >;
};

export type QueryEntryPreviewQueryVariables = Exact<{
  siteId:
    | Array<InputMaybe<Scalars["QueryArgument"]>>
    | InputMaybe<Scalars["QueryArgument"]>;
  id:
    | Array<InputMaybe<Scalars["QueryArgument"]>>
    | InputMaybe<Scalars["QueryArgument"]>;
}>;

export type QueryEntryPreviewQuery = {
  entry:
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      }
    | {
        id: string;
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
        seo: {
          metaTagContainer: string;
          metaLinkContainer: string;
          metaTitleContainer: string;
          metaScriptContainer: string;
          metaJsonLdContainer: string;
          metaSiteVarsContainer: string;
        };
      };
};

type EntryDates_CustomerRelatedStories_Default_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteCategories_DteCategory_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteCompany_DteCompany_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteEventSeries_DteEventSeries_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteFaqs_DteFaq_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteHomeAmplify_DteHomeAmplify_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteHomeInnovate_DteHomeInnovate_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteHome_DteHome_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteIndustries_DteIndustry_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteJobTitles_DteJobTitle_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteLevels_DteLevel_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteLocations_DteLocation_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtePages_DtePageAgenda_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtePages_DtePageAmplify_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtePages_DtePageArchive_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtePages_DtePageExecutiveExchange_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtePages_DtePageFaqs_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtePages_DtePageHome_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtePages_DtePageInnovate_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtePages_DtePageOnDemand_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtePages_DtePagePreRegister_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtePages_DtePageSpeakers_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtePages_DtePageSponsors_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtePages_DtePageTraining_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtePages_DtePageTravelHotel_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteRegions_DteRegion_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteSessionTypes_DteSessionType_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteSessions_DteBreak_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteSessions_DteSession_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteSpeakers_DteSpeaker_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteSponsors_DteSponsor_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteTopics_DteTopic_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteTracks_DteTrack_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteTrainings_DteTraining_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DteVideos_DteVideo_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmBanners_DtmBanner_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmCards_DtmCard_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmContinents_Continent_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmCountries_Country_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmCustomerCompanies_DtmCustomerCompany_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmCustomerPersons_DtmCustomerPerson_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmCustomerQuotes_DtmCustomerQuote_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmEvents_DtmEvent_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmFooter_DtmFooter_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmLocationBasedContentBlocks_Partner_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmLocations_DtmLocationWorldRegion_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmLocations_DtmLocation_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmNavigation_DtmNavigation_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmPage_DtmPageEvents_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmPage_DtmPageGrailCampaign_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmPage_DtmPageLocations_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmPage_DtmPageSko2023_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmPage_DtmPage_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmRegions_Region_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmRelatedContent_Default_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmSections_DtmSection_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmSignup_DtmSignup_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmSolutionPartners_DtmSolutionPartner_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmSupportedTechnologies_Default_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

type EntryDates_DtmTables_Default_Entry_Fragment = {
  dateShort: any;
  dateMedium: any;
  dateLong: any;
  dateTimezone: any;
};

export type EntryDatesFragment =
  | EntryDates_CustomerRelatedStories_Default_Entry_Fragment
  | EntryDates_DteCategories_DteCategory_Entry_Fragment
  | EntryDates_DteCompany_DteCompany_Entry_Fragment
  | EntryDates_DteEventSeries_DteEventSeries_Entry_Fragment
  | EntryDates_DteFaqs_DteFaq_Entry_Fragment
  | EntryDates_DteHomeAmplify_DteHomeAmplify_Entry_Fragment
  | EntryDates_DteHomeInnovate_DteHomeInnovate_Entry_Fragment
  | EntryDates_DteHome_DteHome_Entry_Fragment
  | EntryDates_DteIndustries_DteIndustry_Entry_Fragment
  | EntryDates_DteJobTitles_DteJobTitle_Entry_Fragment
  | EntryDates_DteLevels_DteLevel_Entry_Fragment
  | EntryDates_DteLocations_DteLocation_Entry_Fragment
  | EntryDates_DtePages_DtePageAgenda_Entry_Fragment
  | EntryDates_DtePages_DtePageAmplify_Entry_Fragment
  | EntryDates_DtePages_DtePageArchive_Entry_Fragment
  | EntryDates_DtePages_DtePageExecutiveExchange_Entry_Fragment
  | EntryDates_DtePages_DtePageFaqs_Entry_Fragment
  | EntryDates_DtePages_DtePageHome_Entry_Fragment
  | EntryDates_DtePages_DtePageInnovate_Entry_Fragment
  | EntryDates_DtePages_DtePageOnDemand_Entry_Fragment
  | EntryDates_DtePages_DtePagePreRegister_Entry_Fragment
  | EntryDates_DtePages_DtePageSpeakers_Entry_Fragment
  | EntryDates_DtePages_DtePageSponsors_Entry_Fragment
  | EntryDates_DtePages_DtePageTraining_Entry_Fragment
  | EntryDates_DtePages_DtePageTravelHotel_Entry_Fragment
  | EntryDates_DteRegions_DteRegion_Entry_Fragment
  | EntryDates_DteSessionTypes_DteSessionType_Entry_Fragment
  | EntryDates_DteSessions_DteBreak_Entry_Fragment
  | EntryDates_DteSessions_DteSession_Entry_Fragment
  | EntryDates_DteSpeakers_DteSpeaker_Entry_Fragment
  | EntryDates_DteSponsors_DteSponsor_Entry_Fragment
  | EntryDates_DteTopics_DteTopic_Entry_Fragment
  | EntryDates_DteTracks_DteTrack_Entry_Fragment
  | EntryDates_DteTrainings_DteTraining_Entry_Fragment
  | EntryDates_DteVideos_DteVideo_Entry_Fragment
  | EntryDates_DtmBanners_DtmBanner_Entry_Fragment
  | EntryDates_DtmCards_DtmCard_Entry_Fragment
  | EntryDates_DtmContinents_Continent_Entry_Fragment
  | EntryDates_DtmCountries_Country_Entry_Fragment
  | EntryDates_DtmCustomerCompanies_DtmCustomerCompany_Entry_Fragment
  | EntryDates_DtmCustomerPersons_DtmCustomerPerson_Entry_Fragment
  | EntryDates_DtmCustomerQuotes_DtmCustomerQuote_Entry_Fragment
  | EntryDates_DtmEvents_DtmEvent_Entry_Fragment
  | EntryDates_DtmFooter_DtmFooter_Entry_Fragment
  | EntryDates_DtmLocationBasedContentBlocks_Partner_Entry_Fragment
  | EntryDates_DtmLocations_DtmLocationWorldRegion_Entry_Fragment
  | EntryDates_DtmLocations_DtmLocation_Entry_Fragment
  | EntryDates_DtmNavigation_DtmNavigation_Entry_Fragment
  | EntryDates_DtmPage_DtmPageEvents_Entry_Fragment
  | EntryDates_DtmPage_DtmPageGrailCampaign_Entry_Fragment
  | EntryDates_DtmPage_DtmPageLocations_Entry_Fragment
  | EntryDates_DtmPage_DtmPageSko2023_Entry_Fragment
  | EntryDates_DtmPage_DtmPage_Entry_Fragment
  | EntryDates_DtmRegions_Region_Entry_Fragment
  | EntryDates_DtmRelatedContent_Default_Entry_Fragment
  | EntryDates_DtmSections_DtmSection_Entry_Fragment
  | EntryDates_DtmSignup_DtmSignup_Entry_Fragment
  | EntryDates_DtmSolutionPartners_DtmSolutionPartner_Entry_Fragment
  | EntryDates_DtmSupportedTechnologies_Default_Entry_Fragment
  | EntryDates_DtmTables_Default_Entry_Fragment;

type EntryMeta_CustomerRelatedStories_Default_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteCategories_DteCategory_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteCompany_DteCompany_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteEventSeries_DteEventSeries_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteFaqs_DteFaq_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteHomeAmplify_DteHomeAmplify_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteHomeInnovate_DteHomeInnovate_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteHome_DteHome_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteIndustries_DteIndustry_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteJobTitles_DteJobTitle_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteLevels_DteLevel_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteLocations_DteLocation_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtePages_DtePageAgenda_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtePages_DtePageAmplify_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtePages_DtePageArchive_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtePages_DtePageExecutiveExchange_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtePages_DtePageFaqs_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtePages_DtePageHome_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtePages_DtePageInnovate_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtePages_DtePageOnDemand_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtePages_DtePagePreRegister_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtePages_DtePageSpeakers_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtePages_DtePageSponsors_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtePages_DtePageTraining_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtePages_DtePageTravelHotel_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteRegions_DteRegion_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteSessionTypes_DteSessionType_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteSessions_DteBreak_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteSessions_DteSession_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteSpeakers_DteSpeaker_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteSponsors_DteSponsor_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteTopics_DteTopic_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteTracks_DteTrack_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteTrainings_DteTraining_Entry_Fragment = {
  id: string;
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

type EntryMeta_DteVideos_DteVideo_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmBanners_DtmBanner_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmCards_DtmCard_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmContinents_Continent_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmCountries_Country_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmCustomerCompanies_DtmCustomerCompany_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmCustomerPersons_DtmCustomerPerson_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmCustomerQuotes_DtmCustomerQuote_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmEvents_DtmEvent_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmFooter_DtmFooter_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmLocationBasedContentBlocks_Partner_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmLocations_DtmLocationWorldRegion_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmLocations_DtmLocation_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmNavigation_DtmNavigation_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmPage_DtmPageEvents_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmPage_DtmPageGrailCampaign_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmPage_DtmPageLocations_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmPage_DtmPageSko2023_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmPage_DtmPage_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmRegions_Region_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmRelatedContent_Default_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmSections_DtmSection_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmSignup_DtmSignup_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmSolutionPartners_DtmSolutionPartner_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmSupportedTechnologies_Default_Entry_Fragment = {
  id: string;
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

type EntryMeta_DtmTables_Default_Entry_Fragment = {
  id: string;
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

export type EntryMetaFragment =
  | EntryMeta_CustomerRelatedStories_Default_Entry_Fragment
  | EntryMeta_DteCategories_DteCategory_Entry_Fragment
  | EntryMeta_DteCompany_DteCompany_Entry_Fragment
  | EntryMeta_DteEventSeries_DteEventSeries_Entry_Fragment
  | EntryMeta_DteFaqs_DteFaq_Entry_Fragment
  | EntryMeta_DteHomeAmplify_DteHomeAmplify_Entry_Fragment
  | EntryMeta_DteHomeInnovate_DteHomeInnovate_Entry_Fragment
  | EntryMeta_DteHome_DteHome_Entry_Fragment
  | EntryMeta_DteIndustries_DteIndustry_Entry_Fragment
  | EntryMeta_DteJobTitles_DteJobTitle_Entry_Fragment
  | EntryMeta_DteLevels_DteLevel_Entry_Fragment
  | EntryMeta_DteLocations_DteLocation_Entry_Fragment
  | EntryMeta_DtePages_DtePageAgenda_Entry_Fragment
  | EntryMeta_DtePages_DtePageAmplify_Entry_Fragment
  | EntryMeta_DtePages_DtePageArchive_Entry_Fragment
  | EntryMeta_DtePages_DtePageExecutiveExchange_Entry_Fragment
  | EntryMeta_DtePages_DtePageFaqs_Entry_Fragment
  | EntryMeta_DtePages_DtePageHome_Entry_Fragment
  | EntryMeta_DtePages_DtePageInnovate_Entry_Fragment
  | EntryMeta_DtePages_DtePageOnDemand_Entry_Fragment
  | EntryMeta_DtePages_DtePagePreRegister_Entry_Fragment
  | EntryMeta_DtePages_DtePageSpeakers_Entry_Fragment
  | EntryMeta_DtePages_DtePageSponsors_Entry_Fragment
  | EntryMeta_DtePages_DtePageTraining_Entry_Fragment
  | EntryMeta_DtePages_DtePageTravelHotel_Entry_Fragment
  | EntryMeta_DteRegions_DteRegion_Entry_Fragment
  | EntryMeta_DteSessionTypes_DteSessionType_Entry_Fragment
  | EntryMeta_DteSessions_DteBreak_Entry_Fragment
  | EntryMeta_DteSessions_DteSession_Entry_Fragment
  | EntryMeta_DteSpeakers_DteSpeaker_Entry_Fragment
  | EntryMeta_DteSponsors_DteSponsor_Entry_Fragment
  | EntryMeta_DteTopics_DteTopic_Entry_Fragment
  | EntryMeta_DteTracks_DteTrack_Entry_Fragment
  | EntryMeta_DteTrainings_DteTraining_Entry_Fragment
  | EntryMeta_DteVideos_DteVideo_Entry_Fragment
  | EntryMeta_DtmBanners_DtmBanner_Entry_Fragment
  | EntryMeta_DtmCards_DtmCard_Entry_Fragment
  | EntryMeta_DtmContinents_Continent_Entry_Fragment
  | EntryMeta_DtmCountries_Country_Entry_Fragment
  | EntryMeta_DtmCustomerCompanies_DtmCustomerCompany_Entry_Fragment
  | EntryMeta_DtmCustomerPersons_DtmCustomerPerson_Entry_Fragment
  | EntryMeta_DtmCustomerQuotes_DtmCustomerQuote_Entry_Fragment
  | EntryMeta_DtmEvents_DtmEvent_Entry_Fragment
  | EntryMeta_DtmFooter_DtmFooter_Entry_Fragment
  | EntryMeta_DtmLocationBasedContentBlocks_Partner_Entry_Fragment
  | EntryMeta_DtmLocations_DtmLocationWorldRegion_Entry_Fragment
  | EntryMeta_DtmLocations_DtmLocation_Entry_Fragment
  | EntryMeta_DtmNavigation_DtmNavigation_Entry_Fragment
  | EntryMeta_DtmPage_DtmPageEvents_Entry_Fragment
  | EntryMeta_DtmPage_DtmPageGrailCampaign_Entry_Fragment
  | EntryMeta_DtmPage_DtmPageLocations_Entry_Fragment
  | EntryMeta_DtmPage_DtmPageSko2023_Entry_Fragment
  | EntryMeta_DtmPage_DtmPage_Entry_Fragment
  | EntryMeta_DtmRegions_Region_Entry_Fragment
  | EntryMeta_DtmRelatedContent_Default_Entry_Fragment
  | EntryMeta_DtmSections_DtmSection_Entry_Fragment
  | EntryMeta_DtmSignup_DtmSignup_Entry_Fragment
  | EntryMeta_DtmSolutionPartners_DtmSolutionPartner_Entry_Fragment
  | EntryMeta_DtmSupportedTechnologies_Default_Entry_Fragment
  | EntryMeta_DtmTables_Default_Entry_Fragment;

type EntrySeo_CustomerRelatedStories_Default_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteCategories_DteCategory_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteCompany_DteCompany_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteEventSeries_DteEventSeries_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteFaqs_DteFaq_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteHomeAmplify_DteHomeAmplify_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteHomeInnovate_DteHomeInnovate_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteHome_DteHome_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteIndustries_DteIndustry_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteJobTitles_DteJobTitle_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteLevels_DteLevel_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteLocations_DteLocation_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtePages_DtePageAgenda_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtePages_DtePageAmplify_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtePages_DtePageArchive_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtePages_DtePageExecutiveExchange_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtePages_DtePageFaqs_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtePages_DtePageHome_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtePages_DtePageInnovate_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtePages_DtePageOnDemand_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtePages_DtePagePreRegister_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtePages_DtePageSpeakers_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtePages_DtePageSponsors_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtePages_DtePageTraining_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtePages_DtePageTravelHotel_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteRegions_DteRegion_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteSessionTypes_DteSessionType_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteSessions_DteBreak_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteSessions_DteSession_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteSpeakers_DteSpeaker_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteSponsors_DteSponsor_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteTopics_DteTopic_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteTracks_DteTrack_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteTrainings_DteTraining_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DteVideos_DteVideo_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmBanners_DtmBanner_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmCards_DtmCard_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmContinents_Continent_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmCountries_Country_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmCustomerCompanies_DtmCustomerCompany_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmCustomerPersons_DtmCustomerPerson_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmCustomerQuotes_DtmCustomerQuote_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmEvents_DtmEvent_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmFooter_DtmFooter_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmLocationBasedContentBlocks_Partner_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmLocations_DtmLocationWorldRegion_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmLocations_DtmLocation_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmNavigation_DtmNavigation_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmPage_DtmPageEvents_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmPage_DtmPageGrailCampaign_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmPage_DtmPageLocations_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmPage_DtmPageSko2023_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmPage_DtmPage_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmRegions_Region_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmRelatedContent_Default_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmSections_DtmSection_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmSignup_DtmSignup_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmSolutionPartners_DtmSolutionPartner_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmSupportedTechnologies_Default_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

type EntrySeo_DtmTables_Default_Entry_Fragment = {
  seo: {
    metaTagContainer: string;
    metaLinkContainer: string;
    metaTitleContainer: string;
    metaScriptContainer: string;
    metaJsonLdContainer: string;
    metaSiteVarsContainer: string;
  };
};

export type EntrySeoFragment =
  | EntrySeo_CustomerRelatedStories_Default_Entry_Fragment
  | EntrySeo_DteCategories_DteCategory_Entry_Fragment
  | EntrySeo_DteCompany_DteCompany_Entry_Fragment
  | EntrySeo_DteEventSeries_DteEventSeries_Entry_Fragment
  | EntrySeo_DteFaqs_DteFaq_Entry_Fragment
  | EntrySeo_DteHomeAmplify_DteHomeAmplify_Entry_Fragment
  | EntrySeo_DteHomeInnovate_DteHomeInnovate_Entry_Fragment
  | EntrySeo_DteHome_DteHome_Entry_Fragment
  | EntrySeo_DteIndustries_DteIndustry_Entry_Fragment
  | EntrySeo_DteJobTitles_DteJobTitle_Entry_Fragment
  | EntrySeo_DteLevels_DteLevel_Entry_Fragment
  | EntrySeo_DteLocations_DteLocation_Entry_Fragment
  | EntrySeo_DtePages_DtePageAgenda_Entry_Fragment
  | EntrySeo_DtePages_DtePageAmplify_Entry_Fragment
  | EntrySeo_DtePages_DtePageArchive_Entry_Fragment
  | EntrySeo_DtePages_DtePageExecutiveExchange_Entry_Fragment
  | EntrySeo_DtePages_DtePageFaqs_Entry_Fragment
  | EntrySeo_DtePages_DtePageHome_Entry_Fragment
  | EntrySeo_DtePages_DtePageInnovate_Entry_Fragment
  | EntrySeo_DtePages_DtePageOnDemand_Entry_Fragment
  | EntrySeo_DtePages_DtePagePreRegister_Entry_Fragment
  | EntrySeo_DtePages_DtePageSpeakers_Entry_Fragment
  | EntrySeo_DtePages_DtePageSponsors_Entry_Fragment
  | EntrySeo_DtePages_DtePageTraining_Entry_Fragment
  | EntrySeo_DtePages_DtePageTravelHotel_Entry_Fragment
  | EntrySeo_DteRegions_DteRegion_Entry_Fragment
  | EntrySeo_DteSessionTypes_DteSessionType_Entry_Fragment
  | EntrySeo_DteSessions_DteBreak_Entry_Fragment
  | EntrySeo_DteSessions_DteSession_Entry_Fragment
  | EntrySeo_DteSpeakers_DteSpeaker_Entry_Fragment
  | EntrySeo_DteSponsors_DteSponsor_Entry_Fragment
  | EntrySeo_DteTopics_DteTopic_Entry_Fragment
  | EntrySeo_DteTracks_DteTrack_Entry_Fragment
  | EntrySeo_DteTrainings_DteTraining_Entry_Fragment
  | EntrySeo_DteVideos_DteVideo_Entry_Fragment
  | EntrySeo_DtmBanners_DtmBanner_Entry_Fragment
  | EntrySeo_DtmCards_DtmCard_Entry_Fragment
  | EntrySeo_DtmContinents_Continent_Entry_Fragment
  | EntrySeo_DtmCountries_Country_Entry_Fragment
  | EntrySeo_DtmCustomerCompanies_DtmCustomerCompany_Entry_Fragment
  | EntrySeo_DtmCustomerPersons_DtmCustomerPerson_Entry_Fragment
  | EntrySeo_DtmCustomerQuotes_DtmCustomerQuote_Entry_Fragment
  | EntrySeo_DtmEvents_DtmEvent_Entry_Fragment
  | EntrySeo_DtmFooter_DtmFooter_Entry_Fragment
  | EntrySeo_DtmLocationBasedContentBlocks_Partner_Entry_Fragment
  | EntrySeo_DtmLocations_DtmLocationWorldRegion_Entry_Fragment
  | EntrySeo_DtmLocations_DtmLocation_Entry_Fragment
  | EntrySeo_DtmNavigation_DtmNavigation_Entry_Fragment
  | EntrySeo_DtmPage_DtmPageEvents_Entry_Fragment
  | EntrySeo_DtmPage_DtmPageGrailCampaign_Entry_Fragment
  | EntrySeo_DtmPage_DtmPageLocations_Entry_Fragment
  | EntrySeo_DtmPage_DtmPageSko2023_Entry_Fragment
  | EntrySeo_DtmPage_DtmPage_Entry_Fragment
  | EntrySeo_DtmRegions_Region_Entry_Fragment
  | EntrySeo_DtmRelatedContent_Default_Entry_Fragment
  | EntrySeo_DtmSections_DtmSection_Entry_Fragment
  | EntrySeo_DtmSignup_DtmSignup_Entry_Fragment
  | EntrySeo_DtmSolutionPartners_DtmSolutionPartner_Entry_Fragment
  | EntrySeo_DtmSupportedTechnologies_Default_Entry_Fragment
  | EntrySeo_DtmTables_Default_Entry_Fragment;

export const DteLinkGroupFragmentDoc = gql`
  fragment dteLinkGroup on dteLinkGroup_MatrixField {
    ... on dteLinkGroup_data_BlockType {
      cta {
        ariaLabel
        customText
        target
        text
        type
        url
      }
    }
  }
`;
export const EntryDatesFragmentDoc = gql`
  fragment entryDates on EntryInterface {
    dateShort: postDate @formatDateTime(format: "short")
    dateMedium: postDate @formatDateTime(format: "medium")
    dateLong: postDate @formatDateTime(format: "long")
    dateTimezone: postDate @formatDateTime(format: "T")
  }
`;
export const EntryMetaFragmentDoc = gql`
  fragment entryMeta on EntryInterface {
    id
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
export const EntrySeoFragmentDoc = gql`
  fragment entrySEO on EntryInterface {
    seo: seomatic(asArray: true) {
      metaTagContainer
      metaLinkContainer
      metaTitleContainer
      metaScriptContainer
      metaJsonLdContainer
      metaSiteVarsContainer
    }
  }
`;
export const QueryDtePagesDtePageAmplifyDocument = gql`
  query QueryDtePagesDtePageAmplify(
    $siteId: [QueryArgument]!
    $id: [QueryArgument]!
  ) {
    entry(siteId: $siteId, id: $id) {
      ...entryMeta
      ...entryDates
      ... on dtePages_dtePageAmplify_Entry {
        dteLinkGroup {
          ...dteLinkGroup
        }
      }
    }
  }
  ${EntryMetaFragmentDoc}
  ${EntryDatesFragmentDoc}
  ${DteLinkGroupFragmentDoc}
`;
export const QueryEntriesBySectionDocument = gql`
  query QueryEntriesBySection(
    $site: [String]!
    $section: [String]!
    $limit: Int = null
  ) {
    entries(site: $site, section: $section, limit: $limit) {
      ...entryMeta
      ...entrySEO
    }
  }
  ${EntryMetaFragmentDoc}
  ${EntrySeoFragmentDoc}
`;
export const QueryEntryPreviewDocument = gql`
  query QueryEntryPreview($siteId: [QueryArgument]!, $id: [QueryArgument]!) {
    entry(siteId: $siteId, id: $id) {
      ...entryMeta
      ...entrySEO
    }
  }
  ${EntryMetaFragmentDoc}
  ${EntrySeoFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    QueryDtePagesDtePageAmplify(
      variables: QueryDtePagesDtePageAmplifyQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<QueryDtePagesDtePageAmplifyQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<QueryDtePagesDtePageAmplifyQuery>(
            QueryDtePagesDtePageAmplifyDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "QueryDtePagesDtePageAmplify",
        "query"
      );
    },
    QueryEntriesBySection(
      variables: QueryEntriesBySectionQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<QueryEntriesBySectionQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<QueryEntriesBySectionQuery>(
            QueryEntriesBySectionDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "QueryEntriesBySection",
        "query"
      );
    },
    QueryEntryPreview(
      variables: QueryEntryPreviewQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<QueryEntryPreviewQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<QueryEntryPreviewQuery>(
            QueryEntryPreviewDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "QueryEntryPreview",
        "query"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
