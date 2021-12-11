import { Injectable } from '@nestjs/common';
import { Neo4jService } from '@theta/config/database/neo4j/neo4j.service';

@Injectable()
export class UserService {
  constructor(private readonly neo4jService: Neo4jService) {}

  async create(data: any) {
    return {} as any;
  }

  async findOneById(id: string) {
    return {} as any;
  }

  async findAll(recipesArgs: any) {
    return [] as any;
  }

  async remove(id: string) {
    return true;
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
