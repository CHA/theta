import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itinerary } from '@theta/models/itinerary';
import { SearchCriteria } from '@theta/models/search-criteria';
import { CardSlide } from '@theta/shared/card-slider/card-slide';

@Injectable({ providedIn: 'root' })
export class ItineraryService {
  constructor(private httpClient: HttpClient) { }

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

  getCardSlides(itineraries: Itinerary[]): CardSlide[] {
    const slides: CardSlide[] = [];
    itineraries.forEach(i => {
      slides.push({
        imageUrl: i.imageURLs[0],
        subTitle: i.name,
        note: i.description
      });
    });
    return slides;
  }
}
