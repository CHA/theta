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
      UNWIND $itinerary.activities as a
      MERGE 
        (activity:Activity {
          name: a.name
        })-[:${LOCATED_AT}]->
        (place:Place {name: a.place.name, address: a.place.address})
      MERGE (city:City {name: a.place.city.name})
      MERGE (country: Country{name: a.place.city.country})
      MERGE (itinerary:Itinerary {
        name: $itinerary.name,
        createdBy: $itinerary.createdBy
      })
      MERGE (user:User {email: $itinerary.createdBy})
      MERGE (itinerary)-[:CREATED_BY]->(user)
      MERGE (itinerary)-[:CONTAINS]->(activity)
      MERGE (activity)-[:LOCATED_AT]->(place)
      MERGE (place)-[:IS_IN]->(city)
      MERGE (city)-[:IS_IN]->(country)
      RETURN activity
    `;

    await this.db.write(activity, {
      itinerary: itinerary,
    });

    transanction.commit();

    return itinerary;
  }
}
