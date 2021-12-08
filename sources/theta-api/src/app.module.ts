import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppConfigModule } from './config/app/app-config.module';
import { ItinerariesModule } from './entities/itineraries/itineraries.module';
import { UsersModule } from './entities/users/users.module';

@Module({
  imports: [
    AppConfigModule,
    ItinerariesModule,
    UsersModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/graph/schema.gql'),
      sortSchema: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
