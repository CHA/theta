import { Component, Input, OnInit } from '@angular/core';
import { ImageSlide } from './image-slide';

@Component({
  selector: 'tta-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  @Input() slides: ImageSlide[] = [];

  constructor() { }

  ngOnInit() { }

}
