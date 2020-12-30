import gql from "graphql-tag";

const ALL_COLLECTIONS_QUERY = gql`
  query Collections {
    collections {
      id
      title
      handle
      image {
        url
      }
    }
  }
`;

export default ALL_COLLECTIONS_QUERY;