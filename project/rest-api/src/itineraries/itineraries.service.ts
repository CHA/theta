import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from 'src/entities/activity';
import { Itinerary } from 'src/entities/itinerary';
import { Repository } from 'typeorm';

@Injectable()
export class ItinerariesService {
  constructor(
    @InjectRepository(Itinerary)
    private readonly itinerariesRepository: Repository<Itinerary>
  ) { }

  getItineraries(): Promise<Itinerary[]> {
    return this.itinerariesRepository.find();
  }
}
