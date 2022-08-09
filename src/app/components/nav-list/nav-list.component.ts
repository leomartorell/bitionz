import { Component, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavListComponent implements OnInit {

  @Output() closeNav = new EventEmitter;

  menu: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  closeNavHandler() {
    this.closeNav.emit();
  }

  openMenu() {
    this.menu = !this.menu;
  }
}
