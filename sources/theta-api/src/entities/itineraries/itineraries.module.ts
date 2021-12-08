import { Module } from '@nestjs/common';
import { ItinerariesResolver } from './itineraries.resolver';
import { ItinerariesService } from './itineraries.service';

@Module({
  providers: [ItinerariesResolver, ItinerariesService],
})
export class ItinerariesModule {}
