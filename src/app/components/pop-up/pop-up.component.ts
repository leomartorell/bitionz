import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmailContact } from 'src/app/interfaces/email-contact.interface';
import { EmailService } from '../../services/email.service';
import { PostEmail } from '../../interfaces/email-contact.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  SnackBarContentComponent,
  SnackBarType,
} from '../snackbar/snackbar-content.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return !!(control && control.errors && form?.submitted);
  }
}

interface PopupType {
  type: string;
  productType?: string;
  data: any;
  callback: (data: any) => {};
}
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    message: ['', [Validators.required]],
  });

  matcher = new MyErrorStateMatcher();
  spinner: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PopupType,
    public dialogRef: MatDialogRef<PopUpComponent>,
    private fb: FormBuilder,
    private emailService: EmailService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  confirmSubmit() {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      this.spinner = true;
      this.emailService
        .sendEmail(this.formatEmail(this.registerForm.value))
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
            setTimeout(() => {
              this.onCloseHandler();
            }, 1000);
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

  callbackHandler(): void {
    this.data.callback({});
  }

  onCloseHandler(): void {
    this.dialogRef.close();
  }
}
