import { Controller, Get, Param } from '@nestjs/common'
import { Itinerary } from '../entities/itinerary'
import { ItinerariesService } from './itineraries.service'

@Controller('itineraries')
export class ItinerariesController {
  constructor(private readonly itineraryService: ItinerariesService) {}

  @Get()
  getItineraries(): Promise<Itinerary[]> {
    return this.itineraryService.getItineraries()
  }

  @Get(':id')
  getItinerary(@Param('id') id): Promise<Itinerary> {
    return this.itineraryService.getItinerary(id)
  }
}
