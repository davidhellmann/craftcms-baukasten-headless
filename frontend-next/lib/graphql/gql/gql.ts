/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

const documents = {
  "\n\tquery getAllEntries($section: [String]!) {\n    entries(section: $section) {\n      title\n      id\n      slug\n      uri\n    }\n  }\n":
    types.GetAllEntriesDocument,
  "\n\tquery Page($uri: [String]!) {\n\t\tentry(uri: $uri) {\n      title\n      id\n      slug\n      uri\n\t\t}\n\t}\n":
    types.PageDocument,
  '\n  query Home {\n    entry(section: "home") {\n      title\n      id\n      slug\n    }\n  }\n':
    types.HomeDocument,
  '\n\tquery NewsDetailPage($slug: [String]!) {\n\t\tentry(section: "news", slug: $slug) {\n      title\n      id\n      slug\n      uri\n\t\t}\n\t}\n':
    types.NewsDetailPageDocument,
};

export function graphql(
  source: "\n\tquery getAllEntries($section: [String]!) {\n    entries(section: $section) {\n      title\n      id\n      slug\n      uri\n    }\n  }\n"
): typeof documents["\n\tquery getAllEntries($section: [String]!) {\n    entries(section: $section) {\n      title\n      id\n      slug\n      uri\n    }\n  }\n"];
export function graphql(
  source: "\n\tquery Page($uri: [String]!) {\n\t\tentry(uri: $uri) {\n      title\n      id\n      slug\n      uri\n\t\t}\n\t}\n"
): typeof documents["\n\tquery Page($uri: [String]!) {\n\t\tentry(uri: $uri) {\n      title\n      id\n      slug\n      uri\n\t\t}\n\t}\n"];
export function graphql(
  source: '\n  query Home {\n    entry(section: "home") {\n      title\n      id\n      slug\n    }\n  }\n'
): typeof documents['\n  query Home {\n    entry(section: "home") {\n      title\n      id\n      slug\n    }\n  }\n'];
export function graphql(
  source: '\n\tquery NewsDetailPage($slug: [String]!) {\n\t\tentry(section: "news", slug: $slug) {\n      title\n      id\n      slug\n      uri\n\t\t}\n\t}\n'
): typeof documents['\n\tquery NewsDetailPage($slug: [String]!) {\n\t\tentry(section: "news", slug: $slug) {\n      title\n      id\n      slug\n      uri\n\t\t}\n\t}\n'];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
