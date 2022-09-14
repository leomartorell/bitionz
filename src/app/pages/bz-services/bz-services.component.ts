import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BzServicesInterface } from '../../interfaces/bz-services.interface';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-bz-services',
  templateUrl: './bz-services.component.html',
  styleUrls: ['./bz-services.component.scss'],
})
export class BzServicesComponent implements OnInit {
  innerWidth: number = 1080;
  activeService!: number;
  bzServiceContent!: BzServicesInterface[];
  icons: any[] = [];
  animations: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private service: AppService
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.innerWidth = window.innerWidth;
      let el = document.getElementById('top');
      el?.scrollIntoView();
      this.activatedRouter.params.subscribe(({ service }) => {
        this.service
          .getServicesContent()
          .subscribe((resp: BzServicesInterface[]) => {
            this.animations = false;
            this.bzServiceContent = resp;
            this.activeService = this.bzServiceContent.findIndex(
              (item) => item.service.toLowerCase() == service
            );
            for (let i = 0; i < this.bzServiceContent[2].items.length; i++) {
              this.icons.push(this.bzServiceContent[2].items[i].icon);
            }
            setTimeout(() => {
              this.animations = true;
            }, 50);
          });
      });
    }
  }

  hover(index: number, value: boolean) {
    if (value) {
      this.icons[index] = this.bzServiceContent[2].items[index].iconHover!;
    } else {
      this.icons[index] = this.bzServiceContent[2].items[index].icon!;
    }
  }
}
