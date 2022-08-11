import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../services/app.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  constructor( public service: AppService ) {}

  ngOnInit(): void {
  }
  
  onScroll(e: any) {
    this.service.setPositionY( e.target.scrollTop );    
  }
}
