<p align="center">
  <img src="https://github.com/CHA/theta/blob/main/sources/theta-api/src/assets/images/theta-logo.png" height="200" />
</p>

## Description

Theta API code repository.


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Connect to database
1. Install no4j desktop https://neo4j.com/docs/operations-manual/current/installation/
2. Connect using below details
   - Add Remote Connection
   - Connect URL: neo4j+s://7fc4a814.databases.neo4j.io
   - username: neo4j
   - password: 3xT32GUUyhJmv_FcJevLtiboSwuadm5NiRLzNjRZqjI

## How to invoke/call the GraphQL API
1. Open http://localhost:3000/graphql (make sure the server is running)
2. Call the endpoint using Query or Mutation
   Example Mutation:
   ```
   mutation login($input: AuthLoginInput!) {
      login(input: $input){
        token,
        user {
          email
        }
    }
  }
   ```

   Example Query
   ```
   query {
    searchUsers(keyword: "Chris" ) {
      uid,
      firstName,
      lastName,
      email,
      createdDate,
      lastModifiedDate
    }
  }
   ```

3. Ensure the pass the Authorization header in the request. You can get the authentication token from login.
  Example Authorization Header
  ```
  {
    "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI5MDU5NzMwNS03MTU4LTQ5ZjktODE1ZS1lNWNiNDEwNjc5OWQiLCJpYXQiOjE2Mzk0Nzg3ODl9.geOxrUE5D_lLJ5h5FLlvWAsIjj4mqYJ-su4665AIRs8"
  }
  ```


## Support

This project is developed using NEST JS. Credit and thanks to the author.

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

Nest is [MIT licensed](LICENSE).
