import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoImage } from 'src/app/models/no-image';
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
    private route: ActivatedRoute
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
