import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from './services/canonical.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
    private canonicalService: CanonicalService
    ) {}

  ngOnInit(): void {
    this.meta.addTags([
      {
        name: 'keywords',
        content: 'development, blockchain, gaming, solutions, web',
      },
      {
        name: 'description',
        content:
          'We create custom technology solutions and offer the best tools for your growing, with end to end development or temporary contracts - Software development - Blockchain - Gaming',
      },
      {
        name: 'robots',
        content: 'index',
      },
      { name: 'author', content: 'Bitionz' },
    ]);
    this.title.setTitle('Bitionz - Dedicated software solutions');
    this.canonicalService.setCanonicalURL();
  }
}
