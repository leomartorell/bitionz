import { Component, OnInit } from '@angular/core';
import { faDiscord, faLinkedin, faWhatsapp, faInstagram, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { Router } from '@angular/router';

export interface IconInterface {
  icon: IconDefinition,
  link?: string
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  icons: IconInterface[] = [
    {
      icon: faWhatsapp,
      link: 'https://api.whatsapp.com/send?phone=5492617231103'
    },
    // {
    //   icon: faLinkedin,
    //   link: 'https://api.whatsapp.com/send?phone=5492617231103'
    // },
    // {
    //   icon: faDiscord,
    //   link: 'https://api.whatsapp.com/send?phone=5492617231103'
    // },
    {
      icon: faInstagram,
      link: 'https://www.instagram.com/bitionzlatam/'
    },
  ] 

  home!: boolean;

  constructor( public router: Router ) { }

  ngOnInit(): void {
    this.home = this.router.url.includes('home');
    this.router.events.subscribe(() =>{
      this.home = this.router.url.includes('home');
    })
  }

}
