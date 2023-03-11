import { Injectable } from '@nestjs/common';

@Injectable()
export class ItinerariesService {
  getItineraries(): string {
    return 'Itineraries';
  }
}
