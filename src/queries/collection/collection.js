import gql from "graphql-tag";

const COLLECTION_QUERY = gql`
  query Collections($id: ID!) {
    collection(id: $id) {
      id
      title
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

export default COLLECTION_QUERY;