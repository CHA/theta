import { Module } from '@nestjs/common';
import { SharedModule } from '@theta/shared/shared.module';
import { ItinerariesResolver } from './itineraries.resolver';
import { ItinerariesService } from './itineraries.service';

@Module({
  imports: [SharedModule],
  providers: [ItinerariesResolver, ItinerariesService],
})
export class ItinerariesModule {}
