import { ItinerariesService } from './itineraries.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ItineraryDto } from './dto/itinerary.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('itineraries')
export class ItinerariesController {
  constructor(private itineraryService: ItinerariesService) {}

  @Get(':id')
  @ApiResponse({
    status: 200,
    type: ItineraryDto,
    isArray: false,
    description: 'Itinerary details',
  })
  getById(@Param('id') id: string): ItineraryDto {
    return this.itineraryService.getById(id);
  }

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Itinerary created or updated (if exist)',
  })
  upsert(@Body() itinerary: ItineraryDto) {
    this.itineraryService.upsert(itinerary);
  }
}
