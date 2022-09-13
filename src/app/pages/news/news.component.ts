import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NewsInterface, NewsService } from '../../services/news.service';
import {
  faDiscord,
  faFacebook,
  faTwitter,
  faLinkedin,
  faWhatsapp,
  faInstagram,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { IconInterface } from 'src/app/components/footer/footer.component';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewsComponent implements OnInit {
  news!: NewsInterface;
  icons: IconInterface[] = [
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/company/bitionz',
    },
    {
      icon: faFacebook,
      link: 'https://www.facebook.com/Bitionz.software/',
    },
    {
      icon: faTwitter,
      link: 'https://twitter.com/BitionzL',
    },
  ];

  constructor(
    private ns: NewsService,
    private activatedRoute: ActivatedRoute,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ url }) => {
      this.getNewsByUrl(url);
    });
  }
  async getNewsByUrl(url: string) {
    this.news = await this.ns.getNewsByUrl(url);
  }
}
