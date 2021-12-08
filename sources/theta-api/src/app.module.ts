import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ItinerariesModule } from './features/itineraries/itineraries.module';
import { UsersModule } from './features/users/users.module';

@Module({
  imports: [
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
