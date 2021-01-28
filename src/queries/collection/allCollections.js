import gql from 'graphql-tag'

const ALL_COLLECTIONS_QUERY = gql`
  query Collections {
    collections {
      id
      title
      handle
      image {
        url
      }
      pictures(limit: 8) {
        mainImage {
          url
        }
      }
    }
  }
`

export default ALL_COLLECTIONS_QUERY
