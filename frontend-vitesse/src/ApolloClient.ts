import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

// Cache implementation
const cache = new InMemoryCache()

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: `${import.meta.env.VITE_API_BASE_URL}/api` || '',
  headers: {
    authorization: `Bearer ${import.meta.env.VITE_GRAPHQL_TOKEN}`,
  },
})

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})
