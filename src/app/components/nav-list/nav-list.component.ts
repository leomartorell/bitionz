import { Component, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavListComponent implements OnInit {

  @Output() closeNav = new EventEmitter;

  menu: boolean = false;

  constructor( public router: Router ) {}

  ngOnInit(): void {
  }

  closeNavHandler() {
    this.menu = false;
    this.closeNav.emit();
  }

  openMenu() {
    this.menu = !this.menu;
  }
}
