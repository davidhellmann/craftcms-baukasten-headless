"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
function main(preview, token) {
    const endpoints = `${process.env.CRAFT_CMS_GRAPHQL_ENDPOINT}`;
    const src = preview
        ? `${endpoints}?x-craft-live-preview=${preview}`
        : endpoints;
    const headers = {
        authorization: `Bearer ${process.env.CRAFT_CMS_GRAPHQL_TOKEN || token}`,
    };
    if (preview) {
        headers['x-craft-token'] = preview;
    }
    const graphQLClient = new graphql_request_1.GraphQLClient(src, {
        headers,
    });
    return graphQLClient;
}
exports.default = main;
