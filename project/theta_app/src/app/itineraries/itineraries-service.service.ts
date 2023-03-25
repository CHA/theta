import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Itinerary } from './models/itinerary';

@Injectable({
  providedIn: 'root',
})
export class ItinerariesService {
  private itinerariesApiEndpoint: string = `${environment.thetaApiBaseEndpoint}/itineraries`;

  constructor(private http: HttpClient) {}

  getItineraries(): Observable<Itinerary[]> {
    return this.http.get<Itinerary[]>(this.itinerariesApiEndpoint);
  }

  getItinerary(id: number): Observable<Itinerary> {
    return this.http.get<Itinerary>(`${this.itinerariesApiEndpoint}/${id}`);
  }
}
