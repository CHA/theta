import { Injectable } from '@nestjs/common';
import { Neo4jService } from '@theta/database/neo4j/neo4j.service';
import { LOCATED_AT } from '../relationship';
import { ItineraryInput } from './models/itenerary.input';
import { Itinerary } from './models/itinerary.model';
import { SearchItineraryInput } from './models/search-itinerary.input';

@Injectable()
export class ItinerariesService {
  constructor(private readonly db: Neo4jService) {}

  async create(itinerary: ItineraryInput): Promise<ItineraryInput> {
    const transanction = this.db.beginTransaction();

    const activity = `
      UNWIND $itinerary.activities as a
      MERGE (activity:Activity {name: a.name})-[:${LOCATED_AT}]-> 
        (place:Place {name: a.place.name, address: a.place.address})
        ON CREATE SET
          activity.uuid = apoc.create.uuid(),
          place.uuid = apoc.create.uuid()
      MERGE (city:City {name: a.place.city.name})
      MERGE (country: Country {name: a.place.city.country})
      MERGE (itinerary:Itinerary {name: $itinerary.name, createdBy: $itinerary.createdBy})
        ON CREATE SET
          itinerary.uuid = apoc.create.uuid(),
          itinerary.createdDate = datetime()
        ON MATCH SET
          itinerary.lastModifiedBy = $itinerary.createdBy,
          itinerary.lastModifiedDate = datetime()
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

  async search(
    searchItineraryInput: SearchItineraryInput,
  ): Promise<Itinerary[]> {
    const query = `
    MATCH n=(itinerary:Itinerary)-[:CONTAINS]->
      (activity)-[:LOCATED_AT]->
      (place)-[:IS_IN]->
      (city)-[:IS_IN]->
      (country)
    WHERE itinerary.name CONTAINS $keyword 
      OR activity.name CONTAINS $keyword
      OR place.name CONTAINS $keyword
      OR city.name CONTAINS $keyword
      OR country.name CONTAINS $keyword
    WITH COLLECT(n) AS ns
    CALL apoc.convert.toTree(ns) YIELD value
    RETURN  COLLECT(value) AS itineraries
    `;

    const result = await this.db.read(query, {
      keyword: searchItineraryInput.keyword,
    });

    return result?.records[0].get('itineraries');
  }
}
