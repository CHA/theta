import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@theta/guards/gql-auth.guard';
import { ItinerariesService } from './itineraries.service';
import { ItineraryInput } from './models/itenerary.input';
import { Itinerary } from './models/itinerary.model';

@Resolver((of) => Itinerary)
export class ItinerariesResolver {
  constructor(private readonly itineraryService: ItinerariesService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => Itinerary)
  async createItinerary(@Args('itinerary') itinerary: ItineraryInput) {
    return await this.itineraryService.create(itinerary);
  }
}
