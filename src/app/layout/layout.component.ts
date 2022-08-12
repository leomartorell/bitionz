import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AppService } from '../services/app.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements AfterViewInit {
  @ViewChild('footer', { read: ElementRef, static: false }) el!: ElementRef;

  constructor(public service: AppService) {}

  ngAfterViewInit(): void {}

  onScroll(e: any) {
    this.service.goTop =
      this.el.nativeElement.getBoundingClientRect().top < 520;
    this.service.setPositionY(e.target.scrollTop);
  }
}
