import { Module } from '@nestjs/common';
import neo4jConfig from './neo4j-config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Neo4jConfigService } from './neo4j-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [neo4jConfig]
    }),
  ],
  providers: [ConfigService, Neo4jConfigService],
  exports: [ConfigService, Neo4jConfigService],
})
export class Neo4jConfigModule {}
