import { SwiperOptions } from 'swiper';

export class DefaultSwiperOptions {
  static options: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: false,
    pagination: { clickable: true, type: 'bullets' },
    scrollbar: { draggable: true },
  };
}
