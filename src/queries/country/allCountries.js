import gql from "graphql-tag";

const ALL_COUNTRIES_QUERY = gql`
  query Countries {
    countries {
      id
      name
      handle
      image {
        url
      }
    }
  }
`;

export default ALL_COUNTRIES_QUERY;