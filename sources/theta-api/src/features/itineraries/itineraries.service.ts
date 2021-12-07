import { ItineraryDto } from './dto/itinerary.dto';

export class ItinerariesService {
  getById(id: string): ItineraryDto {
    return this.getDummyItineraries();
  }

  upsert(itinerary: ItineraryDto) {
    return;
  }

  delete(id: string) {
    return;
  }

  private getDummyItineraries(): any {
    return [
      new ItineraryDto('3 Days 2 Night at Paris'),
      new ItineraryDto('Weekend at Canary Wharf'),
    ];
  }
}
