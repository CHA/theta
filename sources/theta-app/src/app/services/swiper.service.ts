import { Injectable } from '@angular/core';
import { CardEffectSwiperOptions } from '@theta/shared/config/swiper-options/card-effect-swiper-options';
import { CoverflowEffectSwiperOptions } from '@theta/shared/config/swiper-options/coverflow-effect-swiper.options';
import { FreeModeSwiperOptions } from '@theta/shared/config/swiper-options/free-mode-swiper-options';

@Injectable({ providedIn: 'root' })
export class SwiperService {

  freeModeSwiperOptions = FreeModeSwiperOptions.config;
  cardEffectSwiperOptions = CardEffectSwiperOptions.config;
  coverflowEffectSwiperOptions = CoverflowEffectSwiperOptions.config;

}
