import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Card } from '@theta/models/card';
import SwiperCore, { EffectCards, EffectCoverflow, FreeMode, Pagination, SwiperOptions } from 'swiper';
import { CardEffectSwiperOptions } from '../config/swiper-options/card-effect-swiper-options';

SwiperCore.use([Pagination, FreeMode, EffectCards, EffectCoverflow]);

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss'],
})
export class CardSliderComponent implements OnInit, OnChanges {

  @Input() cards: Card[];
  @Input() config: SwiperOptions;
  @Output() tap = new EventEmitter();
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

  onClick(card: Card) {
    console.log(card);
    this.tap.emit(card);
  }

}
