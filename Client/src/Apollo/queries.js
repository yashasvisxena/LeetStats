
import { gql } from "@apollo/client";

export const query = gql`
  query GetStudent($username: String!) {
    getStudent(username: $username) {
      all
      easy
      medium
      hard
    }
  }
`;
