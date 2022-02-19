import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import SwiperCore, { EffectCards, EffectCoverflow, FreeMode, Pagination, SwiperOptions } from 'swiper';
import { CardEffectSwiperOptions } from '../config/swiper-options/card-effect-swiper-options';
import { CardSlide } from './card-slide';

SwiperCore.use([Pagination, FreeMode, EffectCards, EffectCoverflow]);

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss'],
})
export class CardSliderComponent implements OnInit, OnChanges {

  @Input() cards: CardSlide[];
  @Input() config: SwiperOptions;
  useCardEffect: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cards) {
      this.cards = changes.cards.currentValue;
      this.useCardEffect = this.config === CardEffectSwiperOptions.config;
    }
  }

}
