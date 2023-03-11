import { Controller, Get } from '@nestjs/common';
import { ItinerariesService } from './itineraries.service';

@Controller('itineraries')
export class ItinerariesController {
  constructor(private readonly itineraryService: ItinerariesService) {}

  @Get()
  getItineraries(): string {
    return this.itineraryService.getItineraries();
  }
}
