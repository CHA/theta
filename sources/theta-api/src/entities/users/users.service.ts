import { Injectable, NotFoundException } from '@nestjs/common';
import { Neo4jService } from '@theta/database/neo4j/neo4j.service';
import { EncryptionService } from '@theta/encryption/encryption.service';
import { UserInput } from './models/user.input';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(
    private readonly db: Neo4jService,
    private readonly encryptionService: EncryptionService,
  ) {}

  async create(user: UserInput): Promise<User> {
    const password = await this.encryptionService.encrypt(user.password);
    const query = `
      MERGE(n:User {email: $email})
      ON CREATE
        SET
          n.uuid = apoc.create.uuid(),
          n.firstName = $firstName,
          n.lastName = $lastName,
          n.password = $password,
          n.createdDate = datetime(),
          n.createdBy = $email
      ON MATCH
        SET
          n.firstName = $firstName,
          n.lastName = $lastName,
          n.password = $password,
          n.lastModifiedDate = datetime(),
          n.lastModifiedBy = $email
      RETURN n
    `;
    await this.db.write(query, {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: password,
    });
    user.password = null;
    return await this.get(user.email);
  }

  async get(username: string): Promise<User> {
    const query = `
      MATCH(n:User {email: $email})
      RETURN n AS user `;
    const result = await this.db.read(query, { email: username });
    if (result.records.length === 0) {
      throw new NotFoundException();
    }
    return result?.records[0]?.get('user').properties;
  }

  async getByUid(uuid: string): Promise<User> {
    const query = `
      MATCH(n:User {uuid: $uuid})
      RETURN n AS user `;
    const result = await this.db.read(query, { uuid: uuid });
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
    const result = await this.db.read(query, { keyword });
    if (result.records.length === 0) {
      throw new NotFoundException();
    }
    return result.records.map((x) => {
      return x.get('user').properties;
    });
  }

  async delete(id: string) {
    const query = `
      MATCH(n:User {email: $id})
      DETACH DELETE n
      RETURN n AS user`;
    const result = await this.db.write(query, { id });
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
    const result = await this.db.read(query, {});
    return +result?.records[0]?.get('count');
  }

  async getPassword(username: string): Promise<string> {
    const query = `
      MATCH(user:User {email: $email})
      RETURN user.password as password
    `;
    const result = await this.db.read(query, { email: username });
    return result?.records[0]?.get('password');
  }
}
