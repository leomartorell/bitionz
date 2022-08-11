import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostEmail } from '../interfaces/email-contact.interface';

@Injectable({
  providedIn: 'root',
})
export class EmailService {

  public emailUrl: string = 'https://bitionz-email.herokuapp.com/sendEmail';
  public http: HttpClient;

  constructor(private _http: HttpClient) {
    this.http = _http;
  }

  sendEmail( emailContent: PostEmail ) {
    return this.http.post(this.emailUrl, emailContent);
  }
}
