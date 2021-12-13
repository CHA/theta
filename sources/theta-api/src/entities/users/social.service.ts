import { Injectable } from '@nestjs/common';
import { Neo4jService } from '@theta/database/neo4j/neo4j.service';
import { FOLLOWS } from '../relationship';
import { User } from './models/user.model';

@Injectable()
export class SocialService {
  constructor(private readonly db: Neo4jService) {}

  async follows(usernameA: string, usernameB: string): Promise<User[]> {
    const followQuery = `
      MATCH
        (a:User { email: $emailA }),
        (b:User { email: $emailB })
      MERGE (a)-[:${FOLLOWS}]->(b)
      RETURN a, b
    `;
    await this.db.write(followQuery, {
      emailA: usernameA,
      emailB: usernameB,
    });
    return await this.getFollowing(usernameA);
  }

  async getFollowers(username: string): Promise<User[]> {
    const query = `
      MATCH (n:User {email: $email})<-[:${FOLLOWS}]-(user)
      RETURN user`;
    const result = await this.db.read(query, { email: username });
    return result.records.map((x) => x.get('user').properties);
  }

  async getFollowing(username: string): Promise<User[]> {
    const query = `
      MATCH (n:User {email: $email})-[:${FOLLOWS}]->(user)
      RETURN user`;
    const result = await this.db.read(query, { email: username });
    return result.records.map((x) => x.get('user').properties);
  }
}
