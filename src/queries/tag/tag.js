import gql from "graphql-tag";

const TAG_QUERY = gql`
  query Tags($id: ID!) {
    tag(id: $id) {
      id
      title
      handle
      pictures {
        id
        title
        mainImage {
          url
        }
      }
      image {
        url
      }
    }
  }
`;

export default TAG_QUERY;