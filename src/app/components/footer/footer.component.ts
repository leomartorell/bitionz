import { Component, OnInit } from '@angular/core';
import { faDiscord, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  icons: any[] = [faWhatsapp, faLinkedin, faDiscord];

  constructor() { }

  ngOnInit(): void {
  }

}
