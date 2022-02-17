import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Itinerary } from '@theta/models/itinerary';
import { ItineraryService } from '@theta/services/itinerary.service';
import { ImageSlide } from '@theta/shared/image-slider/image-slide';
import { ItineraryTab } from './itinerary-tab';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.page.html',
  styleUrls: ['./itinerary.page.scss'],
})
export class ItineraryPage implements OnInit {

  itinerary: Itinerary;
  imageSlides: ImageSlide[] = [];
  selectedTab = ItineraryTab.activities;
  itineraryTabEnum = ItineraryTab;

  constructor(
    private route: ActivatedRoute,
    private itineraryService: ItineraryService
  ) { }

  async ngOnInit() {
    const uuid = this.route.snapshot.paramMap.get('uuid');
    this.itinerary = await this.itineraryService.get(uuid);
    this.itinerary.activities.forEach(activity => {
      activity.imageUrls.forEach(imageUrl => {
        const slide: ImageSlide = {
          title: this.itinerary.name,
          subTitle: activity.name,
          imageUrl
        };
        this.imageSlides.push(slide);
      });
    });
  }

  selectTab(event: CustomEvent) {
    this.selectedTab = event.detail.value;
  }

}
