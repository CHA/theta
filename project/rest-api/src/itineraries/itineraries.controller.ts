import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Activity } from 'src/entities/activity';
import { Itinerary } from 'src/entities/itinerary';
import { ItinerariesService } from './itineraries.service';

@Controller('itineraries')
export class ItinerariesController {
  constructor(
    private readonly itineraryService: ItinerariesService) { }

  @Get()
  getItineraries(): Promise<Itinerary[]> {
    return this.itineraryService.getItineraries();
  }
}
