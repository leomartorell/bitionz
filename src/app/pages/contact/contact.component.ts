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
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmailContact } from 'src/app/interfaces/email-contact.interface';
import { EmailService } from '../../services/email.service';
import { PostEmail } from '../../interfaces/email-contact.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  SnackBarContentComponent,
  SnackBarType,
} from '../../components/snackbar/snackbar-content.component';
import { IconInterface } from 'src/app/components/footer/footer.component';

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

  matcher = new MyErrorStateMatcher();
  spinner: boolean = false;
  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    let el = document.getElementById('top');
    el?.scrollIntoView();
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
}
