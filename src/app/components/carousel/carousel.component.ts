import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import SwiperCore, {
  SwiperOptions,
  Pagination,
  Navigation,
  Autoplay,
  EffectFade,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { NewsService, NewsInterface } from '../../services/news.service';

SwiperCore.use([Pagination, Navigation, Autoplay, EffectFade]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {
  @ViewChild(SwiperComponent) newSwiper!: SwiperComponent;

  news: NewsInterface[] = [];

  slideConfig: SwiperOptions = {
    navigation: false,
    pagination: false,
    breakpoints: {
      760: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
    },
    allowTouchMove: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
  };

  constructor(
    public newsService: NewsService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.newsService.getNews().then((resp) => {
      this.news = resp;
    });
  }

  splitContent(text: string) {
    const description = text.split('<p>\n', 2);
    return description[1].slice(0, 150).trim();
  }

  swipePrev() {
    this.newSwiper.swiperRef.slidePrev();
  }
  swipeNext() {
    this.newSwiper.swiperRef.slideNext();
  }
}
