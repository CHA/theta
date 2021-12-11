import { Injectable, NotFoundException } from '@nestjs/common';
import { Neo4jService } from '@theta/database/neo4j/neo4j.service';
import { UserInput } from './models/user.input';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  constructor(private readonly neo4jService: Neo4jService) {}

  async create(user: UserInput): Promise<UserInput> {
    const query = `
      CREATE(n:User
        {
          email: $email, 
          firstName: $firstName, 
          lastName: $lastName
        })`;
    await this.neo4jService.write(query, {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    });
    return user;
  }

  async get(id: string): Promise<User> {
    const query = `
      MATCH(n:User {email: $id})
      RETURN n AS user `;
    const result = await this.neo4jService.read(query, { id });
    if (result.records.length === 0) {
      throw new NotFoundException();
    }
    return result?.records[0]?.get('user').properties;
  }

  async search(keyword: string): Promise<User[]> {
    const query = `
      MATCH(n:User)
      WHERE n.email CONTAINS $keyword
        OR n.firstName CONTAINS $keyword
        OR n.lastName CONTAINS $keyword
      RETURN n AS user`;
    const result = await this.neo4jService.read(query, { keyword });
    if (result.records.length === 0) {
      throw new NotFoundException();
    }
    return result.records.map((x) => {
      console.log(x.get('user'));
      return x.get('user').properties;
    });
  }

  async delete(id: string) {
    const query = `
      MATCH(n:User {email: $id})
      DELETE n
      RETURN n AS user`;
    const result = await this.neo4jService.write(query, { id });
    if (result.records.length === 0) {
      throw new NotFoundException();
    }
    return id;
  }

  async count(): Promise<number> {
    const query = `
      MATCH (n)
      WHERE n:User
      RETURN COUNT(n) AS count
    `;
    const result = await this.neo4jService.read(query, {});
    return +result?.records[0]?.get('count');
  }
}
