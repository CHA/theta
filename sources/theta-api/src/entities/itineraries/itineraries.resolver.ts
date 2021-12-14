import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ContextUser } from '@theta/decorators/context-user.decorator';
import { GqlAuthGuard } from '@theta/guards/gql-auth.guard';
import { User } from '../users/models/user.model';
import { ItinerariesService } from './itineraries.service';
import { ItineraryInput } from './models/itenerary.input';
import { Itinerary } from './models/itinerary.model';

@UseGuards(GqlAuthGuard)
@Resolver((of) => Itinerary)
export class ItinerariesResolver {
  constructor(private readonly itineraryService: ItinerariesService) {}

  @Mutation((returns) => Itinerary)
  async createItinerary(@Args('itinerary') itinerary: ItineraryInput) {
    return await this.itineraryService.create(itinerary);
  }
}
