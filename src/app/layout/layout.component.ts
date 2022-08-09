import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements AfterViewInit {


  @ViewChild('content', {static: true}) content!: any;
  // content = document.querySelector('.mat-sidenav-content');

  constructor(public scroll: ScrollDispatcher) {}

  ngAfterViewInit() { 
    
  }
}
