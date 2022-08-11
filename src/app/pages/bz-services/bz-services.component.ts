import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BzServicesInterface } from '../../interfaces/bz-services.interface';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-bz-services',
  templateUrl: './bz-services.component.html',
  styleUrls: ['./bz-services.component.scss'],
})
export class BzServicesComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }

  innerWidth: number = 1080;
  activeService!: number;
  bzServiceContent!: BzServicesInterface[];
  icons: any[] = [];
  animations: boolean = false;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private service: AppService
  ) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
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
          let el = document.getElementById('top');
          el?.scrollIntoView();
          setTimeout(() => {
            this.animations = true;
          }, 50);
        });
    });
  }

  hover(index: number, value: boolean) {
    if (value) {
      this.icons[index] = this.bzServiceContent[2].items[index].iconHover!;
    } else {
      this.icons[index] = this.bzServiceContent[2].items[index].icon!;
    }
  }
}
