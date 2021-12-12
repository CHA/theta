import { Injectable } from '@nestjs/common';
import { Neo4jService } from '@theta/database/neo4j/neo4j.service';
import { LOCATED_AT } from '../relationship';
import { ItineraryInput } from './models/itenerary.input';

@Injectable()
export class ItinerariesService {
  constructor(private readonly db: Neo4jService) {}

  async create(itinerary: ItineraryInput): Promise<ItineraryInput> {
    const transanction = this.db.beginTransaction();

    const activity = `
      UNWIND $activites as activityRecord
      MERGE 
        (activity:Activity {
          name: activityRecord.name, 
          startTime: datetime(activityRecord.startTime), 
          endTime: datetime(activityRecord.endTime)}
        )-[:${LOCATED_AT}]->
        (place:Place {name: activityRecord.place.name, address: activityRecord.place.address})
      MERGE (city:City {name: activityRecord.place.city.name})
      MERGE (itinerary:Itinerary {name: $itineraryName})
      MERGE (user:User {email: $createdBy})
      MERGE (itinerary)-[:CREATED_BY]->(user)
      MERGE (itinerary)-[:CONTAINS]->(activity)
      MERGE (activity)-[:LOCATED_AT]->(place)
      MERGE (place)-[:IS_IN]->(city)
      RETURN activityRecord
    `;

    await this.db.write(activity, {
      itineraryName: itinerary.name,
      createdBy: itinerary.createdBy,
      activites: itinerary.activities,
    });

    transanction.commit();

    return itinerary;
  }
}
