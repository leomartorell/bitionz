import { Component, OnInit } from '@angular/core';
import {
  faDiscord,
  faFacebook,
  faTwitter,
  faLinkedin,
  faWhatsapp,
  faInstagram,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { AppService } from '../../services/app.service';

export interface IconInterface {
  icon: IconDefinition;
  link?: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  icons: IconInterface[] = [
    {
      icon: faWhatsapp,
      link: 'https://api.whatsapp.com/send?phone=5492617231103',
    },
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/company/bitionz'
    },
    {
      icon: faFacebook,
      link: 'https://www.facebook.com/Bitionz.software/'
    },
    {
      icon: faTwitter,
      link: 'https://twitter.com/BitionzL'
    },
    // {
    //   icon: faDiscord,
    //   link: 'https://api.whatsapp.com/send?phone=5492617231103'
    // },
    {
      icon: faInstagram,
      link: 'https://www.instagram.com/bitionzsoftware/',
    },
  ];

  home!: boolean;

  constructor(
    public router: Router,
    private dialog: MatDialog,
    private service: AppService
  ) {}

  ngOnInit(): void {
    this.home = this.router.url.includes('home');
    this.router.events.subscribe(() => {
      this.home = this.router.url.includes('home');
    });
  }

  openDialog(type: string) {
    this.dialog.open(PopUpComponent, {
      maxWidth: '95vw',
      data: {
        type: type,
        callback: () => this.dialog.closeAll(),
      },
    });
  }

  openWsp() {
    this.router.navigateByUrl('https://api.whatsapp.com/send?phone=5492617231103');
  }

  homeRouter() {
    if (this.router.url.includes('home')) {
      this.service.goTop
        ? this.router.navigate(['/home'], { fragment: 'home' })
        : this.router.navigate(['/home'], { fragment: '' });
      this.service.goTop = !this.service.goTop;
    } else {
      this.router.navigate(['/home'], { fragment: '' });
    }
  }
}
