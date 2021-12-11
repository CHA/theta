import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Neo4jScheme } from './neo4j-config.interface';

@Injectable()
export class Neo4jConfigService {
  constructor(private configService: ConfigService) {}

  get scheme(): Neo4jScheme {
    return this.configService.get<Neo4jScheme>('neo4j.scheme');
  }

  get host(): string {
    return this.configService.get<string>('neo4j.host');
  }

  get port(): string {
    return this.configService.get<string>('neo4j.port');
  }

  get username(): string {
    return this.configService.get<string>('neo4j.username');
  }

  get password(): string {
    return this.configService.get<string>('neo4j.password');
  }

  get database(): string {
    return this.configService.get<string>('neo4j.database');
  }
}
