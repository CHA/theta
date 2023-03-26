import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapService {
  private baseUrl = 'https://www.google.com/maps/dir/?api=1';
  constructor() {}

  getDirection(destination: string) {
    window.open(`${this.baseUrl}&destination=${destination}`, '_blank');
  }
}
