import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '@theta/models/card';
import { Itinerary } from '@theta/models/itinerary';
import { SearchCriteria } from '@theta/models/search-criteria';

@Injectable({ providedIn: 'root' })
export class ItineraryService {
  constructor(
    private httpClient: HttpClient
  ) { }

  search(criteria: SearchCriteria): Promise<Itinerary[]> {
    // TODO: Call API and send the keyword as criteria
    return this.httpClient
      .get<Itinerary[]>('assets/data/itineraries.json')
      .toPromise();
  }

  async get(uuid: string): Promise<Itinerary> {
    const result = (await this.search(null)).find(x => x.uuid === uuid);
    return Promise.resolve(result);
  }

  toCards(itineraries: Itinerary[]): Card[] {
    const cards: Card[] = [];
    itineraries.forEach(i => {
      cards.push({
        imageUrls: [i.imageUrls[0]],
        title: i.name,
        text: i.description
      });
    });
    return cards;
  }

}
