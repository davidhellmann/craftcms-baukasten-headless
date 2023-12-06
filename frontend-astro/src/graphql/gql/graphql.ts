/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  /** The `DateTime` scalar type represents a point in time. */
  DateTime: { input: any; output: any };
  /** The `QueryArgument` scalar type represents a value to be using in Craft element queries. It can be an integer, a string, or a boolean value. */
  QueryArgument: { input: any; output: any };
};

export type Address = AddressInterface &
  ElementInterface & {
    __typename?: "Address";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** First line of the address */
    addressLine1?: Maybe<Scalars["String"]["output"]>;
    /** Second line of the address */
    addressLine2?: Maybe<Scalars["String"]["output"]>;
    /** Administrative area. */
    administrativeArea?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** Two-letter country code */
    countryCode: Scalars["String"]["output"];
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** Dependent locality */
    dependentLocality?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The first name on the address. */
    firstName?: Maybe<Scalars["String"]["output"]>;
    /** The full name on the address. */
    fullName?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The last name on the address. */
    lastName?: Maybe<Scalars["String"]["output"]>;
    /** Latitude */
    latitude?: Maybe<Scalars["String"]["output"]>;
    /** Locality */
    locality?: Maybe<Scalars["String"]["output"]>;
    /** Longitude */
    longitude?: Maybe<Scalars["String"]["output"]>;
    /** Organization name */
    organization?: Maybe<Scalars["String"]["output"]>;
    /** Organization tax ID */
    organizationTaxId?: Maybe<Scalars["String"]["output"]>;
    /** Postal code */
    postalCode?: Maybe<Scalars["String"]["output"]>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** Sorting code */
    sortingCode?: Maybe<Scalars["String"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
  };

export type Address_CountArgs = {
  field: Scalars["String"]["input"];
};

/** This is the interface implemented by all addresses. */
export type AddressInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars["Int"]["output"]>;
  /** First line of the address */
  addressLine1?: Maybe<Scalars["String"]["output"]>;
  /** Second line of the address */
  addressLine2?: Maybe<Scalars["String"]["output"]>;
  /** Administrative area. */
  administrativeArea?: Maybe<Scalars["String"]["output"]>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  /** Two-letter country code */
  countryCode: Scalars["String"]["output"];
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
  /** Dependent locality */
  dependentLocality?: Maybe<Scalars["String"]["output"]>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars["Boolean"]["output"]>;
  /** The first name on the address. */
  firstName?: Maybe<Scalars["String"]["output"]>;
  /** The full name on the address. */
  fullName?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars["String"]["output"]>;
  /** The last name on the address. */
  lastName?: Maybe<Scalars["String"]["output"]>;
  /** Latitude */
  latitude?: Maybe<Scalars["String"]["output"]>;
  /** Locality */
  locality?: Maybe<Scalars["String"]["output"]>;
  /** Longitude */
  longitude?: Maybe<Scalars["String"]["output"]>;
  /** Organization name */
  organization?: Maybe<Scalars["String"]["output"]>;
  /** Organization tax ID */
  organizationTaxId?: Maybe<Scalars["String"]["output"]>;
  /** Postal code */
  postalCode?: Maybe<Scalars["String"]["output"]>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars["Int"]["output"]>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars["Int"]["output"]>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
  /** The element’s slug. */
  slug?: Maybe<Scalars["String"]["output"]>;
  /** Sorting code */
  sortingCode?: Maybe<Scalars["String"]["output"]>;
  /** The element’s status. */
  status?: Maybe<Scalars["String"]["output"]>;
  /** The element’s title. */
  title?: Maybe<Scalars["String"]["output"]>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars["Boolean"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The element’s URI. */
  uri?: Maybe<Scalars["String"]["output"]>;
};

/** This is the interface implemented by all addresses. */
export type AddressInterface_CountArgs = {
  field: Scalars["String"]["input"];
};

export type AssetCriteriaInput = {
  /** Narrows the query results to only elements that have been archived. */
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the assets’ files’ last-modified dates. */
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the assets’ filenames. */
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the folders the assets belong to, per the folders’ IDs. */
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on whether the assets have alternative text. */
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the assets’ image heights. */
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Broadens the query results to include assets from any of the subfolders of the folder specified by `folderId`. */
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the assets’ file kinds. */
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars["String"]["input"]>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results based on the assets’ file sizes (in bytes). */
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the user the assets were uploaded by, per the user’s ID. */
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ handles. */
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs. */
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on the assets’ image widths. */
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** A list of transform handles to preload. */
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** This is the interface implemented by all assets. */
export type AssetInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars["Int"]["output"]>;
  /** Alternative text for the asset. */
  alt?: Maybe<Scalars["String"]["output"]>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
  /** The date the asset file was last modified. */
  dateModified?: Maybe<Scalars["DateTime"]["output"]>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars["Boolean"]["output"]>;
  /** The file extension for the asset file. */
  extension: Scalars["String"]["output"];
  /** The filename of the asset file. */
  filename: Scalars["String"]["output"];
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  focalPoint?: Maybe<Array<Maybe<Scalars["Float"]["output"]>>>;
  /** The ID of the folder that the asset belongs to. */
  folderId: Scalars["Int"]["output"];
  /** Returns the file’s format. */
  format?: Maybe<Scalars["String"]["output"]>;
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint: Scalars["Boolean"]["output"];
  /** The height in pixels or null if it’s not an image. */
  height?: Maybe<Scalars["Int"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Returns a list of images produced from the named Imager X transform. */
  imagerTransform?: Maybe<Array<Maybe<ImagerTransformedImageInterface>>>;
  /** An `<img>` tag based on this asset. */
  img?: Maybe<Scalars["String"]["output"]>;
  /** The file kind. */
  kind: Scalars["String"]["output"];
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars["String"]["output"]>;
  /** The file’s MIME type, if it can be determined. */
  mimeType?: Maybe<Scalars["String"]["output"]>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  path: Scalars["String"]["output"];
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars["Int"]["output"]>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars["Int"]["output"]>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
  /** The file size in bytes. */
  size?: Maybe<Scalars["String"]["output"]>;
  /** The element’s slug. */
  slug?: Maybe<Scalars["String"]["output"]>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  srcset?: Maybe<Scalars["String"]["output"]>;
  /** The element’s status. */
  status?: Maybe<Scalars["String"]["output"]>;
  /** The element’s title. */
  title?: Maybe<Scalars["String"]["output"]>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars["Boolean"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The user who first added this asset (if known). */
  uploader?: Maybe<UserInterface>;
  /** The ID of the user who first added this asset (if known). */
  uploaderId?: Maybe<Scalars["Int"]["output"]>;
  /** The element’s URI. */
  uri?: Maybe<Scalars["String"]["output"]>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the volume that the asset belongs to. */
  volumeId?: Maybe<Scalars["Int"]["output"]>;
  /** The width in pixels or null if it’s not an image. */
  width?: Maybe<Scalars["Int"]["output"]>;
};

/** This is the interface implemented by all assets. */
export type AssetInterface_CountArgs = {
  field: Scalars["String"]["input"];
};

/** This is the interface implemented by all assets. */
export type AssetInterfaceFormatArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

/** This is the interface implemented by all assets. */
export type AssetInterfaceHeightArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

/** This is the interface implemented by all assets. */
export type AssetInterfaceImagerTransformArgs = {
  transform?: InputMaybe<Scalars["String"]["input"]>;
};

/** This is the interface implemented by all assets. */
export type AssetInterfaceNextArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** This is the interface implemented by all assets. */
export type AssetInterfacePrevArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** This is the interface implemented by all assets. */
export type AssetInterfaceSrcsetArgs = {
  sizes: Array<Scalars["String"]["input"]>;
};

/** This is the interface implemented by all assets. */
export type AssetInterfaceUploaderArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetUploaders?: InputMaybe<Scalars["Boolean"]["input"]>;
  authors?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasPhoto?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** This is the interface implemented by all assets. */
export type AssetInterfaceUrlArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

/** This is the interface implemented by all assets. */
export type AssetInterfaceWidthArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CategoryCriteriaInput = {
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only elements that have been archived. */
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  /** Whether to only return categories that the user has permission to edit. */
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the category groups the categories belong to per the group’s handles. */
  group?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the category groups the categories belong to, per the groups’ IDs. */
  groupId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level?: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars["String"]["input"]>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines which structure data should be joined into the query. */
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Element = ElementInterface & {
  __typename?: "Element";
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars["Int"]["output"]>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars["Boolean"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars["String"]["output"]>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars["Int"]["output"]>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars["Int"]["output"]>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
  /** The element’s slug. */
  slug?: Maybe<Scalars["String"]["output"]>;
  /** The element’s status. */
  status?: Maybe<Scalars["String"]["output"]>;
  /** The element’s title. */
  title?: Maybe<Scalars["String"]["output"]>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars["Boolean"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The element’s URI. */
  uri?: Maybe<Scalars["String"]["output"]>;
};

export type Element_CountArgs = {
  field: Scalars["String"]["input"];
};

/** This is the interface implemented by all elements. */
export type ElementInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars["Int"]["output"]>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars["Boolean"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars["String"]["output"]>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars["Int"]["output"]>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars["Int"]["output"]>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
  /** The element’s slug. */
  slug?: Maybe<Scalars["String"]["output"]>;
  /** The element’s status. */
  status?: Maybe<Scalars["String"]["output"]>;
  /** The element’s title. */
  title?: Maybe<Scalars["String"]["output"]>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars["Boolean"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The element’s URI. */
  uri?: Maybe<Scalars["String"]["output"]>;
};

/** This is the interface implemented by all elements. */
export type ElementInterface_CountArgs = {
  field: Scalars["String"]["input"];
};

export type EntryCriteriaInput = {
  /** Narrows the query results to only entries that were posted on or after a certain date. */
  after?: InputMaybe<Scalars["String"]["input"]>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only elements that have been archived. */
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the user group the entries’ authors belong to. */
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the user group the entries’ authors belong to, per the groups’ IDs. */
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results based on the entries’ authors. */
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results to only entries that were posted before a certain date. */
  before?: InputMaybe<Scalars["String"]["input"]>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  /** The drafts’ creator ID */
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  /** The ID of the draft to return (from the `drafts` table) */
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only drafts of a given element.  Set to `false` to fetch unpublished drafts. */
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  /** Whether draft elements should be returned. */
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether to only return entries that the user has permission to edit. */
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results based on the entries’ expiry dates. */
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level?: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results based on the entries’ post dates. */
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  /** Whether provisional drafts should be returned. */
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** The revisions’ creator ID */
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  /** The ID of the revision to return (from the `revisions` table) */
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  /** The source element ID that revisions should be returned for */
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  /** Whether revision elements should be returned. */
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars["String"]["input"]>;
  /** Narrows the query results based on the section handles the entries belong to. */
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the sections the entries belong to, per the sections’ IDs. */
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines which structure data should be joined into the query. */
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the entries’ entry type handles. */
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the entries’ entry types, per the types’ IDs. */
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** This is the interface implemented by all entries. */
export type EntryInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars["Int"]["output"]>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  /** The entry’s author. */
  author?: Maybe<UserInterface>;
  /** The ID of the author of this entry. */
  authorId?: Maybe<Scalars["Int"]["output"]>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars["Int"]["output"]>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars["String"]["output"]>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The current revision for the entry. */
  currentRevision?: Maybe<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The creator of a given draft. */
  draftCreator?: Maybe<UserInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars["Int"]["output"]>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars["String"]["output"]>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars["String"]["output"]>;
  /** The drafts for the entry. */
  drafts?: Maybe<Array<Maybe<EntryInterface>>>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars["Boolean"]["output"]>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars["DateTime"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars["Boolean"]["output"]>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars["Boolean"]["output"]>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars["Boolean"]["output"]>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars["String"]["output"]>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars["Int"]["output"]>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars["Int"]["output"]>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars["DateTime"]["output"]>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The creator of a given revision. */
  revisionCreator?: Maybe<UserInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars["Int"]["output"]>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars["String"]["output"]>;
  /** The revisions for the entry. */
  revisions?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars["Int"]["output"]>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars["Int"]["output"]>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars["Int"]["output"]>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars["String"]["output"];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars["Int"]["output"];
  /** This query is used to query for SEOmatic meta data. */
  seomatic?: Maybe<SeomaticInterface>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars["Int"]["output"]>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
  /** The element’s slug. */
  slug?: Maybe<Scalars["String"]["output"]>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars["Int"]["output"]>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars["String"]["output"]>;
  /** The element’s status. */
  status?: Maybe<Scalars["String"]["output"]>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars["Int"]["output"]>;
  /** The element’s title. */
  title?: Maybe<Scalars["String"]["output"]>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars["Boolean"]["output"]>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars["String"]["output"];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars["Int"]["output"];
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The element’s URI. */
  uri?: Maybe<Scalars["String"]["output"]>;
  /** The element’s full URL */
  url?: Maybe<Scalars["String"]["output"]>;
};

/** This is the interface implemented by all entries. */
export type EntryInterface_CountArgs = {
  field: Scalars["String"]["input"];
};

/** This is the interface implemented by all entries. */
export type EntryInterfaceAncestorsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** This is the interface implemented by all entries. */
export type EntryInterfaceChildrenArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** This is the interface implemented by all entries. */
export type EntryInterfaceDescendantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** This is the interface implemented by all entries. */
export type EntryInterfaceDraftsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** This is the interface implemented by all entries. */
export type EntryInterfaceLocalizedArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** This is the interface implemented by all entries. */
export type EntryInterfaceNextArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** This is the interface implemented by all entries. */
export type EntryInterfaceParentArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** This is the interface implemented by all entries. */
export type EntryInterfacePrevArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** This is the interface implemented by all entries. */
export type EntryInterfaceRevisionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** This is the interface implemented by all entries. */
export type EntryInterfaceSeomaticArgs = {
  asArray?: InputMaybe<Scalars["Boolean"]["input"]>;
  environment?: InputMaybe<SeomaticEnvironment>;
  site?: InputMaybe<Scalars["String"]["input"]>;
  siteId?: InputMaybe<Scalars["Int"]["input"]>;
  uri?: InputMaybe<Scalars["String"]["input"]>;
};

export type FieldAttribute = {
  __typename?: "FieldAttribute";
  label?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

/** This is the interface implemented by all fields. */
export type FieldInterface = {
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type FieldOption = {
  __typename?: "FieldOption";
  /** Whether this option has been marked as a default. */
  isDefault?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether this option has been marked as an `optgroup`. */
  isOptgroup?: Maybe<Scalars["Boolean"]["output"]>;
  /** The label of the option. */
  label?: Maybe<Scalars["String"]["output"]>;
  /** The value of the option. */
  value?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Address = FieldInterface & {
  __typename?: "Field_Address";
  address1Collapsed?: Maybe<Scalars["Boolean"]["output"]>;
  address1DefaultValue?: Maybe<Scalars["String"]["output"]>;
  address1Enabled?: Maybe<Scalars["Boolean"]["output"]>;
  address1ErrorMessage?: Maybe<Scalars["String"]["output"]>;
  address1Hidden?: Maybe<Scalars["Boolean"]["output"]>;
  address1Label?: Maybe<Scalars["String"]["output"]>;
  address1Placeholder?: Maybe<Scalars["String"]["output"]>;
  address1PrePopulate?: Maybe<Scalars["String"]["output"]>;
  address1Required?: Maybe<Scalars["Boolean"]["output"]>;
  address2Collapsed?: Maybe<Scalars["Boolean"]["output"]>;
  address2DefaultValue?: Maybe<Scalars["String"]["output"]>;
  address2Enabled?: Maybe<Scalars["Boolean"]["output"]>;
  address2ErrorMessage?: Maybe<Scalars["String"]["output"]>;
  address2Hidden?: Maybe<Scalars["Boolean"]["output"]>;
  address2Label?: Maybe<Scalars["String"]["output"]>;
  address2Placeholder?: Maybe<Scalars["String"]["output"]>;
  address2PrePopulate?: Maybe<Scalars["String"]["output"]>;
  address2Required?: Maybe<Scalars["Boolean"]["output"]>;
  address3Collapsed?: Maybe<Scalars["Boolean"]["output"]>;
  address3DefaultValue?: Maybe<Scalars["String"]["output"]>;
  address3Enabled?: Maybe<Scalars["Boolean"]["output"]>;
  address3ErrorMessage?: Maybe<Scalars["String"]["output"]>;
  address3Hidden?: Maybe<Scalars["Boolean"]["output"]>;
  address3Label?: Maybe<Scalars["String"]["output"]>;
  address3Placeholder?: Maybe<Scalars["String"]["output"]>;
  address3PrePopulate?: Maybe<Scalars["String"]["output"]>;
  address3Required?: Maybe<Scalars["Boolean"]["output"]>;
  autocompleteCollapsed?: Maybe<Scalars["Boolean"]["output"]>;
  autocompleteCurrentLocation?: Maybe<Scalars["Boolean"]["output"]>;
  autocompleteDefaultValue?: Maybe<Scalars["String"]["output"]>;
  autocompleteEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  autocompleteErrorMessage?: Maybe<Scalars["String"]["output"]>;
  autocompleteIntegration?: Maybe<Scalars["String"]["output"]>;
  autocompleteLabel?: Maybe<Scalars["String"]["output"]>;
  autocompletePlaceholder?: Maybe<Scalars["String"]["output"]>;
  autocompletePrePopulate?: Maybe<Scalars["String"]["output"]>;
  autocompleteRequired?: Maybe<Scalars["Boolean"]["output"]>;
  cityCollapsed?: Maybe<Scalars["Boolean"]["output"]>;
  cityDefaultValue?: Maybe<Scalars["String"]["output"]>;
  cityEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  cityErrorMessage?: Maybe<Scalars["String"]["output"]>;
  cityHidden?: Maybe<Scalars["Boolean"]["output"]>;
  cityLabel?: Maybe<Scalars["String"]["output"]>;
  cityPlaceholder?: Maybe<Scalars["String"]["output"]>;
  cityPrePopulate?: Maybe<Scalars["String"]["output"]>;
  cityRequired?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  countryCollapsed?: Maybe<Scalars["Boolean"]["output"]>;
  countryDefaultValue?: Maybe<Scalars["String"]["output"]>;
  countryEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  countryErrorMessage?: Maybe<Scalars["String"]["output"]>;
  countryHidden?: Maybe<Scalars["Boolean"]["output"]>;
  countryLabel?: Maybe<Scalars["String"]["output"]>;
  countryOptions?: Maybe<Array<Maybe<FieldAttribute>>>;
  countryPlaceholder?: Maybe<Scalars["String"]["output"]>;
  countryPrePopulate?: Maybe<Scalars["String"]["output"]>;
  countryRequired?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  stateCollapsed?: Maybe<Scalars["Boolean"]["output"]>;
  stateDefaultValue?: Maybe<Scalars["String"]["output"]>;
  stateEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  stateErrorMessage?: Maybe<Scalars["String"]["output"]>;
  stateHidden?: Maybe<Scalars["Boolean"]["output"]>;
  stateLabel?: Maybe<Scalars["String"]["output"]>;
  statePlaceholder?: Maybe<Scalars["String"]["output"]>;
  statePrePopulate?: Maybe<Scalars["String"]["output"]>;
  stateRequired?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
  zipCollapsed?: Maybe<Scalars["Boolean"]["output"]>;
  zipDefaultValue?: Maybe<Scalars["String"]["output"]>;
  zipEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  zipErrorMessage?: Maybe<Scalars["String"]["output"]>;
  zipHidden?: Maybe<Scalars["Boolean"]["output"]>;
  zipLabel?: Maybe<Scalars["String"]["output"]>;
  zipPlaceholder?: Maybe<Scalars["String"]["output"]>;
  zipPrePopulate?: Maybe<Scalars["String"]["output"]>;
  zipRequired?: Maybe<Scalars["Boolean"]["output"]>;
};

export type Field_Agree = FieldInterface & {
  __typename?: "Field_Agree";
  checkedValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  defaultState?: Maybe<Scalars["Boolean"]["output"]>;
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  descriptionHtml?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  uncheckedValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Calculations = FieldInterface & {
  __typename?: "Field_Calculations";
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  decimals?: Maybe<Scalars["Int"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  formatting?: Maybe<Scalars["String"]["output"]>;
  formula?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  prefix?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  suffix?: Maybe<Scalars["String"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Checkboxes = FieldInterface & {
  __typename?: "Field_Checkboxes";
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  layout?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  multi?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  options?: Maybe<Array<Maybe<FieldOption>>>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  toggleCheckbox?: Maybe<Scalars["String"]["output"]>;
  toggleCheckboxLabel?: Maybe<Scalars["String"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Date = FieldInterface & {
  __typename?: "Field_Date";
  ampmLabel?: Maybe<Scalars["String"]["output"]>;
  ampmPlaceholder?: Maybe<Scalars["String"]["output"]>;
  availableDaysOfWeek?: Maybe<Scalars["String"]["output"]>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  dateFormat?: Maybe<Scalars["String"]["output"]>;
  datePickerOptions?: Maybe<Array<Maybe<FieldAttribute>>>;
  dayLabel?: Maybe<Scalars["String"]["output"]>;
  dayPlaceholder?: Maybe<Scalars["String"]["output"]>;
  defaultDate?: Maybe<Scalars["DateTime"]["output"]>;
  defaultOption?: Maybe<Scalars["String"]["output"]>;
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  displayType?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  hourLabel?: Maybe<Scalars["String"]["output"]>;
  hourPlaceholder?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  includeDate?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  includeTime?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  maxDate?: Maybe<Scalars["DateTime"]["output"]>;
  maxDateOffset?: Maybe<Scalars["String"]["output"]>;
  maxDateOffsetNumber?: Maybe<Scalars["Int"]["output"]>;
  maxDateOffsetType?: Maybe<Scalars["String"]["output"]>;
  maxDateOption?: Maybe<Scalars["String"]["output"]>;
  maxYearRange?: Maybe<Scalars["Int"]["output"]>;
  minDate?: Maybe<Scalars["DateTime"]["output"]>;
  minDateOffset?: Maybe<Scalars["String"]["output"]>;
  minDateOffsetNumber?: Maybe<Scalars["Int"]["output"]>;
  minDateOffsetType?: Maybe<Scalars["String"]["output"]>;
  minDateOption?: Maybe<Scalars["String"]["output"]>;
  minYearRange?: Maybe<Scalars["Int"]["output"]>;
  minuteLabel?: Maybe<Scalars["String"]["output"]>;
  minutePlaceholder?: Maybe<Scalars["String"]["output"]>;
  monthLabel?: Maybe<Scalars["String"]["output"]>;
  monthPlaceholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  secondLabel?: Maybe<Scalars["String"]["output"]>;
  secondPlaceholder?: Maybe<Scalars["String"]["output"]>;
  timeFormat?: Maybe<Scalars["String"]["output"]>;
  timeLabel?: Maybe<Scalars["String"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  useDatePicker?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
  yearLabel?: Maybe<Scalars["String"]["output"]>;
  yearPlaceholder?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Dropdown = FieldInterface & {
  __typename?: "Field_Dropdown";
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  multi?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  options?: Maybe<Array<Maybe<FieldOption>>>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Email = FieldInterface & {
  __typename?: "Field_Email";
  blockedDomains?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  uniqueValue?: Maybe<Scalars["Boolean"]["output"]>;
  validateDomain?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Entries = FieldInterface & {
  __typename?: "Field_Entries";
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  defaultEntry?: Maybe<EntryInterface>;
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  entries?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  searchable?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_EntriesDefaultEntryArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Field_EntriesEntriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Field_FileUpload = FieldInterface & {
  __typename?: "Field_FileUpload";
  allowSubfolders?: Maybe<Scalars["Boolean"]["output"]>;
  allowUploads?: Maybe<Scalars["Boolean"]["output"]>;
  allowedKinds?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  defaultUploadLocationSource?: Maybe<Scalars["String"]["output"]>;
  defaultUploadLocationSubpath?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  limitFiles?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  previewMode?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  restrictFiles?: Maybe<Scalars["Boolean"]["output"]>;
  restrictLocation?: Maybe<Scalars["Boolean"]["output"]>;
  restrictedDefaultUploadSubpath?: Maybe<Scalars["String"]["output"]>;
  restrictedLocationSource?: Maybe<Scalars["String"]["output"]>;
  restrictedLocationSubpath?: Maybe<Scalars["String"]["output"]>;
  searchable?: Maybe<Scalars["Boolean"]["output"]>;
  showUnpermittedFiles?: Maybe<Scalars["Boolean"]["output"]>;
  showUnpermittedVolumes?: Maybe<Scalars["Boolean"]["output"]>;
  sizeLimit?: Maybe<Scalars["String"]["output"]>;
  sizeMinLimit?: Maybe<Scalars["String"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  uploadLocationSource?: Maybe<Scalars["String"]["output"]>;
  uploadLocationSubpath?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
  volumeHandle?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Group = FieldInterface & {
  __typename?: "Field_Group";
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s nested fields. */
  fields?: Maybe<Array<Maybe<FieldInterface>>>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s nested rows. */
  nestedRows?: Maybe<Array<Maybe<RowInterface>>>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Heading = FieldInterface & {
  __typename?: "Field_Heading";
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  headingSize?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Hidden = FieldInterface & {
  __typename?: "Field_Hidden";
  columnType?: Maybe<Scalars["String"]["output"]>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  cookieName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  defaultOption?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  queryParameter?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Html = FieldInterface & {
  __typename?: "Field_Html";
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  htmlContent?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  purifyContent?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_MultiLineText = FieldInterface & {
  __typename?: "Field_MultiLineText";
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  limit?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  max?: Maybe<Scalars["Int"]["output"]>;
  maxType?: Maybe<Scalars["String"]["output"]>;
  min?: Maybe<Scalars["Int"]["output"]>;
  minType?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  richTextButtons?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  useRichText?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Name = FieldInterface & {
  __typename?: "Field_Name";
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  firstNameCollapsed?: Maybe<Scalars["Boolean"]["output"]>;
  firstNameDefaultValue?: Maybe<Scalars["String"]["output"]>;
  firstNameEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  firstNameErrorMessage?: Maybe<Scalars["String"]["output"]>;
  firstNameLabel?: Maybe<Scalars["String"]["output"]>;
  firstNamePlaceholder?: Maybe<Scalars["String"]["output"]>;
  firstNamePrePopulate?: Maybe<Scalars["String"]["output"]>;
  firstNameRequired?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  lastNameCollapsed?: Maybe<Scalars["Boolean"]["output"]>;
  lastNameDefaultValue?: Maybe<Scalars["String"]["output"]>;
  lastNameEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  lastNameErrorMessage?: Maybe<Scalars["String"]["output"]>;
  lastNameLabel?: Maybe<Scalars["String"]["output"]>;
  lastNamePlaceholder?: Maybe<Scalars["String"]["output"]>;
  lastNamePrePopulate?: Maybe<Scalars["String"]["output"]>;
  lastNameRequired?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  middleNameCollapsed?: Maybe<Scalars["Boolean"]["output"]>;
  middleNameDefaultValue?: Maybe<Scalars["String"]["output"]>;
  middleNameEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  middleNameErrorMessage?: Maybe<Scalars["String"]["output"]>;
  middleNameLabel?: Maybe<Scalars["String"]["output"]>;
  middleNamePlaceholder?: Maybe<Scalars["String"]["output"]>;
  middleNamePrePopulate?: Maybe<Scalars["String"]["output"]>;
  middleNameRequired?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  prefixCollapsed?: Maybe<Scalars["Boolean"]["output"]>;
  prefixDefaultValue?: Maybe<Scalars["String"]["output"]>;
  prefixEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  prefixErrorMessage?: Maybe<Scalars["String"]["output"]>;
  prefixLabel?: Maybe<Scalars["String"]["output"]>;
  prefixOptions?: Maybe<Array<Maybe<FieldAttribute>>>;
  prefixPlaceholder?: Maybe<Scalars["String"]["output"]>;
  prefixPrePopulate?: Maybe<Scalars["String"]["output"]>;
  prefixRequired?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  useMultipleFields?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Number = FieldInterface & {
  __typename?: "Field_Number";
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  decimals?: Maybe<Scalars["Int"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  limit?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  max?: Maybe<Scalars["Int"]["output"]>;
  maxValue?: Maybe<Scalars["Float"]["output"]>;
  min?: Maybe<Scalars["Int"]["output"]>;
  minValue?: Maybe<Scalars["Float"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Password = FieldInterface & {
  __typename?: "Field_Password";
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Payment = FieldInterface & {
  __typename?: "Field_Payment";
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  paymentIntegration?: Maybe<Scalars["String"]["output"]>;
  paymentIntegrationType?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  providerSettings?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Phone = FieldInterface & {
  __typename?: "Field_Phone";
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  countryAllowed?: Maybe<Scalars["String"]["output"]>;
  countryCollapsed?: Maybe<Scalars["Boolean"]["output"]>;
  countryDefaultValue?: Maybe<Scalars["String"]["output"]>;
  countryEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  countryOptions?: Maybe<Array<Maybe<FieldAttribute>>>;
  countryShowDialCode?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Radio = FieldInterface & {
  __typename?: "Field_Radio";
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  layout?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  options?: Maybe<Array<Maybe<FieldOption>>>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Recipients = FieldInterface & {
  __typename?: "Field_Recipients";
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  displayType?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  multiple?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  options?: Maybe<Array<Maybe<FieldOption>>>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Repeater = FieldInterface & {
  __typename?: "Field_Repeater";
  addLabel?: Maybe<Scalars["String"]["output"]>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s nested fields. */
  fields?: Maybe<Array<Maybe<FieldInterface>>>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  maxRows?: Maybe<Scalars["Int"]["output"]>;
  minRows?: Maybe<Scalars["Int"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s nested rows. */
  nestedRows?: Maybe<Array<Maybe<RowInterface>>>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Section = FieldInterface & {
  __typename?: "Field_Section";
  borderColor?: Maybe<Scalars["String"]["output"]>;
  borderStyle?: Maybe<Scalars["String"]["output"]>;
  borderWidth?: Maybe<Scalars["Int"]["output"]>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Signature = FieldInterface & {
  __typename?: "Field_Signature";
  backgroundColor?: Maybe<Scalars["String"]["output"]>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  penColor?: Maybe<Scalars["String"]["output"]>;
  penWeight?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_SingleLineText = FieldInterface & {
  __typename?: "Field_SingleLineText";
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  limit?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  max?: Maybe<Scalars["Int"]["output"]>;
  maxType?: Maybe<Scalars["String"]["output"]>;
  min?: Maybe<Scalars["Int"]["output"]>;
  minType?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Summary = FieldInterface & {
  __typename?: "Field_Summary";
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Table = FieldInterface & {
  __typename?: "Field_Table";
  addRowLabel?: Maybe<Scalars["String"]["output"]>;
  columnType?: Maybe<Scalars["String"]["output"]>;
  columns?: Maybe<Array<Maybe<KeyValueType>>>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  defaults?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  maxRows?: Maybe<Scalars["Int"]["output"]>;
  minRows?: Maybe<Scalars["Int"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  searchable?: Maybe<Scalars["Boolean"]["output"]>;
  static?: Maybe<Scalars["Boolean"]["output"]>;
  staticRows?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_Users = FieldInterface & {
  __typename?: "Field_Users";
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  defaultUser?: Maybe<UserInterface>;
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The field’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars["String"]["output"]>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars["String"]["output"]>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars["String"]["output"]>;
  /** The field’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars["String"]["output"]>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars["String"]["output"]>;
  /** Whether the field is required. */
  required?: Maybe<Scalars["Boolean"]["output"]>;
  searchable?: Maybe<Scalars["Boolean"]["output"]>;
  /** The field’s type. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  users?: Maybe<Array<Maybe<UserInterface>>>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars["String"]["output"]>;
};

export type Field_UsersDefaultUserArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetUploaders?: InputMaybe<Scalars["Boolean"]["input"]>;
  authors?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasPhoto?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Field_UsersUsersArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetUploaders?: InputMaybe<Scalars["Boolean"]["input"]>;
  authors?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasPhoto?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Contents of a file */
export type FileContents = {
  __typename?: "FileContents";
  contents?: Maybe<Scalars["String"]["output"]>;
  filename: Scalars["String"]["output"];
};

export type FormIntegrationsType = {
  __typename?: "FormIntegrationsType";
  /** Whether the integration is enabled. */
  enabled?: Maybe<Scalars["Boolean"]["output"]>;
  /** The integration’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The integration’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The integration’s settings as a JSON string. */
  settings?: Maybe<Scalars["String"]["output"]>;
};

/** This is the interface implemented by all forms. */
export type FormInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars["Int"]["output"]>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  /** A list of captcha values (name and value) to assist with spam protection. */
  captchas?: Maybe<Array<Maybe<FormieCaptchaType>>>;
  /** The form’s config as JSON. */
  configJson?: Maybe<Scalars["String"]["output"]>;
  /** A CSRF token (name and value). */
  csrfToken?: Maybe<FormieCsrfTokenType>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars["Boolean"]["output"]>;
  /** The form’s fields. */
  formFields?: Maybe<Array<Maybe<FieldInterface>>>;
  /** The form’s handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars["String"]["output"]>;
  /** The form’s pages. */
  pages?: Maybe<Array<Maybe<PageInterface>>>;
  /** The form’s rows. */
  rows?: Maybe<Array<Maybe<RowInterface>>>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars["Int"]["output"]>;
  /** The form’s settings. */
  settings?: Maybe<FormSettingsType>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars["Int"]["output"]>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
  /** The element’s slug. */
  slug?: Maybe<Scalars["String"]["output"]>;
  /** The element’s status. */
  status?: Maybe<Scalars["String"]["output"]>;
  /** The form’s endpoint for sending submissions to, if using POST requests. */
  submissionEndpoint?: Maybe<Scalars["String"]["output"]>;
  /** The form’s GQL mutation name for submissions to use. */
  submissionMutationName?: Maybe<Scalars["String"]["output"]>;
  /** The form’s rendered HTML. */
  templateHtml?: Maybe<Scalars["String"]["output"]>;
  /** The element’s title. */
  title?: Maybe<Scalars["String"]["output"]>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars["Boolean"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The element’s URI. */
  uri?: Maybe<Scalars["String"]["output"]>;
};

/** This is the interface implemented by all forms. */
export type FormInterface_CountArgs = {
  field: Scalars["String"]["input"];
};

/** This is the interface implemented by all forms. */
export type FormInterfaceFormFieldsArgs = {
  includeDisabled?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** This is the interface implemented by all forms. */
export type FormInterfaceTemplateHtmlArgs = {
  options?: InputMaybe<Scalars["String"]["input"]>;
  populateFormValues?: InputMaybe<Scalars["String"]["input"]>;
};

export type FormSettingsType = {
  __typename?: "FormSettingsType";
  /** The form’s default instructions position for fields. This will be a `verbb\formie\positions` class name. */
  defaultInstructionsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The form’s default label position for fields. This will be a `verbb\formie\positions` class name. */
  defaultLabelPosition?: Maybe<Scalars["String"]["output"]>;
  /** Whether to show the form’s current page title. */
  displayCurrentPageTitle?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether to show the form’s title. */
  displayFormTitle?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether to show the form’s page progress. */
  displayPageProgress?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether to show the form’s page tabs. */
  displayPageTabs?: Maybe<Scalars["Boolean"]["output"]>;
  /** The form’s submit error message. */
  errorMessageHtml?: Maybe<Scalars["String"]["output"]>;
  /** The form’s error message position. Either `null`, `top-form` or `bottom-form`. */
  errorMessagePosition?: Maybe<Scalars["String"]["output"]>;
  /** The form’s enabled integrations. */
  integrations?: Maybe<Array<Maybe<FormIntegrationsType>>>;
  /** The type of loading indicator to use. Either `spinner` or `text`. */
  loadingIndicator?: Maybe<Scalars["String"]["output"]>;
  /** The form’s loading indicator text. */
  loadingIndicatorText?: Maybe<Scalars["String"]["output"]>;
  /** The form’s progress bar position. Either `start` or `end`. */
  progressPosition?: Maybe<Scalars["String"]["output"]>;
  /** The form’s submit action entry (for redirection), if `submitAction` is `entry`. */
  redirectEntry?: Maybe<EntryInterface>;
  /** The form’s submit action redirect URL, resolved depending on `submitAction` being `entry` or `url`. */
  redirectUrl?: Maybe<Scalars["String"]["output"]>;
  /** Whether to the form should scroll to the top of the page when submitted. */
  scrollToTop?: Maybe<Scalars["Boolean"]["output"]>;
  /** The form’s submit action. Either `message`, `entry`, `url`, `reload`. */
  submitAction?: Maybe<Scalars["String"]["output"]>;
  /** Whether to hide the form’s success message. */
  submitActionFormHide?: Maybe<Scalars["Boolean"]["output"]>;
  /** The form’s submit success message. */
  submitActionMessageHtml?: Maybe<Scalars["String"]["output"]>;
  /** The form’s submit message position. Either `top-form` or `bottom-form`. */
  submitActionMessagePosition?: Maybe<Scalars["String"]["output"]>;
  /** The form’s submit success message timeout in seconds. */
  submitActionMessageTimeout?: Maybe<Scalars["Int"]["output"]>;
  /** The form’s submit redirect option (if in new tab or same tab). Either `same-tab` or `new-tab`. */
  submitActionTab?: Maybe<Scalars["String"]["output"]>;
  /** The form’s submit method. Either `page-reload` or `ajax`. */
  submitMethod?: Maybe<Scalars["String"]["output"]>;
  /** Whether to validate the form’s on focus. */
  validationOnFocus?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether to validate the form’s on submit. */
  validationOnSubmit?: Maybe<Scalars["Boolean"]["output"]>;
};

export type FormSettingsTypeRedirectEntryArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type FormieCaptchaType = {
  __typename?: "FormieCaptchaType";
  /** The captcha handle. */
  handle?: Maybe<Scalars["String"]["output"]>;
  /** The captcha name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The catpcha value. */
  value?: Maybe<Scalars["String"]["output"]>;
};

export type FormieCsrfTokenType = {
  __typename?: "FormieCsrfTokenType";
  /** The CSRF name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The CSRF token. */
  value?: Maybe<Scalars["String"]["output"]>;
};

/** This is the interface implemented by Imager X. */
export type ImagerTransformedImageInterface = {
  /** Extension of transformed image. */
  extension?: Maybe<Scalars["String"]["output"]>;
  /** Filename of transformed image. */
  filename?: Maybe<Scalars["String"]["output"]>;
  /** Height of transformed image. */
  height?: Maybe<Scalars["Int"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Size of transformed image. */
  isNew?: Maybe<Scalars["Boolean"]["output"]>;
  /** Mime type of transformed image. */
  mimeType?: Maybe<Scalars["String"]["output"]>;
  /** Path to transformed image. */
  path?: Maybe<Scalars["String"]["output"]>;
  /** Size of transformed image. */
  size?: Maybe<Scalars["Int"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** URL for transformed image. */
  url?: Maybe<Scalars["String"]["output"]>;
  /** Width of transformed image. */
  width?: Maybe<Scalars["Int"]["output"]>;
};

export type KeyValueType = {
  __typename?: "KeyValueType";
  handle?: Maybe<Scalars["String"]["output"]>;
  heading?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["String"]["output"]>;
};

/** This is the interface implemented by all matrix blocks. */
export type MatrixBlockInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars["Int"]["output"]>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars["Boolean"]["output"]>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars["Int"]["output"];
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars["Int"]["output"];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars["Int"]["output"]>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars["Int"]["output"]>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
  /** The element’s slug. */
  slug?: Maybe<Scalars["String"]["output"]>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars["Int"]["output"]>;
  /** The element’s status. */
  status?: Maybe<Scalars["String"]["output"]>;
  /** The element’s title. */
  title?: Maybe<Scalars["String"]["output"]>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars["Boolean"]["output"]>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars["String"]["output"];
  /** The ID of the matrix block’s type. */
  typeId: Scalars["Int"]["output"];
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The element’s URI. */
  uri?: Maybe<Scalars["String"]["output"]>;
};

/** This is the interface implemented by all matrix blocks. */
export type MatrixBlockInterface_CountArgs = {
  field: Scalars["String"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  ping?: Maybe<Scalars["String"]["output"]>;
};

export type NodeCustomAttribute = {
  __typename?: "NodeCustomAttribute";
  attribute?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

/** This is the interface implemented by all nodes. */
export type NodeInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars["Int"]["output"]>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  /** The node’s children. Accepts the same arguments as the `nodes` query. */
  children?: Maybe<Array<Maybe<NodeInterface>>>;
  /** Any additional classes for the node. */
  classes?: Maybe<Scalars["String"]["output"]>;
  /** Any additional custom attributes for the node. */
  customAttributes?: Maybe<Array<Maybe<NodeCustomAttribute>>>;
  /** Any additional data for the node. */
  data?: Maybe<Scalars["String"]["output"]>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
  /** The element the node links to. */
  element?: Maybe<ElementInterface>;
  /** The ID of the element this node is linked to. */
  elementId?: Maybe<Scalars["Int"]["output"]>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars["Boolean"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars["String"]["output"]>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars["Int"]["output"]>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars["Int"]["output"]>;
  /** The handle of the navigation this node belongs to. */
  navHandle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the navigation this node belongs to. */
  navId?: Maybe<Scalars["Int"]["output"]>;
  /** The name of the navigation this node belongs to. */
  navName?: Maybe<Scalars["String"]["output"]>;
  /** Whether this node should open in a new window. */
  newWindow?: Maybe<Scalars["String"]["output"]>;
  /** The node’s URI */
  nodeUri?: Maybe<Scalars["String"]["output"]>;
  /** The node’s parent. */
  parent?: Maybe<NodeInterface>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars["Int"]["output"]>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars["Int"]["output"]>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars["Int"]["output"]>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars["Int"]["output"]>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
  /** The element’s slug. */
  slug?: Maybe<Scalars["String"]["output"]>;
  /** The element’s status. */
  status?: Maybe<Scalars["String"]["output"]>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars["Int"]["output"]>;
  /** The element’s title. */
  title?: Maybe<Scalars["String"]["output"]>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars["Boolean"]["output"]>;
  /** The type of node this is. */
  type?: Maybe<Scalars["String"]["output"]>;
  /** The display name for the type of node this is. */
  typeLabel?: Maybe<Scalars["String"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The element’s URI. */
  uri?: Maybe<Scalars["String"]["output"]>;
  /** The node’s full URL */
  url?: Maybe<Scalars["String"]["output"]>;
  /** The URL for this navigation item. */
  urlSuffix?: Maybe<Scalars["String"]["output"]>;
};

/** This is the interface implemented by all nodes. */
export type NodeInterface_CountArgs = {
  field: Scalars["String"]["input"];
};

/** This is the interface implemented by all nodes. */
export type NodeInterfaceChildrenArgs = {
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nav?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  navHandle?: InputMaybe<Scalars["String"]["input"]>;
  navId?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** This is the interface implemented by all pages. */
export type PageInterface = {
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** The page’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The page’s fields. */
  pageFields?: Maybe<Array<Maybe<FieldInterface>>>;
  /** The page’s rows. */
  rows?: Maybe<Array<Maybe<RowInterface>>>;
  /** The page’s settings, including buttons. */
  settings?: Maybe<PageSettingsInterface>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
};

/** This is the interface implemented by all pages. */
export type PageInterfacePageFieldsArgs = {
  includeDisabled?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** This is the interface implemented by all pages. */
export type PageSettingsInterface = {
  /** The page’s back button label. */
  backButtonLabel?: Maybe<Scalars["String"]["output"]>;
  /** The page’s button (back and submit) positions. */
  buttonsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The page’s button (back and submit) container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The page’s button (back and submit) CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** Whether the page’s next button has conditions enabled, for multi-page forms. */
  enableNextButtonConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the page has conditions enabled. */
  enablePageConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** The page’s button (back and submit) input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The page’s conditions for whether to show the next button, for multi-page forms as a JSON string. */
  nextButtonConditions?: Maybe<Scalars["String"]["output"]>;
  /** The page’s conditions as a JSON string. */
  pageConditions?: Maybe<Scalars["String"]["output"]>;
  /** The page’s draft button label. */
  saveButtonLabel?: Maybe<Scalars["String"]["output"]>;
  /** Whether to show the page’s back button. */
  showBackButton?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether to show the page’s draft button. */
  showSaveButton?: Maybe<Scalars["Boolean"]["output"]>;
  /** The page’s submit button label. */
  submitButtonLabel?: Maybe<Scalars["String"]["output"]>;
};

export type PageSettingsType = PageSettingsInterface & {
  __typename?: "PageSettingsType";
  /** The page’s back button label. */
  backButtonLabel?: Maybe<Scalars["String"]["output"]>;
  /** The page’s button (back and submit) positions. */
  buttonsPosition?: Maybe<Scalars["String"]["output"]>;
  /** The page’s button (back and submit) container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The page’s button (back and submit) CSS classes. */
  cssClasses?: Maybe<Scalars["String"]["output"]>;
  /** Whether the page’s next button has conditions enabled, for multi-page forms. */
  enableNextButtonConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the page has conditions enabled. */
  enablePageConditions?: Maybe<Scalars["Boolean"]["output"]>;
  /** The page’s button (back and submit) input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The page’s conditions for whether to show the next button, for multi-page forms as a JSON string. */
  nextButtonConditions?: Maybe<Scalars["String"]["output"]>;
  /** The page’s conditions as a JSON string. */
  pageConditions?: Maybe<Scalars["String"]["output"]>;
  /** The page’s draft button label. */
  saveButtonLabel?: Maybe<Scalars["String"]["output"]>;
  /** Whether to show the page’s back button. */
  showBackButton?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether to show the page’s draft button. */
  showSaveButton?: Maybe<Scalars["Boolean"]["output"]>;
  /** The page’s submit button label. */
  submitButtonLabel?: Maybe<Scalars["String"]["output"]>;
};

export type PageType = PageInterface & {
  __typename?: "PageType";
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** The page’s name. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The page’s fields. */
  pageFields?: Maybe<Array<Maybe<FieldInterface>>>;
  /** The page’s rows. */
  rows?: Maybe<Array<Maybe<RowInterface>>>;
  /** The page’s settings, including buttons. */
  settings?: Maybe<PageSettingsInterface>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
};

export type PageTypePageFieldsArgs = {
  includeDisabled?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Query = {
  __typename?: "Query";
  /** This query is used to query for a single address. */
  address?: Maybe<AddressInterface>;
  /** This query is used to return the number of addresses. */
  addressCount: Scalars["Int"]["output"];
  /** This query is used to query for addresses. */
  addresses?: Maybe<Array<Maybe<AddressInterface>>>;
  /** This query is used to query for a single asset. */
  asset?: Maybe<AssetInterface>;
  /** This query is used to return the number of assets. */
  assetCount: Scalars["Int"]["output"];
  /** This query is used to query for assets. */
  assets?: Maybe<Array<Maybe<AssetInterface>>>;
  /** This query is used to query for entries. */
  entries?: Maybe<Array<Maybe<EntryInterface>>>;
  /** This query is used to query for a single entry. */
  entry?: Maybe<EntryInterface>;
  /** This query is used to return the number of entries. */
  entryCount: Scalars["Int"]["output"];
  /** Entries within the errorPages section. */
  errorPagesEntries?: Maybe<Array<Maybe<ErrorPagesSectionEntryUnion>>>;
  /** This query is used to query for a single form. */
  formieForm?: Maybe<FormInterface>;
  /** This query is used to return the number of forms. */
  formieFormCount: Scalars["Int"]["output"];
  /** This query is used to query for forms. */
  formieForms?: Maybe<Array<Maybe<FormInterface>>>;
  /** This query is used to query for a single submission. */
  formieSubmission?: Maybe<SubmissionInterface>;
  /** This query is used to return the number of submissions. */
  formieSubmissionCount: Scalars["Int"]["output"];
  /** This query is used to query for submissions. */
  formieSubmissions?: Maybe<Array<Maybe<SubmissionInterface>>>;
  /** Entries within the home section. */
  homeEntries?: Maybe<Array<Maybe<HomeSectionEntryUnion>>>;
  /** This query is used to query for Imager X transforms. */
  imagerTransform?: Maybe<Array<Maybe<ImagerTransformedImageInterface>>>;
  /** This query is used to query for a single node. */
  navigationNode?: Maybe<NodeInterface>;
  /** This query is used to query for nodes. */
  navigationNodes?: Maybe<Array<Maybe<NodeInterface>>>;
  /** Entries within the news section. */
  newsEntries?: Maybe<Array<Maybe<NewsSectionEntryUnion>>>;
  /** Entries within the pages section. */
  pagesEntries?: Maybe<Array<Maybe<PagesSectionEntryUnion>>>;
  ping?: Maybe<Scalars["String"]["output"]>;
  /** This query is used to query for SEOmatic meta data. */
  seomatic?: Maybe<SeomaticInterface>;
  staticMessages?: Maybe<Array<Maybe<StaticMessagesType>>>;
  /** This query is used to query for a single user. */
  user?: Maybe<UserInterface>;
  /** This query is used to return the number of users. */
  userCount: Scalars["Int"]["output"];
  /** This query is used to query for users. */
  users?: Maybe<Array<Maybe<UserInterface>>>;
};

export type QueryAddressArgs = {
  administrativeArea?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryAddressCountArgs = {
  administrativeArea?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryAddressesArgs = {
  administrativeArea?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryAssetArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryAssetCountArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryAssetsArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryEntriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryEntryArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryEntryCountArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryErrorPagesEntriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryFormieFormArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  handle?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryFormieFormCountArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  handle?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryFormieFormsArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  handle?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryFormieSubmissionArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  form?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  isIncomplete?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSpam?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryFormieSubmissionCountArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  form?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  isIncomplete?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSpam?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryFormieSubmissionsArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  form?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  isIncomplete?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSpam?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryHomeEntriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryImagerTransformArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryNavigationNodeArgs = {
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nav?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  navHandle?: InputMaybe<Scalars["String"]["input"]>;
  navId?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryNavigationNodesArgs = {
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nav?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  navHandle?: InputMaybe<Scalars["String"]["input"]>;
  navId?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryNewsEntriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryPagesEntriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QuerySeomaticArgs = {
  asArray?: InputMaybe<Scalars["Boolean"]["input"]>;
  environment?: InputMaybe<SeomaticEnvironment>;
  site?: InputMaybe<Scalars["String"]["input"]>;
  siteId?: InputMaybe<Scalars["Int"]["input"]>;
  uri?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryStaticMessagesArgs = {
  category?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryUserArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetUploaders?: InputMaybe<Scalars["Boolean"]["input"]>;
  authors?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasPhoto?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryUserCountArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetUploaders?: InputMaybe<Scalars["Boolean"]["input"]>;
  authors?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasPhoto?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryUsersArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetUploaders?: InputMaybe<Scalars["Boolean"]["input"]>;
  authors?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasPhoto?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** This is the interface implemented by all rows. */
export type RowInterface = {
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** The row’s fields. */
  rowFields?: Maybe<Array<Maybe<FieldInterface>>>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
};

/** This is the interface implemented by all rows. */
export type RowInterfaceRowFieldsArgs = {
  includeDisabled?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type RowType = RowInterface & {
  __typename?: "RowType";
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** The row’s fields. */
  rowFields?: Maybe<Array<Maybe<FieldInterface>>>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
};

export type RowTypeRowFieldsArgs = {
  includeDisabled?: InputMaybe<Scalars["Boolean"]["input"]>;
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

/** This is the interface implemented by SEOmatic. */
export type SeomaticInterface = {
  /**
   * The FrontendTemplateContainer SEOmatic container.
   * @deprecated This query is deprecated and will be removed in the future. You should use `frontendTemplates` instead.
   */
  frontendTemplateContainer?: Maybe<Scalars["String"]["output"]>;
  frontendTemplates?: Maybe<Array<Maybe<FileContents>>>;
  /** The MetaJsonLdContainer SEOmatic container. */
  metaJsonLdContainer?: Maybe<Scalars["String"]["output"]>;
  /** The MetaLinkContainer SEOmatic container. */
  metaLinkContainer?: Maybe<Scalars["String"]["output"]>;
  /** The MetaScriptContainer SEOmatic container. */
  metaScriptContainer?: Maybe<Scalars["String"]["output"]>;
  /** The MetaSiteVarsContainer SEOmatic container. */
  metaSiteVarsContainer?: Maybe<Scalars["String"]["output"]>;
  /** The MetaTagContainer SEOmatic container. */
  metaTagContainer?: Maybe<Scalars["String"]["output"]>;
  /** The MetaTitleContainer SEOmatic container. */
  metaTitleContainer?: Maybe<Scalars["String"]["output"]>;
  sitemapIndexes?: Maybe<Array<Maybe<FileContents>>>;
  sitemapStyles?: Maybe<FileContents>;
  sitemaps?: Maybe<Array<Maybe<FileContents>>>;
};

/** This is the interface implemented by SEOmatic. */
export type SeomaticInterfaceFrontendTemplatesArgs = {
  site?: InputMaybe<Scalars["String"]["input"]>;
  siteId?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<SeomaticFrontendTemplate>;
};

/** This is the interface implemented by SEOmatic. */
export type SeomaticInterfaceSitemapIndexesArgs = {
  site?: InputMaybe<Scalars["String"]["input"]>;
  siteId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** This is the interface implemented by SEOmatic. */
export type SeomaticInterfaceSitemapsArgs = {
  filename?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Scalars["String"]["input"]>;
  siteId?: InputMaybe<Scalars["Int"]["input"]>;
  sourceBundleHandle?: InputMaybe<Scalars["String"]["input"]>;
  sourceBundleType?: InputMaybe<Scalars["String"]["input"]>;
};

/** This entity has all the SEOmatic fields */
export type SeomaticType = SeomaticInterface & {
  __typename?: "SeomaticType";
  /**
   * The FrontendTemplateContainer SEOmatic container.
   * @deprecated This query is deprecated and will be removed in the future. You should use `frontendTemplates` instead.
   */
  frontendTemplateContainer?: Maybe<Scalars["String"]["output"]>;
  frontendTemplates?: Maybe<Array<Maybe<FileContents>>>;
  /** The MetaJsonLdContainer SEOmatic container. */
  metaJsonLdContainer?: Maybe<Scalars["String"]["output"]>;
  /** The MetaLinkContainer SEOmatic container. */
  metaLinkContainer?: Maybe<Scalars["String"]["output"]>;
  /** The MetaScriptContainer SEOmatic container. */
  metaScriptContainer?: Maybe<Scalars["String"]["output"]>;
  /** The MetaSiteVarsContainer SEOmatic container. */
  metaSiteVarsContainer?: Maybe<Scalars["String"]["output"]>;
  /** The MetaTagContainer SEOmatic container. */
  metaTagContainer?: Maybe<Scalars["String"]["output"]>;
  /** The MetaTitleContainer SEOmatic container. */
  metaTitleContainer?: Maybe<Scalars["String"]["output"]>;
  sitemapIndexes?: Maybe<Array<Maybe<FileContents>>>;
  sitemapStyles?: Maybe<FileContents>;
  sitemaps?: Maybe<Array<Maybe<FileContents>>>;
};

/** This entity has all the SEOmatic fields */
export type SeomaticTypeFrontendTemplatesArgs = {
  site?: InputMaybe<Scalars["String"]["input"]>;
  siteId?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<SeomaticFrontendTemplate>;
};

/** This entity has all the SEOmatic fields */
export type SeomaticTypeSitemapIndexesArgs = {
  site?: InputMaybe<Scalars["String"]["input"]>;
  siteId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** This entity has all the SEOmatic fields */
export type SeomaticTypeSitemapsArgs = {
  filename?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Scalars["String"]["input"]>;
  siteId?: InputMaybe<Scalars["Int"]["input"]>;
  sourceBundleHandle?: InputMaybe<Scalars["String"]["input"]>;
  sourceBundleType?: InputMaybe<Scalars["String"]["input"]>;
};

/** This is the interface implemented by static messages. */
export type StaticMessagesType = {
  __typename?: "StaticMessagesType";
  category?: Maybe<Scalars["String"]["output"]>;
  key?: Maybe<Scalars["String"]["output"]>;
  language?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
};

/** This is the interface implemented by all submissions. */
export type SubmissionInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars["Int"]["output"]>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars["Boolean"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** The submission’s IP Address. */
  ipAddress?: Maybe<Scalars["String"]["output"]>;
  /** Whether the submission is incomplete. */
  isIncomplete?: Maybe<Scalars["Boolean"]["output"]>;
  /** Whether the submission is spam. */
  isSpam?: Maybe<Scalars["Boolean"]["output"]>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars["String"]["output"]>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars["Int"]["output"]>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars["Int"]["output"]>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
  /** The element’s slug. */
  slug?: Maybe<Scalars["String"]["output"]>;
  /** The submission’s spam type. */
  spamClass?: Maybe<Scalars["String"]["output"]>;
  /** The submission’s spam reason. */
  spamReason?: Maybe<Scalars["String"]["output"]>;
  /** The submission’s status. */
  status?: Maybe<Scalars["String"]["output"]>;
  /** The submission’s status ID. */
  statusId?: Maybe<Scalars["Int"]["output"]>;
  /** The element’s title. */
  title?: Maybe<Scalars["String"]["output"]>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars["Boolean"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The element’s URI. */
  uri?: Maybe<Scalars["String"]["output"]>;
};

/** This is the interface implemented by all submissions. */
export type SubmissionInterface_CountArgs = {
  field: Scalars["String"]["input"];
};

export type TagCriteriaInput = {
  /** Narrows the query results to only elements that have been archived. */
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the tag groups the tags belong to per the group’s handles. */
  group?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the tag groups the tags belong to, per the groups’ IDs. */
  groupId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars["String"]["input"]>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type User = ElementInterface &
  UserInterface & {
    __typename?: "User";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** The user’s addresses. */
    addresses?: Maybe<Array<Maybe<AddressInterface>>>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The user’s email. */
    email?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The user’s first name. */
    firstName?: Maybe<Scalars["String"]["output"]>;
    /** The user’s first name or username. */
    friendlyName?: Maybe<Scalars["String"]["output"]>;
    /** The user’s full name. */
    fullName?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The user’s last name. */
    lastName?: Maybe<Scalars["String"]["output"]>;
    /** The user’s full name or username. */
    name: Scalars["String"]["output"];
    /** The user’s photo. */
    photo?: Maybe<AssetInterface>;
    /** The user’s preferences. */
    preferences: Scalars["String"]["output"];
    /** The user’s preferred language. */
    preferredLanguage?: Maybe<Scalars["String"]["output"]>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
    /** The username. */
    username?: Maybe<Scalars["String"]["output"]>;
  };

export type User_CountArgs = {
  field: Scalars["String"]["input"];
};

export type UserAddressesArgs = {
  administrativeArea?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UserCriteriaInput = {
  /** Narrows the query results to only elements that have been archived. */
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on whether the users have uploaded any assets. */
  assetUploaders?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on whether the users are listed as the author of any entries. */
  authors?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the users’ email addresses. */
  email?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the users’ first names. */
  firstName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the users’ full names. */
  fullName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the user group the users belong to. */
  group?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on the user group the users belong to, per the groups’ IDs. */
  groupId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results to only users that have (or don’t have) a user photo. */
  hasPhoto?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the users’ last names. */
  lastName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars["String"]["input"]>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Narrows the query results based on the users’ usernames. */
  username?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** This is the interface implemented by all users. */
export type UserInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars["Int"]["output"]>;
  /** The user’s addresses. */
  addresses?: Maybe<Array<Maybe<AddressInterface>>>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
  /** The user’s email. */
  email?: Maybe<Scalars["String"]["output"]>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars["Boolean"]["output"]>;
  /** The user’s first name. */
  firstName?: Maybe<Scalars["String"]["output"]>;
  /** The user’s first name or username. */
  friendlyName?: Maybe<Scalars["String"]["output"]>;
  /** The user’s full name. */
  fullName?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars["String"]["output"]>;
  /** The user’s last name. */
  lastName?: Maybe<Scalars["String"]["output"]>;
  /** The user’s full name or username. */
  name: Scalars["String"]["output"];
  /** The user’s photo. */
  photo?: Maybe<AssetInterface>;
  /** The user’s preferences. */
  preferences: Scalars["String"]["output"];
  /** The user’s preferred language. */
  preferredLanguage?: Maybe<Scalars["String"]["output"]>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars["Int"]["output"]>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars["Int"]["output"]>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
  /** The element’s slug. */
  slug?: Maybe<Scalars["String"]["output"]>;
  /** The element’s status. */
  status?: Maybe<Scalars["String"]["output"]>;
  /** The element’s title. */
  title?: Maybe<Scalars["String"]["output"]>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars["Boolean"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** The element’s URI. */
  uri?: Maybe<Scalars["String"]["output"]>;
  /** The username. */
  username?: Maybe<Scalars["String"]["output"]>;
};

/** This is the interface implemented by all users. */
export type UserInterface_CountArgs = {
  field: Scalars["String"]["input"];
};

/** This is the interface implemented by all users. */
export type UserInterfaceAddressesArgs = {
  administrativeArea?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BuilderContent_MatrixField =
  | BuilderContent_BlockCode_BlockType
  | BuilderContent_BlockDivider_BlockType
  | BuilderContent_BlockImageGallery_BlockType
  | BuilderContent_BlockImageGridCalculated_BlockType
  | BuilderContent_BlockImageGrid_BlockType
  | BuilderContent_BlockImageSlider_BlockType
  | BuilderContent_BlockImage_BlockType
  | BuilderContent_BlockQuote_BlockType
  | BuilderContent_BlockSection_BlockType
  | BuilderContent_BlockSpacer_BlockType
  | BuilderContent_BlockTextFloatingImage_BlockType
  | BuilderContent_BlockText_BlockType
  | BuilderContent_BlockVideoYoutube_BlockType;

export type BuilderContent_BlockCode_BlockType = ElementInterface &
  MatrixBlockInterface & {
    __typename?: "builderContent_blockCode_BlockType";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The ID of the field that owns the matrix block. */
    fieldId: Scalars["Int"]["output"];
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the primary owner of the Matrix block. */
    primaryOwnerId: Scalars["Int"]["output"];
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    snippet?: Maybe<Scalars["String"]["output"]>;
    snippetCollapsed?: Maybe<Scalars["Boolean"]["output"]>;
    snippetLanguage?: Maybe<Scalars["String"]["output"]>;
    snippetName?: Maybe<Scalars["String"]["output"]>;
    /** The sort order of the matrix block within the owner element field. */
    sortOrder?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the matrix block’s type. */
    typeHandle: Scalars["String"]["output"];
    /** The ID of the matrix block’s type. */
    typeId: Scalars["Int"]["output"];
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
  };

export type BuilderContent_BlockCode_BlockType_CountArgs = {
  field: Scalars["String"]["input"];
};

export type BuilderContent_BlockCode_BlockTypeSnippetLanguageArgs = {
  label?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BuilderContent_BlockDivider_BlockType = ElementInterface &
  MatrixBlockInterface & {
    __typename?: "builderContent_blockDivider_BlockType";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    dividerVariant?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The ID of the field that owns the matrix block. */
    fieldId: Scalars["Int"]["output"];
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the primary owner of the Matrix block. */
    primaryOwnerId: Scalars["Int"]["output"];
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** The sort order of the matrix block within the owner element field. */
    sortOrder?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the matrix block’s type. */
    typeHandle: Scalars["String"]["output"];
    /** The ID of the matrix block’s type. */
    typeId: Scalars["Int"]["output"];
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
  };

export type BuilderContent_BlockDivider_BlockType_CountArgs = {
  field: Scalars["String"]["input"];
};

export type BuilderContent_BlockDivider_BlockTypeDividerVariantArgs = {
  label?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BuilderContent_BlockImageGallery_BlockType = ElementInterface &
  MatrixBlockInterface & {
    __typename?: "builderContent_blockImageGallery_BlockType";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The ID of the field that owns the matrix block. */
    fieldId: Scalars["Int"]["output"];
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    images: Array<Maybe<AssetInterface>>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the primary owner of the Matrix block. */
    primaryOwnerId: Scalars["Int"]["output"];
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** The sort order of the matrix block within the owner element field. */
    sortOrder?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the matrix block’s type. */
    typeHandle: Scalars["String"]["output"];
    /** The ID of the matrix block’s type. */
    typeId: Scalars["Int"]["output"];
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
  };

export type BuilderContent_BlockImageGallery_BlockType_CountArgs = {
  field: Scalars["String"]["input"];
};

export type BuilderContent_BlockImageGallery_BlockTypeImagesArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BuilderContent_BlockImageGridCalculated_BlockType =
  ElementInterface &
    MatrixBlockInterface & {
      __typename?: "builderContent_blockImageGridCalculated_BlockType";
      /** Return a number of related elements for a field. */
      _count?: Maybe<Scalars["Int"]["output"]>;
      /** Whether the element is archived. */
      archived?: Maybe<Scalars["Boolean"]["output"]>;
      /** The date the element was created. */
      dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
      /** The date the element was last updated. */
      dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
      /** Whether the element is enabled. */
      enabled?: Maybe<Scalars["Boolean"]["output"]>;
      /** The ID of the field that owns the matrix block. */
      fieldId: Scalars["Int"]["output"];
      /** The ID of the entity */
      id?: Maybe<Scalars["ID"]["output"]>;
      images: Array<Maybe<AssetInterface>>;
      /** The language of the site element is associated with. */
      language?: Maybe<Scalars["String"]["output"]>;
      /** The ID of the primary owner of the Matrix block. */
      primaryOwnerId: Scalars["Int"]["output"];
      /** The element’s search score, if the `search` parameter was used when querying for the element. */
      searchScore?: Maybe<Scalars["Int"]["output"]>;
      showImageCaption?: Maybe<Scalars["Boolean"]["output"]>;
      /** The handle of the site the element is associated with. */
      siteHandle?: Maybe<Scalars["String"]["output"]>;
      /** The ID of the site the element is associated with. */
      siteId?: Maybe<Scalars["Int"]["output"]>;
      /** The unique identifier for an element-site relation. */
      siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
      /** The element’s slug. */
      slug?: Maybe<Scalars["String"]["output"]>;
      /** The sort order of the matrix block within the owner element field. */
      sortOrder?: Maybe<Scalars["Int"]["output"]>;
      /** The element’s status. */
      status?: Maybe<Scalars["String"]["output"]>;
      /** The element’s title. */
      title?: Maybe<Scalars["String"]["output"]>;
      /** Whether the element has been soft-deleted. */
      trashed?: Maybe<Scalars["Boolean"]["output"]>;
      /** The handle of the matrix block’s type. */
      typeHandle: Scalars["String"]["output"];
      /** The ID of the matrix block’s type. */
      typeId: Scalars["Int"]["output"];
      /** The UID of the entity */
      uid?: Maybe<Scalars["String"]["output"]>;
      /** The element’s URI. */
      uri?: Maybe<Scalars["String"]["output"]>;
    };

export type BuilderContent_BlockImageGridCalculated_BlockType_CountArgs = {
  field: Scalars["String"]["input"];
};

export type BuilderContent_BlockImageGridCalculated_BlockTypeImagesArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BuilderContent_BlockImageGrid_BlockType = ElementInterface &
  MatrixBlockInterface & {
    __typename?: "builderContent_blockImageGrid_BlockType";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The ID of the field that owns the matrix block. */
    fieldId: Scalars["Int"]["output"];
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    imageColumns?: Maybe<Scalars["String"]["output"]>;
    imageTransform?: Maybe<Scalars["String"]["output"]>;
    images: Array<Maybe<AssetInterface>>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the primary owner of the Matrix block. */
    primaryOwnerId: Scalars["Int"]["output"];
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    showImageCaption?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** The sort order of the matrix block within the owner element field. */
    sortOrder?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the matrix block’s type. */
    typeHandle: Scalars["String"]["output"];
    /** The ID of the matrix block’s type. */
    typeId: Scalars["Int"]["output"];
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
  };

export type BuilderContent_BlockImageGrid_BlockType_CountArgs = {
  field: Scalars["String"]["input"];
};

export type BuilderContent_BlockImageGrid_BlockTypeImageColumnsArgs = {
  label?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BuilderContent_BlockImageGrid_BlockTypeImageTransformArgs = {
  label?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BuilderContent_BlockImageGrid_BlockTypeImagesArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BuilderContent_BlockImageSlider_BlockType = ElementInterface &
  MatrixBlockInterface & {
    __typename?: "builderContent_blockImageSlider_BlockType";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The ID of the field that owns the matrix block. */
    fieldId: Scalars["Int"]["output"];
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    imageTransform?: Maybe<Scalars["String"]["output"]>;
    images: Array<Maybe<AssetInterface>>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the primary owner of the Matrix block. */
    primaryOwnerId: Scalars["Int"]["output"];
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** The sort order of the matrix block within the owner element field. */
    sortOrder?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the matrix block’s type. */
    typeHandle: Scalars["String"]["output"];
    /** The ID of the matrix block’s type. */
    typeId: Scalars["Int"]["output"];
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
  };

export type BuilderContent_BlockImageSlider_BlockType_CountArgs = {
  field: Scalars["String"]["input"];
};

export type BuilderContent_BlockImageSlider_BlockTypeImageTransformArgs = {
  label?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BuilderContent_BlockImageSlider_BlockTypeImagesArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BuilderContent_BlockImage_BlockType = ElementInterface &
  MatrixBlockInterface & {
    __typename?: "builderContent_blockImage_BlockType";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The ID of the field that owns the matrix block. */
    fieldId: Scalars["Int"]["output"];
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    image: Array<Maybe<AssetInterface>>;
    imageTransform?: Maybe<Scalars["String"]["output"]>;
    imageWidth?: Maybe<Scalars["String"]["output"]>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the primary owner of the Matrix block. */
    primaryOwnerId: Scalars["Int"]["output"];
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    showImageCaption?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** The sort order of the matrix block within the owner element field. */
    sortOrder?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the matrix block’s type. */
    typeHandle: Scalars["String"]["output"];
    /** The ID of the matrix block’s type. */
    typeId: Scalars["Int"]["output"];
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
  };

export type BuilderContent_BlockImage_BlockType_CountArgs = {
  field: Scalars["String"]["input"];
};

export type BuilderContent_BlockImage_BlockTypeImageArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BuilderContent_BlockImage_BlockTypeImageTransformArgs = {
  label?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BuilderContent_BlockImage_BlockTypeImageWidthArgs = {
  label?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BuilderContent_BlockQuote_BlockType = ElementInterface &
  MatrixBlockInterface & {
    __typename?: "builderContent_blockQuote_BlockType";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The ID of the field that owns the matrix block. */
    fieldId: Scalars["Int"]["output"];
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the primary owner of the Matrix block. */
    primaryOwnerId: Scalars["Int"]["output"];
    quote?: Maybe<Scalars["String"]["output"]>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** The sort order of the matrix block within the owner element field. */
    sortOrder?: Maybe<Scalars["Int"]["output"]>;
    source?: Maybe<Scalars["String"]["output"]>;
    sourceSubline?: Maybe<Scalars["String"]["output"]>;
    sourceUrl?: Maybe<Scalars["String"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the matrix block’s type. */
    typeHandle: Scalars["String"]["output"];
    /** The ID of the matrix block’s type. */
    typeId: Scalars["Int"]["output"];
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
  };

export type BuilderContent_BlockQuote_BlockType_CountArgs = {
  field: Scalars["String"]["input"];
};

export type BuilderContent_BlockSection_BlockType = ElementInterface &
  MatrixBlockInterface & {
    __typename?: "builderContent_blockSection_BlockType";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The ID of the field that owns the matrix block. */
    fieldId: Scalars["Int"]["output"];
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the primary owner of the Matrix block. */
    primaryOwnerId: Scalars["Int"]["output"];
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    sectionBackgroundColor?: Maybe<Scalars["String"]["output"]>;
    sectionPaddingVertical?: Maybe<Scalars["String"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** The sort order of the matrix block within the owner element field. */
    sortOrder?: Maybe<Scalars["Int"]["output"]>;
    spaceBetweenBlocks?: Maybe<Scalars["String"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the matrix block’s type. */
    typeHandle: Scalars["String"]["output"];
    /** The ID of the matrix block’s type. */
    typeId: Scalars["Int"]["output"];
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
  };

export type BuilderContent_BlockSection_BlockType_CountArgs = {
  field: Scalars["String"]["input"];
};

export type BuilderContent_BlockSection_BlockTypeSectionBackgroundColorArgs = {
  label?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BuilderContent_BlockSection_BlockTypeSectionPaddingVerticalArgs = {
  label?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BuilderContent_BlockSection_BlockTypeSpaceBetweenBlocksArgs = {
  label?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BuilderContent_BlockSpacer_BlockType = ElementInterface &
  MatrixBlockInterface & {
    __typename?: "builderContent_blockSpacer_BlockType";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The ID of the field that owns the matrix block. */
    fieldId: Scalars["Int"]["output"];
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the primary owner of the Matrix block. */
    primaryOwnerId: Scalars["Int"]["output"];
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** The sort order of the matrix block within the owner element field. */
    sortOrder?: Maybe<Scalars["Int"]["output"]>;
    spacerVariant?: Maybe<Scalars["String"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the matrix block’s type. */
    typeHandle: Scalars["String"]["output"];
    /** The ID of the matrix block’s type. */
    typeId: Scalars["Int"]["output"];
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
  };

export type BuilderContent_BlockSpacer_BlockType_CountArgs = {
  field: Scalars["String"]["input"];
};

export type BuilderContent_BlockSpacer_BlockTypeSpacerVariantArgs = {
  label?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BuilderContent_BlockTextFloatingImage_BlockType = ElementInterface &
  MatrixBlockInterface & {
    __typename?: "builderContent_blockTextFloatingImage_BlockType";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The ID of the field that owns the matrix block. */
    fieldId: Scalars["Int"]["output"];
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    image: Array<Maybe<AssetInterface>>;
    imagePosition?: Maybe<Scalars["Boolean"]["output"]>;
    imageTransform?: Maybe<Scalars["String"]["output"]>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the primary owner of the Matrix block. */
    primaryOwnerId: Scalars["Int"]["output"];
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    showImageCaption?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** The sort order of the matrix block within the owner element field. */
    sortOrder?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    text?: Maybe<Scalars["String"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the matrix block’s type. */
    typeHandle: Scalars["String"]["output"];
    /** The ID of the matrix block’s type. */
    typeId: Scalars["Int"]["output"];
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
  };

export type BuilderContent_BlockTextFloatingImage_BlockType_CountArgs = {
  field: Scalars["String"]["input"];
};

export type BuilderContent_BlockTextFloatingImage_BlockTypeImageArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BuilderContent_BlockTextFloatingImage_BlockTypeImageTransformArgs =
  {
    label?: InputMaybe<Scalars["Boolean"]["input"]>;
  };

export type BuilderContent_BlockText_BlockType = ElementInterface &
  MatrixBlockInterface & {
    __typename?: "builderContent_blockText_BlockType";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The ID of the field that owns the matrix block. */
    fieldId: Scalars["Int"]["output"];
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the primary owner of the Matrix block. */
    primaryOwnerId: Scalars["Int"]["output"];
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** The sort order of the matrix block within the owner element field. */
    sortOrder?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    text?: Maybe<Scalars["String"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the matrix block’s type. */
    typeHandle: Scalars["String"]["output"];
    /** The ID of the matrix block’s type. */
    typeId: Scalars["Int"]["output"];
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
  };

export type BuilderContent_BlockText_BlockType_CountArgs = {
  field: Scalars["String"]["input"];
};

export type BuilderContent_BlockVideoYoutube_BlockType = ElementInterface &
  MatrixBlockInterface & {
    __typename?: "builderContent_blockVideoYoutube_BlockType";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    autoplay?: Maybe<Scalars["Boolean"]["output"]>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The ID of the field that owns the matrix block. */
    fieldId: Scalars["Int"]["output"];
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    loop?: Maybe<Scalars["Boolean"]["output"]>;
    /** The ID of the primary owner of the Matrix block. */
    primaryOwnerId: Scalars["Int"]["output"];
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** The sort order of the matrix block within the owner element field. */
    sortOrder?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the matrix block’s type. */
    typeHandle: Scalars["String"]["output"];
    /** The ID of the matrix block’s type. */
    typeId: Scalars["Int"]["output"];
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
    videoId?: Maybe<Scalars["String"]["output"]>;
    videoWidth?: Maybe<Scalars["String"]["output"]>;
  };

export type BuilderContent_BlockVideoYoutube_BlockType_CountArgs = {
  field: Scalars["String"]["input"];
};

export type BuilderContent_BlockVideoYoutube_BlockTypeVideoWidthArgs = {
  label?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Contact_Form = ElementInterface &
  FormInterface & {
    __typename?: "contact_Form";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** A list of captcha values (name and value) to assist with spam protection. */
    captchas?: Maybe<Array<Maybe<FormieCaptchaType>>>;
    /** The form’s config as JSON. */
    configJson?: Maybe<Scalars["String"]["output"]>;
    /** A CSRF token (name and value). */
    csrfToken?: Maybe<FormieCsrfTokenType>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The form’s fields. */
    formFields?: Maybe<Array<Maybe<FieldInterface>>>;
    /** The form’s handle. */
    handle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The form’s pages. */
    pages?: Maybe<Array<Maybe<PageInterface>>>;
    /** The form’s rows. */
    rows?: Maybe<Array<Maybe<RowInterface>>>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The form’s settings. */
    settings?: Maybe<FormSettingsType>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The form’s endpoint for sending submissions to, if using POST requests. */
    submissionEndpoint?: Maybe<Scalars["String"]["output"]>;
    /** The form’s GQL mutation name for submissions to use. */
    submissionMutationName?: Maybe<Scalars["String"]["output"]>;
    /** The form’s rendered HTML. */
    templateHtml?: Maybe<Scalars["String"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
  };

export type Contact_Form_CountArgs = {
  field: Scalars["String"]["input"];
};

export type Contact_FormFormFieldsArgs = {
  includeDisabled?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Contact_FormTemplateHtmlArgs = {
  options?: InputMaybe<Scalars["String"]["input"]>;
  populateFormValues?: InputMaybe<Scalars["String"]["input"]>;
};

export type Contact_Submission = ElementInterface &
  SubmissionInterface & {
    __typename?: "contact_Submission";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    emailAddress?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** The submission’s IP Address. */
    ipAddress?: Maybe<Scalars["String"]["output"]>;
    /** Whether the submission is incomplete. */
    isIncomplete?: Maybe<Scalars["Boolean"]["output"]>;
    /** Whether the submission is spam. */
    isSpam?: Maybe<Scalars["Boolean"]["output"]>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    message?: Maybe<Scalars["String"]["output"]>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** The submission’s spam type. */
    spamClass?: Maybe<Scalars["String"]["output"]>;
    /** The submission’s spam reason. */
    spamReason?: Maybe<Scalars["String"]["output"]>;
    /** The submission’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The submission’s status ID. */
    statusId?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
    yourName?: Maybe<Scalars["String"]["output"]>;
  };

export type Contact_Submission_CountArgs = {
  field: Scalars["String"]["input"];
};

export type ErrorPagesSectionEntryUnion = ErrorPages_Error_Entry;

export type ErrorPages_Error_Entry = ElementInterface &
  EntryInterface & {
    __typename?: "errorPages_error_Entry";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
    ancestors: Array<EntryInterface>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** The entry’s author. */
    author?: Maybe<UserInterface>;
    /** The ID of the author of this entry. */
    authorId?: Maybe<Scalars["Int"]["output"]>;
    /** Returns the entry’s canonical ID. */
    canonicalId?: Maybe<Scalars["Int"]["output"]>;
    /** Returns the entry’s canonical UUID. */
    canonicalUid?: Maybe<Scalars["String"]["output"]>;
    /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
    children: Array<EntryInterface>;
    /** The current revision for the entry. */
    currentRevision?: Maybe<EntryInterface>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
    descendants: Array<EntryInterface>;
    /** The creator of a given draft. */
    draftCreator?: Maybe<UserInterface>;
    /** The draft ID (from the `drafts` table). */
    draftId?: Maybe<Scalars["Int"]["output"]>;
    /** The name of the draft. */
    draftName?: Maybe<Scalars["String"]["output"]>;
    /** The notes for the draft. */
    draftNotes?: Maybe<Scalars["String"]["output"]>;
    /** The drafts for the entry. */
    drafts?: Maybe<Array<Maybe<EntryInterface>>>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** Whether the element is enabled for the site. */
    enabledForSite?: Maybe<Scalars["Boolean"]["output"]>;
    entryCustomTitle?: Maybe<Scalars["String"]["output"]>;
    entryImage: Array<Maybe<AssetInterface>>;
    entrySeo?: Maybe<Scalars["String"]["output"]>;
    entryShortDescription?: Maybe<Scalars["String"]["output"]>;
    /** The expiry date of the entry. */
    expiryDate?: Maybe<Scalars["DateTime"]["output"]>;
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** Returns whether this is a draft. */
    isDraft?: Maybe<Scalars["Boolean"]["output"]>;
    /** Returns whether this is a revision. */
    isRevision?: Maybe<Scalars["Boolean"]["output"]>;
    /** Returns whether this is an unpublished draft. */
    isUnpublishedDraft?: Maybe<Scalars["Boolean"]["output"]>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The element’s level within its structure */
    level?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s left position within its structure. */
    lft?: Maybe<Scalars["Int"]["output"]>;
    /** The same element in other locales. */
    localized: Array<EntryInterface>;
    /** Returns the next element relative to this one, from a given set of criteria. */
    next?: Maybe<EntryInterface>;
    /** The entry’s parent, if the section is a structure. */
    parent?: Maybe<EntryInterface>;
    /** The entry’s post date. */
    postDate?: Maybe<Scalars["DateTime"]["output"]>;
    /** Returns the previous element relative to this one, from a given set of criteria. */
    prev?: Maybe<EntryInterface>;
    /** The creator of a given revision. */
    revisionCreator?: Maybe<UserInterface>;
    /** The revision ID (from the `revisions` table). */
    revisionId?: Maybe<Scalars["Int"]["output"]>;
    /** The revision notes (from the `revisions` table). */
    revisionNotes?: Maybe<Scalars["String"]["output"]>;
    /** The revisions for the entry. */
    revisions?: Maybe<Array<Maybe<EntryInterface>>>;
    /** The element’s right position within its structure. */
    rgt?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s structure’s root ID */
    root?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the section that contains the entry. */
    sectionHandle: Scalars["String"]["output"];
    /** The ID of the section that contains the entry. */
    sectionId: Scalars["Int"]["output"];
    /** This query is used to query for SEOmatic meta data. */
    seomatic?: Maybe<SeomaticInterface>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /**
     * Returns the entry’s canonical ID.
     * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
     */
    sourceId?: Maybe<Scalars["Int"]["output"]>;
    /**
     * Returns the entry’s canonical UUID.
     * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
     */
    sourceUid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s structure ID. */
    structureId?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the entry type that contains the entry. */
    typeHandle: Scalars["String"]["output"];
    /** The ID of the entry type that contains the entry. */
    typeId: Scalars["Int"]["output"];
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
    /** The element’s full URL */
    url?: Maybe<Scalars["String"]["output"]>;
  };

export type ErrorPages_Error_Entry_CountArgs = {
  field: Scalars["String"]["input"];
};

export type ErrorPages_Error_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ErrorPages_Error_EntryChildrenArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ErrorPages_Error_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ErrorPages_Error_EntryDraftsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ErrorPages_Error_EntryEntryImageArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ErrorPages_Error_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ErrorPages_Error_EntryNextArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ErrorPages_Error_EntryParentArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ErrorPages_Error_EntryPrevArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ErrorPages_Error_EntryRevisionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ErrorPages_Error_EntrySeomaticArgs = {
  asArray?: InputMaybe<Scalars["Boolean"]["input"]>;
  environment?: InputMaybe<SeomaticEnvironment>;
  site?: InputMaybe<Scalars["String"]["input"]>;
  siteId?: InputMaybe<Scalars["Int"]["input"]>;
  uri?: InputMaybe<Scalars["String"]["input"]>;
};

export type Files_Asset = AssetInterface &
  ElementInterface & {
    __typename?: "files_Asset";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** Alternative text for the asset. */
    alt?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    assetCaption?: Maybe<Scalars["String"]["output"]>;
    assetTitle?: Maybe<Scalars["String"]["output"]>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the asset file was last modified. */
    dateModified?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The file extension for the asset file. */
    extension: Scalars["String"]["output"];
    /** The filename of the asset file. */
    filename: Scalars["String"]["output"];
    /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
    focalPoint?: Maybe<Array<Maybe<Scalars["Float"]["output"]>>>;
    /** The ID of the folder that the asset belongs to. */
    folderId: Scalars["Int"]["output"];
    /** Returns the file’s format. */
    format?: Maybe<Scalars["String"]["output"]>;
    /** Whether a user-defined focal point is set on the asset. */
    hasFocalPoint: Scalars["Boolean"]["output"];
    /** The height in pixels or null if it’s not an image. */
    height?: Maybe<Scalars["Int"]["output"]>;
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** Returns a list of images produced from the named Imager X transform. */
    imagerTransform?: Maybe<Array<Maybe<ImagerTransformedImageInterface>>>;
    /** An `<img>` tag based on this asset. */
    img?: Maybe<Scalars["String"]["output"]>;
    /** The file kind. */
    kind: Scalars["String"]["output"];
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The file’s MIME type, if it can be determined. */
    mimeType?: Maybe<Scalars["String"]["output"]>;
    /** Returns the next element relative to this one, from a given set of criteria. */
    next?: Maybe<AssetInterface>;
    /** The asset’s path in the volume. */
    path: Scalars["String"]["output"];
    /** Returns the previous element relative to this one, from a given set of criteria. */
    prev?: Maybe<AssetInterface>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The file size in bytes. */
    size?: Maybe<Scalars["String"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
    srcset?: Maybe<Scalars["String"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The user who first added this asset (if known). */
    uploader?: Maybe<UserInterface>;
    /** The ID of the user who first added this asset (if known). */
    uploaderId?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
    /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
    url?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the volume that the asset belongs to. */
    volumeId?: Maybe<Scalars["Int"]["output"]>;
    /** The width in pixels or null if it’s not an image. */
    width?: Maybe<Scalars["Int"]["output"]>;
  };

export type Files_Asset_CountArgs = {
  field: Scalars["String"]["input"];
};

export type Files_AssetFormatArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Files_AssetHeightArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Files_AssetImagerTransformArgs = {
  transform?: InputMaybe<Scalars["String"]["input"]>;
};

export type Files_AssetNextArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Files_AssetPrevArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Files_AssetSrcsetArgs = {
  sizes: Array<Scalars["String"]["input"]>;
};

export type Files_AssetUploaderArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetUploaders?: InputMaybe<Scalars["Boolean"]["input"]>;
  authors?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasPhoto?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Files_AssetUrlArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Files_AssetWidthArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type HomeSectionEntryUnion = Home_Home_Entry;

export type Home_Home_Entry = ElementInterface &
  EntryInterface & {
    __typename?: "home_home_Entry";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
    ancestors: Array<EntryInterface>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** The entry’s author. */
    author?: Maybe<UserInterface>;
    /** The ID of the author of this entry. */
    authorId?: Maybe<Scalars["Int"]["output"]>;
    builderContent: Array<Maybe<BuilderContent_MatrixField>>;
    /** Returns the entry’s canonical ID. */
    canonicalId?: Maybe<Scalars["Int"]["output"]>;
    /** Returns the entry’s canonical UUID. */
    canonicalUid?: Maybe<Scalars["String"]["output"]>;
    /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
    children: Array<EntryInterface>;
    /** The current revision for the entry. */
    currentRevision?: Maybe<EntryInterface>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
    descendants: Array<EntryInterface>;
    /** The creator of a given draft. */
    draftCreator?: Maybe<UserInterface>;
    /** The draft ID (from the `drafts` table). */
    draftId?: Maybe<Scalars["Int"]["output"]>;
    /** The name of the draft. */
    draftName?: Maybe<Scalars["String"]["output"]>;
    /** The notes for the draft. */
    draftNotes?: Maybe<Scalars["String"]["output"]>;
    /** The drafts for the entry. */
    drafts?: Maybe<Array<Maybe<EntryInterface>>>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** Whether the element is enabled for the site. */
    enabledForSite?: Maybe<Scalars["Boolean"]["output"]>;
    entryCustomTitle?: Maybe<Scalars["String"]["output"]>;
    entryImage: Array<Maybe<AssetInterface>>;
    entrySeo?: Maybe<Scalars["String"]["output"]>;
    entryShortDescription?: Maybe<Scalars["String"]["output"]>;
    /** The expiry date of the entry. */
    expiryDate?: Maybe<Scalars["DateTime"]["output"]>;
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** Returns whether this is a draft. */
    isDraft?: Maybe<Scalars["Boolean"]["output"]>;
    /** Returns whether this is a revision. */
    isRevision?: Maybe<Scalars["Boolean"]["output"]>;
    /** Returns whether this is an unpublished draft. */
    isUnpublishedDraft?: Maybe<Scalars["Boolean"]["output"]>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The element’s level within its structure */
    level?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s left position within its structure. */
    lft?: Maybe<Scalars["Int"]["output"]>;
    /** The same element in other locales. */
    localized: Array<EntryInterface>;
    /** Returns the next element relative to this one, from a given set of criteria. */
    next?: Maybe<EntryInterface>;
    /** The entry’s parent, if the section is a structure. */
    parent?: Maybe<EntryInterface>;
    /** The entry’s post date. */
    postDate?: Maybe<Scalars["DateTime"]["output"]>;
    /** Returns the previous element relative to this one, from a given set of criteria. */
    prev?: Maybe<EntryInterface>;
    /** The creator of a given revision. */
    revisionCreator?: Maybe<UserInterface>;
    /** The revision ID (from the `revisions` table). */
    revisionId?: Maybe<Scalars["Int"]["output"]>;
    /** The revision notes (from the `revisions` table). */
    revisionNotes?: Maybe<Scalars["String"]["output"]>;
    /** The revisions for the entry. */
    revisions?: Maybe<Array<Maybe<EntryInterface>>>;
    /** The element’s right position within its structure. */
    rgt?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s structure’s root ID */
    root?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the section that contains the entry. */
    sectionHandle: Scalars["String"]["output"];
    /** The ID of the section that contains the entry. */
    sectionId: Scalars["Int"]["output"];
    /** This query is used to query for SEOmatic meta data. */
    seomatic?: Maybe<SeomaticInterface>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /**
     * Returns the entry’s canonical ID.
     * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
     */
    sourceId?: Maybe<Scalars["Int"]["output"]>;
    /**
     * Returns the entry’s canonical UUID.
     * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
     */
    sourceUid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s structure ID. */
    structureId?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the entry type that contains the entry. */
    typeHandle: Scalars["String"]["output"];
    /** The ID of the entry type that contains the entry. */
    typeId: Scalars["Int"]["output"];
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
    /** The element’s full URL */
    url?: Maybe<Scalars["String"]["output"]>;
  };

export type Home_Home_Entry_CountArgs = {
  field: Scalars["String"]["input"];
};

export type Home_Home_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Home_Home_EntryBuilderContentArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  primaryOwnerId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Home_Home_EntryChildrenArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Home_Home_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Home_Home_EntryDraftsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Home_Home_EntryEntryImageArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Home_Home_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Home_Home_EntryNextArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Home_Home_EntryParentArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Home_Home_EntryPrevArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Home_Home_EntryRevisionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Home_Home_EntrySeomaticArgs = {
  asArray?: InputMaybe<Scalars["Boolean"]["input"]>;
  environment?: InputMaybe<SeomaticEnvironment>;
  site?: InputMaybe<Scalars["String"]["input"]>;
  siteId?: InputMaybe<Scalars["Int"]["input"]>;
  uri?: InputMaybe<Scalars["String"]["input"]>;
};

/** This entity has all the Imager X transform image interface fields. */
export type Imagerx = ImagerTransformedImageInterface & {
  __typename?: "imagerx";
  /** Extension of transformed image. */
  extension?: Maybe<Scalars["String"]["output"]>;
  /** Filename of transformed image. */
  filename?: Maybe<Scalars["String"]["output"]>;
  /** Height of transformed image. */
  height?: Maybe<Scalars["Int"]["output"]>;
  /** The ID of the entity */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** Size of transformed image. */
  isNew?: Maybe<Scalars["Boolean"]["output"]>;
  /** Mime type of transformed image. */
  mimeType?: Maybe<Scalars["String"]["output"]>;
  /** Path to transformed image. */
  path?: Maybe<Scalars["String"]["output"]>;
  /** Size of transformed image. */
  size?: Maybe<Scalars["Int"]["output"]>;
  /** The UID of the entity */
  uid?: Maybe<Scalars["String"]["output"]>;
  /** URL for transformed image. */
  url?: Maybe<Scalars["String"]["output"]>;
  /** Width of transformed image. */
  width?: Maybe<Scalars["Int"]["output"]>;
};

export type Images_Asset = AssetInterface &
  ElementInterface & {
    __typename?: "images_Asset";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** Alternative text for the asset. */
    alt?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    assetCaption?: Maybe<Scalars["String"]["output"]>;
    assetSource?: Maybe<Scalars["String"]["output"]>;
    assetSourceUrl?: Maybe<Scalars["String"]["output"]>;
    assetTitle?: Maybe<Scalars["String"]["output"]>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the asset file was last modified. */
    dateModified?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The file extension for the asset file. */
    extension: Scalars["String"]["output"];
    /** The filename of the asset file. */
    filename: Scalars["String"]["output"];
    /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
    focalPoint?: Maybe<Array<Maybe<Scalars["Float"]["output"]>>>;
    /** The ID of the folder that the asset belongs to. */
    folderId: Scalars["Int"]["output"];
    /** Returns the file’s format. */
    format?: Maybe<Scalars["String"]["output"]>;
    /** Whether a user-defined focal point is set on the asset. */
    hasFocalPoint: Scalars["Boolean"]["output"];
    /** The height in pixels or null if it’s not an image. */
    height?: Maybe<Scalars["Int"]["output"]>;
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** Returns a list of images produced from the named Imager X transform. */
    imagerTransform?: Maybe<Array<Maybe<ImagerTransformedImageInterface>>>;
    /** An `<img>` tag based on this asset. */
    img?: Maybe<Scalars["String"]["output"]>;
    /** The file kind. */
    kind: Scalars["String"]["output"];
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The file’s MIME type, if it can be determined. */
    mimeType?: Maybe<Scalars["String"]["output"]>;
    /** Returns the next element relative to this one, from a given set of criteria. */
    next?: Maybe<AssetInterface>;
    /** The asset’s path in the volume. */
    path: Scalars["String"]["output"];
    /** Returns the previous element relative to this one, from a given set of criteria. */
    prev?: Maybe<AssetInterface>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The file size in bytes. */
    size?: Maybe<Scalars["String"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
    srcset?: Maybe<Scalars["String"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The user who first added this asset (if known). */
    uploader?: Maybe<UserInterface>;
    /** The ID of the user who first added this asset (if known). */
    uploaderId?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
    /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
    url?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the volume that the asset belongs to. */
    volumeId?: Maybe<Scalars["Int"]["output"]>;
    /** The width in pixels or null if it’s not an image. */
    width?: Maybe<Scalars["Int"]["output"]>;
  };

export type Images_Asset_CountArgs = {
  field: Scalars["String"]["input"];
};

export type Images_AssetFormatArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Images_AssetHeightArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Images_AssetImagerTransformArgs = {
  transform?: InputMaybe<Scalars["String"]["input"]>;
};

export type Images_AssetNextArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Images_AssetPrevArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Images_AssetSrcsetArgs = {
  sizes: Array<Scalars["String"]["input"]>;
};

export type Images_AssetUploaderArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetUploaders?: InputMaybe<Scalars["Boolean"]["input"]>;
  authors?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasPhoto?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Images_AssetUrlArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Images_AssetWidthArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type NavigationMain_Node = ElementInterface &
  NodeInterface & {
    __typename?: "navigationMain_Node";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** The node’s children. Accepts the same arguments as the `nodes` query. */
    children?: Maybe<Array<Maybe<NodeInterface>>>;
    /** Any additional classes for the node. */
    classes?: Maybe<Scalars["String"]["output"]>;
    /** Any additional custom attributes for the node. */
    customAttributes?: Maybe<Array<Maybe<NodeCustomAttribute>>>;
    /** Any additional data for the node. */
    data?: Maybe<Scalars["String"]["output"]>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The element the node links to. */
    element?: Maybe<ElementInterface>;
    /** The ID of the element this node is linked to. */
    elementId?: Maybe<Scalars["Int"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The element’s level within its structure */
    level?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s left position within its structure. */
    lft?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the navigation this node belongs to. */
    navHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the navigation this node belongs to. */
    navId?: Maybe<Scalars["Int"]["output"]>;
    /** The name of the navigation this node belongs to. */
    navName?: Maybe<Scalars["String"]["output"]>;
    /** Whether this node should open in a new window. */
    newWindow?: Maybe<Scalars["String"]["output"]>;
    /** The node’s URI */
    nodeUri?: Maybe<Scalars["String"]["output"]>;
    /** The node’s parent. */
    parent?: Maybe<NodeInterface>;
    /** The element’s right position within its structure. */
    rgt?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s structure’s root ID */
    root?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s structure ID. */
    structureId?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The type of node this is. */
    type?: Maybe<Scalars["String"]["output"]>;
    /** The display name for the type of node this is. */
    typeLabel?: Maybe<Scalars["String"]["output"]>;
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
    /** The node’s full URL */
    url?: Maybe<Scalars["String"]["output"]>;
    /** The URL for this navigation item. */
    urlSuffix?: Maybe<Scalars["String"]["output"]>;
  };

export type NavigationMain_Node_CountArgs = {
  field: Scalars["String"]["input"];
};

export type NavigationMain_NodeChildrenArgs = {
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nav?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  navHandle?: InputMaybe<Scalars["String"]["input"]>;
  navId?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type NewsSectionEntryUnion = News_ContentBuilder_Entry;

export type News_ContentBuilder_Entry = ElementInterface &
  EntryInterface & {
    __typename?: "news_contentBuilder_Entry";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
    ancestors: Array<EntryInterface>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** The entry’s author. */
    author?: Maybe<UserInterface>;
    /** The ID of the author of this entry. */
    authorId?: Maybe<Scalars["Int"]["output"]>;
    builderContent: Array<Maybe<BuilderContent_MatrixField>>;
    /** Returns the entry’s canonical ID. */
    canonicalId?: Maybe<Scalars["Int"]["output"]>;
    /** Returns the entry’s canonical UUID. */
    canonicalUid?: Maybe<Scalars["String"]["output"]>;
    /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
    children: Array<EntryInterface>;
    /** The current revision for the entry. */
    currentRevision?: Maybe<EntryInterface>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
    descendants: Array<EntryInterface>;
    /** The creator of a given draft. */
    draftCreator?: Maybe<UserInterface>;
    /** The draft ID (from the `drafts` table). */
    draftId?: Maybe<Scalars["Int"]["output"]>;
    /** The name of the draft. */
    draftName?: Maybe<Scalars["String"]["output"]>;
    /** The notes for the draft. */
    draftNotes?: Maybe<Scalars["String"]["output"]>;
    /** The drafts for the entry. */
    drafts?: Maybe<Array<Maybe<EntryInterface>>>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** Whether the element is enabled for the site. */
    enabledForSite?: Maybe<Scalars["Boolean"]["output"]>;
    entryCustomTitle?: Maybe<Scalars["String"]["output"]>;
    entryImage: Array<Maybe<AssetInterface>>;
    entrySeo?: Maybe<Scalars["String"]["output"]>;
    entryShortDescription?: Maybe<Scalars["String"]["output"]>;
    /** The expiry date of the entry. */
    expiryDate?: Maybe<Scalars["DateTime"]["output"]>;
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** Returns whether this is a draft. */
    isDraft?: Maybe<Scalars["Boolean"]["output"]>;
    /** Returns whether this is a revision. */
    isRevision?: Maybe<Scalars["Boolean"]["output"]>;
    /** Returns whether this is an unpublished draft. */
    isUnpublishedDraft?: Maybe<Scalars["Boolean"]["output"]>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The element’s level within its structure */
    level?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s left position within its structure. */
    lft?: Maybe<Scalars["Int"]["output"]>;
    /** The same element in other locales. */
    localized: Array<EntryInterface>;
    /** Returns the next element relative to this one, from a given set of criteria. */
    next?: Maybe<EntryInterface>;
    /** The entry’s parent, if the section is a structure. */
    parent?: Maybe<EntryInterface>;
    /** The entry’s post date. */
    postDate?: Maybe<Scalars["DateTime"]["output"]>;
    /** Returns the previous element relative to this one, from a given set of criteria. */
    prev?: Maybe<EntryInterface>;
    /** The creator of a given revision. */
    revisionCreator?: Maybe<UserInterface>;
    /** The revision ID (from the `revisions` table). */
    revisionId?: Maybe<Scalars["Int"]["output"]>;
    /** The revision notes (from the `revisions` table). */
    revisionNotes?: Maybe<Scalars["String"]["output"]>;
    /** The revisions for the entry. */
    revisions?: Maybe<Array<Maybe<EntryInterface>>>;
    /** The element’s right position within its structure. */
    rgt?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s structure’s root ID */
    root?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the section that contains the entry. */
    sectionHandle: Scalars["String"]["output"];
    /** The ID of the section that contains the entry. */
    sectionId: Scalars["Int"]["output"];
    /** This query is used to query for SEOmatic meta data. */
    seomatic?: Maybe<SeomaticInterface>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /**
     * Returns the entry’s canonical ID.
     * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
     */
    sourceId?: Maybe<Scalars["Int"]["output"]>;
    /**
     * Returns the entry’s canonical UUID.
     * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
     */
    sourceUid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s structure ID. */
    structureId?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the entry type that contains the entry. */
    typeHandle: Scalars["String"]["output"];
    /** The ID of the entry type that contains the entry. */
    typeId: Scalars["Int"]["output"];
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
    /** The element’s full URL */
    url?: Maybe<Scalars["String"]["output"]>;
  };

export type News_ContentBuilder_Entry_CountArgs = {
  field: Scalars["String"]["input"];
};

export type News_ContentBuilder_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type News_ContentBuilder_EntryBuilderContentArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  primaryOwnerId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type News_ContentBuilder_EntryChildrenArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type News_ContentBuilder_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type News_ContentBuilder_EntryDraftsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type News_ContentBuilder_EntryEntryImageArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type News_ContentBuilder_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type News_ContentBuilder_EntryNextArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type News_ContentBuilder_EntryParentArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type News_ContentBuilder_EntryPrevArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type News_ContentBuilder_EntryRevisionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type News_ContentBuilder_EntrySeomaticArgs = {
  asArray?: InputMaybe<Scalars["Boolean"]["input"]>;
  environment?: InputMaybe<SeomaticEnvironment>;
  site?: InputMaybe<Scalars["String"]["input"]>;
  siteId?: InputMaybe<Scalars["Int"]["input"]>;
  uri?: InputMaybe<Scalars["String"]["input"]>;
};

export type PagesSectionEntryUnion =
  | Pages_ContentBuilder_Entry
  | Pages_OverviewNews_Entry;

export type Pages_ContentBuilder_Entry = ElementInterface &
  EntryInterface & {
    __typename?: "pages_contentBuilder_Entry";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
    ancestors: Array<EntryInterface>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** The entry’s author. */
    author?: Maybe<UserInterface>;
    /** The ID of the author of this entry. */
    authorId?: Maybe<Scalars["Int"]["output"]>;
    builderContent: Array<Maybe<BuilderContent_MatrixField>>;
    /** Returns the entry’s canonical ID. */
    canonicalId?: Maybe<Scalars["Int"]["output"]>;
    /** Returns the entry’s canonical UUID. */
    canonicalUid?: Maybe<Scalars["String"]["output"]>;
    /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
    children: Array<EntryInterface>;
    /** The current revision for the entry. */
    currentRevision?: Maybe<EntryInterface>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
    descendants: Array<EntryInterface>;
    /** The creator of a given draft. */
    draftCreator?: Maybe<UserInterface>;
    /** The draft ID (from the `drafts` table). */
    draftId?: Maybe<Scalars["Int"]["output"]>;
    /** The name of the draft. */
    draftName?: Maybe<Scalars["String"]["output"]>;
    /** The notes for the draft. */
    draftNotes?: Maybe<Scalars["String"]["output"]>;
    /** The drafts for the entry. */
    drafts?: Maybe<Array<Maybe<EntryInterface>>>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** Whether the element is enabled for the site. */
    enabledForSite?: Maybe<Scalars["Boolean"]["output"]>;
    entryCustomTitle?: Maybe<Scalars["String"]["output"]>;
    entryImage: Array<Maybe<AssetInterface>>;
    entrySeo?: Maybe<Scalars["String"]["output"]>;
    entryShortDescription?: Maybe<Scalars["String"]["output"]>;
    /** The expiry date of the entry. */
    expiryDate?: Maybe<Scalars["DateTime"]["output"]>;
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** Returns whether this is a draft. */
    isDraft?: Maybe<Scalars["Boolean"]["output"]>;
    /** Returns whether this is a revision. */
    isRevision?: Maybe<Scalars["Boolean"]["output"]>;
    /** Returns whether this is an unpublished draft. */
    isUnpublishedDraft?: Maybe<Scalars["Boolean"]["output"]>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The element’s level within its structure */
    level?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s left position within its structure. */
    lft?: Maybe<Scalars["Int"]["output"]>;
    /** The same element in other locales. */
    localized: Array<EntryInterface>;
    /** Returns the next element relative to this one, from a given set of criteria. */
    next?: Maybe<EntryInterface>;
    /** The entry’s parent, if the section is a structure. */
    parent?: Maybe<EntryInterface>;
    /** The entry’s post date. */
    postDate?: Maybe<Scalars["DateTime"]["output"]>;
    /** Returns the previous element relative to this one, from a given set of criteria. */
    prev?: Maybe<EntryInterface>;
    /** The creator of a given revision. */
    revisionCreator?: Maybe<UserInterface>;
    /** The revision ID (from the `revisions` table). */
    revisionId?: Maybe<Scalars["Int"]["output"]>;
    /** The revision notes (from the `revisions` table). */
    revisionNotes?: Maybe<Scalars["String"]["output"]>;
    /** The revisions for the entry. */
    revisions?: Maybe<Array<Maybe<EntryInterface>>>;
    /** The element’s right position within its structure. */
    rgt?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s structure’s root ID */
    root?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the section that contains the entry. */
    sectionHandle: Scalars["String"]["output"];
    /** The ID of the section that contains the entry. */
    sectionId: Scalars["Int"]["output"];
    /** This query is used to query for SEOmatic meta data. */
    seomatic?: Maybe<SeomaticInterface>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /**
     * Returns the entry’s canonical ID.
     * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
     */
    sourceId?: Maybe<Scalars["Int"]["output"]>;
    /**
     * Returns the entry’s canonical UUID.
     * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
     */
    sourceUid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s structure ID. */
    structureId?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the entry type that contains the entry. */
    typeHandle: Scalars["String"]["output"];
    /** The ID of the entry type that contains the entry. */
    typeId: Scalars["Int"]["output"];
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
    /** The element’s full URL */
    url?: Maybe<Scalars["String"]["output"]>;
  };

export type Pages_ContentBuilder_Entry_CountArgs = {
  field: Scalars["String"]["input"];
};

export type Pages_ContentBuilder_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Pages_ContentBuilder_EntryBuilderContentArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  primaryOwnerId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Pages_ContentBuilder_EntryChildrenArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Pages_ContentBuilder_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Pages_ContentBuilder_EntryDraftsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Pages_ContentBuilder_EntryEntryImageArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Pages_ContentBuilder_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Pages_ContentBuilder_EntryNextArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Pages_ContentBuilder_EntryParentArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Pages_ContentBuilder_EntryPrevArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Pages_ContentBuilder_EntryRevisionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Pages_ContentBuilder_EntrySeomaticArgs = {
  asArray?: InputMaybe<Scalars["Boolean"]["input"]>;
  environment?: InputMaybe<SeomaticEnvironment>;
  site?: InputMaybe<Scalars["String"]["input"]>;
  siteId?: InputMaybe<Scalars["Int"]["input"]>;
  uri?: InputMaybe<Scalars["String"]["input"]>;
};

export type Pages_OverviewNews_Entry = ElementInterface &
  EntryInterface & {
    __typename?: "pages_overviewNews_Entry";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
    ancestors: Array<EntryInterface>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    /** The entry’s author. */
    author?: Maybe<UserInterface>;
    /** The ID of the author of this entry. */
    authorId?: Maybe<Scalars["Int"]["output"]>;
    /** Returns the entry’s canonical ID. */
    canonicalId?: Maybe<Scalars["Int"]["output"]>;
    /** Returns the entry’s canonical UUID. */
    canonicalUid?: Maybe<Scalars["String"]["output"]>;
    /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
    children: Array<EntryInterface>;
    /** The current revision for the entry. */
    currentRevision?: Maybe<EntryInterface>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
    descendants: Array<EntryInterface>;
    /** The creator of a given draft. */
    draftCreator?: Maybe<UserInterface>;
    /** The draft ID (from the `drafts` table). */
    draftId?: Maybe<Scalars["Int"]["output"]>;
    /** The name of the draft. */
    draftName?: Maybe<Scalars["String"]["output"]>;
    /** The notes for the draft. */
    draftNotes?: Maybe<Scalars["String"]["output"]>;
    /** The drafts for the entry. */
    drafts?: Maybe<Array<Maybe<EntryInterface>>>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** Whether the element is enabled for the site. */
    enabledForSite?: Maybe<Scalars["Boolean"]["output"]>;
    entryCustomTitle?: Maybe<Scalars["String"]["output"]>;
    entryImage: Array<Maybe<AssetInterface>>;
    entrySeo?: Maybe<Scalars["String"]["output"]>;
    entryShortDescription?: Maybe<Scalars["String"]["output"]>;
    /** The expiry date of the entry. */
    expiryDate?: Maybe<Scalars["DateTime"]["output"]>;
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** Returns whether this is a draft. */
    isDraft?: Maybe<Scalars["Boolean"]["output"]>;
    /** Returns whether this is a revision. */
    isRevision?: Maybe<Scalars["Boolean"]["output"]>;
    /** Returns whether this is an unpublished draft. */
    isUnpublishedDraft?: Maybe<Scalars["Boolean"]["output"]>;
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The element’s level within its structure */
    level?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s left position within its structure. */
    lft?: Maybe<Scalars["Int"]["output"]>;
    /** The same element in other locales. */
    localized: Array<EntryInterface>;
    /** Returns the next element relative to this one, from a given set of criteria. */
    next?: Maybe<EntryInterface>;
    /** The entry’s parent, if the section is a structure. */
    parent?: Maybe<EntryInterface>;
    /** The entry’s post date. */
    postDate?: Maybe<Scalars["DateTime"]["output"]>;
    /** Returns the previous element relative to this one, from a given set of criteria. */
    prev?: Maybe<EntryInterface>;
    /** The creator of a given revision. */
    revisionCreator?: Maybe<UserInterface>;
    /** The revision ID (from the `revisions` table). */
    revisionId?: Maybe<Scalars["Int"]["output"]>;
    /** The revision notes (from the `revisions` table). */
    revisionNotes?: Maybe<Scalars["String"]["output"]>;
    /** The revisions for the entry. */
    revisions?: Maybe<Array<Maybe<EntryInterface>>>;
    /** The element’s right position within its structure. */
    rgt?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s structure’s root ID */
    root?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the section that contains the entry. */
    sectionHandle: Scalars["String"]["output"];
    /** The ID of the section that contains the entry. */
    sectionId: Scalars["Int"]["output"];
    /** This query is used to query for SEOmatic meta data. */
    seomatic?: Maybe<SeomaticInterface>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /**
     * Returns the entry’s canonical ID.
     * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
     */
    sourceId?: Maybe<Scalars["Int"]["output"]>;
    /**
     * Returns the entry’s canonical UUID.
     * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
     */
    sourceUid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s structure ID. */
    structureId?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The handle of the entry type that contains the entry. */
    typeHandle: Scalars["String"]["output"];
    /** The ID of the entry type that contains the entry. */
    typeId: Scalars["Int"]["output"];
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
    /** The element’s full URL */
    url?: Maybe<Scalars["String"]["output"]>;
  };

export type Pages_OverviewNews_Entry_CountArgs = {
  field: Scalars["String"]["input"];
};

export type Pages_OverviewNews_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Pages_OverviewNews_EntryChildrenArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Pages_OverviewNews_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Pages_OverviewNews_EntryDraftsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Pages_OverviewNews_EntryEntryImageArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Pages_OverviewNews_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Pages_OverviewNews_EntryNextArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Pages_OverviewNews_EntryParentArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Pages_OverviewNews_EntryPrevArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Pages_OverviewNews_EntryRevisionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  ancestorDist?: InputMaybe<Scalars["Int"]["input"]>;
  ancestorOf?: InputMaybe<Scalars["Int"]["input"]>;
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  authorId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  descendantDist?: InputMaybe<Scalars["Int"]["input"]>;
  descendantOf?: InputMaybe<Scalars["Int"]["input"]>;
  draftCreator?: InputMaybe<Scalars["Int"]["input"]>;
  draftId?: InputMaybe<Scalars["Int"]["input"]>;
  draftOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  drafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  editable?: InputMaybe<Scalars["Boolean"]["input"]>;
  entryCustomTitle?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  entryShortDescription?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaves?: InputMaybe<Scalars["Boolean"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  positionedAfter?: InputMaybe<Scalars["Int"]["input"]>;
  positionedBefore?: InputMaybe<Scalars["Int"]["input"]>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  prevSiblingOf?: InputMaybe<Scalars["Int"]["input"]>;
  provisionalDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars["Int"]["input"]>;
  revisionId?: InputMaybe<Scalars["Int"]["input"]>;
  revisionOf?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  revisions?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  section?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  structureId?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withStructure?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Pages_OverviewNews_EntrySeomaticArgs = {
  asArray?: InputMaybe<Scalars["Boolean"]["input"]>;
  environment?: InputMaybe<SeomaticEnvironment>;
  site?: InputMaybe<Scalars["String"]["input"]>;
  siteId?: InputMaybe<Scalars["Int"]["input"]>;
  uri?: InputMaybe<Scalars["String"]["input"]>;
};

export type TemplateImages_Asset = AssetInterface &
  ElementInterface & {
    __typename?: "templateImages_Asset";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** Alternative text for the asset. */
    alt?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    assetCaption?: Maybe<Scalars["String"]["output"]>;
    assetSource?: Maybe<Scalars["String"]["output"]>;
    assetSourceUrl?: Maybe<Scalars["String"]["output"]>;
    assetTitle?: Maybe<Scalars["String"]["output"]>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the asset file was last modified. */
    dateModified?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The file extension for the asset file. */
    extension: Scalars["String"]["output"];
    /** The filename of the asset file. */
    filename: Scalars["String"]["output"];
    /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
    focalPoint?: Maybe<Array<Maybe<Scalars["Float"]["output"]>>>;
    /** The ID of the folder that the asset belongs to. */
    folderId: Scalars["Int"]["output"];
    /** Returns the file’s format. */
    format?: Maybe<Scalars["String"]["output"]>;
    /** Whether a user-defined focal point is set on the asset. */
    hasFocalPoint: Scalars["Boolean"]["output"];
    /** The height in pixels or null if it’s not an image. */
    height?: Maybe<Scalars["Int"]["output"]>;
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** Returns a list of images produced from the named Imager X transform. */
    imagerTransform?: Maybe<Array<Maybe<ImagerTransformedImageInterface>>>;
    /** An `<img>` tag based on this asset. */
    img?: Maybe<Scalars["String"]["output"]>;
    /** The file kind. */
    kind: Scalars["String"]["output"];
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The file’s MIME type, if it can be determined. */
    mimeType?: Maybe<Scalars["String"]["output"]>;
    /** Returns the next element relative to this one, from a given set of criteria. */
    next?: Maybe<AssetInterface>;
    /** The asset’s path in the volume. */
    path: Scalars["String"]["output"];
    /** Returns the previous element relative to this one, from a given set of criteria. */
    prev?: Maybe<AssetInterface>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The file size in bytes. */
    size?: Maybe<Scalars["String"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
    srcset?: Maybe<Scalars["String"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The user who first added this asset (if known). */
    uploader?: Maybe<UserInterface>;
    /** The ID of the user who first added this asset (if known). */
    uploaderId?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
    /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
    url?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the volume that the asset belongs to. */
    volumeId?: Maybe<Scalars["Int"]["output"]>;
    /** The width in pixels or null if it’s not an image. */
    width?: Maybe<Scalars["Int"]["output"]>;
  };

export type TemplateImages_Asset_CountArgs = {
  field: Scalars["String"]["input"];
};

export type TemplateImages_AssetFormatArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TemplateImages_AssetHeightArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TemplateImages_AssetImagerTransformArgs = {
  transform?: InputMaybe<Scalars["String"]["input"]>;
};

export type TemplateImages_AssetNextArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type TemplateImages_AssetPrevArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type TemplateImages_AssetSrcsetArgs = {
  sizes: Array<Scalars["String"]["input"]>;
};

export type TemplateImages_AssetUploaderArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetUploaders?: InputMaybe<Scalars["Boolean"]["input"]>;
  authors?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasPhoto?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type TemplateImages_AssetUrlArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TemplateImages_AssetWidthArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Users_Asset = AssetInterface &
  ElementInterface & {
    __typename?: "users_Asset";
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars["Int"]["output"]>;
    /** Alternative text for the asset. */
    alt?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element is archived. */
    archived?: Maybe<Scalars["Boolean"]["output"]>;
    assetCaption?: Maybe<Scalars["String"]["output"]>;
    assetSource?: Maybe<Scalars["String"]["output"]>;
    assetSourceUrl?: Maybe<Scalars["String"]["output"]>;
    assetTitle?: Maybe<Scalars["String"]["output"]>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the asset file was last modified. */
    dateModified?: Maybe<Scalars["DateTime"]["output"]>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars["DateTime"]["output"]>;
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars["Boolean"]["output"]>;
    /** The file extension for the asset file. */
    extension: Scalars["String"]["output"];
    /** The filename of the asset file. */
    filename: Scalars["String"]["output"];
    /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
    focalPoint?: Maybe<Array<Maybe<Scalars["Float"]["output"]>>>;
    /** The ID of the folder that the asset belongs to. */
    folderId: Scalars["Int"]["output"];
    /** Returns the file’s format. */
    format?: Maybe<Scalars["String"]["output"]>;
    /** Whether a user-defined focal point is set on the asset. */
    hasFocalPoint: Scalars["Boolean"]["output"];
    /** The height in pixels or null if it’s not an image. */
    height?: Maybe<Scalars["Int"]["output"]>;
    /** The ID of the entity */
    id?: Maybe<Scalars["ID"]["output"]>;
    /** Returns a list of images produced from the named Imager X transform. */
    imagerTransform?: Maybe<Array<Maybe<ImagerTransformedImageInterface>>>;
    /** An `<img>` tag based on this asset. */
    img?: Maybe<Scalars["String"]["output"]>;
    /** The file kind. */
    kind: Scalars["String"]["output"];
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars["String"]["output"]>;
    /** The file’s MIME type, if it can be determined. */
    mimeType?: Maybe<Scalars["String"]["output"]>;
    /** Returns the next element relative to this one, from a given set of criteria. */
    next?: Maybe<AssetInterface>;
    /** The asset’s path in the volume. */
    path: Scalars["String"]["output"];
    /** Returns the previous element relative to this one, from a given set of criteria. */
    prev?: Maybe<AssetInterface>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars["Int"]["output"]>;
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars["Int"]["output"]>;
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars["ID"]["output"]>;
    /** The file size in bytes. */
    size?: Maybe<Scalars["String"]["output"]>;
    /** The element’s slug. */
    slug?: Maybe<Scalars["String"]["output"]>;
    /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
    srcset?: Maybe<Scalars["String"]["output"]>;
    /** The element’s status. */
    status?: Maybe<Scalars["String"]["output"]>;
    /** The element’s title. */
    title?: Maybe<Scalars["String"]["output"]>;
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars["Boolean"]["output"]>;
    /** The UID of the entity */
    uid?: Maybe<Scalars["String"]["output"]>;
    /** The user who first added this asset (if known). */
    uploader?: Maybe<UserInterface>;
    /** The ID of the user who first added this asset (if known). */
    uploaderId?: Maybe<Scalars["Int"]["output"]>;
    /** The element’s URI. */
    uri?: Maybe<Scalars["String"]["output"]>;
    /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
    url?: Maybe<Scalars["String"]["output"]>;
    /** The ID of the volume that the asset belongs to. */
    volumeId?: Maybe<Scalars["Int"]["output"]>;
    /** The width in pixels or null if it’s not an image. */
    width?: Maybe<Scalars["Int"]["output"]>;
  };

export type Users_Asset_CountArgs = {
  field: Scalars["String"]["input"];
};

export type Users_AssetFormatArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Users_AssetHeightArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Users_AssetImagerTransformArgs = {
  transform?: InputMaybe<Scalars["String"]["input"]>;
};

export type Users_AssetNextArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Users_AssetPrevArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetCaption?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSource?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetSourceUrl?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateModified?: InputMaybe<Scalars["String"]["input"]>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasAlt?: InputMaybe<Scalars["Boolean"]["input"]>;
  height?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeSubfolders?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uploader?: InputMaybe<Scalars["QueryArgument"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Users_AssetSrcsetArgs = {
  sizes: Array<Scalars["String"]["input"]>;
};

export type Users_AssetUploaderArgs = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  assetUploaders?: InputMaybe<Scalars["Boolean"]["input"]>;
  authors?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fixedOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  hasPhoto?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  inReverse?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  preferSites?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  ref?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]["input"]>>>;
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
  >;
  slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  trashed?: InputMaybe<Scalars["Boolean"]["input"]>;
  uid?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
  uri?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Users_AssetUrlArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Users_AssetWidthArgs = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  immediately?: InputMaybe<Scalars["Boolean"]["input"]>;
  interlace?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  transform?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryEntriesBySectionQueryVariables = Exact<{
  site:
    | Array<InputMaybe<Scalars["String"]["input"]>>
    | InputMaybe<Scalars["String"]["input"]>;
  section:
    | Array<InputMaybe<Scalars["String"]["input"]>>
    | InputMaybe<Scalars["String"]["input"]>;
}>;

export type QueryEntriesBySectionQuery = {
  __typename?: "Query";
  entries?: Array<
    | ({ __typename?: "errorPages_error_Entry" } & {
        " $fragmentRefs"?: {
          EntryMeta_ErrorPages_Error_Entry_Fragment: EntryMeta_ErrorPages_Error_Entry_Fragment;
        };
      })
    | ({ __typename?: "home_home_Entry" } & {
        " $fragmentRefs"?: {
          EntryMeta_Home_Home_Entry_Fragment: EntryMeta_Home_Home_Entry_Fragment;
        };
      })
    | ({ __typename?: "news_contentBuilder_Entry" } & {
        " $fragmentRefs"?: {
          EntryMeta_News_ContentBuilder_Entry_Fragment: EntryMeta_News_ContentBuilder_Entry_Fragment;
        };
      })
    | ({ __typename?: "pages_contentBuilder_Entry" } & {
        " $fragmentRefs"?: {
          EntryMeta_Pages_ContentBuilder_Entry_Fragment: EntryMeta_Pages_ContentBuilder_Entry_Fragment;
        };
      })
    | ({ __typename?: "pages_overviewNews_Entry" } & {
        " $fragmentRefs"?: {
          EntryMeta_Pages_OverviewNews_Entry_Fragment: EntryMeta_Pages_OverviewNews_Entry_Fragment;
        };
      })
    | null
  > | null;
};

export type QueryEntryPreviewQueryVariables = Exact<{
  siteId:
    | Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
    | InputMaybe<Scalars["QueryArgument"]["input"]>;
  id:
    | Array<InputMaybe<Scalars["QueryArgument"]["input"]>>
    | InputMaybe<Scalars["QueryArgument"]["input"]>;
}>;

export type QueryEntryPreviewQuery = {
  __typename?: "Query";
  entry?:
    | ({ __typename?: "errorPages_error_Entry" } & {
        " $fragmentRefs"?: {
          EntryMeta_ErrorPages_Error_Entry_Fragment: EntryMeta_ErrorPages_Error_Entry_Fragment;
        };
      })
    | ({ __typename?: "home_home_Entry" } & {
        " $fragmentRefs"?: {
          EntryMeta_Home_Home_Entry_Fragment: EntryMeta_Home_Home_Entry_Fragment;
        };
      })
    | ({ __typename?: "news_contentBuilder_Entry" } & {
        " $fragmentRefs"?: {
          EntryMeta_News_ContentBuilder_Entry_Fragment: EntryMeta_News_ContentBuilder_Entry_Fragment;
        };
      })
    | ({ __typename?: "pages_contentBuilder_Entry" } & {
        " $fragmentRefs"?: {
          EntryMeta_Pages_ContentBuilder_Entry_Fragment: EntryMeta_Pages_ContentBuilder_Entry_Fragment;
        };
      })
    | ({ __typename?: "pages_overviewNews_Entry" } & {
        " $fragmentRefs"?: {
          EntryMeta_Pages_OverviewNews_Entry_Fragment: EntryMeta_Pages_OverviewNews_Entry_Fragment;
        };
      })
    | null;
};

type EntryDates_ErrorPages_Error_Entry_Fragment = {
  __typename?: "errorPages_error_Entry";
  dateShort?: any | null;
  dateMedium?: any | null;
  dateLong?: any | null;
  dateTimezone?: any | null;
} & { " $fragmentName"?: "EntryDates_ErrorPages_Error_Entry_Fragment" };

type EntryDates_Home_Home_Entry_Fragment = {
  __typename?: "home_home_Entry";
  dateShort?: any | null;
  dateMedium?: any | null;
  dateLong?: any | null;
  dateTimezone?: any | null;
} & { " $fragmentName"?: "EntryDates_Home_Home_Entry_Fragment" };

type EntryDates_News_ContentBuilder_Entry_Fragment = {
  __typename?: "news_contentBuilder_Entry";
  dateShort?: any | null;
  dateMedium?: any | null;
  dateLong?: any | null;
  dateTimezone?: any | null;
} & { " $fragmentName"?: "EntryDates_News_ContentBuilder_Entry_Fragment" };

type EntryDates_Pages_ContentBuilder_Entry_Fragment = {
  __typename?: "pages_contentBuilder_Entry";
  dateShort?: any | null;
  dateMedium?: any | null;
  dateLong?: any | null;
  dateTimezone?: any | null;
} & { " $fragmentName"?: "EntryDates_Pages_ContentBuilder_Entry_Fragment" };

type EntryDates_Pages_OverviewNews_Entry_Fragment = {
  __typename?: "pages_overviewNews_Entry";
  dateShort?: any | null;
  dateMedium?: any | null;
  dateLong?: any | null;
  dateTimezone?: any | null;
} & { " $fragmentName"?: "EntryDates_Pages_OverviewNews_Entry_Fragment" };

export type EntryDatesFragment =
  | EntryDates_ErrorPages_Error_Entry_Fragment
  | EntryDates_Home_Home_Entry_Fragment
  | EntryDates_News_ContentBuilder_Entry_Fragment
  | EntryDates_Pages_ContentBuilder_Entry_Fragment
  | EntryDates_Pages_OverviewNews_Entry_Fragment;

type EntryMeta_ErrorPages_Error_Entry_Fragment = {
  __typename?: "errorPages_error_Entry";
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  uri?: string | null;
  url?: string | null;
  canonicalId?: number | null;
  language?: string | null;
  sectionHandle: string;
  typeHandle: string;
  siteHandle?: string | null;
  siteId?: number | null;
} & { " $fragmentName"?: "EntryMeta_ErrorPages_Error_Entry_Fragment" };

type EntryMeta_Home_Home_Entry_Fragment = {
  __typename?: "home_home_Entry";
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  uri?: string | null;
  url?: string | null;
  canonicalId?: number | null;
  language?: string | null;
  sectionHandle: string;
  typeHandle: string;
  siteHandle?: string | null;
  siteId?: number | null;
} & { " $fragmentName"?: "EntryMeta_Home_Home_Entry_Fragment" };

type EntryMeta_News_ContentBuilder_Entry_Fragment = {
  __typename?: "news_contentBuilder_Entry";
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  uri?: string | null;
  url?: string | null;
  canonicalId?: number | null;
  language?: string | null;
  sectionHandle: string;
  typeHandle: string;
  siteHandle?: string | null;
  siteId?: number | null;
} & { " $fragmentName"?: "EntryMeta_News_ContentBuilder_Entry_Fragment" };

type EntryMeta_Pages_ContentBuilder_Entry_Fragment = {
  __typename?: "pages_contentBuilder_Entry";
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  uri?: string | null;
  url?: string | null;
  canonicalId?: number | null;
  language?: string | null;
  sectionHandle: string;
  typeHandle: string;
  siteHandle?: string | null;
  siteId?: number | null;
} & { " $fragmentName"?: "EntryMeta_Pages_ContentBuilder_Entry_Fragment" };

type EntryMeta_Pages_OverviewNews_Entry_Fragment = {
  __typename?: "pages_overviewNews_Entry";
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  uri?: string | null;
  url?: string | null;
  canonicalId?: number | null;
  language?: string | null;
  sectionHandle: string;
  typeHandle: string;
  siteHandle?: string | null;
  siteId?: number | null;
} & { " $fragmentName"?: "EntryMeta_Pages_OverviewNews_Entry_Fragment" };

export type EntryMetaFragment =
  | EntryMeta_ErrorPages_Error_Entry_Fragment
  | EntryMeta_Home_Home_Entry_Fragment
  | EntryMeta_News_ContentBuilder_Entry_Fragment
  | EntryMeta_Pages_ContentBuilder_Entry_Fragment
  | EntryMeta_Pages_OverviewNews_Entry_Fragment;

export type QueryEntrySeoQueryVariables = Exact<{
  siteId: Scalars["Int"]["input"];
  uri: Scalars["String"]["input"];
}>;

export type QueryEntrySeoQuery = {
  __typename?: "Query";
  seomatic?: {
    __typename?: "SeomaticType";
    metaTagContainer?: string | null;
    metaLinkContainer?: string | null;
    metaTitleContainer?: string | null;
    metaScriptContainer?: string | null;
    metaJsonLdContainer?: string | null;
    metaSiteVarsContainer?: string | null;
  } | null;
};

export const EntryDatesFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "entryDates" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "EntryInterface" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "dateShort" },
            name: { kind: "Name", value: "postDate" },
            directives: [
              {
                kind: "Directive",
                name: { kind: "Name", value: "formatDateTime" },
                arguments: [
                  {
                    kind: "Argument",
                    name: { kind: "Name", value: "format" },
                    value: {
                      kind: "StringValue",
                      value: "short",
                      block: false,
                    },
                  },
                ],
              },
            ],
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "dateMedium" },
            name: { kind: "Name", value: "postDate" },
            directives: [
              {
                kind: "Directive",
                name: { kind: "Name", value: "formatDateTime" },
                arguments: [
                  {
                    kind: "Argument",
                    name: { kind: "Name", value: "format" },
                    value: {
                      kind: "StringValue",
                      value: "medium",
                      block: false,
                    },
                  },
                ],
              },
            ],
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "dateLong" },
            name: { kind: "Name", value: "postDate" },
            directives: [
              {
                kind: "Directive",
                name: { kind: "Name", value: "formatDateTime" },
                arguments: [
                  {
                    kind: "Argument",
                    name: { kind: "Name", value: "format" },
                    value: { kind: "StringValue", value: "long", block: false },
                  },
                ],
              },
            ],
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "dateTimezone" },
            name: { kind: "Name", value: "postDate" },
            directives: [
              {
                kind: "Directive",
                name: { kind: "Name", value: "formatDateTime" },
                arguments: [
                  {
                    kind: "Argument",
                    name: { kind: "Name", value: "format" },
                    value: { kind: "StringValue", value: "T", block: false },
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EntryDatesFragment, unknown>;
export const EntryMetaFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "entryMeta" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "EntryInterface" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "uri" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "canonicalId" } },
          { kind: "Field", name: { kind: "Name", value: "language" } },
          { kind: "Field", name: { kind: "Name", value: "sectionHandle" } },
          { kind: "Field", name: { kind: "Name", value: "typeHandle" } },
          { kind: "Field", name: { kind: "Name", value: "siteHandle" } },
          { kind: "Field", name: { kind: "Name", value: "siteId" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EntryMetaFragment, unknown>;
export const QueryEntriesBySectionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryEntriesBySection" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "site" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "String" },
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "section" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "String" },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "entries" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "site" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "site" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "section" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "section" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "entryMeta" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "entryMeta" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "EntryInterface" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "uri" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "canonicalId" } },
          { kind: "Field", name: { kind: "Name", value: "language" } },
          { kind: "Field", name: { kind: "Name", value: "sectionHandle" } },
          { kind: "Field", name: { kind: "Name", value: "typeHandle" } },
          { kind: "Field", name: { kind: "Name", value: "siteHandle" } },
          { kind: "Field", name: { kind: "Name", value: "siteId" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryEntriesBySectionQuery,
  QueryEntriesBySectionQueryVariables
>;
export const QueryEntryPreviewDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryEntryPreview" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "siteId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "QueryArgument" },
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "QueryArgument" },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "entry" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "siteId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "siteId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "entryMeta" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "entryMeta" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "EntryInterface" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "uri" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "canonicalId" } },
          { kind: "Field", name: { kind: "Name", value: "language" } },
          { kind: "Field", name: { kind: "Name", value: "sectionHandle" } },
          { kind: "Field", name: { kind: "Name", value: "typeHandle" } },
          { kind: "Field", name: { kind: "Name", value: "siteHandle" } },
          { kind: "Field", name: { kind: "Name", value: "siteId" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryEntryPreviewQuery,
  QueryEntryPreviewQueryVariables
>;
export const QueryEntrySeoDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryEntrySEO" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "siteId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "uri" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "seomatic" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "siteId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "siteId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "uri" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "uri" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "asArray" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "metaTagContainer" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "metaLinkContainer" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "metaTitleContainer" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "metaScriptContainer" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "metaJsonLdContainer" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "metaSiteVarsContainer" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryEntrySeoQuery, QueryEntrySeoQueryVariables>;
