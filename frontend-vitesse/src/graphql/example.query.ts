import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'

export function useExampleQuery() {
  const { result, loading, error } = useQuery(gql`
    query foo {
      entries {
        title
        id
        uri
        url
      }
    }
  `)

  return { result, loading, error }
}
