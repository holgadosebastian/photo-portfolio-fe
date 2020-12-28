import gql from "graphql-tag";

const ALL_TAGS_QUERY = gql`
  query Tags {
    tags {
      id
      title
      handle
      image {
        url
      }
    }
  }
`;

export default ALL_TAGS_QUERY;