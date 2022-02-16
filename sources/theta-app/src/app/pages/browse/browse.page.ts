import { Component, OnInit } from '@angular/core';
import { Itinerary } from '@theta/models/itinerary';
import { ItineraryService } from '@theta/services/itinerary.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {

  itineraries: Itinerary[] = [];

  constructor(
    private itineraryService: ItineraryService
  ) { }

  async ngOnInit() {
    this.itineraries = await this.itineraryService.search(null);
  }

}
