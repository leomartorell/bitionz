import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BzServicesInterface } from '../interfaces/bz-services.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  scrollPosition: number = 0;
  scroll = new BehaviorSubject(this.scrollPosition);

  constructor(
    private http: HttpClient
  ) { }

  setPositionY( pos: number ) {
    this.scrollPosition = pos;
    this.scroll.next(this.scrollPosition)
  }

  getPositionY() {
    return this.scroll.asObservable();
  }

  getServicesContent() {
    return this.http.get<BzServicesInterface[]>('../../assets/texts/bitionz-services.json')
  }
}
