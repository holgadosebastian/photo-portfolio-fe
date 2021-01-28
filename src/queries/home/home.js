import gql from 'graphql-tag'

const HOME_QUERY = gql`
  query Pictures {
    pictures(where: { featured: "true" }) {
      mainImage {
        url
      }
    }
  }
`

export default HOME_QUERY
