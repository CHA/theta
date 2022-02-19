import { SwiperOptions } from 'swiper';

export class DefaultSwiperOptions {
  static config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: false,
    pagination: {
      dynamicBullets: true
    },
    scrollbar: { draggable: true },
  };
}
