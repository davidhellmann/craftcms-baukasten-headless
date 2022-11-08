/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  /** The `DateTime` scalar type represents a point in time. */
  DateTime: any;
  /** The `QueryArgument` scalar type represents a value to be using in Craft element queries. It can be an integer, a string, or a boolean value. */
  QueryArgument: any;
};

export type Address = AddressInterface & ElementInterface & {
  __typename?: 'Address';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** First line of the address */
  addressLine1?: Maybe<Scalars['String']>;
  /** Second line of the address */
  addressLine2?: Maybe<Scalars['String']>;
  /** Administrative area. */
  administrativeArea?: Maybe<Scalars['String']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** Two-letter country code */
  countryCode: Scalars['String'];
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Dependent locality */
  dependentLocality?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The first name on the address. */
  firstName?: Maybe<Scalars['String']>;
  /** The full name on the address. */
  fullName?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The last name on the address. */
  lastName?: Maybe<Scalars['String']>;
  /** Latitude */
  latitude?: Maybe<Scalars['String']>;
  /** Locality */
  locality?: Maybe<Scalars['String']>;
  /** Longitude */
  longitude?: Maybe<Scalars['String']>;
  /** Organization name */
  organization?: Maybe<Scalars['String']>;
  /** Organization tax ID */
  organizationTaxId?: Maybe<Scalars['String']>;
  /** The user’s photo. */
  photo?: Maybe<AssetInterface>;
  /** Postal code */
  postalCode?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** Sorting code */
  sortingCode?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type Address_CountArgs = {
  field: Scalars['String'];
};

/** This is the interface implemented by all addresses. */
export type AddressInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** First line of the address */
  addressLine1?: Maybe<Scalars['String']>;
  /** Second line of the address */
  addressLine2?: Maybe<Scalars['String']>;
  /** Administrative area. */
  administrativeArea?: Maybe<Scalars['String']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** Two-letter country code */
  countryCode: Scalars['String'];
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Dependent locality */
  dependentLocality?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The first name on the address. */
  firstName?: Maybe<Scalars['String']>;
  /** The full name on the address. */
  fullName?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The last name on the address. */
  lastName?: Maybe<Scalars['String']>;
  /** Latitude */
  latitude?: Maybe<Scalars['String']>;
  /** Locality */
  locality?: Maybe<Scalars['String']>;
  /** Longitude */
  longitude?: Maybe<Scalars['String']>;
  /** Organization name */
  organization?: Maybe<Scalars['String']>;
  /** Organization tax ID */
  organizationTaxId?: Maybe<Scalars['String']>;
  /** The user’s photo. */
  photo?: Maybe<AssetInterface>;
  /** Postal code */
  postalCode?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** Sorting code */
  sortingCode?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all addresses. */
export type AddressInterface_CountArgs = {
  field: Scalars['String'];
};

export type AssetCriteriaInput = {
  /** Narrows the query results to only elements that have been archived. */
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the assets’ files’ last-modified dates. */
  dateModified?: InputMaybe<Scalars['String']>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the assets’ filenames. */
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the folders the assets belong to, per the folders’ IDs. */
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on whether the assets have alternative text. */
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the assets’ image heights. */
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']>;
  /** Broadens the query results to include assets from any of the subfolders of the folder specified by `folderId`. */
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the assets’ file kinds. */
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
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
  search?: InputMaybe<Scalars['String']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the assets’ file sizes (in bytes). */
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the user the assets were uploaded by, per the user’s ID. */
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ handles. */
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs. */
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the assets’ image widths. */
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** A list of transform handles to preload. */
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** This is the interface implemented by all assets. */
export type AssetInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Alternative text for the asset. */
  alt?: Maybe<Scalars['String']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the asset file was last modified. */
  dateModified?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The file extension for the asset file. */
  extension: Scalars['String'];
  /** The filename of the asset file. */
  filename: Scalars['String'];
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  focalPoint?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The ID of the folder that the asset belongs to. */
  folderId: Scalars['Int'];
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint: Scalars['Boolean'];
  /** The height in pixels or null if it’s not an image. */
  height?: Maybe<Scalars['Int']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Returns a list of images produced from the named Imager X transform. */
  imagerTransform?: Maybe<Array<Maybe<ImagerTransformedImageInterface>>>;
  /** An `<img>` tag based on this asset. */
  img?: Maybe<Scalars['String']>;
  /** The file kind. */
  kind: Scalars['String'];
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The file’s MIME type, if it can be determined. */
  mimeType?: Maybe<Scalars['String']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  path: Scalars['String'];
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The file size in bytes. */
  size?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  srcset?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The user who first added this asset (if known). */
  uploader?: Maybe<UserInterface>;
  /** The ID of the user who first added this asset (if known). */
  uploaderId?: Maybe<Scalars['Int']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url?: Maybe<Scalars['String']>;
  /** The ID of the volume that the asset belongs to. */
  volumeId?: Maybe<Scalars['Int']>;
  /** The width in pixels or null if it’s not an image. */
  width?: Maybe<Scalars['Int']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterface_CountArgs = {
  field: Scalars['String'];
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceHeightArgs = {
  format?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  immediately?: InputMaybe<Scalars['Boolean']>;
  interlace?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceImagerTransformArgs = {
  transform?: InputMaybe<Scalars['String']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceNextArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfacePrevArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceSrcsetArgs = {
  sizes: Array<Scalars['String']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceUploaderArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetUploaders?: InputMaybe<Scalars['Boolean']>;
  authors?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceUrlArgs = {
  format?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  immediately?: InputMaybe<Scalars['Boolean']>;
  interlace?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceWidthArgs = {
  format?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  immediately?: InputMaybe<Scalars['Boolean']>;
  interlace?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type CategoryCriteriaInput = {
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only elements that have been archived. */
  archived?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf?: InputMaybe<Scalars['Int']>;
  /** Whether to only return categories that the user has permission to edit. */
  editable?: InputMaybe<Scalars['Boolean']>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the category groups the categories belong to per the group’s handles. */
  group?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the category groups the categories belong to, per the groups’ IDs. */
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level?: InputMaybe<Scalars['Int']>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore?: InputMaybe<Scalars['Int']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
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
  search?: InputMaybe<Scalars['String']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which structure data should be joined into the query. */
  structureId?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure?: InputMaybe<Scalars['Boolean']>;
};

export type Element = ElementInterface & {
  __typename?: 'Element';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type Element_CountArgs = {
  field: Scalars['String'];
};

/** This is the interface implemented by all elements. */
export type ElementInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all elements. */
export type ElementInterface_CountArgs = {
  field: Scalars['String'];
};

export type EntryCriteriaInput = {
  /** Narrows the query results to only entries that were posted on or after a certain date. */
  after?: InputMaybe<Scalars['String']>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only elements that have been archived. */
  archived?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the user group the entries’ authors belong to. */
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the user group the entries’ authors belong to, per the groups’ IDs. */
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the entries’ authors. */
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to only entries that were posted before a certain date. */
  before?: InputMaybe<Scalars['String']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf?: InputMaybe<Scalars['Int']>;
  /** The drafts’ creator ID */
  draftCreator?: InputMaybe<Scalars['Int']>;
  /** The ID of the draft to return (from the `drafts` table) */
  draftId?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only drafts of a given element.  Set to `false` to fetch unpublished drafts. */
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  /** Whether draft elements should be returned. */
  drafts?: InputMaybe<Scalars['Boolean']>;
  /** Whether to only return entries that the user has permission to edit. */
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the entries’ expiry dates. */
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level?: InputMaybe<Scalars['Int']>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results based on the entries’ post dates. */
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  /** Whether provisional drafts should be returned. */
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
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
  revisionCreator?: InputMaybe<Scalars['Int']>;
  /** The ID of the revision to return (from the `revisions` table) */
  revisionId?: InputMaybe<Scalars['Int']>;
  /** The source element ID that revisions should be returned for */
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  /** Whether revision elements should be returned. */
  revisions?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']>;
  /** Narrows the query results based on the section handles the entries belong to. */
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the sections the entries belong to, per the sections’ IDs. */
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which structure data should be joined into the query. */
  structureId?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the entries’ entry type handles. */
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the entries’ entry types, per the types’ IDs. */
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure?: InputMaybe<Scalars['Boolean']>;
};

/** This is the interface implemented by all entries. */
export type EntryInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The entry’s author. */
  author?: Maybe<UserInterface>;
  /** The ID of the author of this entry. */
  authorId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The current revision for the entry. */
  currentRevision?: Maybe<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The creator of a given draft. */
  draftCreator?: Maybe<UserInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']>;
  /** The drafts for the entry. */
  drafts?: Maybe<Array<Maybe<EntryInterface>>>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The creator of a given revision. */
  revisionCreator?: Maybe<UserInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']>;
  /** The revisions for the entry. */
  revisions?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int'];
  /** This query is used to query for SEOmatic meta data. */
  seomatic?: Maybe<SeomaticInterface>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterface_CountArgs = {
  field: Scalars['String'];
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceDraftsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceLocalizedArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceNextArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceParentArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfacePrevArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceSeomaticArgs = {
  asArray?: InputMaybe<Scalars['Boolean']>;
  environment?: InputMaybe<SeomaticEnvironment>;
  site?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  uri?: InputMaybe<Scalars['String']>;
};

export type FieldAttribute = {
  __typename?: 'FieldAttribute';
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** This is the interface implemented by all fields. */
export type FieldInterface = {
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type FieldOption = {
  __typename?: 'FieldOption';
  /** Whether this option has been marked as a default. */
  isDefault?: Maybe<Scalars['Boolean']>;
  /** Whether this option has been marked as an `optgroup`. */
  isOptgroup?: Maybe<Scalars['Boolean']>;
  /** The label of the option. */
  label?: Maybe<Scalars['String']>;
  /** The value of the option. */
  value?: Maybe<Scalars['String']>;
};

export type Field_Address = FieldInterface & {
  __typename?: 'Field_Address';
  address1Collapsed?: Maybe<Scalars['Boolean']>;
  address1DefaultValue?: Maybe<Scalars['String']>;
  address1Enabled?: Maybe<Scalars['Boolean']>;
  address1ErrorMessage?: Maybe<Scalars['String']>;
  address1Hidden?: Maybe<Scalars['Boolean']>;
  address1Label?: Maybe<Scalars['String']>;
  address1Placeholder?: Maybe<Scalars['String']>;
  address1PrePopulate?: Maybe<Scalars['String']>;
  address1Required?: Maybe<Scalars['Boolean']>;
  address2Collapsed?: Maybe<Scalars['Boolean']>;
  address2DefaultValue?: Maybe<Scalars['String']>;
  address2Enabled?: Maybe<Scalars['Boolean']>;
  address2ErrorMessage?: Maybe<Scalars['String']>;
  address2Hidden?: Maybe<Scalars['Boolean']>;
  address2Label?: Maybe<Scalars['String']>;
  address2Placeholder?: Maybe<Scalars['String']>;
  address2PrePopulate?: Maybe<Scalars['String']>;
  address2Required?: Maybe<Scalars['Boolean']>;
  address3Collapsed?: Maybe<Scalars['Boolean']>;
  address3DefaultValue?: Maybe<Scalars['String']>;
  address3Enabled?: Maybe<Scalars['Boolean']>;
  address3ErrorMessage?: Maybe<Scalars['String']>;
  address3Hidden?: Maybe<Scalars['Boolean']>;
  address3Label?: Maybe<Scalars['String']>;
  address3Placeholder?: Maybe<Scalars['String']>;
  address3PrePopulate?: Maybe<Scalars['String']>;
  address3Required?: Maybe<Scalars['Boolean']>;
  autocompleteCollapsed?: Maybe<Scalars['Boolean']>;
  autocompleteCurrentLocation?: Maybe<Scalars['Boolean']>;
  autocompleteDefaultValue?: Maybe<Scalars['String']>;
  autocompleteEnabled?: Maybe<Scalars['Boolean']>;
  autocompleteErrorMessage?: Maybe<Scalars['String']>;
  autocompleteIntegration?: Maybe<Scalars['String']>;
  autocompleteLabel?: Maybe<Scalars['String']>;
  autocompletePlaceholder?: Maybe<Scalars['String']>;
  autocompletePrePopulate?: Maybe<Scalars['String']>;
  autocompleteRequired?: Maybe<Scalars['Boolean']>;
  cityCollapsed?: Maybe<Scalars['Boolean']>;
  cityDefaultValue?: Maybe<Scalars['String']>;
  cityEnabled?: Maybe<Scalars['Boolean']>;
  cityErrorMessage?: Maybe<Scalars['String']>;
  cityHidden?: Maybe<Scalars['Boolean']>;
  cityLabel?: Maybe<Scalars['String']>;
  cityPlaceholder?: Maybe<Scalars['String']>;
  cityPrePopulate?: Maybe<Scalars['String']>;
  cityRequired?: Maybe<Scalars['Boolean']>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  countryCollapsed?: Maybe<Scalars['Boolean']>;
  countryDefaultValue?: Maybe<Scalars['String']>;
  countryEnabled?: Maybe<Scalars['Boolean']>;
  countryErrorMessage?: Maybe<Scalars['String']>;
  countryHidden?: Maybe<Scalars['Boolean']>;
  countryLabel?: Maybe<Scalars['String']>;
  countryOptions?: Maybe<Array<Maybe<FieldAttribute>>>;
  countryPlaceholder?: Maybe<Scalars['String']>;
  countryPrePopulate?: Maybe<Scalars['String']>;
  countryRequired?: Maybe<Scalars['Boolean']>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  stateCollapsed?: Maybe<Scalars['Boolean']>;
  stateDefaultValue?: Maybe<Scalars['String']>;
  stateEnabled?: Maybe<Scalars['Boolean']>;
  stateErrorMessage?: Maybe<Scalars['String']>;
  stateHidden?: Maybe<Scalars['Boolean']>;
  stateLabel?: Maybe<Scalars['String']>;
  statePlaceholder?: Maybe<Scalars['String']>;
  statePrePopulate?: Maybe<Scalars['String']>;
  stateRequired?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
  zipCollapsed?: Maybe<Scalars['Boolean']>;
  zipDefaultValue?: Maybe<Scalars['String']>;
  zipEnabled?: Maybe<Scalars['Boolean']>;
  zipErrorMessage?: Maybe<Scalars['String']>;
  zipHidden?: Maybe<Scalars['Boolean']>;
  zipLabel?: Maybe<Scalars['String']>;
  zipPlaceholder?: Maybe<Scalars['String']>;
  zipPrePopulate?: Maybe<Scalars['String']>;
  zipRequired?: Maybe<Scalars['Boolean']>;
};

export type Field_Agree = FieldInterface & {
  __typename?: 'Field_Agree';
  checkedValue?: Maybe<Scalars['String']>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  defaultState?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  uncheckedValue?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Calculations = FieldInterface & {
  __typename?: 'Field_Calculations';
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['Int']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  formatting?: Maybe<Scalars['String']>;
  formula?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  suffix?: Maybe<Scalars['String']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Checkboxes = FieldInterface & {
  __typename?: 'Field_Checkboxes';
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  multi?: Maybe<Scalars['Boolean']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<FieldOption>>>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  toggleCheckbox?: Maybe<Scalars['String']>;
  toggleCheckboxLabel?: Maybe<Scalars['String']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Date = FieldInterface & {
  __typename?: 'Field_Date';
  ampmLabel?: Maybe<Scalars['String']>;
  ampmPlaceholder?: Maybe<Scalars['String']>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  dateFormat?: Maybe<Scalars['String']>;
  datePickerOptions?: Maybe<Array<Maybe<FieldAttribute>>>;
  dayLabel?: Maybe<Scalars['String']>;
  dayPlaceholder?: Maybe<Scalars['String']>;
  defaultDate?: Maybe<Scalars['DateTime']>;
  defaultOption?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  displayType?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  hourLabel?: Maybe<Scalars['String']>;
  hourPlaceholder?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  includeDate?: Maybe<Scalars['Boolean']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  includeTime?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  maxDate?: Maybe<Scalars['DateTime']>;
  maxDateOffset?: Maybe<Scalars['String']>;
  maxDateOffsetNumber?: Maybe<Scalars['Int']>;
  maxDateOffsetType?: Maybe<Scalars['String']>;
  maxDateOption?: Maybe<Scalars['String']>;
  maxYearRange?: Maybe<Scalars['Int']>;
  minDate?: Maybe<Scalars['DateTime']>;
  minDateOffset?: Maybe<Scalars['String']>;
  minDateOffsetNumber?: Maybe<Scalars['Int']>;
  minDateOffsetType?: Maybe<Scalars['String']>;
  minDateOption?: Maybe<Scalars['String']>;
  minYearRange?: Maybe<Scalars['Int']>;
  minuteLabel?: Maybe<Scalars['String']>;
  minutePlaceholder?: Maybe<Scalars['String']>;
  monthLabel?: Maybe<Scalars['String']>;
  monthPlaceholder?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  secondLabel?: Maybe<Scalars['String']>;
  secondPlaceholder?: Maybe<Scalars['String']>;
  timeFormat?: Maybe<Scalars['String']>;
  timeLabel?: Maybe<Scalars['String']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  useDatePicker?: Maybe<Scalars['Boolean']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
  yearLabel?: Maybe<Scalars['String']>;
  yearPlaceholder?: Maybe<Scalars['String']>;
};

export type Field_Dropdown = FieldInterface & {
  __typename?: 'Field_Dropdown';
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  multi?: Maybe<Scalars['Boolean']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<FieldOption>>>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Email = FieldInterface & {
  __typename?: 'Field_Email';
  blockedDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  uniqueValue?: Maybe<Scalars['Boolean']>;
  validateDomain?: Maybe<Scalars['Boolean']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Entries = FieldInterface & {
  __typename?: 'Field_Entries';
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  defaultEntry?: Maybe<EntryInterface>;
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  entries?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};


export type Field_EntriesDefaultEntryArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Field_EntriesEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};

export type Field_FileUpload = FieldInterface & {
  __typename?: 'Field_FileUpload';
  allowSubfolders?: Maybe<Scalars['Boolean']>;
  allowUploads?: Maybe<Scalars['Boolean']>;
  allowedKinds?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  defaultUploadLocationSource?: Maybe<Scalars['String']>;
  defaultUploadLocationSubpath?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  limitFiles?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  previewMode?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  restrictFiles?: Maybe<Scalars['Boolean']>;
  restrictLocation?: Maybe<Scalars['Boolean']>;
  restrictedDefaultUploadSubpath?: Maybe<Scalars['String']>;
  restrictedLocationSource?: Maybe<Scalars['String']>;
  restrictedLocationSubpath?: Maybe<Scalars['String']>;
  searchable?: Maybe<Scalars['Boolean']>;
  showUnpermittedFiles?: Maybe<Scalars['Boolean']>;
  showUnpermittedVolumes?: Maybe<Scalars['Boolean']>;
  sizeLimit?: Maybe<Scalars['String']>;
  sizeMinLimit?: Maybe<Scalars['String']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  uploadLocationSource?: Maybe<Scalars['String']>;
  uploadLocationSubpath?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
  volumeHandle?: Maybe<Scalars['String']>;
};

export type Field_Group = FieldInterface & {
  __typename?: 'Field_Group';
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s nested fields. */
  fields?: Maybe<Array<Maybe<FieldInterface>>>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s nested rows. */
  nestedRows?: Maybe<Array<Maybe<RowInterface>>>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Heading = FieldInterface & {
  __typename?: 'Field_Heading';
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  headingSize?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Hidden = FieldInterface & {
  __typename?: 'Field_Hidden';
  columnType?: Maybe<Scalars['String']>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  cookieName?: Maybe<Scalars['String']>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  defaultOption?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  queryParameter?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Html = FieldInterface & {
  __typename?: 'Field_Html';
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  htmlContent?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_MultiLineText = FieldInterface & {
  __typename?: 'Field_MultiLineText';
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Boolean']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['Int']>;
  maxType?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['Int']>;
  minType?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  richTextButtons?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  useRichText?: Maybe<Scalars['Boolean']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Name = FieldInterface & {
  __typename?: 'Field_Name';
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  firstNameCollapsed?: Maybe<Scalars['Boolean']>;
  firstNameDefaultValue?: Maybe<Scalars['String']>;
  firstNameEnabled?: Maybe<Scalars['Boolean']>;
  firstNameErrorMessage?: Maybe<Scalars['String']>;
  firstNameLabel?: Maybe<Scalars['String']>;
  firstNamePlaceholder?: Maybe<Scalars['String']>;
  firstNamePrePopulate?: Maybe<Scalars['String']>;
  firstNameRequired?: Maybe<Scalars['Boolean']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  lastNameCollapsed?: Maybe<Scalars['Boolean']>;
  lastNameDefaultValue?: Maybe<Scalars['String']>;
  lastNameEnabled?: Maybe<Scalars['Boolean']>;
  lastNameErrorMessage?: Maybe<Scalars['String']>;
  lastNameLabel?: Maybe<Scalars['String']>;
  lastNamePlaceholder?: Maybe<Scalars['String']>;
  lastNamePrePopulate?: Maybe<Scalars['String']>;
  lastNameRequired?: Maybe<Scalars['Boolean']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  middleNameCollapsed?: Maybe<Scalars['Boolean']>;
  middleNameDefaultValue?: Maybe<Scalars['String']>;
  middleNameEnabled?: Maybe<Scalars['Boolean']>;
  middleNameErrorMessage?: Maybe<Scalars['String']>;
  middleNameLabel?: Maybe<Scalars['String']>;
  middleNamePlaceholder?: Maybe<Scalars['String']>;
  middleNamePrePopulate?: Maybe<Scalars['String']>;
  middleNameRequired?: Maybe<Scalars['Boolean']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  prefixCollapsed?: Maybe<Scalars['Boolean']>;
  prefixDefaultValue?: Maybe<Scalars['String']>;
  prefixEnabled?: Maybe<Scalars['Boolean']>;
  prefixErrorMessage?: Maybe<Scalars['String']>;
  prefixLabel?: Maybe<Scalars['String']>;
  prefixOptions?: Maybe<Array<Maybe<FieldAttribute>>>;
  prefixPlaceholder?: Maybe<Scalars['String']>;
  prefixPrePopulate?: Maybe<Scalars['String']>;
  prefixRequired?: Maybe<Scalars['Boolean']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  useMultipleFields?: Maybe<Scalars['Boolean']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Number = FieldInterface & {
  __typename?: 'Field_Number';
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['Int']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Boolean']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Password = FieldInterface & {
  __typename?: 'Field_Password';
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Payment = FieldInterface & {
  __typename?: 'Field_Payment';
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  paymentIntegration?: Maybe<Scalars['String']>;
  paymentIntegrationType?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  providerSettings?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Phone = FieldInterface & {
  __typename?: 'Field_Phone';
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  countryAllowed?: Maybe<Scalars['String']>;
  countryCollapsed?: Maybe<Scalars['Boolean']>;
  countryDefaultValue?: Maybe<Scalars['String']>;
  countryEnabled?: Maybe<Scalars['Boolean']>;
  countryOptions?: Maybe<Array<Maybe<FieldAttribute>>>;
  countryShowDialCode?: Maybe<Scalars['Boolean']>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Radio = FieldInterface & {
  __typename?: 'Field_Radio';
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<FieldOption>>>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Recipients = FieldInterface & {
  __typename?: 'Field_Recipients';
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  displayType?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  multiple?: Maybe<Scalars['Boolean']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<FieldOption>>>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Repeater = FieldInterface & {
  __typename?: 'Field_Repeater';
  addLabel?: Maybe<Scalars['String']>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s nested fields. */
  fields?: Maybe<Array<Maybe<FieldInterface>>>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  maxRows?: Maybe<Scalars['Int']>;
  minRows?: Maybe<Scalars['Int']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s nested rows. */
  nestedRows?: Maybe<Array<Maybe<RowInterface>>>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Section = FieldInterface & {
  __typename?: 'Field_Section';
  borderColor?: Maybe<Scalars['String']>;
  borderStyle?: Maybe<Scalars['String']>;
  borderWidth?: Maybe<Scalars['Int']>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Signature = FieldInterface & {
  __typename?: 'Field_Signature';
  backgroundColor?: Maybe<Scalars['String']>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  penColor?: Maybe<Scalars['String']>;
  penWeight?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_SingleLineText = FieldInterface & {
  __typename?: 'Field_SingleLineText';
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Boolean']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['Int']>;
  maxType?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['Int']>;
  minType?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Summary = FieldInterface & {
  __typename?: 'Field_Summary';
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Table = FieldInterface & {
  __typename?: 'Field_Table';
  addRowLabel?: Maybe<Scalars['String']>;
  columnType?: Maybe<Scalars['String']>;
  columns?: Maybe<Array<Maybe<KeyValueType>>>;
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** The field’s default value as a string. Some fields have different fields for their default value. */
  defaultValue?: Maybe<Scalars['String']>;
  defaults?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  maxRows?: Maybe<Scalars['Int']>;
  minRows?: Maybe<Scalars['Int']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  static?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};

export type Field_Users = FieldInterface & {
  __typename?: 'Field_Users';
  /** The field’s conditions as a JSON string. */
  conditions?: Maybe<Scalars['String']>;
  /** The field’s container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  defaultUser?: Maybe<UserInterface>;
  defaultValue?: Maybe<Scalars['String']>;
  /** The field’s display name (last portion of the class). */
  displayName?: Maybe<Scalars['String']>;
  /** Whether the field has conditions enabled. */
  enableConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the field has content encryption enabled. */
  enableContentEncryption?: Maybe<Scalars['Boolean']>;
  /** The field’s error message. */
  errorMessage?: Maybe<Scalars['String']>;
  /** The field’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Whether the field should be included in email content. */
  includeInEmail?: Maybe<Scalars['Boolean']>;
  /** The field’s input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The field’s full GQL input type. Useful for mutations. */
  inputTypeName?: Maybe<Scalars['String']>;
  /** The field’s instructions. */
  instructions?: Maybe<Scalars['String']>;
  /** The field’s instructions position. This will be a `verbb\formie\positions` class name. */
  instructionsPosition?: Maybe<Scalars['String']>;
  /** The field’s label position. This will be a `verbb\formie\positions` class name. */
  labelPosition?: Maybe<Scalars['String']>;
  /** The field handle for another field that this value should match exactly. */
  matchField?: Maybe<Scalars['String']>;
  /** The field’s name. */
  name?: Maybe<Scalars['String']>;
  /** The field’s placeholder. */
  placeholder?: Maybe<Scalars['String']>;
  /** The field’s pre-populated value extracted from the query string. */
  prePopulate?: Maybe<Scalars['String']>;
  /** Whether the field is required. */
  required?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  /** The field’s type. */
  type?: Maybe<Scalars['String']>;
  /** The field’s full GQL type. */
  typeName?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UserInterface>>>;
  /** The field’s visibility. */
  visibility?: Maybe<Scalars['String']>;
};


export type Field_UsersDefaultUserArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetUploaders?: InputMaybe<Scalars['Boolean']>;
  authors?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Field_UsersUsersArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetUploaders?: InputMaybe<Scalars['Boolean']>;
  authors?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Contents of a file */
export type FileContents = {
  __typename?: 'FileContents';
  contents?: Maybe<Scalars['String']>;
  filename: Scalars['String'];
};

export type FormIntegrationsType = {
  __typename?: 'FormIntegrationsType';
  /** Whether the integration is enabled. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The integration’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The integration’s name. */
  name?: Maybe<Scalars['String']>;
  /** The integration’s settings as a JSON string. */
  settings?: Maybe<Scalars['String']>;
};

/** This is the interface implemented by all forms. */
export type FormInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** A list of captcha values (name and value) to assist with spam protection. */
  captchas?: Maybe<Array<Maybe<FormieCaptchaType>>>;
  /** The form’s config as JSON. */
  configJson?: Maybe<Scalars['String']>;
  /** A CSRF token (name and value). */
  csrfToken?: Maybe<FormieCsrfTokenType>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The form’s fields. */
  formFields?: Maybe<Array<Maybe<FieldInterface>>>;
  /** The form’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The form’s pages. */
  pages?: Maybe<Array<Maybe<PageInterface>>>;
  /** The form’s rows. */
  rows?: Maybe<Array<Maybe<RowInterface>>>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The form’s settings. */
  settings?: Maybe<FormSettingsType>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The form’s endpoint for sending submissions to, if using POST requests. */
  submissionEndpoint?: Maybe<Scalars['String']>;
  /** The form’s GQL mutation name for submissions to use. */
  submissionMutationName?: Maybe<Scalars['String']>;
  /** The form’s rendered HTML. */
  templateHtml?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all forms. */
export type FormInterface_CountArgs = {
  field: Scalars['String'];
};


/** This is the interface implemented by all forms. */
export type FormInterfaceFormFieldsArgs = {
  includeDisabled?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all forms. */
export type FormInterfaceTemplateHtmlArgs = {
  options?: InputMaybe<Scalars['String']>;
  populateFormValues?: InputMaybe<Scalars['String']>;
};

export type FormSettingsType = {
  __typename?: 'FormSettingsType';
  /** The form’s default instructions position for fields. This will be a `verbb\formie\positions` class name. */
  defaultInstructionsPosition?: Maybe<Scalars['String']>;
  /** The form’s default label position for fields. This will be a `verbb\formie\positions` class name. */
  defaultLabelPosition?: Maybe<Scalars['String']>;
  /** Whether to show the form’s current page title. */
  displayCurrentPageTitle?: Maybe<Scalars['Boolean']>;
  /** Whether to show the form’s title. */
  displayFormTitle?: Maybe<Scalars['Boolean']>;
  /** Whether to show the form’s page progress. */
  displayPageProgress?: Maybe<Scalars['Boolean']>;
  /** Whether to show the form’s page tabs. */
  displayPageTabs?: Maybe<Scalars['Boolean']>;
  /** The form’s submit error message. */
  errorMessageHtml?: Maybe<Scalars['String']>;
  /** The form’s error message position. Either `null`, `top-form` or `bottom-form`. */
  errorMessagePosition?: Maybe<Scalars['String']>;
  /** The form’s enabled integrations. */
  integrations?: Maybe<Array<Maybe<FormIntegrationsType>>>;
  /** The type of loading indicator to use. Either `spinner` or `text`. */
  loadingIndicator?: Maybe<Scalars['String']>;
  /** The form’s loading indicator text. */
  loadingIndicatorText?: Maybe<Scalars['String']>;
  /** The form’s progress bar position. Either `start` or `end`. */
  progressPosition?: Maybe<Scalars['String']>;
  /** The form’s submit action entry (for redirection), if `submitAction` is `entry`. */
  redirectEntry?: Maybe<EntryInterface>;
  /** The form’s submit action redirect URL, resolved depending on `submitAction` being `entry` or `url`. */
  redirectUrl?: Maybe<Scalars['String']>;
  /** Whether to the form should scroll to the top of the page when submitted. */
  scrollToTop?: Maybe<Scalars['Boolean']>;
  /** The form’s submit action. Either `message`, `entry`, `url`, `reload`. */
  submitAction?: Maybe<Scalars['String']>;
  /** Whether to hide the form’s success message. */
  submitActionFormHide?: Maybe<Scalars['Boolean']>;
  /** The form’s submit success message. */
  submitActionMessageHtml?: Maybe<Scalars['String']>;
  /** The form’s submit message position. Either `top-form` or `bottom-form`. */
  submitActionMessagePosition?: Maybe<Scalars['String']>;
  /** The form’s submit success message timeout in seconds. */
  submitActionMessageTimeout?: Maybe<Scalars['Int']>;
  /** The form’s submit redirect option (if in new tab or same tab). Either `same-tab` or `new-tab`. */
  submitActionTab?: Maybe<Scalars['String']>;
  /** The form’s submit method. Either `page-reload` or `ajax`. */
  submitMethod?: Maybe<Scalars['String']>;
  /** Whether to validate the form’s on focus. */
  validationOnFocus?: Maybe<Scalars['Boolean']>;
  /** Whether to validate the form’s on submit. */
  validationOnSubmit?: Maybe<Scalars['Boolean']>;
};


export type FormSettingsTypeRedirectEntryArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};

export type FormieCaptchaType = {
  __typename?: 'FormieCaptchaType';
  /** The captcha handle. */
  handle?: Maybe<Scalars['String']>;
  /** The captcha name. */
  name?: Maybe<Scalars['String']>;
  /** The catpcha value. */
  value?: Maybe<Scalars['String']>;
};

export type FormieCsrfTokenType = {
  __typename?: 'FormieCsrfTokenType';
  /** The CSRF name. */
  name?: Maybe<Scalars['String']>;
  /** The CSRF token. */
  value?: Maybe<Scalars['String']>;
};

/** This is the interface implemented by Imager X. */
export type ImagerTransformedImageInterface = {
  /** Extension of transformed image. */
  extension?: Maybe<Scalars['String']>;
  /** Filename of transformed image. */
  filename?: Maybe<Scalars['String']>;
  /** Height of transformed image. */
  height?: Maybe<Scalars['Int']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Size of transformed image. */
  isNew?: Maybe<Scalars['Boolean']>;
  /** Mime type of transformed image. */
  mimeType?: Maybe<Scalars['String']>;
  /** Path to transformed image. */
  path?: Maybe<Scalars['String']>;
  /** Size of transformed image. */
  size?: Maybe<Scalars['Int']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** URL for transformed image. */
  url?: Maybe<Scalars['String']>;
  /** Width of transformed image. */
  width?: Maybe<Scalars['Int']>;
};

export type KeyValueType = {
  __typename?: 'KeyValueType';
  handle?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

/** This is the interface implemented by all matrix blocks. */
export type MatrixBlockInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all matrix blocks. */
export type MatrixBlockInterface_CountArgs = {
  field: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ping?: Maybe<Scalars['String']>;
};

export type NodeCustomAttribute = {
  __typename?: 'NodeCustomAttribute';
  attribute?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** This is the interface implemented by all nodes. */
export type NodeInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The node’s children. Accepts the same arguments as the `nodes` query. */
  children?: Maybe<Array<Maybe<NodeInterface>>>;
  /** Any additional classes for the node. */
  classes?: Maybe<Scalars['String']>;
  /** Any additional custom attributes for the node. */
  customAttributes?: Maybe<Array<Maybe<NodeCustomAttribute>>>;
  /** Any additional data for the node. */
  data?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The element the node links to. */
  element?: Maybe<ElementInterface>;
  /** The ID of the element this node is linked to. */
  elementId?: Maybe<Scalars['Int']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']>;
  /** The handle of the navigation this node belongs to. */
  navHandle?: Maybe<Scalars['String']>;
  /** The ID of the navigation this node belongs to. */
  navId?: Maybe<Scalars['Int']>;
  /** The name of the navigation this node belongs to. */
  navName?: Maybe<Scalars['String']>;
  /** Whether this node should open in a new window. */
  newWindow?: Maybe<Scalars['String']>;
  /** The node’s URI */
  nodeUri?: Maybe<Scalars['String']>;
  /** The node’s parent. */
  parent?: Maybe<NodeInterface>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The type of node this is. */
  type?: Maybe<Scalars['String']>;
  /** The display name for the type of node this is. */
  typeLabel?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The node’s full URL */
  url?: Maybe<Scalars['String']>;
  /** The URL for this navigation item. */
  urlSuffix?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all nodes. */
export type NodeInterface_CountArgs = {
  field: Scalars['String'];
};


/** This is the interface implemented by all nodes. */
export type NodeInterfaceChildrenArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nav?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navHandle?: InputMaybe<Scalars['String']>;
  navId?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};

/** This is the interface implemented by all pages. */
export type PageInterface = {
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The page’s name. */
  name?: Maybe<Scalars['String']>;
  /** The page’s fields. */
  pageFields?: Maybe<Array<Maybe<FieldInterface>>>;
  /** The page’s rows. */
  rows?: Maybe<Array<Maybe<RowInterface>>>;
  /** The page’s settings, including buttons. */
  settings?: Maybe<PageSettingsInterface>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all pages. */
export type PageInterfacePageFieldsArgs = {
  includeDisabled?: InputMaybe<Scalars['Boolean']>;
};

/** This is the interface implemented by all pages. */
export type PageSettingsInterface = {
  /** The page’s back button label. */
  backButtonLabel?: Maybe<Scalars['String']>;
  /** The page’s button (back and submit) positions. */
  buttonsPosition?: Maybe<Scalars['String']>;
  /** The page’s button (back and submit) container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The page’s button (back and submit) CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** Whether the page’s next button has conditions enabled, for multi-page forms. */
  enableNextButtonConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the page has conditions enabled. */
  enablePageConditions?: Maybe<Scalars['Boolean']>;
  /** The page’s button (back and submit) input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The page’s conditions for whether to show the next button, for multi-page forms as a JSON string. */
  nextButtonConditions?: Maybe<Scalars['String']>;
  /** The page’s conditions as a JSON string. */
  pageConditions?: Maybe<Scalars['String']>;
  /** The page’s draft button label. */
  saveButtonLabel?: Maybe<Scalars['String']>;
  /** Whether to show the page’s back button. */
  showBackButton?: Maybe<Scalars['Boolean']>;
  /** Whether to show the page’s draft button. */
  showSaveButton?: Maybe<Scalars['Boolean']>;
  /** The page’s submit button label. */
  submitButtonLabel?: Maybe<Scalars['String']>;
};

export type PageSettingsType = PageSettingsInterface & {
  __typename?: 'PageSettingsType';
  /** The page’s back button label. */
  backButtonLabel?: Maybe<Scalars['String']>;
  /** The page’s button (back and submit) positions. */
  buttonsPosition?: Maybe<Scalars['String']>;
  /** The page’s button (back and submit) container attributes. */
  containerAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The page’s button (back and submit) CSS classes. */
  cssClasses?: Maybe<Scalars['String']>;
  /** Whether the page’s next button has conditions enabled, for multi-page forms. */
  enableNextButtonConditions?: Maybe<Scalars['Boolean']>;
  /** Whether the page has conditions enabled. */
  enablePageConditions?: Maybe<Scalars['Boolean']>;
  /** The page’s button (back and submit) input attributes. */
  inputAttributes?: Maybe<Array<Maybe<FieldAttribute>>>;
  /** The page’s conditions for whether to show the next button, for multi-page forms as a JSON string. */
  nextButtonConditions?: Maybe<Scalars['String']>;
  /** The page’s conditions as a JSON string. */
  pageConditions?: Maybe<Scalars['String']>;
  /** The page’s draft button label. */
  saveButtonLabel?: Maybe<Scalars['String']>;
  /** Whether to show the page’s back button. */
  showBackButton?: Maybe<Scalars['Boolean']>;
  /** Whether to show the page’s draft button. */
  showSaveButton?: Maybe<Scalars['Boolean']>;
  /** The page’s submit button label. */
  submitButtonLabel?: Maybe<Scalars['String']>;
};

export type PageType = PageInterface & {
  __typename?: 'PageType';
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The page’s name. */
  name?: Maybe<Scalars['String']>;
  /** The page’s fields. */
  pageFields?: Maybe<Array<Maybe<FieldInterface>>>;
  /** The page’s rows. */
  rows?: Maybe<Array<Maybe<RowInterface>>>;
  /** The page’s settings, including buttons. */
  settings?: Maybe<PageSettingsInterface>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
};


export type PageTypePageFieldsArgs = {
  includeDisabled?: InputMaybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  /** This query is used to query for a single address. */
  address?: Maybe<AddressInterface>;
  /** This query is used to return the number of addresses. */
  addressCount: Scalars['Int'];
  /** This query is used to query for addresses. */
  addresses?: Maybe<Array<Maybe<AddressInterface>>>;
  /** This query is used to query for a single asset. */
  asset?: Maybe<AssetInterface>;
  /** This query is used to return the number of assets. */
  assetCount: Scalars['Int'];
  /** This query is used to query for assets. */
  assets?: Maybe<Array<Maybe<AssetInterface>>>;
  /** This query is used to query for entries. */
  entries?: Maybe<Array<Maybe<EntryInterface>>>;
  /** This query is used to query for a single entry. */
  entry?: Maybe<EntryInterface>;
  /** This query is used to return the number of entries. */
  entryCount: Scalars['Int'];
  /** Entries within the errorPages section. */
  errorPagesEntries?: Maybe<Array<Maybe<ErrorPagesSectionEntryUnion>>>;
  /** This query is used to query for a single form. */
  formieForm?: Maybe<FormInterface>;
  /** This query is used to return the number of forms. */
  formieFormCount: Scalars['Int'];
  /** This query is used to query for forms. */
  formieForms?: Maybe<Array<Maybe<FormInterface>>>;
  /** This query is used to query for a single submission. */
  formieSubmission?: Maybe<SubmissionInterface>;
  /** This query is used to return the number of submissions. */
  formieSubmissionCount: Scalars['Int'];
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
  ping?: Maybe<Scalars['String']>;
  /** This query is used to query for SEOmatic meta data. */
  seomatic?: Maybe<SeomaticInterface>;
  staticMessages?: Maybe<Array<Maybe<StaticMessagesType>>>;
  /** This query is used to query for a single user. */
  user?: Maybe<UserInterface>;
  /** This query is used to return the number of users. */
  userCount: Scalars['Int'];
  /** This query is used to query for users. */
  users?: Maybe<Array<Maybe<UserInterface>>>;
};


export type QueryAddressArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  archived?: InputMaybe<Scalars['Boolean']>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAddressCountArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  archived?: InputMaybe<Scalars['Boolean']>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAddressesArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  archived?: InputMaybe<Scalars['Boolean']>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAssetArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAssetCountArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAssetsArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type QueryEntryArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type QueryEntryCountArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type QueryErrorPagesEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFormieFormArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  handle?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFormieFormCountArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  handle?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFormieFormsArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  handle?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFormieSubmissionArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  form?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  isIncomplete?: InputMaybe<Scalars['Boolean']>;
  isSpam?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFormieSubmissionCountArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  form?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  isIncomplete?: InputMaybe<Scalars['Boolean']>;
  isSpam?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFormieSubmissionsArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  form?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  isIncomplete?: InputMaybe<Scalars['Boolean']>;
  isSpam?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryHomeEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type QueryImagerTransformArgs = {
  id?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};


export type QueryNavigationNodeArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nav?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navHandle?: InputMaybe<Scalars['String']>;
  navId?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNavigationNodesArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nav?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navHandle?: InputMaybe<Scalars['String']>;
  navId?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNewsEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPagesEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySeomaticArgs = {
  asArray?: InputMaybe<Scalars['Boolean']>;
  environment?: InputMaybe<SeomaticEnvironment>;
  site?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  uri?: InputMaybe<Scalars['String']>;
};


export type QueryStaticMessagesArgs = {
  category?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUserArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetUploaders?: InputMaybe<Scalars['Boolean']>;
  authors?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUserCountArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetUploaders?: InputMaybe<Scalars['Boolean']>;
  authors?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetUploaders?: InputMaybe<Scalars['Boolean']>;
  authors?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** This is the interface implemented by all rows. */
export type RowInterface = {
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The row’s fields. */
  rowFields?: Maybe<Array<Maybe<FieldInterface>>>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all rows. */
export type RowInterfaceRowFieldsArgs = {
  includeDisabled?: InputMaybe<Scalars['Boolean']>;
};

export type RowType = RowInterface & {
  __typename?: 'RowType';
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The row’s fields. */
  rowFields?: Maybe<Array<Maybe<FieldInterface>>>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
};


export type RowTypeRowFieldsArgs = {
  includeDisabled?: InputMaybe<Scalars['Boolean']>;
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

/** This is the interface implemented by SEOmatic. */
export type SeomaticInterface = {
  /**
   * The FrontendTemplateContainer SEOmatic container.
   * @deprecated This query is deprecated and will be removed in the future. You should use `frontendTemplates` instead.
   */
  frontendTemplateContainer?: Maybe<Scalars['String']>;
  frontendTemplates?: Maybe<Array<Maybe<FileContents>>>;
  /** The MetaJsonLdContainer SEOmatic container. */
  metaJsonLdContainer?: Maybe<Scalars['String']>;
  /** The MetaLinkContainer SEOmatic container. */
  metaLinkContainer?: Maybe<Scalars['String']>;
  /** The MetaScriptContainer SEOmatic container. */
  metaScriptContainer?: Maybe<Scalars['String']>;
  /** The MetaSiteVarsContainer SEOmatic container. */
  metaSiteVarsContainer?: Maybe<Scalars['String']>;
  /** The MetaTagContainer SEOmatic container. */
  metaTagContainer?: Maybe<Scalars['String']>;
  /** The MetaTitleContainer SEOmatic container. */
  metaTitleContainer?: Maybe<Scalars['String']>;
  sitemapIndexes?: Maybe<Array<Maybe<FileContents>>>;
  sitemapStyles?: Maybe<FileContents>;
  sitemaps?: Maybe<Array<Maybe<FileContents>>>;
};


/** This is the interface implemented by SEOmatic. */
export type SeomaticInterfaceFrontendTemplatesArgs = {
  site?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<SeomaticFrontendTemplate>;
};


/** This is the interface implemented by SEOmatic. */
export type SeomaticInterfaceSitemapIndexesArgs = {
  site?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
};


/** This is the interface implemented by SEOmatic. */
export type SeomaticInterfaceSitemapsArgs = {
  filename?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  sourceBundleHandle?: InputMaybe<Scalars['String']>;
  sourceBundleType?: InputMaybe<Scalars['String']>;
};

/** This entity has all the SEOmatic fields */
export type SeomaticType = SeomaticInterface & {
  __typename?: 'SeomaticType';
  /**
   * The FrontendTemplateContainer SEOmatic container.
   * @deprecated This query is deprecated and will be removed in the future. You should use `frontendTemplates` instead.
   */
  frontendTemplateContainer?: Maybe<Scalars['String']>;
  frontendTemplates?: Maybe<Array<Maybe<FileContents>>>;
  /** The MetaJsonLdContainer SEOmatic container. */
  metaJsonLdContainer?: Maybe<Scalars['String']>;
  /** The MetaLinkContainer SEOmatic container. */
  metaLinkContainer?: Maybe<Scalars['String']>;
  /** The MetaScriptContainer SEOmatic container. */
  metaScriptContainer?: Maybe<Scalars['String']>;
  /** The MetaSiteVarsContainer SEOmatic container. */
  metaSiteVarsContainer?: Maybe<Scalars['String']>;
  /** The MetaTagContainer SEOmatic container. */
  metaTagContainer?: Maybe<Scalars['String']>;
  /** The MetaTitleContainer SEOmatic container. */
  metaTitleContainer?: Maybe<Scalars['String']>;
  sitemapIndexes?: Maybe<Array<Maybe<FileContents>>>;
  sitemapStyles?: Maybe<FileContents>;
  sitemaps?: Maybe<Array<Maybe<FileContents>>>;
};


/** This entity has all the SEOmatic fields */
export type SeomaticTypeFrontendTemplatesArgs = {
  site?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<SeomaticFrontendTemplate>;
};


/** This entity has all the SEOmatic fields */
export type SeomaticTypeSitemapIndexesArgs = {
  site?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
};


/** This entity has all the SEOmatic fields */
export type SeomaticTypeSitemapsArgs = {
  filename?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  sourceBundleHandle?: InputMaybe<Scalars['String']>;
  sourceBundleType?: InputMaybe<Scalars['String']>;
};

/** This is the interface implemented by static messages. */
export type StaticMessagesType = {
  __typename?: 'StaticMessagesType';
  category?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

/** This is the interface implemented by all submissions. */
export type SubmissionInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The submission’s IP Address. */
  ipAddress?: Maybe<Scalars['String']>;
  /** Whether the submission is incomplete. */
  isIncomplete?: Maybe<Scalars['Boolean']>;
  /** Whether the submission is spam. */
  isSpam?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The submission’s spam type. */
  spamClass?: Maybe<Scalars['String']>;
  /** The submission’s spam reason. */
  spamReason?: Maybe<Scalars['String']>;
  /** The submission’s status. */
  status?: Maybe<Scalars['String']>;
  /** The submission’s status ID. */
  statusId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all submissions. */
export type SubmissionInterface_CountArgs = {
  field: Scalars['String'];
};

export type TagCriteriaInput = {
  /** Narrows the query results to only elements that have been archived. */
  archived?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the tag groups the tags belong to per the group’s handles. */
  group?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the tag groups the tags belong to, per the groups’ IDs. */
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
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
  search?: InputMaybe<Scalars['String']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User = ElementInterface & UserInterface & {
  __typename?: 'User';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** The user’s addresses. */
  addresses?: Maybe<Array<Maybe<AddressInterface>>>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The user’s email. */
  email?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The user’s first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The user’s first name or username. */
  friendlyName?: Maybe<Scalars['String']>;
  /** The user’s full name. */
  fullName?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The user’s last name. */
  lastName?: Maybe<Scalars['String']>;
  /** The user’s full name or username. */
  name: Scalars['String'];
  /** The user’s photo. */
  photo?: Maybe<AssetInterface>;
  /** The user’s preferences. */
  preferences: Scalars['String'];
  /** The user’s preferred language. */
  preferredLanguage?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The username. */
  username?: Maybe<Scalars['String']>;
};


export type User_CountArgs = {
  field: Scalars['String'];
};


export type UserAddressesArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  archived?: InputMaybe<Scalars['Boolean']>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UserCriteriaInput = {
  /** Narrows the query results to only elements that have been archived. */
  archived?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on whether the users have uploaded any assets. */
  assetUploaders?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on whether the users are listed as the author of any entries. */
  authors?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the users’ email addresses. */
  email?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the users’ first names. */
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the users’ full names. */
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the user group the users belong to. */
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the user group the users belong to, per the groups’ IDs. */
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to only users that have (or don’t have) a user photo. */
  hasPhoto?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the users’ last names. */
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
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
  search?: InputMaybe<Scalars['String']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the users’ usernames. */
  username?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** This is the interface implemented by all users. */
export type UserInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** The user’s addresses. */
  addresses?: Maybe<Array<Maybe<AddressInterface>>>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The user’s email. */
  email?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The user’s first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The user’s first name or username. */
  friendlyName?: Maybe<Scalars['String']>;
  /** The user’s full name. */
  fullName?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The user’s last name. */
  lastName?: Maybe<Scalars['String']>;
  /** The user’s full name or username. */
  name: Scalars['String'];
  /** The user’s photo. */
  photo?: Maybe<AssetInterface>;
  /** The user’s preferences. */
  preferences: Scalars['String'];
  /** The user’s preferred language. */
  preferredLanguage?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The username. */
  username?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all users. */
export type UserInterface_CountArgs = {
  field: Scalars['String'];
};


/** This is the interface implemented by all users. */
export type UserInterfaceAddressesArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  archived?: InputMaybe<Scalars['Boolean']>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BuilderContent_MatrixField = BuilderContent_BlockCode_BlockType | BuilderContent_BlockDivider_BlockType | BuilderContent_BlockImageGallery_BlockType | BuilderContent_BlockImageGridCalculated_BlockType | BuilderContent_BlockImageGrid_BlockType | BuilderContent_BlockImageSlider_BlockType | BuilderContent_BlockImage_BlockType | BuilderContent_BlockQuote_BlockType | BuilderContent_BlockSection_BlockType | BuilderContent_BlockSpacer_BlockType | BuilderContent_BlockTextFloatingImage_BlockType | BuilderContent_BlockText_BlockType | BuilderContent_BlockVideoYoutube_BlockType;

export type BuilderContent_BlockCode_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'builderContent_blockCode_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  snippet?: Maybe<Scalars['String']>;
  snippetCollapsed?: Maybe<Scalars['Boolean']>;
  snippetLanguage?: Maybe<Scalars['String']>;
  snippetName?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type BuilderContent_BlockCode_BlockType_CountArgs = {
  field: Scalars['String'];
};


export type BuilderContent_BlockCode_BlockTypeSnippetLanguageArgs = {
  label?: InputMaybe<Scalars['Boolean']>;
};

export type BuilderContent_BlockDivider_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'builderContent_blockDivider_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  dividerVariant?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type BuilderContent_BlockDivider_BlockType_CountArgs = {
  field: Scalars['String'];
};


export type BuilderContent_BlockDivider_BlockTypeDividerVariantArgs = {
  label?: InputMaybe<Scalars['Boolean']>;
};

export type BuilderContent_BlockImageGallery_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'builderContent_blockImageGallery_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  images: Array<Maybe<AssetInterface>>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type BuilderContent_BlockImageGallery_BlockType_CountArgs = {
  field: Scalars['String'];
};


export type BuilderContent_BlockImageGallery_BlockTypeImagesArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BuilderContent_BlockImageGridCalculated_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'builderContent_blockImageGridCalculated_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  images: Array<Maybe<AssetInterface>>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  showImageCaption?: Maybe<Scalars['Boolean']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type BuilderContent_BlockImageGridCalculated_BlockType_CountArgs = {
  field: Scalars['String'];
};


export type BuilderContent_BlockImageGridCalculated_BlockTypeImagesArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BuilderContent_BlockImageGrid_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'builderContent_blockImageGrid_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  imageColumns?: Maybe<Scalars['String']>;
  imageTransform?: Maybe<Scalars['String']>;
  images: Array<Maybe<AssetInterface>>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  showImageCaption?: Maybe<Scalars['Boolean']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type BuilderContent_BlockImageGrid_BlockType_CountArgs = {
  field: Scalars['String'];
};


export type BuilderContent_BlockImageGrid_BlockTypeImageColumnsArgs = {
  label?: InputMaybe<Scalars['Boolean']>;
};


export type BuilderContent_BlockImageGrid_BlockTypeImageTransformArgs = {
  label?: InputMaybe<Scalars['Boolean']>;
};


export type BuilderContent_BlockImageGrid_BlockTypeImagesArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BuilderContent_BlockImageSlider_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'builderContent_blockImageSlider_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  imageTransform?: Maybe<Scalars['String']>;
  images: Array<Maybe<AssetInterface>>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type BuilderContent_BlockImageSlider_BlockType_CountArgs = {
  field: Scalars['String'];
};


export type BuilderContent_BlockImageSlider_BlockTypeImageTransformArgs = {
  label?: InputMaybe<Scalars['Boolean']>;
};


export type BuilderContent_BlockImageSlider_BlockTypeImagesArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BuilderContent_BlockImage_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'builderContent_blockImage_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  image: Array<Maybe<AssetInterface>>;
  imageTransform?: Maybe<Scalars['String']>;
  imageWidth?: Maybe<Scalars['String']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  showImageCaption?: Maybe<Scalars['Boolean']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type BuilderContent_BlockImage_BlockType_CountArgs = {
  field: Scalars['String'];
};


export type BuilderContent_BlockImage_BlockTypeImageArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type BuilderContent_BlockImage_BlockTypeImageTransformArgs = {
  label?: InputMaybe<Scalars['Boolean']>;
};


export type BuilderContent_BlockImage_BlockTypeImageWidthArgs = {
  label?: InputMaybe<Scalars['Boolean']>;
};

export type BuilderContent_BlockQuote_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'builderContent_blockQuote_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  quote?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
  sourceSubline?: Maybe<Scalars['String']>;
  sourceUrl?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type BuilderContent_BlockQuote_BlockType_CountArgs = {
  field: Scalars['String'];
};

export type BuilderContent_BlockSection_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'builderContent_blockSection_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  sectionBackgroundColor?: Maybe<Scalars['String']>;
  sectionPaddingVertical?: Maybe<Scalars['String']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  spaceBetweenBlocks?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type BuilderContent_BlockSection_BlockType_CountArgs = {
  field: Scalars['String'];
};


export type BuilderContent_BlockSection_BlockTypeSectionBackgroundColorArgs = {
  label?: InputMaybe<Scalars['Boolean']>;
};


export type BuilderContent_BlockSection_BlockTypeSectionPaddingVerticalArgs = {
  label?: InputMaybe<Scalars['Boolean']>;
};


export type BuilderContent_BlockSection_BlockTypeSpaceBetweenBlocksArgs = {
  label?: InputMaybe<Scalars['Boolean']>;
};

export type BuilderContent_BlockSpacer_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'builderContent_blockSpacer_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  spacerVariant?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type BuilderContent_BlockSpacer_BlockType_CountArgs = {
  field: Scalars['String'];
};


export type BuilderContent_BlockSpacer_BlockTypeSpacerVariantArgs = {
  label?: InputMaybe<Scalars['Boolean']>;
};

export type BuilderContent_BlockTextFloatingImage_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'builderContent_blockTextFloatingImage_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  image: Array<Maybe<AssetInterface>>;
  imagePosition?: Maybe<Scalars['Boolean']>;
  imageTransform?: Maybe<Scalars['String']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  showImageCaption?: Maybe<Scalars['Boolean']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type BuilderContent_BlockTextFloatingImage_BlockType_CountArgs = {
  field: Scalars['String'];
};


export type BuilderContent_BlockTextFloatingImage_BlockTypeImageArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type BuilderContent_BlockTextFloatingImage_BlockTypeImageTransformArgs = {
  label?: InputMaybe<Scalars['Boolean']>;
};

export type BuilderContent_BlockText_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'builderContent_blockText_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type BuilderContent_BlockText_BlockType_CountArgs = {
  field: Scalars['String'];
};

export type BuilderContent_BlockVideoYoutube_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'builderContent_blockVideoYoutube_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  autoplay?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  loop?: Maybe<Scalars['Boolean']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  videoId?: Maybe<Scalars['String']>;
  videoWidth?: Maybe<Scalars['String']>;
};


export type BuilderContent_BlockVideoYoutube_BlockType_CountArgs = {
  field: Scalars['String'];
};


export type BuilderContent_BlockVideoYoutube_BlockTypeVideoWidthArgs = {
  label?: InputMaybe<Scalars['Boolean']>;
};

export type Contact_Form = ElementInterface & FormInterface & {
  __typename?: 'contact_Form';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** A list of captcha values (name and value) to assist with spam protection. */
  captchas?: Maybe<Array<Maybe<FormieCaptchaType>>>;
  /** The form’s config as JSON. */
  configJson?: Maybe<Scalars['String']>;
  /** A CSRF token (name and value). */
  csrfToken?: Maybe<FormieCsrfTokenType>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The form’s fields. */
  formFields?: Maybe<Array<Maybe<FieldInterface>>>;
  /** The form’s handle. */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The form’s pages. */
  pages?: Maybe<Array<Maybe<PageInterface>>>;
  /** The form’s rows. */
  rows?: Maybe<Array<Maybe<RowInterface>>>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The form’s settings. */
  settings?: Maybe<FormSettingsType>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The form’s endpoint for sending submissions to, if using POST requests. */
  submissionEndpoint?: Maybe<Scalars['String']>;
  /** The form’s GQL mutation name for submissions to use. */
  submissionMutationName?: Maybe<Scalars['String']>;
  /** The form’s rendered HTML. */
  templateHtml?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type Contact_Form_CountArgs = {
  field: Scalars['String'];
};


export type Contact_FormFormFieldsArgs = {
  includeDisabled?: InputMaybe<Scalars['Boolean']>;
};


export type Contact_FormTemplateHtmlArgs = {
  options?: InputMaybe<Scalars['String']>;
  populateFormValues?: InputMaybe<Scalars['String']>;
};

export type Contact_Submission = ElementInterface & SubmissionInterface & {
  __typename?: 'contact_Submission';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  emailAddress?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The submission’s IP Address. */
  ipAddress?: Maybe<Scalars['String']>;
  /** Whether the submission is incomplete. */
  isIncomplete?: Maybe<Scalars['Boolean']>;
  /** Whether the submission is spam. */
  isSpam?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The submission’s spam type. */
  spamClass?: Maybe<Scalars['String']>;
  /** The submission’s spam reason. */
  spamReason?: Maybe<Scalars['String']>;
  /** The submission’s status. */
  status?: Maybe<Scalars['String']>;
  /** The submission’s status ID. */
  statusId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  yourName?: Maybe<Scalars['String']>;
};


export type Contact_Submission_CountArgs = {
  field: Scalars['String'];
};

export type ErrorPagesSectionEntryUnion = ErrorPages_Error_Entry;

export type ErrorPages_Error_Entry = ElementInterface & EntryInterface & {
  __typename?: 'errorPages_error_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The entry’s author. */
  author?: Maybe<UserInterface>;
  /** The ID of the author of this entry. */
  authorId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The current revision for the entry. */
  currentRevision?: Maybe<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The creator of a given draft. */
  draftCreator?: Maybe<UserInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']>;
  /** The drafts for the entry. */
  drafts?: Maybe<Array<Maybe<EntryInterface>>>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  entryCustomTitle?: Maybe<Scalars['String']>;
  entryImage: Array<Maybe<AssetInterface>>;
  entrySeo?: Maybe<Scalars['String']>;
  entryShortDescription?: Maybe<Scalars['String']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The creator of a given revision. */
  revisionCreator?: Maybe<UserInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']>;
  /** The revisions for the entry. */
  revisions?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int'];
  /** This query is used to query for SEOmatic meta data. */
  seomatic?: Maybe<SeomaticInterface>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']>;
};


export type ErrorPages_Error_Entry_CountArgs = {
  field: Scalars['String'];
};


export type ErrorPages_Error_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type ErrorPages_Error_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type ErrorPages_Error_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type ErrorPages_Error_EntryDraftsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type ErrorPages_Error_EntryEntryImageArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ErrorPages_Error_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type ErrorPages_Error_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type ErrorPages_Error_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type ErrorPages_Error_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type ErrorPages_Error_EntryRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type ErrorPages_Error_EntrySeomaticArgs = {
  asArray?: InputMaybe<Scalars['Boolean']>;
  environment?: InputMaybe<SeomaticEnvironment>;
  site?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  uri?: InputMaybe<Scalars['String']>;
};

export type Files_Asset = AssetInterface & ElementInterface & {
  __typename?: 'files_Asset';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Alternative text for the asset. */
  alt?: Maybe<Scalars['String']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  assetCaption?: Maybe<Scalars['String']>;
  assetTitle?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the asset file was last modified. */
  dateModified?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The file extension for the asset file. */
  extension: Scalars['String'];
  /** The filename of the asset file. */
  filename: Scalars['String'];
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  focalPoint?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The ID of the folder that the asset belongs to. */
  folderId: Scalars['Int'];
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint: Scalars['Boolean'];
  /** The height in pixels or null if it’s not an image. */
  height?: Maybe<Scalars['Int']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Returns a list of images produced from the named Imager X transform. */
  imagerTransform?: Maybe<Array<Maybe<ImagerTransformedImageInterface>>>;
  /** An `<img>` tag based on this asset. */
  img?: Maybe<Scalars['String']>;
  /** The file kind. */
  kind: Scalars['String'];
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The file’s MIME type, if it can be determined. */
  mimeType?: Maybe<Scalars['String']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  path: Scalars['String'];
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The file size in bytes. */
  size?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  srcset?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The user who first added this asset (if known). */
  uploader?: Maybe<UserInterface>;
  /** The ID of the user who first added this asset (if known). */
  uploaderId?: Maybe<Scalars['Int']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url?: Maybe<Scalars['String']>;
  /** The ID of the volume that the asset belongs to. */
  volumeId?: Maybe<Scalars['Int']>;
  /** The width in pixels or null if it’s not an image. */
  width?: Maybe<Scalars['Int']>;
};


export type Files_Asset_CountArgs = {
  field: Scalars['String'];
};


export type Files_AssetHeightArgs = {
  format?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  immediately?: InputMaybe<Scalars['Boolean']>;
  interlace?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type Files_AssetImagerTransformArgs = {
  transform?: InputMaybe<Scalars['String']>;
};


export type Files_AssetNextArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Files_AssetPrevArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Files_AssetSrcsetArgs = {
  sizes: Array<Scalars['String']>;
};


export type Files_AssetUploaderArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetUploaders?: InputMaybe<Scalars['Boolean']>;
  authors?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Files_AssetUrlArgs = {
  format?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  immediately?: InputMaybe<Scalars['Boolean']>;
  interlace?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type Files_AssetWidthArgs = {
  format?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  immediately?: InputMaybe<Scalars['Boolean']>;
  interlace?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type HomeSectionEntryUnion = Home_Home_Entry;

export type Home_Home_Entry = ElementInterface & EntryInterface & {
  __typename?: 'home_home_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The entry’s author. */
  author?: Maybe<UserInterface>;
  /** The ID of the author of this entry. */
  authorId?: Maybe<Scalars['Int']>;
  builderContent: Array<Maybe<BuilderContent_MatrixField>>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The current revision for the entry. */
  currentRevision?: Maybe<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The creator of a given draft. */
  draftCreator?: Maybe<UserInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']>;
  /** The drafts for the entry. */
  drafts?: Maybe<Array<Maybe<EntryInterface>>>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  entryCustomTitle?: Maybe<Scalars['String']>;
  entryImage: Array<Maybe<AssetInterface>>;
  entrySeo?: Maybe<Scalars['String']>;
  entryShortDescription?: Maybe<Scalars['String']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The creator of a given revision. */
  revisionCreator?: Maybe<UserInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']>;
  /** The revisions for the entry. */
  revisions?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int'];
  /** This query is used to query for SEOmatic meta data. */
  seomatic?: Maybe<SeomaticInterface>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']>;
};


export type Home_Home_Entry_CountArgs = {
  field: Scalars['String'];
};


export type Home_Home_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Home_Home_EntryBuilderContentArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Home_Home_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Home_Home_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Home_Home_EntryDraftsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Home_Home_EntryEntryImageArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Home_Home_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Home_Home_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Home_Home_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Home_Home_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Home_Home_EntryRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Home_Home_EntrySeomaticArgs = {
  asArray?: InputMaybe<Scalars['Boolean']>;
  environment?: InputMaybe<SeomaticEnvironment>;
  site?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  uri?: InputMaybe<Scalars['String']>;
};

/** This entity has all the Imager X transform image interface fields. */
export type Imagerx = ImagerTransformedImageInterface & {
  __typename?: 'imagerx';
  /** Extension of transformed image. */
  extension?: Maybe<Scalars['String']>;
  /** Filename of transformed image. */
  filename?: Maybe<Scalars['String']>;
  /** Height of transformed image. */
  height?: Maybe<Scalars['Int']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Size of transformed image. */
  isNew?: Maybe<Scalars['Boolean']>;
  /** Mime type of transformed image. */
  mimeType?: Maybe<Scalars['String']>;
  /** Path to transformed image. */
  path?: Maybe<Scalars['String']>;
  /** Size of transformed image. */
  size?: Maybe<Scalars['Int']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** URL for transformed image. */
  url?: Maybe<Scalars['String']>;
  /** Width of transformed image. */
  width?: Maybe<Scalars['Int']>;
};

export type Images_Asset = AssetInterface & ElementInterface & {
  __typename?: 'images_Asset';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Alternative text for the asset. */
  alt?: Maybe<Scalars['String']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  assetCaption?: Maybe<Scalars['String']>;
  assetSource?: Maybe<Scalars['String']>;
  assetSourceUrl?: Maybe<Scalars['String']>;
  assetTitle?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the asset file was last modified. */
  dateModified?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The file extension for the asset file. */
  extension: Scalars['String'];
  /** The filename of the asset file. */
  filename: Scalars['String'];
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  focalPoint?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The ID of the folder that the asset belongs to. */
  folderId: Scalars['Int'];
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint: Scalars['Boolean'];
  /** The height in pixels or null if it’s not an image. */
  height?: Maybe<Scalars['Int']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Returns a list of images produced from the named Imager X transform. */
  imagerTransform?: Maybe<Array<Maybe<ImagerTransformedImageInterface>>>;
  /** An `<img>` tag based on this asset. */
  img?: Maybe<Scalars['String']>;
  /** The file kind. */
  kind: Scalars['String'];
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The file’s MIME type, if it can be determined. */
  mimeType?: Maybe<Scalars['String']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  path: Scalars['String'];
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The file size in bytes. */
  size?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  srcset?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The user who first added this asset (if known). */
  uploader?: Maybe<UserInterface>;
  /** The ID of the user who first added this asset (if known). */
  uploaderId?: Maybe<Scalars['Int']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url?: Maybe<Scalars['String']>;
  /** The ID of the volume that the asset belongs to. */
  volumeId?: Maybe<Scalars['Int']>;
  /** The width in pixels or null if it’s not an image. */
  width?: Maybe<Scalars['Int']>;
};


export type Images_Asset_CountArgs = {
  field: Scalars['String'];
};


export type Images_AssetHeightArgs = {
  format?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  immediately?: InputMaybe<Scalars['Boolean']>;
  interlace?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type Images_AssetImagerTransformArgs = {
  transform?: InputMaybe<Scalars['String']>;
};


export type Images_AssetNextArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Images_AssetPrevArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Images_AssetSrcsetArgs = {
  sizes: Array<Scalars['String']>;
};


export type Images_AssetUploaderArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetUploaders?: InputMaybe<Scalars['Boolean']>;
  authors?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Images_AssetUrlArgs = {
  format?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  immediately?: InputMaybe<Scalars['Boolean']>;
  interlace?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type Images_AssetWidthArgs = {
  format?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  immediately?: InputMaybe<Scalars['Boolean']>;
  interlace?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type NavigationMain_Node = ElementInterface & NodeInterface & {
  __typename?: 'navigationMain_Node';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The node’s children. Accepts the same arguments as the `nodes` query. */
  children?: Maybe<Array<Maybe<NodeInterface>>>;
  /** Any additional classes for the node. */
  classes?: Maybe<Scalars['String']>;
  /** Any additional custom attributes for the node. */
  customAttributes?: Maybe<Array<Maybe<NodeCustomAttribute>>>;
  /** Any additional data for the node. */
  data?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The element the node links to. */
  element?: Maybe<ElementInterface>;
  /** The ID of the element this node is linked to. */
  elementId?: Maybe<Scalars['Int']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']>;
  /** The handle of the navigation this node belongs to. */
  navHandle?: Maybe<Scalars['String']>;
  /** The ID of the navigation this node belongs to. */
  navId?: Maybe<Scalars['Int']>;
  /** The name of the navigation this node belongs to. */
  navName?: Maybe<Scalars['String']>;
  /** Whether this node should open in a new window. */
  newWindow?: Maybe<Scalars['String']>;
  /** The node’s URI */
  nodeUri?: Maybe<Scalars['String']>;
  /** The node’s parent. */
  parent?: Maybe<NodeInterface>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The type of node this is. */
  type?: Maybe<Scalars['String']>;
  /** The display name for the type of node this is. */
  typeLabel?: Maybe<Scalars['String']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The node’s full URL */
  url?: Maybe<Scalars['String']>;
  /** The URL for this navigation item. */
  urlSuffix?: Maybe<Scalars['String']>;
};


export type NavigationMain_Node_CountArgs = {
  field: Scalars['String'];
};


export type NavigationMain_NodeChildrenArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nav?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navHandle?: InputMaybe<Scalars['String']>;
  navId?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};

export type NewsSectionEntryUnion = News_ContentBuilder_Entry;

export type News_ContentBuilder_Entry = ElementInterface & EntryInterface & {
  __typename?: 'news_contentBuilder_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The entry’s author. */
  author?: Maybe<UserInterface>;
  /** The ID of the author of this entry. */
  authorId?: Maybe<Scalars['Int']>;
  builderContent: Array<Maybe<BuilderContent_MatrixField>>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The current revision for the entry. */
  currentRevision?: Maybe<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The creator of a given draft. */
  draftCreator?: Maybe<UserInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']>;
  /** The drafts for the entry. */
  drafts?: Maybe<Array<Maybe<EntryInterface>>>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  entryCustomTitle?: Maybe<Scalars['String']>;
  entryImage: Array<Maybe<AssetInterface>>;
  entrySeo?: Maybe<Scalars['String']>;
  entryShortDescription?: Maybe<Scalars['String']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The creator of a given revision. */
  revisionCreator?: Maybe<UserInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']>;
  /** The revisions for the entry. */
  revisions?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int'];
  /** This query is used to query for SEOmatic meta data. */
  seomatic?: Maybe<SeomaticInterface>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']>;
};


export type News_ContentBuilder_Entry_CountArgs = {
  field: Scalars['String'];
};


export type News_ContentBuilder_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type News_ContentBuilder_EntryBuilderContentArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type News_ContentBuilder_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type News_ContentBuilder_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type News_ContentBuilder_EntryDraftsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type News_ContentBuilder_EntryEntryImageArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type News_ContentBuilder_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type News_ContentBuilder_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type News_ContentBuilder_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type News_ContentBuilder_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type News_ContentBuilder_EntryRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type News_ContentBuilder_EntrySeomaticArgs = {
  asArray?: InputMaybe<Scalars['Boolean']>;
  environment?: InputMaybe<SeomaticEnvironment>;
  site?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  uri?: InputMaybe<Scalars['String']>;
};

export type PagesSectionEntryUnion = Pages_ContentBuilder_Entry | Pages_OverviewNews_Entry;

export type Pages_ContentBuilder_Entry = ElementInterface & EntryInterface & {
  __typename?: 'pages_contentBuilder_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The entry’s author. */
  author?: Maybe<UserInterface>;
  /** The ID of the author of this entry. */
  authorId?: Maybe<Scalars['Int']>;
  builderContent: Array<Maybe<BuilderContent_MatrixField>>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The current revision for the entry. */
  currentRevision?: Maybe<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The creator of a given draft. */
  draftCreator?: Maybe<UserInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']>;
  /** The drafts for the entry. */
  drafts?: Maybe<Array<Maybe<EntryInterface>>>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  entryCustomTitle?: Maybe<Scalars['String']>;
  entryImage: Array<Maybe<AssetInterface>>;
  entrySeo?: Maybe<Scalars['String']>;
  entryShortDescription?: Maybe<Scalars['String']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The creator of a given revision. */
  revisionCreator?: Maybe<UserInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']>;
  /** The revisions for the entry. */
  revisions?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int'];
  /** This query is used to query for SEOmatic meta data. */
  seomatic?: Maybe<SeomaticInterface>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']>;
};


export type Pages_ContentBuilder_Entry_CountArgs = {
  field: Scalars['String'];
};


export type Pages_ContentBuilder_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Pages_ContentBuilder_EntryBuilderContentArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Pages_ContentBuilder_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Pages_ContentBuilder_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Pages_ContentBuilder_EntryDraftsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Pages_ContentBuilder_EntryEntryImageArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Pages_ContentBuilder_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Pages_ContentBuilder_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Pages_ContentBuilder_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Pages_ContentBuilder_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Pages_ContentBuilder_EntryRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Pages_ContentBuilder_EntrySeomaticArgs = {
  asArray?: InputMaybe<Scalars['Boolean']>;
  environment?: InputMaybe<SeomaticEnvironment>;
  site?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  uri?: InputMaybe<Scalars['String']>;
};

export type Pages_OverviewNews_Entry = ElementInterface & EntryInterface & {
  __typename?: 'pages_overviewNews_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The entry’s author. */
  author?: Maybe<UserInterface>;
  /** The ID of the author of this entry. */
  authorId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The current revision for the entry. */
  currentRevision?: Maybe<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The creator of a given draft. */
  draftCreator?: Maybe<UserInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']>;
  /** The drafts for the entry. */
  drafts?: Maybe<Array<Maybe<EntryInterface>>>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  entryCustomTitle?: Maybe<Scalars['String']>;
  entryImage: Array<Maybe<AssetInterface>>;
  entrySeo?: Maybe<Scalars['String']>;
  entryShortDescription?: Maybe<Scalars['String']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The creator of a given revision. */
  revisionCreator?: Maybe<UserInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']>;
  /** The revisions for the entry. */
  revisions?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int'];
  /** This query is used to query for SEOmatic meta data. */
  seomatic?: Maybe<SeomaticInterface>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']>;
};


export type Pages_OverviewNews_Entry_CountArgs = {
  field: Scalars['String'];
};


export type Pages_OverviewNews_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Pages_OverviewNews_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Pages_OverviewNews_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Pages_OverviewNews_EntryDraftsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Pages_OverviewNews_EntryEntryImageArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Pages_OverviewNews_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Pages_OverviewNews_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Pages_OverviewNews_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Pages_OverviewNews_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Pages_OverviewNews_EntryRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  draftCreator?: InputMaybe<Scalars['Int']>;
  draftId?: InputMaybe<Scalars['Int']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']>;
  drafts?: InputMaybe<Scalars['Boolean']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  entryCustomTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entrySeo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  entryShortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']>;
  revisionId?: InputMaybe<Scalars['Int']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']>;
  revisions?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Pages_OverviewNews_EntrySeomaticArgs = {
  asArray?: InputMaybe<Scalars['Boolean']>;
  environment?: InputMaybe<SeomaticEnvironment>;
  site?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  uri?: InputMaybe<Scalars['String']>;
};

export type TemplateImages_Asset = AssetInterface & ElementInterface & {
  __typename?: 'templateImages_Asset';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Alternative text for the asset. */
  alt?: Maybe<Scalars['String']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  assetCaption?: Maybe<Scalars['String']>;
  assetSource?: Maybe<Scalars['String']>;
  assetSourceUrl?: Maybe<Scalars['String']>;
  assetTitle?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the asset file was last modified. */
  dateModified?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The file extension for the asset file. */
  extension: Scalars['String'];
  /** The filename of the asset file. */
  filename: Scalars['String'];
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  focalPoint?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The ID of the folder that the asset belongs to. */
  folderId: Scalars['Int'];
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint: Scalars['Boolean'];
  /** The height in pixels or null if it’s not an image. */
  height?: Maybe<Scalars['Int']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Returns a list of images produced from the named Imager X transform. */
  imagerTransform?: Maybe<Array<Maybe<ImagerTransformedImageInterface>>>;
  /** An `<img>` tag based on this asset. */
  img?: Maybe<Scalars['String']>;
  /** The file kind. */
  kind: Scalars['String'];
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The file’s MIME type, if it can be determined. */
  mimeType?: Maybe<Scalars['String']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  path: Scalars['String'];
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The file size in bytes. */
  size?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  srcset?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The user who first added this asset (if known). */
  uploader?: Maybe<UserInterface>;
  /** The ID of the user who first added this asset (if known). */
  uploaderId?: Maybe<Scalars['Int']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url?: Maybe<Scalars['String']>;
  /** The ID of the volume that the asset belongs to. */
  volumeId?: Maybe<Scalars['Int']>;
  /** The width in pixels or null if it’s not an image. */
  width?: Maybe<Scalars['Int']>;
};


export type TemplateImages_Asset_CountArgs = {
  field: Scalars['String'];
};


export type TemplateImages_AssetHeightArgs = {
  format?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  immediately?: InputMaybe<Scalars['Boolean']>;
  interlace?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type TemplateImages_AssetImagerTransformArgs = {
  transform?: InputMaybe<Scalars['String']>;
};


export type TemplateImages_AssetNextArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TemplateImages_AssetPrevArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TemplateImages_AssetSrcsetArgs = {
  sizes: Array<Scalars['String']>;
};


export type TemplateImages_AssetUploaderArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetUploaders?: InputMaybe<Scalars['Boolean']>;
  authors?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TemplateImages_AssetUrlArgs = {
  format?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  immediately?: InputMaybe<Scalars['Boolean']>;
  interlace?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type TemplateImages_AssetWidthArgs = {
  format?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  immediately?: InputMaybe<Scalars['Boolean']>;
  interlace?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Users_Asset = AssetInterface & ElementInterface & {
  __typename?: 'users_Asset';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Alternative text for the asset. */
  alt?: Maybe<Scalars['String']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  assetCaption?: Maybe<Scalars['String']>;
  assetSource?: Maybe<Scalars['String']>;
  assetSourceUrl?: Maybe<Scalars['String']>;
  assetTitle?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the asset file was last modified. */
  dateModified?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The file extension for the asset file. */
  extension: Scalars['String'];
  /** The filename of the asset file. */
  filename: Scalars['String'];
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  focalPoint?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The ID of the folder that the asset belongs to. */
  folderId: Scalars['Int'];
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint: Scalars['Boolean'];
  /** The height in pixels or null if it’s not an image. */
  height?: Maybe<Scalars['Int']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Returns a list of images produced from the named Imager X transform. */
  imagerTransform?: Maybe<Array<Maybe<ImagerTransformedImageInterface>>>;
  /** An `<img>` tag based on this asset. */
  img?: Maybe<Scalars['String']>;
  /** The file kind. */
  kind: Scalars['String'];
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The file’s MIME type, if it can be determined. */
  mimeType?: Maybe<Scalars['String']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  path: Scalars['String'];
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The file size in bytes. */
  size?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  srcset?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The user who first added this asset (if known). */
  uploader?: Maybe<UserInterface>;
  /** The ID of the user who first added this asset (if known). */
  uploaderId?: Maybe<Scalars['Int']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url?: Maybe<Scalars['String']>;
  /** The ID of the volume that the asset belongs to. */
  volumeId?: Maybe<Scalars['Int']>;
  /** The width in pixels or null if it’s not an image. */
  width?: Maybe<Scalars['Int']>;
};


export type Users_Asset_CountArgs = {
  field: Scalars['String'];
};


export type Users_AssetHeightArgs = {
  format?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  immediately?: InputMaybe<Scalars['Boolean']>;
  interlace?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type Users_AssetImagerTransformArgs = {
  transform?: InputMaybe<Scalars['String']>;
};


export type Users_AssetNextArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Users_AssetPrevArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSource?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetSourceUrl?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  assetTitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Users_AssetSrcsetArgs = {
  sizes: Array<Scalars['String']>;
};


export type Users_AssetUploaderArgs = {
  archived?: InputMaybe<Scalars['Boolean']>;
  assetUploaders?: InputMaybe<Scalars['Boolean']>;
  authors?: InputMaybe<Scalars['Boolean']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trashed?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Users_AssetUrlArgs = {
  format?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  immediately?: InputMaybe<Scalars['Boolean']>;
  interlace?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type Users_AssetWidthArgs = {
  format?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  immediately?: InputMaybe<Scalars['Boolean']>;
  interlace?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};
