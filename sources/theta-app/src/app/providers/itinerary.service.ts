import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itinerary } from '@theta/interfaces/itinerary';
import { SearchCriteria } from '@theta/interfaces/search-criteria';

@Injectable({ providedIn: 'root' })
export class ItineraryService {
  constructor(private httpClient: HttpClient) {}

  search(criteria: SearchCriteria): Promise<Itinerary[]> {
    // TODO: Call API and send the keyword as criteria
    return this.httpClient
      .get<Itinerary[]>('assets/data/itineraries.json')
      .toPromise();
  }
}
