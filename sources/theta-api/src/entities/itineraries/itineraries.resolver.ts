import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ItinerariesService } from './itineraries.service';
import { ItineraryInput } from './models/itenerary.input';
import { Itinerary } from './models/itinerary.model';

@Resolver((of) => Itinerary)
export class ItinerariesResolver {
  constructor(private readonly itineraryService: ItinerariesService) {}

  @Mutation((returns) => Itinerary)
  async createItinerary(@Args('itinerary') itinerary: ItineraryInput) {
    return await this.itineraryService.create(itinerary);
  }
}
