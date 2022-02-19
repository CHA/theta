import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import SwiperCore, { FreeMode, Pagination, SwiperOptions } from 'swiper';
import { DefaultSwiperOptions } from '../config/swiper-options/default-swiper-options';
import { ImageSlide } from './image-slide';

SwiperCore.use([Pagination, FreeMode]);

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit, OnChanges {
  @Input() slides: ImageSlide[] = [];
  @Input() config: SwiperOptions;

  constructor() { }

  ngOnInit() {
    this.config = DefaultSwiperOptions.config;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.config) {
      this.config = changes.options?.currentValue;
      console.log(this.config);
    }
  }
}
