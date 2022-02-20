import { Component, OnInit } from '@angular/core';
import { Card } from '@theta/models/card';
import { Itinerary } from '@theta/models/itinerary';
import { ItineraryService } from '@theta/services/itinerary.service';
import { SwiperService } from '@theta/services/swiper.service';
import { CardEffectSwiperOptions } from '@theta/shared/config/swiper-options/card-effect-swiper-options';
import { CoverflowEffectSwiperOptions } from '@theta/shared/config/swiper-options/coverflow-effect-swiper.options';
import { FreeModeSwiperOptions } from '@theta/shared/config/swiper-options/free-mode-swiper-options';
import SwiperCore, { FreeMode, Pagination } from 'swiper';

// install Swiper modules
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

}
