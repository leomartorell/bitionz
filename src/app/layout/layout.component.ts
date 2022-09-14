import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { AppService } from '../services/app.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements AfterViewInit {
  @ViewChild('footer', { read: ElementRef, static: false }) el!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public service: AppService
  ) {}

  ngAfterViewInit(): void {}

  onScroll(e: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.service.goTop =
        this.el.nativeElement.getBoundingClientRect().top < 520;
      this.service.setPositionY(e.target.scrollTop);
    }
  }
}
