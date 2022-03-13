
import { gql } from 'apollo-angular';

export class UserMutations {
  static createUser = gql`
  mutation CreateUser($userInput:UserInput!) {
    createUser(user: $userInput) {
      email,
      firstName,
      lastName
    }
  }
`;
}

