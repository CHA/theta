import { DefaultSwiperOptions } from './swiper-options/default-swiper-options';
import { SlideEffectSwiperOptions } from './swiper-options/slide-effect-swiper-options';

export class SwiperOptions {
  static readonly default = DefaultSwiperOptions.options;
  static readonly slideOptions = SlideEffectSwiperOptions.options;
}
