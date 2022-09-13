import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  innerWidth: number = 1080;

  constructor() {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    let el = document.getElementById('top');
    el?.scrollIntoView();
  }
}
