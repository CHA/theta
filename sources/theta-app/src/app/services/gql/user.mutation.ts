
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

  static login = gql`
    mutation Login($input: AuthLoginInput!) {
      login(input: $input) {
        token,
        user {
          firstName,
          lastName,
          profilePhotoUrl
        }
      }
    }
  `;
}
