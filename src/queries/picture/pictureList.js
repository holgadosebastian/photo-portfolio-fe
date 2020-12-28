import gql from "graphql-tag";

const PICTURES_LIST_QUERY = gql`
  query Pictures {
    pictures {
      id
      title
      mainImage {
        url
      }
    }
  }
`;

export default PICTURES_LIST_QUERY;