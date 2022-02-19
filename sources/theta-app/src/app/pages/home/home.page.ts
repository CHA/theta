import { Component, OnInit } from '@angular/core';
import { Itinerary } from '@theta/models/itinerary';
import { ItineraryService } from '@theta/services/itinerary.service';
import { CardSlide } from '@theta/shared/card-slider/card-slide';
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
  topPicks: CardSlide[] = [];
  recommendations: CardSlide[] = [];
  freeModeSwiperOptions = FreeModeSwiperOptions.config;
  cardEffectSwiperOptions = CardEffectSwiperOptions.config;
  coverflowEffectSwiperOptions = CoverflowEffectSwiperOptions.config;


  constructor(
    private itineraryService: ItineraryService
  ) { }

  async ngOnInit() {
    this.itineraries = await this.itineraryService.search(null);
    this.topPicks = this.getTopPickSlides();
    this.recommendations = this.getTopPickSlides();
  }

  getTopPickSlides(): CardSlide[] {
    const slides: CardSlide[] = [];
    this.itineraries.forEach(i => {
      slides.push({
        imageUrl: i.imageURLs[0],
        subTitle: i.name,
        note: i.description
      });
    });
    return slides;
  }

}
