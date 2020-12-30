import gql from "graphql-tag";

const PICTURE_QUERY = gql`
  query Pictures($id: ID!) {
    picture(id: $id) {
      id
      title
      description
      place
      region
      dateTaken
      mainImage {
        url
      }
      tags {
        id
        title
        handle
      }
    }
  }
`;

export default PICTURE_QUERY;