import { Component, OnInit } from '@angular/core';
import { ItineraryService } from './itinerary.service';
import { Itinerary } from './models/itinerary';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnInit {

  itinerary: Itinerary | null = null;

  constructor(private itineraryService: ItineraryService) { }

  ngOnInit(): void {
    this.itineraryService.getItineraries().subscribe(data => this.itinerary = data[0]);
  }

}
