import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import SwiperCore, {
  SwiperOptions,
  Pagination,
  Navigation,
  Autoplay,
  EffectFade,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Pagination, Navigation, Autoplay, EffectFade]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {
  @ViewChild(SwiperComponent) newSwiper!: SwiperComponent;

  slideConfig: SwiperOptions = {
    navigation: false,
    pagination: false,
    breakpoints: {
      760: {
        slidesPerView: 3,
        allowTouchMove: true,
      },
    },
    allowTouchMove: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
  };

  constructor() {}

  ngOnInit(): void {}

  swipePrev() {
    this.newSwiper.swiperRef.slidePrev();
  }
  swipeNext() {
    this.newSwiper.swiperRef.slideNext();
  }

}
