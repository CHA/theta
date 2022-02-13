import { Component } from '@angular/core';
import { Itinerary } from '@theta/models/itinerary';
import { ItineraryService } from '@theta/providers/itinerary.service';

@Component({
  selector: 'tta-browse',
  templateUrl: 'browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent {

  itineraries: Itinerary[] = [];

  constructor(public itineraryService: ItineraryService) { }

  async ionViewDidEnter() {
    this.itineraries = await this.itineraryService.search(null);
  }
}
