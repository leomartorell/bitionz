import {
  Component,
  OnInit,
  Output,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { LanguageCustomInterface } from '../../interfaces/language.interface';
@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavListComponent implements OnInit {
  @Output() closeNav = new EventEmitter();

  menuBz: boolean = false;
  menuLg: boolean = false;

  languageList: LanguageCustomInterface[] = [
    {
      file: 'ES',
      name: 'Español',
    },
    {
      file: 'EN',
      name: 'Inglés',
    },
  ];

  languageActive: LanguageCustomInterface = {
    file: 'ES',
    name: 'Español',
  };

  constructor(public router: Router, private translate: TranslateService) {}

  ngOnInit(): void {}

  selectLanguage(language: LanguageCustomInterface) {
    this.languageActive = language;
    this.translate.setDefaultLang(this.languageActive.file);
    this.translate.use(this.languageActive.file);
  }

  closeNavHandler() {
    this.menuBz = false;
    this.closeNav.emit();
  }

  openMenu() {
    this.menuBz = !this.menuBz;
  }
}
