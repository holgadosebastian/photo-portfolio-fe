import gql from "graphql-tag";

const PICTURES_QUERY = gql`
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

export default PICTURES_QUERY;