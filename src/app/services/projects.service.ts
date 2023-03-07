import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projectsList = [
    {
      imgUrl: '/assets/images/projects/argentina_mining.webp',
      name: 'Argentina mining'
    },
    {
      imgUrl: '/assets/images/projects/guaymallen.webp',
      name: 'Guaymallen'
    },
    {
      imgUrl: '/assets/images/projects/mymoneyback.webp',
      name: 'My money back'
    },
  ]

  constructor() { }
}
