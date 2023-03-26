import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoImage } from 'src/app/models/no-image';
import { GoogleMapService } from 'src/app/services/google-map.service';
import { ItinerariesService } from '../itineraries-service.service';
import { Itinerary } from '../models/itinerary';
@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss'],
})
export class ItineraryComponent implements OnInit {
  itinerary: Itinerary | null = null;
  days: number[] = [];

  constructor(
    private itineraryService: ItinerariesService,
    private route: ActivatedRoute,
    private googleMapService: GoogleMapService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.itineraryService
      .getItinerary(id)
      .subscribe((data) => this.prepareViewmodel(data));
  }

  activitiesByDay(day: number) {
    return this.itinerary?.activities.filter((i) => i.day == day);
  }

  getDirection(destination: string) {
    this.googleMapService.getDirection(destination);
  }

  private prepareViewmodel(itinerary: Itinerary) {
    this.itinerary = itinerary;
    this.days = [...new Set(itinerary.activities.map((x) => x.day))];
    this.itinerary.activities.forEach((a) => {
      if (!a.images || !a.images.length) {
        a.images.push(NoImage);
      }
    });
  }
}
