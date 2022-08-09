import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import {  distinctUntilChanged, filter, map, pairwise, share, throttleTime } from 'rxjs/operators';
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
