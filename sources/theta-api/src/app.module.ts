import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppConfigModule } from './config/app/app-config.module';
import { Neo4jConfig } from './database/neo4j/neo4j-config.interface';
import { Neo4jConfigModule } from './config/database/neo4j/neo4j-config.module';
import { Neo4jConfigService } from './config/database/neo4j/neo4j-config.service';
import { ItinerariesModule } from './entities/itineraries/itineraries.module';
import { UsersModule } from './entities/users/users.module';
import { Neo4jModule } from './database/neo4j/neo4j.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './entities/auth/auth.module';
import { AwsConfigModule } from './config/aws/aws-config.module';
import { FileModule } from './entities/file/file.module';

@Module({
  imports: [
    Neo4jModule.forRootAsync({
      imports: [Neo4jConfigModule],
      inject: [Neo4jConfigService],
      useFactory: (neo4jConfig: Neo4jConfigService): Neo4jConfig => ({
        scheme: neo4jConfig.scheme,
        host: neo4jConfig.host,
        port: neo4jConfig.port,
        username: neo4jConfig.username,
        password: neo4jConfig.password,
        database: neo4jConfig.database,
      }),
    }),
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/graph/schema.gql'),
      sortSchema: true,
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
    }),
    AppConfigModule,
    AwsConfigModule,
    AuthModule,
    ItinerariesModule,
    SharedModule,
    UsersModule,
    FileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
