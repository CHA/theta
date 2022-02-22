import { Component, OnInit } from '@angular/core';
import { Card } from '@theta/models/card';
import { Itinerary } from '@theta/models/itinerary';
import { ItineraryService } from '@theta/services/itinerary.service';
import { SwiperService } from '@theta/services/swiper.service';
import SwiperCore, { FreeMode, Pagination } from 'swiper';

SwiperCore.use([FreeMode, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  itineraries: Itinerary[] = [];
  topPicks: Card[] = [];
  recommendations: Card[] = [];

  constructor(
    public swiper: SwiperService,
    private itineraryService: ItineraryService
  ) { }

  async ngOnInit() {
    this.itineraries = await this.itineraryService.search(null);
    this.topPicks = this.itineraryService.toCards(this.itineraries);
    this.recommendations = this.itineraryService.toCards(this.itineraries);
  }

  async refresh(event) {
    this.itineraries = await this.itineraryService.search(null);
    event.target.complete();
  }

}
