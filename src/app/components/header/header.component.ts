import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  positionY: number = 0;

  homeRoute!: boolean;

  constructor(private router: Router, public service: AppService) {}

  ngOnInit(): void {
    this.homeRoute = this.router.url.includes('home');
    this.router.events.subscribe(() => {
      this.homeRoute = this.router.url.includes('home');
    });
    this.service.getPositionY().subscribe((pos) => {
      this.positionY = pos;
    });
  }

  toggleSidebarMobile() {
    this.sidenavToggle.emit();
  }

  home() {
    if (!this.router.url.includes('home')) {
      this.router.navigate(['/home'], { fragment: '' });
    } else {
      this.router.navigate(['/home'], { fragment: 'home' });
    }
  }
}
