import { Args, Query, Resolver } from '@nestjs/graphql';
import { ItinerariesService } from './itineraries.service';
import { Itinerary } from './models/itinerary.model';

@Resolver((of) => Itinerary)
export class ItinerariesResolver {
  constructor(private readonly itineraryService: ItinerariesService) {}

  @Query((returns) => Itinerary)
  async itinerary(@Args('id') id: string) {
    return await this.itineraryService.getById(id);
  }
}
