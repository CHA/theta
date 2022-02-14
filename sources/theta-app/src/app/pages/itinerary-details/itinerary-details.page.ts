import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Itinerary } from '@theta/models/itinerary';
import { ItineraryService } from '@theta/providers/itinerary.service';
import { ImageSlide } from '@theta/shared/image-slider/image-slide';

@Component({
  selector: 'app-itinerary-details',
  templateUrl: './itinerary-details.page.html',
  styleUrls: ['./itinerary-details.page.scss'],
})
export class ItineraryDetailsPage implements OnInit {

  itinerary: Itinerary;
  imageSlides: ImageSlide[] = [];

  constructor(
    private route: ActivatedRoute,
    private itineraryService: ItineraryService
  ) { }

  async ngOnInit() {
    const uuid = this.route.snapshot.paramMap.get('uuid');
    this.itinerary = await this.itineraryService.get(uuid);
    this.itinerary.activities.forEach(activity => {
      activity.imageUrls.forEach(imageUrl => {
        this.imageSlides.push({ imageUrl })
      });
    });
  }
}
