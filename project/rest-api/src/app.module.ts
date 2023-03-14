import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config/configuration';
import { ItinerariesModule } from './itineraries/itineraries.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        autoLoadEntities: true,
        type: 'mysql',
        host: configService.get<MySqlConfig>('database.mysql').host,
        port: configService.get<MySqlConfig>('database.mysql').port,
        username: configService.get<MySqlConfig>('database.mysql').user,
        password: configService.get<MySqlConfig>('database.mysql').password,
        database: configService.get<MySqlConfig>('database.mysql').database,
        synchronize: configService.get<MySqlConfig>('database.mysql').synchronize,
      }),
      inject: [ConfigService],
    }),
    ItinerariesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
