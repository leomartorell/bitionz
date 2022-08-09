import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();


  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  toggleSidebarMobile() {
    this.sidenavToggle.emit();
  }

  home() {
    if (!this.router.url.includes('home')) {
      this.router.navigate(['/home'])
    } else {
      this.router.navigate(['/home'], {fragment: 'home'})
    }
  }
}
