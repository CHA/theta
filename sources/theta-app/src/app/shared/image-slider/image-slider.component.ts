import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from '../config/swiper-options';

import { ImageSlide } from './image-slide';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  @Input() slides: ImageSlide[] = [];

  swiperConfig = SwiperOptions.default;

  constructor() { }

  ngOnInit() { }

}
