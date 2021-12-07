import { Module } from '@nestjs/common';
import { ItinerariesModule } from './features/itineraries/itineraries.module';

@Module({
  imports: [ItinerariesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
