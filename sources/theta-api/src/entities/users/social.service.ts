import { Injectable } from '@nestjs/common';
import { Neo4jService } from '@theta/database/neo4j/neo4j.service';
import { FOLLOWS } from '../relationship';
import { UserInput } from './models/user.input';
import { User } from './models/user.model';

@Injectable()
export class SocialService {
  constructor(private readonly db: Neo4jService) {}

  async follows(userA: UserInput, userB: UserInput): Promise<User[]> {
    const followQuery = `
      MATCH
        (a:User { email: $emailA }),
        (b:User { email: $emailB })
      MERGE (a)-[:${FOLLOWS}]->(b)
      RETURN a, b
    `;
    await this.db.write(followQuery, {
      emailA: userA.email,
      emailB: userB.email,
    });
    return await this.getFollowing(userA);
  }

  async getFollowers(user: UserInput): Promise<User[]> {
    const query = `
      MATCH (n:User {email: $email})<-[:${FOLLOWS}]-(user)
      RETURN user`;
    const result = await this.db.read(query, { email: user.email });
    return result.records.map((x) => x.get('user').properties);
  }

  async getFollowing(user: UserInput): Promise<User[]> {
    const query = `
      MATCH (n:User {email: $email})-[:${FOLLOWS}]->(user)
      RETURN user`;
    const result = await this.db.read(query, { email: user.email });
    return result.records.map((x) => x.get('user').properties);
  }
}
