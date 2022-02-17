import { SwiperOptions } from 'swiper';

export class DefaultSwiperOptions {
  static options: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: false,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    scrollbar: { draggable: true },
  };
}
