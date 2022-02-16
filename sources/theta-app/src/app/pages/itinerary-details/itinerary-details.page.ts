import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Itinerary } from '@theta/models/itinerary';
import { ItineraryService } from '@theta/providers/itinerary.service';
import { ImageSlide } from '@theta/shared/image-slider/image-slide';
import { ItineraryDetailsTab } from './itinerary-details-tab';

@Component({
  selector: 'app-itinerary-details',
  templateUrl: './itinerary-details.page.html',
  styleUrls: ['./itinerary-details.page.scss'],
})
export class ItineraryDetailsPage implements OnInit {

  itinerary: Itinerary;
  imageSlides: ImageSlide[] = [];
  ItineraryDetailsTab = ItineraryDetailsTab;
  selectedTab: ItineraryDetailsTab;

  constructor(
    private route: ActivatedRoute,
    private itineraryService: ItineraryService
  ) { }

  async ngOnInit() {
    this.selectedTab = ItineraryDetailsTab.Activities;
    const uuid = this.route.snapshot.paramMap.get('uuid');
    this.itinerary = await this.itineraryService.get(uuid);
    this.itinerary.activities.forEach(activity => {
      activity.imageUrls.forEach(imageUrl => {
        const slide: ImageSlide = {
          title: this.itinerary.name,
          subTitle: activity.name,
          imageUrl
        }
        this.imageSlides.push(slide);
      });
    });
  }

  selectTab(event: CustomEvent) {
    this.selectedTab = event.detail.value;
  }
}
