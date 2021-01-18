import gql from "graphql-tag";

const COUNTRY_QUERIES = gql`
  query Countries($id: ID!) {
    country(id: $id) {
      id
      name
      handle
      image {
        url
      }
      pictures {
        id
        title
        mainImage {
          url
        }
      }
    }
  }
`;

export default COUNTRY_QUERIES;