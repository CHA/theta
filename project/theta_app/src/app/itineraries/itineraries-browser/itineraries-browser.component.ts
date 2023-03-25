import { Component, OnInit } from '@angular/core';
import { ItinerariesService } from '../itineraries-service.service';
import { Itinerary } from '../models/itinerary';

@Component({
  selector: 'app-itineraries-browser',
  templateUrl: './itineraries-browser.component.html',
  styleUrls: ['./itineraries-browser.component.scss'],
})
export class ItinerariesBrowserComponent implements OnInit {
  itineraries: Itinerary[] = [];
  mainImageUrl: string = '';

  constructor(private readonly itinerariesService: ItinerariesService) {}

  ngOnInit() {
    this.itinerariesService
      .getItineraries()
      .subscribe((data) => (this.itineraries = data));
  }
}
