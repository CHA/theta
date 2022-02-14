import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ImageSlide } from './image-slide';

@Component({
  selector: 'tta-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit, OnChanges {
  @Input() slides: ImageSlide[] = [];

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.slides.currentValue);
  }
}
