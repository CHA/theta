import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Itinerary } from '../entities/itinerary'
import { Equal, Repository } from 'typeorm'

@Injectable()
export class ItinerariesService {
  constructor(
    @InjectRepository(Itinerary)
    private readonly itinerariesRepository: Repository<Itinerary>
  ) {}

  getItineraries(): Promise<Itinerary[]> {
    return this.itinerariesRepository.find({
      relations: ['activities', 'activities.place'],
      order: {
        activities: {
          id: 'ASC',
        },
      },
    })
  }

  getItinerary(id: number): Promise<Itinerary> {
    return this.itinerariesRepository.findOneBy({ id: Equal(id) })
  }
}
