import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Place } from '../entities/place'
import { Activity } from '../entities/activity'
import { Itinerary } from '../entities/itinerary'
import { Image } from '../entities/image'
import { ItinerariesController } from './itineraries.controller'
import { ItinerariesService } from './itineraries.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([Itinerary, Activity, Place, Image]),
    ConfigModule,
  ],
  controllers: [ItinerariesController],
  providers: [ItinerariesService],
})
export class ItinerariesModule {}
