import { Module, DynamicModule, Global, Provider } from '@nestjs/common';
import { Neo4jService } from './neo4j.service';
import { Neo4jConfig } from './neo4j-config.interface';
import { NEO4J_CONFIG, NEO4J_DRIVER } from './neo4j.constants';
import { createDriver } from './neo4j.utils';
import { Neo4jTransactionInterceptor } from './neo4j-transaction.interceptor';
import { Neo4jConfigModule } from '@theta/config/database/neo4j/neo4j-config.module';

@Module({})
export class Neo4jModule {
  static forRoot(config: Neo4jConfig): DynamicModule {
    return {
      module: Neo4jModule,
      global: true,
      imports: [Neo4jConfigModule],
      providers: [
        {
          provide: NEO4J_CONFIG,
          useValue: config,
        },
        {
          provide: NEO4J_DRIVER,
          inject: [NEO4J_CONFIG],
          useFactory: async (config: Neo4jConfig) => createDriver(config),
        },
        Neo4jService,
      ],
      exports: [Neo4jService, Neo4jModule, Neo4jTransactionInterceptor],
    };
  }

  static forRootAsync(configProvider): DynamicModule {
    return {
      module: Neo4jModule,
      global: true,
      imports: [Neo4jConfigModule],
      providers: [
        {
          provide: NEO4J_CONFIG,
          ...configProvider,
        } as Provider<any>,
        {
          provide: NEO4J_DRIVER,
          inject: [NEO4J_CONFIG],
          useFactory: async (config: Neo4jConfig) => createDriver(config),
        },
        Neo4jService,
      ],
      exports: [Neo4jService, Neo4jModule],
    };
  }
}