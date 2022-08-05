import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';


export interface SectionsInterface {
  title: string,
  id: string
}
@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavListComponent implements OnInit {
  sections: SectionsInterface[] = [
    {
      title: 'Servicios',
      id: 'servicios',
    },
    {
      title: 'Cómo trabajamos',
      id: 'como',
    },
    {
      title: 'Novedades',
      id: 'novedades',
    },
    {
      title: 'Contacto',
      id: 'contacto',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

}
