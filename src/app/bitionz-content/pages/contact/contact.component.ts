import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faWhatsapp,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { ErrorStateMatcher } from '@angular/material/core';
import { EmailContact } from 'src/app/interfaces/email-contact.interface';
import { EmailService } from '../../services/email.service';
import { PostEmail } from '../../../interfaces/email-contact.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  SnackBarContentComponent,
  SnackBarType,
} from '../../../components/snackbar/snackbar-content.component';
import { IconInterface } from 'src/app/components/footer/footer.component';
import { Router } from '@angular/router';
import { Country } from '../../../constants/countries';
import { COUNTRIES } from 'src/app/constants/countries';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return !!(control && control.errors && form?.submitted);
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  emailForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    message: ['', [Validators.required]],
    country: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });

  icons: IconInterface[] = [
    {
      icon: faWhatsapp,
      link: 'https://api.whatsapp.com/send?phone=5492617231103',
    },
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/company/bitionz',
    },
    {
      icon: faFacebook,
      link: 'https://www.facebook.com/Bitionz.software/',
    },
    {
      icon: faTwitter,
      link: 'https://twitter.com/BitionzL',
    },
    {
      icon: faInstagram,
      link: 'https://www.instagram.com/bitionzsoftware/',
    },
  ];

  countries: Country[] = COUNTRIES;

  numberPrefix: string = '';

  matcher = new MyErrorStateMatcher();
  spinner: boolean = false;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private snackBar: MatSnackBar,
    private router: Router,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    let el = document.getElementById('top');
    el?.scrollIntoView();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.orderCountries(event.lang);
    });
  }

  confirmSubmit() {
    this.emailForm.markAllAsTouched();
    if (this.emailForm.valid) {
      this.spinner = true;
      this.emailService
        .sendEmail(this.formatEmail(this.emailForm.value))
        .subscribe({
          next: () => {
            console.log('email sended');
            this.showSnackBar({
              type: 'success',
              title: 'Tu mail ha sido enviado',
              message: `Pronto estaremos en contacto contigo`,
            });
            this.router.navigate(['/success']);
          },
          error: (ee) => {
            console.error(ee);
            this.showSnackBar({
              type: 'error',
              title: 'Algo salió mal',
              message: `Por favor, intente nuevamente`,
            });
          },
          complete: () => {
            this.spinner = false;
          },
        })
        .add(() => {
          this.spinner = false;
        });
    }
  }
  formatEmail(formEmail: EmailContact): PostEmail {
    return {
      sender: formEmail.email,
      textFromSender: `Contacto desde la web de Bitionz
         Nombre: ${formEmail.name}
         País de contacto: ${formEmail.country}
         Número de teléfono: ${this.numberPrefix}${formEmail.phone}
         Empresa: ${formEmail.company}
         Mensaje: ${formEmail.message} `,
    };
  }
  showSnackBar(data: SnackBarType) {
    this.snackBar.openFromComponent(SnackBarContentComponent, {
      data,
      duration: 7000,
      panelClass: ['cc-snackbar', data.type],
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  getPrefix(event: any) {
    this.numberPrefix = this.countries.find(
      (item) => item.spa.toLowerCase() == event.source.value
    )?.prefix!;
  }

  orderCountries(lang: string) {
    if (lang == 'EN') {
      this.countries = COUNTRIES.sort((n1, n2) => {
        if (n1.eng > n2.eng) {
          return 1;
        }

        if (n1.eng < n2.eng) {
          return -1;
        }

        return 0;
      });
    } else {
      this.countries = COUNTRIES.sort((n1, n2) => {
        if (n1.spa > n2.spa) {
          return 1;
        }

        if (n1.spa < n2.spa) {
          return -1;
        }

        return 0;
      });
    }
  }
}
