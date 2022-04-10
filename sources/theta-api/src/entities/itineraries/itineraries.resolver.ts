import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@theta/guards/gql-auth.guard';
import { ItinerariesService } from './itineraries.service';
import { ItineraryInput } from './models/itenerary.input';
import { Itinerary } from './models/itinerary.model';
import { SearchItineraryInput } from './models/search-itinerary.input';

@Resolver((of) => Itinerary)
export class ItinerariesResolver {
  constructor(private readonly itineraryService: ItinerariesService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Itinerary)
  async createItinerary(@Args('itinerary') itinerary: ItineraryInput) {
    return await this.itineraryService.create(itinerary);
  }

  @Query(() => [Itinerary])
  async searchItinerary(
    @Args('searchItineraryInput') searchItineraryInput: SearchItineraryInput,
  ) {
    return await this.itineraryService.search(searchItineraryInput);
  }
}
